import {
  computed,
  Directive,
  input, Signal,
} from '@angular/core';
import { NgpButton } from 'ng-primitives/button'
import {FlyonuiBaseButtonColors, flyonuiBaseButtonVariants} from './theme';
import {cn, FlyonuiClassManagement} from 'ngx-flyonui';

@Directive({
  standalone: true,
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled:disabled'],
      outputs: []
    }
  ]
})
export class FlyonuiBaseButtonDirective extends FlyonuiClassManagement {

  readonly color = input<keyof FlyonuiBaseButtonColors>("neutral");

  override getVariants(): Signal<string> {
    return computed(() => {
      return cn(flyonuiBaseButtonVariants({color: this.color()}))
    })
  }

}
