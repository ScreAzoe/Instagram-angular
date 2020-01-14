import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppLogin} from './login/login.component' 
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLogin

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    PagesModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
