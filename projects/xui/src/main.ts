import { take } from 'rxjs/operators';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { interval } from 'rxjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

interval(environment.loadDelay).pipe(take(1)).subscribe(value => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
