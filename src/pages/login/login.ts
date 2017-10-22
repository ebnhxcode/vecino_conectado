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

	ngOnInit(){ 
		/*console.log("arranco el init");*/ 

		/*
		let loading = this.loadingCtrl.create({
			content:'Un momento porfavor...'
		});
		loading.present();
		*/

		var user:any;
		//var url = 'http://local.solnetjson/test/get';
		//var url = 'http://local.solnetjson/test/all';
		var url = 'http://local.solnetjson/rest/api/find';

		/*
		this.http.get(url)
		.do(res => res.json()).
		subscribe(data => {
			console.log(data)
		});
		*/

		//var url_login = 'http://local.solnetjson/rest/api/post';
		var url_login = 'http://local.solnetjson/rest/api/find';

		var headers = new Headers({'Content-Type': 'application/json'});
		var options = new RequestOptions({ headers: headers });

		var json = {
			'user':this.user.usuario || 'Victor',
			'pass':this.user.password || 123,
			'layout':'usuarios',
		};
		var query = {"query":[{"Us_Usuario":"=Victor","Us_pass":"=123"}]}; 
		var body = {
			'json':json,
			'query':query
		};
		//JSON.stringify(this.user);
		this.http.post(url, options, {'body':body})
			.map(response => response.json() )
			.subscribe(
		  		response => console.log(response),
		  		() => console.log('Authentication Complete')
			);
		return ;	
		//console.log('ok');
		

	}

	signIn = ():void=>{ alert("signIn"); }

	login = ():void=>{

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