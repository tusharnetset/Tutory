import { Component,NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,MenuController,LoadingController, Events} from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";
import { NativeStorage } from '@ionic-native/native-storage';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Geocoder,
  Environment
} from '@ionic-native/google-maps';
import { TeacherCreateProfile } from '../teacher-create-profile/teacher-create-profile';
import { TeacherEditProfile } from '../teacher-edit-profile/teacher-edit-profile';
import { CreateProfile } from '../create-profile/create-profile';
import { EditProfile } from '../edit-profile/edit-profile';
import { Filters } from '../filters/filters';

declare var google: any;

@Component({
  selector: 'page-address-map',
  templateUrl: 'address-map.html',
})
export class AddressMapPage {
  autocompleteItems;
  autocomplete;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  latitude: number = 0;
  longitude: number = 0;
  geo: any
  lat: any;
  lng: any;
  address: string;
  service = new google.maps.places.AutocompleteService();
  navTo: any;

  constructor(public events:Events, private nativeGeocoder: NativeGeocoder,public nativeStorage:NativeStorage, public mapsAPILoader:MapsAPILoader,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, private zone: NgZone,public menuCtrl:MenuController) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    this.events.subscribe('latLng:created', (event, time) => {
      console.log('Welcome', event, 'at', time);
      this.lat = event.lat;
      this.lng = event.lng;
    });
    this.events.subscribe('hello', (data) => {
      alert('subscribed to hello with data')
    });
  }

  ionViewWillEnter() {
    this.navTo = this.navParams.get('navigateTo');
    this.nativeStorage.getItem('locationLat').then(
      (result) => {
        this.lat = result;
      }
    );
    this.nativeStorage.getItem('locationLng').then(
      (result) => {
        this.lng = result;
      }
    );
    setTimeout(()=>{
      this.loadMap();
    },1000)
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
        lat: this.lat,
        lng: this.lng
      },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = GoogleMaps.create('map', mapOptions);
    let markers = this.map.addMarker({
      title: 'Ionic',
      icon: 'blue',
      // animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.lng
      }
    })
    .then(marker => {
      this.map.on(GoogleMapsEvent.MAP_DRAG).subscribe(() => {
        let pos = this.map.getCameraTarget();
        console.log(pos);
        marker.setPosition(pos);
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

      });
    })
  }

geocodeCheck(lat,lng){
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  this.nativeGeocoder.reverseGeocode(lat, lng, options)
  .then((result: NativeGeocoderReverseResult[]) =>{
    console.log(JSON.stringify(result[0]));
    this.address = JSON.stringify(result[0])
  })
  .catch((error: any) => console.log(error));
}

updateSearch() {
  console.log("chla");
  if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
  }
  let me = this;
  this.service.getPlacePredictions({ input: this.autocomplete.query,  componentRestrictions: {country: ''} }, function (predictions, status) {
    console.log(status);
    me.autocompleteItems = [];
    me.zone.run(function () {
      predictions.forEach(function (prediction) {
        me.autocompleteItems.push(prediction.description);
      });
    });
  });
}

  chooseItem(item: any) {
    // this.viewCtrl.dismiss(this.geo);
    this.geo = item;
    this.geoCode(this.geo);
  }

  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      let obj = {
        address:address,
        lat:this.latitude,
        lng:this.longitude
      }
      this.events.publish('user:created', obj, Date.now());
      this.navCtrl.pop();
    });
  }

}
