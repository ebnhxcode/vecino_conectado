import { Component, ViewChild } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
//import { ContactPage } from '../contact/contact';
//import { MapaPage } from '../mapa/mapa';
import { LoginPage } from '../login/login';

import { 
	AlertController, 
	LoadingController,
	NavController,
	Nav,
	Platform
} from 'ionic-angular';

import { Http, Headers, RequestOptions /*Response*/ } from '@angular/http';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AdminviewmanagementPage } from '../adminviewmanagement/adminviewmanagement';
import { AdminviewhodsPage } from '../adminviewhods/adminviewhods';
import { AdminviewstaffsPage } from '../adminviewstaffs/adminviewstaffs';
import { AdminviewstudentsPage } from '../adminviewstudents/adminviewstudents';
import { AdminviewparentsPage } from '../adminviewparents/adminviewparents';
import { AdminPage } from '../admin/admin';



@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage{
	@ViewChild(Nav) nav: Nav;
  	rootPage: any = AdminPage;
	pages: Array<{title: string, component: any, icon: any}>;

	constructor(
		private alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public navCtrl: NavController,
		private http: Http,
	){

	this.pages = [
      { title: 'Inicio', component: AdminPage, icon:'home' },
    
      { title: 'Cuenta', component: AdminviewhodsPage, icon:'contact' },
      { title: 'Convenios', component: AdminviewstaffsPage, icon:'people' },
      { title: 'Municipalidad', component: AdminviewstudentsPage, icon:'book' },
      { title: 'Configuración', component: AdminviewmanagementPage, icon:'settings' },
      { title: 'Solnet', component: AdminviewparentsPage, icon:'appstore' },
      { title: 'Cerrar Sesión', component: LoginPage, icon:'log-out' }
      
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ionViewDidLoad() {
    console.log('Hello AdmindashPage Page');
  }

}

