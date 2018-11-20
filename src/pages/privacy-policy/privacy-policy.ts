import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';


@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {
  sendCategorydata: { user_id: string; login_token: string; };
  data1: any;
  aboutU: any;
  privacy_policy: any;
  conditions: any;
  show:boolean = false;
  getPri: any;
  constructor(public viewCtrl: ViewController,public platform:Platform, public studentservices:StudentservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getPri = this.navParams.get('privacy');
    this.show = true;
    console.log('ionViewDidLoad PrivacyPolicyPage');
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
