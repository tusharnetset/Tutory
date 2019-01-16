import { Component,NgZone, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,MenuController,LoadingController, Events, ToastController, AlertController} from 'ionic-angular';
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
  Environment,
  HtmlInfoWindow,
  MapType,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';
import { NgxSpinnerService } from 'ngx-spinner';

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
  addGet: string;
  local: string;
  sublocal: string;
  postalC: string;
  admistrative: string;
  countryN: string;
  getAddress: any;
  formatedAddrss: any;
  mapTypeId: any;
  getMark: Marker;
  alert: any;
  constructor(public alertCtrl:AlertController, public toastCtrl:ToastController, public spinner:NgxSpinnerService, public events:Events, private nativeGeocoder: NativeGeocoder,public nativeStorage:NativeStorage, public mapsAPILoader:MapsAPILoader,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, private zone: NgZone,public menuCtrl:MenuController) {
    this.mapTypeId = 'ROADMAP';
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



        let geocoder = new google.maps.Geocoder();
        let latLng =  new google.maps.LatLng(this.lat,this.lng);
        this.lat = this.lat;
        this.lng = this.lng;
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
          this.getAddress = results[0].formatted_address;
          this.formatedAddrss = this.getAddress;
          console.log(this.formatedAddrss);
          this.zone.run(() => {
            console.log("zone run");
            this.autocomplete.query= this.formatedAddrss
          })
        })
      }
    );
    setTimeout(()=>{
      this.loadMap(this.lat,this.lng);
    },1000)
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    }
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'flex';
      });
    }
  }

  onChangeObj(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[this.mapTypeId]);
  }


  loadMap(lat, lng) {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
        lat: this.lat,
        lng: this.lng
      },
        zoom: 18,
        tilt: 30,
        bearing: 50
      },
      controls: {
        'compass': false,
        'myLocationButton': true,
        'myLocation': true,
        'zoom': false,
        'mapToolbar': false
      },
      gestures: {
        scroll: true,
        tilt: false,
        zoom: true,
        rotate: true
      }
    };
    this.map = GoogleMaps.create('map', {
      mapType: GoogleMapsMapTypeId.ROADMAP,
      camera: {
        target: {
        lat: this.lat,
        lng: this.lng
      },
        zoom: 18,
        tilt: 30,
        bearing: 50
      },
      controls: {
        'compass': false,
        'myLocationButton': true,
        'myLocation': true,
        'zoom': false,
        'mapToolbar': false
      },
      gestures: {
        scroll: true,
        tilt: false,
        zoom: true,
        rotate: true
      }
    });
    let markers = this.map.addMarker({
      // title: this.formatedAddrss,
      position: {
        lat: this.lat,
        lng: this.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.alert = this.alertCtrl.create({
          title: 'Save Address',
          message: this.formatedAddrss,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log("cancel");
              }
            },
            {
              text: 'Save',
              handler: () => {
                this.autocomplete.query= this.formatedAddrss
              }
            }
          ]
        });
        this.alert.present();
      });
      this.map.on(GoogleMapsEvent.MAP_DRAG_END).subscribe(() => {
        let pos = this.map.getCameraTarget();
        console.log(pos);
        marker.setPosition(pos);
        let geocoder = new google.maps.Geocoder();
        let latLng =  new google.maps.LatLng(pos.lat,pos.lng);
        this.lat = pos.lat;
        this.lng = pos.lng;
        geocoder.geocode({ 'latLng': latLng }, (results, status) => {
          this.getAddress = results[0].formatted_address;
          this.formatedAddrss = this.getAddress;
          console.log(this.formatedAddrss);
          this.zone.run(() => {
            console.log("zone run");
            this.autocomplete.query= this.formatedAddrss
          })
        })
      });
    })
  }

  geocodeCheck(lat,lng){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lat, lng, options)
    .then((result: NativeGeocoderReverseResult[]) => {
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
    this.geo = item;
    this.autocomplete.query = this.geo;
    this.autocompleteItems = [];
    this.geoCode(this.geo);
  }

  geoCode(address:any) {
    this.spinner.show();
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.spinner.hide();
      this.lat = results[0].geometry.location.lat();
      this.lng = results[0].geometry.location.lng();
      // this.mapCam(this.latitude, this.longitude);
      // let obj = {
      //   address:address,
      //   lat:this.latitude,
      //   lng:this.longitude
      // }
      // this.events.publish('user:created', obj, Date.now());
      // this.navCtrl.pop();
    },err => {
      this.spinner.hide();
    });
  }


  mapCam(lat, long){
    this.map.animateCamera({
      target: {
        lat: lat,
        lng: long
      },
      zoom: 10
    });
    let markers = this.map.addMarker({
      position: {
        lat: lat,
        lng: long
      }
    })
  }

  doneClick(){
    if(!this.autocomplete.query){
      this.presentToast("Please enter address");
      return;
    }
    let obj = {
      address:this.autocomplete.query,
      lat:this.lat,
      lng:this.lng
    }
    this.events.publish('user:created', obj, Date.now());
    this.navCtrl.pop();
  }


  presentToast(message)
  {
    console.log(message);
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }


}


