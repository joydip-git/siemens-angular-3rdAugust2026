import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CalculationService } from './services/calculation.service';
import { provideCalculationService } from './config/constants';
import { CalculationManagerService } from './services/calculation-manager.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideCalculationService(),
    CalculationManagerService
    //CalculationService
    // {
    //   provide: CalculationService,
    //   useClass: CalculationService
    // }
  ]
};
