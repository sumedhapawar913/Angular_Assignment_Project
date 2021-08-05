import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ProductsModule } from './products/products.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ProductsModule)
  .catch(err => console.error(err));
