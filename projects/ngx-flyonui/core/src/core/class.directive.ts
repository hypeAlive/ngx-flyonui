import {Directive, effect, inject, Input, Signal} from '@angular/core';
import {NgClass} from '@angular/common';

@Directive({
  standalone: true
})
export class NgClazz extends NgClass {
}

type NgClassSupportedTypes = string | string[] | Set<string> | {[klass: string]: any} | null | undefined;

@Directive({
  hostDirectives: [NgClazz]
})
export abstract class FlyonuiClassManagement {
  readonly ngClazz = inject(NgClazz);

  abstract getVariants(): Signal<string>

  private _class: NgClassSupportedTypes = undefined;

  constructor() {
    effect(() => {
      this.getVariants();
      this.ngClass = this._class
    });
  }

  @Input('class')
  set klass(value: NgClassSupportedTypes) {
    this.ngClazz.klass = this.getVariants()()
    this._class = value;
    this.ngClazz.ngClass = value;
  }

  @Input('ngClass')
  set ngClass(value: NgClassSupportedTypes) {
    this.klass = value;
  }
}
