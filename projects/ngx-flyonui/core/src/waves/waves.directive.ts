import {AfterViewInit, computed, Directive, input} from '@angular/core';
import {FuiWavesColors, fuiWavesVariants} from './variants';
import * as Waves from 'node-waves';
import {InputBoolean, transformInputBool} from '../utils/transform';

@Directive({
  standalone: true,
})
export class FuiWavesDirective implements AfterViewInit {

  readonly fuiWaves = input<boolean, InputBoolean>(false, {
    transform: transformInputBool
  });
  readonly fuiWaveColor = input<keyof FuiWavesColors | undefined>(undefined);
  readonly fuiColor = input<keyof FuiWavesColors>("neutral");

  ngAfterViewInit(): void {
    Waves.attach('.waves');
  }

  public waveVariants = computed(() => {
    const effectiveColor = this.fuiWaveColor() ?? this.fuiColor();
    return this.fuiWaves() ? fuiWavesVariants({fuiColor: effectiveColor}) : "";
  })

}
