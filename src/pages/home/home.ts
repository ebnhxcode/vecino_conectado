import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	splash = true;
	tabBarElement: any;
  data = new Array<Object>();

  constructor(
    private navParams: NavParams,
    public platform: Platform, 
    public renderer:Renderer,
    public navCtrl: NavController, 
    public splashScreen: SplashScreen) {
  	//this.tabBarElement = document.querySelector('.tabbar');
    console.log(this.navParams.get('data'));
    this.data = this.navParams.get('data');
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
