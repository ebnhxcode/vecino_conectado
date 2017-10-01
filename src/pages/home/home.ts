import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	splash = true;
	tabBarElement: any;

  constructor(public platform: Platform, public renderer:Renderer,public navCtrl: NavController, public splashScreen: SplashScreen) {
  	//this.tabBarElement = document.querySelector('.tabbar');
	  
  }

	ngAfterViewInit(){

  		this.platform.ready().then(() => {
	  		this.splashScreen.hide();
	  	});
	}
  // ionViewDidLoad(){
  // 	this.tabBarElement.style.display = 'none';
  // 	setTimeout(() => {
  // 		this.splash = false;
  // 		this.tabBarElement.style.display = 'none';
  // 	}, 5000);

  // }

}
