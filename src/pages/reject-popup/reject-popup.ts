import { Component } from '@angular/core';
import { ViewController , NavParams} from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-reject-popup',
  templateUrl: 'reject-popup.html',
})
export class RejectPopup {
  userType:any;
  userId:any;
  token:any;
  apId:any;
  action:any;

  constructor(public navParams:NavParams, public tutorservices:TutorservicesProvider,public spinner:NgxSpinnerService,public nativeStorage:NativeStorage ,public network:Network,public viewCtrl: ViewController) {
  }

  ionViewDidEnter() {
    this.apId = this.navParams.get('appointment_id');
    this.action = this.navParams.get('action');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
    })
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
