import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JokerComponent } from './joker/joker.component';
import { NavbarComponent} from "./navbar/navbar.component";
import {UserprofileComponent} from "./userprofile/userprofile.component";

@NgModule({
  declarations: [AppComponent,UserprofileComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, JokerComponent, NavbarComponent,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
