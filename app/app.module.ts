import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  //metadata
  imports: [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([     
      { path: 'welcome', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo:'welcome', pathMatch:'full' },
      { path: '**', redirectTo:'welcome', pathMatch:'full' },
    ], { useHash : true }),
    ProductModule
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ContactComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
