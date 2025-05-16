import {Component, computed, input, Signal} from '@angular/core';
import {FlyonuiClassManagement, InputBoolean, transformInputBool} from 'ngx-flyonui';

@Component({
  selector: `
    span[fuiSpinner],
    fui-spinner
  `,
  template: ``,
})
export class FlyonuiSpinnerComponent extends FlyonuiClassManagement {

  readonly fuiLoading = input<boolean, InputBoolean>(true, {
    transform: transformInputBool
  });

  override getVariants(): Signal<string> {
    return computed(() => {
      return this.fuiLoading() ? "loading loading-spinner" : "";
    })
  }

}
