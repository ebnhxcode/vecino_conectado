import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  data = new Array<Object>();

  // map: GoogleMap;
  // myPosition: any = {};
  // markers: any[] = [
  //   {
  //     position:{
  //       latitude: -33.423960,
  //       longitude: -70.610604,
  //     },
  //     title:'El Kika',
  //     icon: 'www/assets/imgs/pincho1.png'
  //   },
  //   {
  //     position:{
  //       latitude: -33.424098,
  //       longitude: -70.611049,
  //     },
  //     title:'Popeye',
  //     icon: 'www/assets/imgs/pincho2.png'
  //   },
  //   {
  //     position:{
  //       latitude: -33.424643,
  //       longitude: -70.615800,
  //     },
  //     title:'StarBucks',
  //     icon: 'www/assets/imgs/pincho3.png'
  //   },
  // ];

  constructor(
  	private navParams: NavParams,
    public navCtrl: NavController,
  	private geolocation: Geolocation,
    private googleMaps: GoogleMaps
  ) {
    console.log(this.navParams.get('data'));
    
    this.data = this.navParams.get('data');
  }

// ionViewDidLoad(){
//     this.getCurrentPosition();
//   }

//   getCurrentPosition(){
//     this.geolocation.getCurrentPosition()
//     .then(position => {
//       this.myPosition = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       }
//       this.loadMap();
//     })
//     .catch(error=>{
//       console.log(error);
//     })
//   }

//   loadMap(){
//     // create a new map by passing HTMLElement
//     let element: HTMLElement = document.getElementById('map');

//     this.map = this.googleMaps.create(element);

//     // create CameraPosition
//     let position: CameraPosition<any> = {
//       target: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
//       zoom: 18,
//       tilt: 30
//     };

//     this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
//       console.log('Map is ready!');

//       // move the map's camera to position
//       this.map.moveCamera(position);

//       let markerOptions: MarkerOptions = {
//         position: this.myPosition,
//         title: "Hello"
//       };

//       this.addMarker(markerOptions);

//       this.markers.forEach(marker=>{
//         this.addMarker(marker);
//       });
      
//     });
//   }

//   addMarker(options){
//     let markerOptions: MarkerOptions = {
//       position: new LatLng(options.position.latitude, options.position.longitude),
//       title: options.title,
//       icon: options.icon
//     };
//     this.map.addMarker(markerOptions);
//   }
 }



