import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

export const appConfigServer = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering()
  ]
});