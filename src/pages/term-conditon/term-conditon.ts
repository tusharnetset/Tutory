import { Component } from '@angular/core';
import { NavController, NavParams, Platform,ViewController } from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';

@Component({
  selector: 'page-term-conditon',
  templateUrl: 'term-conditon.html',
})
export class TermConditonPage {
  sendCategorydata: { user_id: string; login_token: string; };
  data1:any;
  conditions: any;
  show:boolean = false;
  getT: any;
  getTerm: any;
  constructor(public viewCtrl: ViewController, public platform:Platform, public studentservices:StudentservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getTerm = this.navParams.get('term');
    this.show = true;
    console.log('ionViewDidLoad TermConditonPage');
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
