import { AutocompletePage } from './../autocomplete/autocomplete';
import { Component,NgZone, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController, Events, LoadingController, MenuController } from 'ionic-angular';
import { BookAppointment } from '../book-appointment/book-appointment';
import { RepeatAppointmentPage } from '../repeat-appointment/repeat-appointment';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";
import { NativeStorage } from '@ionic-native/native-storage';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { GoogleMapsMapTypeId, GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment, HtmlInfoWindow } from '@ionic-native/google-maps';
declare var google: any;
@Component({
  selector: 'page-map-search',
  templateUrl: 'map-search.html',
})
export class MapSearchPage {
  autocompleteItems;
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  latitude: number = 0;
  longitude: number = 0;
  geo: any;
  lat: any;
  lng: any;
  address: string;
  service = new google.maps.places.AutocompleteService();
  navTo: any;
  markData: any;
  markerArr: any[];
  autocomplete: { query: string; };
  mapTypeId: any;
  constructor(public events:Events, private nativeGeocoder: NativeGeocoder,public nativeStorage:NativeStorage, public mapsAPILoader:MapsAPILoader,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, private zone: NgZone,public menuCtrl:MenuController) {
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

    this.markerArr = [];
  }

  onChangeObj(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[this.mapTypeId]);
  }

  ionViewWillEnter() {
    this.navTo = this.navParams.get('navigateTo');
    this.markData = this.navParams.get('mapData');
    console.log("this.markData",this.markData);
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

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
        lat: this.lat,
        lng: this.lng
      },
        zoom: 18,
        tilt: 30
      },
      controls: {
        'compass': false,
        'myLocationButton': true,
        'myLocation': true,
        'zoom': false,
        'mapToolbar': false
      }
    };
    // this.map = GoogleMaps.create('map1', mapOptions);

    this.map = GoogleMaps.create('map1', {
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
      title: 'My location',
      icon: 'blue',
      position: {
        lat: this.lat,
        lng: this.lng
      }
    })
    .then(marker => {
      for (let i = 0; i < this.markData.length; i++) {
        let htmlInfoWindow =  new HtmlInfoWindow();
        let frame: HTMLElement = document.createElement('div');
        frame.innerHTML = [
          '<p style="margin: 0;font-size: 10px;position: relative;text-align:center;">'+this.markData[i].address+'</p>',
          '<button style="background-color: #fe3464;border-radius: 16px;font-size: 11px; color:#fff;margin-top: 8px;padding: 5px 10px;">Select this location</button>'
        ].join("");
        frame.getElementsByTagName("button")[0].addEventListener("click", (data) => {
          let obj = {
            address:this.markData[i].address,
            id:this.markData[i].id
          }
          this.events.publish('markData:created', obj, Date.now());
          this.navCtrl.pop();
        });
        htmlInfoWindow.setContent(frame, {width: "auto", height: "80px"});
        setTimeout(()=>{
          let markers = this.map.addMarker({
          icon: {
            size: {
              width: 50,
              height: 50
            }
          },
          position: {
            lat: this.markData[i].latitude,
            lng: this.markData[i].longitude
          }
        })
        .then(marker => {
          this.markerArr.push(marker);
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            htmlInfoWindow.open(marker);
          });
        })
      },1000)

    }
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
chooseItem(item: any)
{
  console.log("chla");
  this.geo = item;
  this.autocomplete = {
    query: this.geo
  };
  this.autocompleteItems = [];
  this.geoCode(this.geo);
}

  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      this.mapCam(this.latitude,this.longitude);
      // this.navCtrl.pop();
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
  }

}
