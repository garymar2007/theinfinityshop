// main entry point -JiT
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//  AoT (Ahead of Time)
//  import { platformBrowser } from '@angular/platform-browser';
//  import { AppModuleNgFactory } from './app.module.ngFactory';

//  platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

