import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

Office.initialize = (reason: any) => {
    platformBrowserDynamic().bootstrapModule(AppModule);
};