import {
  computed,
  Directive, inject,
  input, Signal,
} from '@angular/core';
import { NgpButton } from 'ng-primitives/button'
import {
  FlyonuiBaseButtonColors, FlyonuiBaseButtonStates,
  FlyonuiBaseButtonStyles,
  flyonuiBaseButtonVariants,
  FlyonuiBaseModifiers
} from './theme';
import {cn, FlyonuiClassManagement, FuiWavesDirective} from 'ngx-flyonui';

@Directive({
  standalone: true,
  hostDirectives: [
    {
      directive: NgpButton,
      inputs: ['disabled']
    },
    {
      directive: FuiWavesDirective,
      inputs: ["fuiWaveColor", "fuiWaves", "fuiColor"]
    }
  ]
})
export class FlyonuiBaseButtonDirective extends FlyonuiClassManagement {
  readonly button = inject(NgpButton);
  readonly fuiWaves = inject(FuiWavesDirective);

  readonly fuiColor = input<keyof FlyonuiBaseButtonColors>("neutral");
  readonly fuiStyle = input<keyof FlyonuiBaseButtonStyles | undefined>(undefined);
  readonly fuiModifier = input<keyof FlyonuiBaseModifiers | undefined>(undefined);
  readonly fuiState = input<keyof FlyonuiBaseButtonStates | undefined>(undefined);

  override getVariants(): Signal<string> {
    return computed(() => {
      return cn(flyonuiBaseButtonVariants({
        fuiColor: this.fuiColor(),
        fuiStyle: this.fuiStyle(),
        fuiState: this.fuiState() || (this.button.disabled() ? 'disabled' : undefined),
        fuiModifier: this.fuiModifier()
      }), this.fuiWaves.waveVariants())
    })
  }

}
