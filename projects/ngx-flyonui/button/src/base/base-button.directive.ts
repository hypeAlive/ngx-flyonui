import {
  computed,
  Directive, inject,
  input, Signal,
} from '@angular/core';
import { NgpButton } from 'ng-primitives/button'
import {
  FuiBaseButtonColors, FuiBaseButtonSizes, FuiBaseButtonStates,
  FuiBaseButtonStyles,
  fuiBaseButtonVariants,
  FuiBaseModifiers
} from './variants';
import {cn, FlyonuiClassManagement, FuiWavesDirective, InputBoolean, transformInputBool} from 'ngx-flyonui';

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

  readonly fuiColor = input<keyof FuiBaseButtonColors>("neutral");
  readonly fuiStyle = input<keyof FuiBaseButtonStyles | undefined>(undefined);
  readonly fuiModifier = input<keyof FuiBaseModifiers | undefined>(undefined);
  readonly fuiState = input<keyof FuiBaseButtonStates | undefined>(undefined);
  readonly fuiSize = input<keyof FuiBaseButtonSizes>("md");
  readonly fuiRounded = input<boolean, InputBoolean>(false, {
    transform: transformInputBool
  });

  override getVariants(): Signal<string> {
    return computed(() => {
      return cn(fuiBaseButtonVariants({
        fuiColor: this.fuiColor(),
        fuiStyle: this.fuiStyle(),
        fuiState: this.fuiState() || (this.button.disabled() ? 'disabled' : undefined),
        fuiModifier: this.fuiModifier(),
        fuiSize: this.fuiSize(),
        fuiRounded: this.fuiRounded()
      }), this.fuiWaves.waveVariants())
    })
  }

}
