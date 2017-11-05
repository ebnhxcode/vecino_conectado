import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, Platform  } from 'ionic-angular';
import { AdminviewmanagementPage } from '../adminviewmanagement/adminviewmanagement';
import { AdminviewhodsPage } from '../adminviewhods/adminviewhods';
import { AdminviewstaffsPage } from '../adminviewstaffs/adminviewstaffs';
import { AdminviewstudentsPage } from '../adminviewstudents/adminviewstudents';
import { AdminviewparentsPage } from '../adminviewparents/adminviewparents';
import { InicioPage } from '../inicio/inicio';
import { LoginPage } from '../login/login';

/*
  Generated class for the Admindash page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'admindash.html'
})
export class AdmindashPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = InicioPage;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public navCtrl: NavController) {

    // this.pages = [
    //   { title: 'Home', component: InicioPage, icon:'home' },
    //   { title: 'Management', component: AdminviewmanagementPage, icon:'compass' },
    //   { title: 'HOD', component: AdminviewhodsPage, icon:'person' },
    //   { title: 'Staffs', component: AdminviewstaffsPage, icon:'contact' },
    //   { title: 'Students', component: AdminviewstudentsPage, icon:'people' },
    //   { title: 'Parents', component: AdminviewparentsPage, icon:'appstore' }
    // ];

    this.pages = [
      { title: 'Inicio', component: InicioPage, icon:'home' },
    
      { title: 'Cuenta', component: AdminviewhodsPage, icon:'contact' },
      //{ title: 'Convenios', component: AdminviewstaffsPage, icon:'people' },
      //{ title: 'Municipalidad', component: AdminviewstudentsPage, icon:'book' },
      { title: 'Configuración', component: AdminviewmanagementPage, icon:'settings' },
      //{ title: 'Solnet', component: AdminviewparentsPage, icon:'appstore' },
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
