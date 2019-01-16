import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  getData: any;
  userType: any;

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getData = this.navParams.get('data');
    this.userType = this.navParams.get('type');
    console.log('ionViewDidLoad FaqPage');
  }
  dismissCan(){
    this.viewCtrl.dismiss();
  }

}
