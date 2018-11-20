import { Component } from '@angular/core';
import { ViewController, ToastController ,NavParams} from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-reject-reason-popup',
  templateUrl: 'reject-reason-popup.html',
})
export class RejectReasonPopup {
  reason:any;
  apId:any;
  action:any;
  userType:any;
  token:any;
  userId:any;
  data1:any;
  actionDataTutor:{tutor_id:any;login_token:any;appointment_id:any;reason:any;action:any;}
  actionDataStudent:{student_id:any;login_token:any;appointment_id:any;reason:any;action:any;}
  poupText:any;

  constructor(public studentservices:StudentservicesProvider,public navParams:NavParams,public toastCtrl:ToastController, public nativeStorage:NativeStorage,public tutorservices:TutorservicesProvider, public spinner:NgxSpinnerService, public network:Network, public viewCtrl: ViewController) {
  }

  ionViewDidEnter() {
    this.poupText = this.navParams.get('popup')
    this.apId = this.navParams.get('appointment_id');
    this.action = this.navParams.get('action');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
    })
    console.log('ionViewDidLoad EndPopup');
  }

  clickAction(reson){
    if(this.userType == 'T'){
      this.actionClickTutor(reson);
    }else{
      this.actionClickStudent(reson);
    }
  }

  actionClickTutor(reason){
    if(reason == "" || reason == undefined || reason == null){
      this.presentToast("Please add reason");
      return;
    }
    this.spinner.show();
    this.actionDataTutor = {
      tutor_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      reason:reason,
      action:this.action
    }
    this.tutorservices.myAppointmentActionsApi(this.actionDataTutor).then((result) => {
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

  actionClickStudent(reason){
    if(reason == "" || reason == undefined || reason == null){
      this.presentToast("Please add reason");
      return;
    }
    this.spinner.show();
    this.actionDataStudent = {
      student_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      reason:reason,
      action:this.action
    }
    this.studentservices.myAppointmentAction(this.actionDataStudent).then((result) => {
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

  dismiss(data) {
    this.viewCtrl.dismiss(data);
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
