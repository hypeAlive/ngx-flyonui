import {Directive, effect, inject, Input, Signal, ElementRef} from '@angular/core';
import {NgClass} from '@angular/common';

type NgClassSupportedTypes = string | string[] | Set<string> | { [klass: string]: any } | null | undefined;

@Directive({
  standalone: true
})
export class NgClazz extends NgClass {
  private readonly el = inject(ElementRef);

  setVariants(variants: string): void {
    (this.el.nativeElement as any).__variantClasses = variants || '';
    this.updateElementClasses();
  }

  setClass(value: NgClassSupportedTypes): void {
    (this.el.nativeElement as any).__userClass = value;
    this.updateElementClasses();
  }

  setNgClass(value: NgClassSupportedTypes): void {
    (this.el.nativeElement as any).__userNgClass = value;
    this.updateElementClasses();
  }

  private extractClasses(value: NgClassSupportedTypes): string[] {
    if (!value) return [];

    if (typeof value === 'string') {
      return value.trim().split(/\s+/).filter(Boolean);
    }

    if (Array.isArray(value)) {
      return value.filter(Boolean);
    }

    if (value instanceof Set) {
      return Array.from(value).filter(Boolean) as string[];
    }

    if (typeof value === 'object') {
      return Object.entries(value)
        .filter(([_, enabled]) => Boolean(enabled))
        .map(([cls]) => cls);
    }

    return [];
  }

  private updateElementClasses(): void {
    const variantClasses = this.extractClasses((this.el.nativeElement as any).__variantClasses);
    const userClass = (this.el.nativeElement as any).__userClass;
    const userNgClass = (this.el.nativeElement as any).__userNgClass;

    const userClasses = [
      ...this.extractClasses(userClass),
      ...this.extractClasses(userNgClass)
    ];

    const finalClasses = [...variantClasses];
    for (const cls of userClasses) {
      if (!finalClasses.includes(cls)) {
        finalClasses.push(cls);
      }
    }

    this.el.nativeElement.className = finalClasses.join(' ');
  }
}

@Directive({
  hostDirectives: [NgClazz]
})
export abstract class FlyonuiClassManagement {
  private readonly ngClazz = inject(NgClazz);

  abstract getVariants(): Signal<string>;

  constructor() {
    effect(() => {
      const variants = this.getVariants()();
      this.ngClazz.setVariants(variants);
    });
  }

  @Input('class')
  set klass(value: NgClassSupportedTypes) {
    this.ngClazz.setClass(value);
  }

  @Input('ngClass')
  set ngClass(value: NgClassSupportedTypes) {
    this.ngClazz.setNgClass(value);
  }
}
