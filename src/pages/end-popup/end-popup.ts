import { Component } from '@angular/core';
import { ViewController,ToastController,NavParams } from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-end-popup',
  templateUrl: 'end-popup.html',
})
export class EndPopup {
  apId:any;
  action:any;
  userType:any;
  token:any;
  userId:any;
  data1:any;
  actionData:{tutor_id:any;login_token:any;appointment_id:any;action:any;}

  constructor(public navParams:NavParams,public toastCtrl:ToastController,public nativeStorage:NativeStorage,public tutorservices:TutorservicesProvider, public spinner:NgxSpinnerService, public network:Network, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.apId = this.navParams.get('appointment_id');
    this.action = this.navParams.get('action');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
    })
    console.log('ionViewDidLoad EndPopup');
  }

  yes(){
    this.spinner.show();
    this.actionData = {
      tutor_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      action:this.action
    }
    this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.viewCtrl.dismiss(this.apId);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
       this.spinner.hide();
      console.log(err);
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
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
