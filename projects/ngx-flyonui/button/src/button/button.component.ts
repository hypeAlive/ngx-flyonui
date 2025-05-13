import {
  Component,
} from '@angular/core';
import {FlyonuiClassManagement} from 'ngx-flyonui';
import {FlyonuiBaseButtonDirective} from '../base/base-button.directive';

@Component({
  selector: `
    button[flyonuiButton],
    a[flyonuiButton],
    flyonui-button
  `,
  hostDirectives: [
    {
      directive: FlyonuiBaseButtonDirective,
      inputs: ["color", "class", "ngClass"]
    }
  ],
  template: `<ng-content/>`,
  standalone: true,
})
export class FlyOnUiButtonComponent {

}
