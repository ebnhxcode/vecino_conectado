import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { MapaPage } from '../pages/mapa/mapa';
import { EncuestaPage } from '../pages/encuesta/encuesta';
import { ReclamoPage } from '../pages/reclamo/reclamo';

import { AdmindashPage } from '../pages/admindash/admindash';
import { InicioPage } from '../pages/inicio/inicio';
import { AdminviewmanagementPage } from '../pages/adminviewmanagement/adminviewmanagement';
import { AdminviewhodsPage } from '../pages/adminviewhods/adminviewhods';
import { AdminviewstaffsPage } from '../pages/adminviewstaffs/adminviewstaffs';
import { AdminviewstudentsPage } from '../pages/adminviewstudents/adminviewstudents';
import { AdminviewparentsPage } from '../pages/adminviewparents/adminviewparents';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';

var links = [
  { component: LoginPage, name:'Login'},
  { component: TabsPage, name:'tabs', segment:'tabs'}
];

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuPage,
    MapaPage,
    AdmindashPage,
    InicioPage,
    EncuestaPage,
    ReclamoPage,
    AdminviewmanagementPage,
    AdminviewhodsPage,
    AdminviewstaffsPage,
    AdminviewstudentsPage,
    AdminviewparentsPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp, links)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuPage,
    MapaPage,
    EncuestaPage,
    AdmindashPage,
    InicioPage,
    ReclamoPage,
    AdminviewmanagementPage,
    AdminviewhodsPage,
    AdminviewstaffsPage,
    AdminviewstudentsPage,
    AdminviewparentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFullScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
