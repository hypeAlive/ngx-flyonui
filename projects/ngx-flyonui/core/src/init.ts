import {EnvironmentProviders, provideAppInitializer} from '@angular/core';
import {initFuiWaves, WavesOptions} from './waves/init';

export interface FuiOptions {
  enableWaves: boolean;
  wavesOptions?: WavesOptions;
}

export function initNgxFlyonui(options?: Partial<FuiOptions>): EnvironmentProviders {
  return provideAppInitializer(() => {
    if (options?.enableWaves) {
      initFuiWaves(options.wavesOptions);
    }
  })
}
