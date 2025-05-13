import {
  computed,
  Directive, inject,
  input, Signal,
} from '@angular/core';
import {cn, FlyonuiClassManagement} from 'ngx-flyonui';

@Directive({
  standalone: true,
  hostDirectives: [],
  host: {
    role: 'img',
  }
})
export class FlyonuiIconDirective extends FlyonuiClassManagement {

  override getVariants(): Signal<string> {
    return computed(() => {
      return cn("w-[1em] h-[1em]")
    })
  }

}
