import { Component,NgZone, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController, Events, LoadingController, MenuController } from 'ionic-angular';
import { BookAppointment } from '../book-appointment/book-appointment';
import { RepeatAppointmentPage } from '../repeat-appointment/repeat-appointment';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";
import { NativeStorage } from '@ionic-native/native-storage';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, Environment, HtmlInfoWindow } from '@ionic-native/google-maps';
declare var google: any;
@Component({
  selector: 'page-map-search',
  templateUrl: 'map-search.html',
})
export class MapSearchPage {
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
  markData: any;
  markerArr: any[];

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

    this.markerArr = [];
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

    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
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
      }
    };
    this.map = GoogleMaps.create('map1', mapOptions);

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
          // '<h5 style="margin: 0;padding: 0 10px 6px;overflow: hidden;font-size: 1.4rem;text-overflow: ellipsis;white-space: nowrap;">'+this.markData[i].address+'</h5><br>',
          '<p style="margin: 0;font-size: 10px;position: relative;text-align:center;">'+this.markData[i].address+'</p>',
          '<button style="background-color: #fe3464;border-radius: 16px;font-size: 11px; color:#fff;margin-top: 8px;padding: 5px 10px;">Select this location</button>'
        ].join("");
        frame.getElementsByTagName("button")[0].addEventListener("click", (data) => {
          // this.navCtrl.push(EventDetail,{eventId:this.loadEventdata[i].eventId,catId:this.loadEventdata[i].category.id,navig:'map'});
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
              // url: this.apiUrl+this.loadEventdata[i].eventImage,
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

  chooseItem(item: any) {
    // this.viewCtrl.dismiss(this.geo);
    this.geo = item;
    this.geoCode(this.geo);
    // let obj = {
    //   address:this.geo
    // }
    // this.events.publish('user:created', obj, Date.now());
    // this.navCtrl.pop();

    // if(this.navTo == 'student_create'){
    //   this.navCtrl.push(CreateProfile,{val:obj});
    // }else if(this.navTo == 'tutor_create'){
    //   this.navCtrl.push(TeacherCreateProfile,{val:obj});
    // }else if(this.navTo == 'student_edit'){
    //   this.navCtrl.push(EditProfile,{val:obj});
    // }else if(this.navTo == 'tutor_edit'){
    //   this.navCtrl.push(TeacherEditProfile,{val:obj});
    // }else{
    //   this.navCtrl.push(Filters,{val:obj});
    // }

  }

  geoCode(address:any) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      this.mapCam(this.latitude,this.longitude);
      let obj = {
        address:address,
        lat:this.latitude,
        lng:this.longitude
      }
      this.events.publish('user:created', obj, Date.now());
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
