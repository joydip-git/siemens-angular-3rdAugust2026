import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CalculationService } from './services/calculation.service';
import { provideCalculationService } from './config/constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideCalculationService()
    //CalculationService
    // {
    //   provide: CalculationService,
    //   useClass: CalculationService
    // }
  ]
};
