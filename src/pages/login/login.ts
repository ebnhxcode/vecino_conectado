import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { HomePage } from '../home/home'
import { 
	AlertController, 
	LoadingController,
	NavController
} from 'ionic-angular';
import { Http, Headers, RequestOptions /*Response*/ } from '@angular/http';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage{

	user = {"usuario":"", "password":""};
	data = new Array<Object>();
	usernameOk = false;
	passwordOk = false;

	constructor(
		private alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public navCtrl: NavController,
		private http: Http,
	){}

	ngOnInit(){ /*console.log("arranco el init");*/ }

	signIn = ():void=>{ alert("signIn"); }

	login = ():void=>{

		var url = 'http://local.solnetjson/rest/api/get/usuarios';

		let loading = this.loadingCtrl.create({
			content:'Please wait...'
		});
		loading.present();

		this.http.get(url)
		.map(res => res.json())
		.subscribe(data => {	

			var self = this;
			this.data = data.map( (d) => {
				self.usernameOk = d.fieldData.Us_usuario == this.user.usuario ? true : false;
				self.passwordOk = d.fieldData.Us_pass == this.user.password ? true : false;
				/*
				console.log(d.fieldData.Us_usuario);
				console.log(d.fieldData.Us_pass);
				*/
				return d;
			});

			if (this.usernameOk == true && this.passwordOk == true) {
				loading.dismiss();
				this.navCtrl.push(HomePage, {data:this.data});
			}else{
				let alert = this.alertCtrl.create({
					title:'Login',
					subTitle:'Usuario y/o contraseña invalido',
					buttons:['Aceptar'] 					
				});
				loading.dismiss();
				alert.present();
			}

		});		

	} 
}