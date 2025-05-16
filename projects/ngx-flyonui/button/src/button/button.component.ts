import {
  Component,
} from '@angular/core';
import {FlyonuiBaseButtonDirective} from '../base/base-button.directive';
import {AfterViewInit} from '@angular/core';

@Component({
  selector: `
    button[fuiButton],
    a[fuiButton],
    input[fuiButton],
    fui-button
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
