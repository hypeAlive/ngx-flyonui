import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initNgxFlyonui} from 'ngx-flyonui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    initNgxFlyonui({
      enableWaves: true,
      wavesOptions: {
        duration: 1000,
        delay: 0
      }
    })
  ]
};
