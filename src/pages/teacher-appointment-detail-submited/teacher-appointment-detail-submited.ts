import { Component } from '@angular/core';
import { NavController, ModalController,ToastController,Platform,NavParams,AlertController, App} from 'ionic-angular';
import { StudentProfileview } from '../student-profileview/student-profileview';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';
import { EndPopup } from '../end-popup/end-popup';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import Swal from 'sweetalert2';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-teacher-appointment-detail-submited',
  templateUrl: 'teacher-appointment-detail-submited.html',
})
export class TeacherAppointmentDetailSubmited {
  userType:any;
  userId:any;
  token:any;
  alert:any;
  data1:any;
  connectSubscription:any;
  apId:any;
  getDetailD:{user_id:any;login_token:any;appointment_id:any;user_type:any;}
  actionData:{tutor_id:any;login_token:any;appointment_id:any;action:any;}
  detailData:any;
  myAppoint:any;
  latLng:any;
  rating:any;
  content: string;
  titleAccept: string;
  title: string;
  successMessage: string;
  appDate: any;
  appTime: any;
  dateF: string;
  localISOTime: string;
  logoutDataSend: { user_id: any; login_token: any; };

  constructor(public app:App, public authservices:AuthservicesProvider, private launchNavigator: LaunchNavigator,public sms:SMS, public call:CallNumber, public alertCtrl:AlertController, public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public platform:Platform, public toastCtrl:ToastController, public spinner: NgxSpinnerService,public tutorservices:TutorservicesProvider, public navCtrl: NavController, public modalCtrl: ModalController) {

    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    this.localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-1);

  }

  ionViewDidEnter() {
    this.apId = this.navParams.get('appointment_id');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getAppointmentDetail();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getAppointmentDetail();
    });
     this.platform.registerBackButtonAction(() => {
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }else{
        if(this.alert){
          this.alert.dismiss();
          this.alert = null;
        }else{
          this.showAlert();
         }
      }
    })
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  showAlert() {
    this.alert = this.alertCtrl.create({
      title: 'Exit?',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  getAppointmentDetail(){
    this.spinner.show();
    this.getDetailD = {
      user_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      user_type:this.userType
    }
    this.tutorservices.myAppointmentsDetailApi(this.getDetailD).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.myAppoint = this.data1.data;
      if(this.data1.status == 200){
        this.detailData = this.data1.data;

        this.appDate = this.detailData.date;
        this.appTime = this.detailData.start_time;

        this.rating = this.detailData.rating;
      }else{
        if(this.data1.message == 'Wrong token entered!.Please try again.'){
          this.presentToast("Session expired Please login again");
          this.sessionExpired();
        }else{
          // this.presentToast(this.data1.message);
        }
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  actionClickAccept(appointmentId,action){
    this.alert = this.alertCtrl.create({
      title: 'Accept appointment',
      message: 'Are you sure you want to accept this appointment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log();
          }
        },
        {
          text: 'Accept',
          handler: () => {
            this.spinner.show();
            this.actionData = {
              tutor_id : this.userId,
              login_token:this.token,
              appointment_id:appointmentId,
              action:action
            }
            this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
              console.log(result);
              this.spinner.hide();
              this.data1 = result;
              this.myAppoint = this.data1.data;
              if(this.data1.status == 200){

                this.getAppointmentDetail();
              }else{
                this.presentToast(this.data1.message);
              }
            }, (err) => {
              this.spinner.hide();
              console.log(err);
            })
          }
        }
      ]
    });
    this.alert.present();
  }

  actionClickSTart(appointmentId,action){
    this.alert = this.alertCtrl.create({
      title: 'Start appointment',
      message: 'Are you sure you want to start this appointment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log();
          }
        },
        {
          text: 'Accept',
          handler: () => {
            this.spinner.show();
            this.actionData = {
              tutor_id : this.userId,
              login_token:this.token,
              appointment_id:appointmentId,
              action:action
            }
            this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
              console.log(result);
              this.spinner.hide();
              this.data1 = result;
              this.myAppoint = this.data1.data;
              if(this.data1.status == 200){

                this.getAppointmentDetail();
              }else{
                this.presentToast(this.data1.message);
              }
            }, (err) => {
              this.spinner.hide();
              console.log(err);
            })
          }
        }
      ]
    });
    this.alert.present();
  }

  actionClick(appointmentId,action){
    this.spinner.show();
    this.actionData = {
      tutor_id : this.userId,
      login_token:this.token,
      appointment_id:appointmentId,
      action:action
    }
    this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.myAppoint = this.data1.data;
      if(this.data1.status == 200){

        this.getAppointmentDetail();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  messageClick(num){
    this.sms.send(num, '');
  }

  callClick(num){
    this.call.callNumber(num, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  goToProfile(id){
    this.navCtrl.push(StudentProfileview,{studentId:id});
  }

  goToEnd(id,action){
    let modal = this.modalCtrl.create(EndPopup,{appointment_id:id,action:action});
    modal.onDidDismiss(data => {
      if(data){
        this.apId = data;
        this.getAppointmentDetail();
      }else{
        console.log("cross");
      }
    })
    modal.present();
  }

  goToReject(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_reject'});
    modal.onDidDismiss(data => {
      // this.apId = data;
      if(data){
        this.apId = data;
        this.getAppointmentDetail();
      }else{
        console.log("reject");
      }
    })
    modal.present();
  }

  cancelClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_cancel'});
    modal.onDidDismiss(data => {
      if(data){
        this.apId = data;
        this.getAppointmentDetail();
      }else{
        console.log("cross");
      }

    })
    modal.present();
  }

  viewMap(lat,lng){
    this.latLng  = lat.concat(','+lng);
    let options: LaunchNavigatorOptions = {

    }
    this.launchNavigator.navigate(this.latLng,options).then(()=>{
      console.log("launched successfully");
    }).catch(()=>{
      console.log("launch failed");
    })
  }

  sessionExpired(){
    this.logoutDataSend = {
      user_id : this.userId,
      login_token:this.token,
    }
    this.authservices.logoutApi(this.logoutDataSend).then((result) => {
      console.log(result);
      this.data1 = result;
      if(this.data1.status == 200){
        this.nativeStorage.remove('userData');
        this.nativeStorage.remove('userType');
        this.app.getRootNav().setRoot(SignupType);
        // this.navCtrl.push(SignupType);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
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
