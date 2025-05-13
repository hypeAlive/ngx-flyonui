import {
  Component,
} from '@angular/core';
import {FlyonuiBaseButtonDirective} from '../base/base-button.directive';

@Component({
  selector: `
    button[flyonuiButton],
    a[flyonuiButton],
    input[flyonuiButton],
    flyonui-button
  `,
  hostDirectives: [
    {
      directive: FlyonuiBaseButtonDirective,
      inputs: ["fuiColor", "fuiStyle", "fuiModifier", "class", "ngClass"],
    }
  ],
  template: `<ng-content/>`,
  standalone: true,
})
export class FlyOnUiButtonComponent {}
