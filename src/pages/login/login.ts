import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { HomePage } from '../home/home'
import { MenuPage } from '../menu/menu'
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
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
// export class LoginPage{

// 	user = {"usuario":"", "password":""};
// 	data = new Array<Object>();
// 	usernameOk = false;
// 	passwordOk = false;

// 	constructor(
// 		private alertCtrl: AlertController, 
// 		public loadingCtrl: LoadingController,
// 		public navCtrl: NavController,
// 		private http: Http,

// 	){}

// 	ngOnInit(){ /*console.log("arranco el init");*/ }

// 	signIn = ():void=>{ alert("signIn"); }

// 	login = ():void=>{

// 		var url = 'http://vc.solnet.cl/rest/api/get/usuarios';

// 		let loading = this.loadingCtrl.create({
// 			content:'Un momento por favor...'
// 		});
// 		loading.present();
// 		var user:any;

// 		this.http.get(url)
// 		.map(res => res.json())
// 		.subscribe(data => {	

// 			var self = this;
			
// 			this.data = data.map( (d) => {
// 				if (d.fieldData.Us_usuario == this.user.usuario && d.fieldData.Us_pass == this.user.password) {
// 					self.usernameOk = true;
// 					self.passwordOk = true;
// 					user = this.user.usuario;
// 				}
// 				return d;
// 			});

// 			if (this.usernameOk == true && this.passwordOk == true) {
// 				loading.dismiss();
// 				//this.navCtrl.push(HomePage, {data:this.data});
// 				console.log(user);
// 				console.log({data:this.data});
// 				this.navCtrl.push(MenuPage, user);
// 			}else{
// 				let alert = this.alertCtrl.create({
// 					title:'Error!',
// 					subTitle:'Usuario y/o contraseña invalido',
// 					buttons:['Aceptar'] 					
// 				});
// 				loading.dismiss();
// 				alert.present();
// 			}

// 		});		

// 	}

// }

export class LoginPage{
	self = this;
	user = {"usuario":"", "password":"", "layout":"usuarios"};
	data = new Array<Object>();
	usernameOk = false;
	passwordOk = false;
	url_base = 'http://solnetjson.grown.cl/';
	headers = new Headers({'Content-Type': 'application/json'});
	options = new RequestOptions({ headers: this.headers });
	alerts = {
		error_login:this.alertCtrl.create({
			title:'Error!',
			subTitle:'Usuario y/o contraseña invalida',
			buttons:['Aceptar'] 					
		}),
	};
	loaders = {
		loading:this.loadingCtrl.create({content:'Un momento porfavor...'}),
		error:this.loadingCtrl.create({content:'Usuario y/o contraseña invalida, un momento por favor...'}),
		success:this.loadingCtrl.create({content:'Un momento porfavor...'}),
	};
	
	constructor(
		public alertCtrl: AlertController, 
		public loadingCtrl: LoadingController,
		public navCtrl: NavController,
		private http: Http,
	){}

	find_in_layout = ():void=>{
		var u = this.user.usuario;
		var p = this.user.password;
		var l = this.user.layout;
		var q = {"query":[{"Us_Usuario":`=${u}`,"Us_pass":`=${p}`}]}; 
		var b = { 'layout':l, 'query':q };
		var url_login = `${this.url_base}/rest/api/find`;


		let alert_error = this.alertCtrl.create({
			title:'Error!',
			subTitle:'Usuario y/o contraseña invalida',
         buttons: [
           {
             text: "Aceptar", handler: () => {
               alert_error.dismiss(); 
               return false;
             }
           }]
       });

		//Validacion usuario
		if ( (u&&u!=null&&u!='')&&(p&&p!=null&&p!='')&&(l&&l!=null&&l!='')) {
			var error_login = this.alerts.error_login;
			
			this.http.post(url_login, this.options, {'body':b})
				.map(response => response.json())
				.subscribe(
		  			response => {

		  				var ec = response.errorCode;
		  				if (ec == '0') {
							this.navCtrl.push(MenuPage, {data:{'user':u} });
		  				}else if(ec == '401'){
		  					alert_error.present();
		  					//error_login.present();
		  				}
			  		},
					() => {/*console.log('Authentication Complete')*/}
				);
		}
	};


	ngOnInit(){ 
		var user:any;
	}

	signIn = ():void=>{ alert("signIn"); }

	login = ():void=>{
		return this.find_in_layout();
		

	}

	
}