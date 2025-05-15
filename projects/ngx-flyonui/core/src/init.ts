import {EnvironmentProviders, makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import "node-waves/dist/waves.min.js"
import * as Waves from "node-waves"

export interface WavesOptions {
  duration: number;
  delay: number;
}

export interface FuiOptions {
  enableWaves: boolean;
  wavesOptions?: WavesOptions;
}

export function initNgxFlyonui(options?: Partial<FuiOptions>): EnvironmentProviders {
  return provideAppInitializer(() => {
    if (options?.enableWaves) {
      // @ts-ignore
      import("node-waves/dist/waves.min.css").catch(e => {
        console.warn('NgxFui: Could not load waves.min.css. Make sure node-waves is installed in your project: Try npm install node-waves.')
        console.warn(e)
      })

      // @ts-ignore
      import("flyonui/src/vendor/waves.css").catch(e => {
        console.warn('NgxFui: Could not load waves.css. Make sure node-waves is installed in your project: Try npm install node-waves.')
      })

      // @ts-ignore
      import("node-waves/dist/waves.min.js").catch(e => {
        console.warn('NgxFui: Could not load waves.min.js. Make sure node-waves is installed in your project: Try npm install node-waves.')
        console.warn(e)
      })

      import("node-waves").catch(e => {
        console.warn('NgxFui: Could not load node-waves. Make sure node-waves is installed in your project: Try npm install node-waves.')
        console.warn(e)
      }).then(Waves => {
        try {
          (Waves as any).init(options?.wavesOptions);
        } catch (e) {
          console.warn('NgxFui: Could not initialize waves. Make sure node-waves is installed in your project: Try npm install node-waves.')
          console.warn(e)
        }
      });
    }
  })
}
