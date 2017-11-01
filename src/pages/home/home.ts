import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { MenuPage } from '../menu/menu'
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { 
	AlertController, 
	LoadingController,
	NavController,
	NavParams
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
	self = this;
	users = [];

   constructor(
		private alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public navCtrl: NavController,
		private http: Http,
		private navParams: NavParams,
  	) {}

	ngOnInit(){ 
		this.get_from_layout();
	}
	get_from_layout = ():void=>{

		//console.log();

		var url = 'http://local.solnetjson/rest/api/all/usuarios';
		this.http.get(url)
		.do(res => res.json()).
		subscribe(data => {
			console.log(data);
			//console.log(JSON.parse(data._body));
			//this.users = JSON.parse(data._body).data;
		});
	};
	all_from_layout = ():void=>{

	};

}
