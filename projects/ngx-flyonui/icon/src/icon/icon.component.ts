import {NgIcon} from '@ng-icons/core';
import {Component, input} from '@angular/core';
import {FlyonuiIconDirective} from './icon.directive';

@Component({
  selector: 'fui-icon',
  template: '',
  hostDirectives: [
    {
      directive: FlyonuiIconDirective,
      inputs: ["class", "ngClass"]
    }
  ]
})
export class FlyonUiIconComponent extends NgIcon {
  override readonly strokeWidth = input<number | string | undefined>(2.5);
}
