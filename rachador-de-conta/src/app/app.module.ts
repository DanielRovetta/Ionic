import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BusinessService } from 'src/service/business.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';



@NgModule({
  declarations: [AppComponent],
  imports: [MenuLateralComponent, BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot({
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BusinessService],
  bootstrap: [AppComponent], exports: [MenuLateralComponent],

})
export class AppModule { }
