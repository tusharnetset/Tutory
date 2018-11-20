import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, ViewController } from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  sendCategorydata: { user_id: string; login_token: string; };
  data1: any;
  aboutU: any;
  alert: any;
  show:boolean = false;
  getAboutUs: any;

  constructor(public viewCtrl: ViewController, public alertCtrl:AlertController, public platform:Platform,public studentservices:StudentservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getAboutUs = this.navParams.get('about');
    this.show = true;
    this.platform.registerBackButtonAction(() => {
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }else{
        this.navCtrl.pop();
      }
    })
  }

  dismissCan(){
    this.viewCtrl.dismiss();
  }

}
