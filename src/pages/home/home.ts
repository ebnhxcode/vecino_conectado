import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { MenuPage } from '../menu/menu'
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { 
	AlertController, 
	LoadingController,
	NavController
} from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   constructor(
		private alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public navCtrl: NavController,
		private http: Http,
  	) {}









}
