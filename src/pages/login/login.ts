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
export class LoginPage{
	self = this;
	user = {"usuario":"", "password":"", "layout":"usuarios"};
	data = new Array<Object>();
	usernameOk = false;
	passwordOk = false;
	url_base = 'http://local.solnetjson';
	//url_base = 'http://solnetjson.grown.cl';
	//url_base = 'http://vc.solnet.cl/'
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

		//var q = {"query":[{"Us_Usuario":`=${u}`,"Us_pass":`=${p}`}]}; 
		//var b = { 'layout':l, 'query':q };

		var q = {"data":{"Us_usuario":`=${u}`,"Us_pass":`=${p}`},'layout':{'name':l}}; 
		var b = { 'layout':l };

		var url_login = `${this.url_base}/rest/api/save`;



			
			this.http.post(url_login, q, this.options)
				.map(response => response.json())
				.subscribe(
		  			response => {
		  				console.log(response);
			  		},
					() => {
					//console.log('Authentication Complete')
					}
				);
















		return;

		/*
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
       


		//this.loaders.loading.present();
		//this.loaders.loading.dismiss();
		//Validacion usuario
		if ( (u&&u!=null&&u!='')&&(p&&p!=null&&p!='')&&(l&&l!=null&&l!='')) {
			var error_login = this.alerts.error_login;
			
			this.http.post(url_login, this.options, {'body':b})
				.map(response => response.json())
				.subscribe(
		  			response => {

		  				var ec = response.errorCode;
		  				if (ec == '0') {
							this.navCtrl.push(HomePage, {data:{'user':u} });
		  				}else if(ec == '401'){
		  					alert_error.present();
		  					//error_login.present();
		  				}
			  		},
					() => {
					//console.log('Authentication Complete')
					}
				);
		}
		*/
	};


	ngOnInit(){ 
		/*console.log("arranco el init");*/ 
		//return 1;
		//return this.find_in_layout();

		var user:any;
		//var url = 'http://local.solnetjson/test/get';
		//var url = 'http://local.solnetjson/test/all';

		/*
		this.http.get(url)
		.do(res => res.json()).
		subscribe(data => {
			console.log(data)
		});
		*/
	}

	signIn = ():void=>{ alert("signIn"); }

	login = ():void=>{
		return this.find_in_layout();
		/*
		//var url = 'http://vc.solnet.cl/rest/api/get/usuarios';
		var url = 'http://local.solnetjson/rest/api/post';

		let loading = this.loadingCtrl.create({
			content:'Un momento porfavor...'
		});

		loading.present();
		var user:any;


		var url_login = 'http://local.solnetjson/rest/api/post';

		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			//'Accept': 'application/json'
		});
		let options = new RequestOptions({ headers: headers });

		let body = {
			'json' : {
				'user':this.user.usuario,
				'pass':this.user.password
			}
		}
		//JSON.stringify(this.user);

		this.http.post(url_login, body, options)
			//.map(response => response.json())
			.subscribe(
		  		response => console.log(response),
		  		() => console.log('Authentication Complete')
			);

		return ;

		*/

/*
		this.http.post(url_login, body, {headers: headers})
		.map(res => res.json())
		.subscribe(data=>{
			console.log(data);
		});
*/


		/*
		this.http.get(url)
		.map(res => res.json())
		.subscribe(data => {	

			var self = this;
			
			this.data = data.map( (d) => {
				if (d.fieldData.Us_usuario == this.user.usuario && d.fieldData.Us_pass == this.user.password) {
					self.usernameOk = true;
					self.passwordOk = true;
					user = this.user.usuario;
				}
				return d;
			});

			if (this.usernameOk == true && this.passwordOk == true) {
				loading.dismiss();

				//this.navCtrl.push(HomePage, {data:this.data});
				//console.log(user);
				this.navCtrl.push(MenuPage, user);
			}else{
				let alert = this.alertCtrl.create({
					title:'Error!',
					subTitle:'Usuario y/o contraseña invalido',
					buttons:['Aceptar'] 					
				});
				loading.dismiss();
				alert.present();
			}

		});
		*/		

	}

	// login = ():void=>{

	// 	var url = 'http://solnetjson.grown.cl/rest/api/get/usuarios';

	// 	let loading = this.loadingCtrl.create({
	// 		content:'Un momento porfavor...'
	// 	});
	// 	loading.present();

	// 	this.http.get(url)
	// 	.map(res => res.json())
	// 	.subscribe(data => {	

	// 		var self = this;
	// 		this.data = data.map( (d) => {
	// 			self.usernameOk = d.fieldData.Us_usuario == this.user.usuario ? true : false;
	// 			self.passwordOk = d.fieldData.Us_pass == this.user.password ? true : false;
				
	// 			console.log(d.fieldData.Us_usuario);
	// 			console.log(d.fieldData.Us_pass);
	// 			console.log(this.usernameOk);
	// 			console.log(this.passwordOk);
	// 			console.log('------------');
				
	// 			return d;
	// 		});

	// 		if (this.usernameOk == true && this.passwordOk == true) {
	// 			loading.dismiss();
	// 			this.navCtrl.push(HomePage, {data:this.data});
	// 		}else{
	// 			let alert = this.alertCtrl.create({
	// 				title:'Error!',
	// 				subTitle:'Usuario y/o contraseña invalido',
	// 				buttons:['Aceptar'] 					
	// 			});
	// 			loading.dismiss();
	// 			alert.present();
	// 		}

	// 	});		

	// } 
}