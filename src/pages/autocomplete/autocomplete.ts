import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,MenuController,LoadingController} from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
declare var google: any;
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {
  autocompleteItems;
  autocomplete;

  latitude: number = 0;
  longitude: number = 0;
  geo: any

  service = new google.maps.places.AutocompleteService();
  sheduledData: string;

  constructor(public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, private zone: NgZone,public menuCtrl:MenuController,public nativeStorage:NativeStorage) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutocompletePage');
    this.viewCtrl.showBackButton(true);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    console.log(item);
    // this.viewCtrl.dismiss(this.geo);
    this.geo = item;
    this.geoCode(this.geo);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions(
      {
        input: this.autocomplete.query,
        componentRestrictions: {
          country: ''
        }
      }, function (predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }

  geoCode(address:any) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.nativeStorage.setItem('latitude', this.latitude).then(
        (result) => console.log('Stored item!',result),
        error => console.error('Error storing item', error)
      );

      this.longitude = results[0].geometry.location.lng();
      this.nativeStorage.setItem('longitude', this.longitude).then(
        (result) =>{
          loading.dismiss();
          this.viewCtrl.dismiss(this.geo);
          console.log('Stored item!',result)
        } ,
        error => console.error('Error storing item', error)
      );
    });
  }

  doneClick(item){
    this.viewCtrl.dismiss(item);
    this.geo = item;
  }

}
