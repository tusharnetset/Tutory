import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, Platform, ModalController, App } from 'ionic-angular';
import { AppointmentDetailSubmited } from '../appointment-detail-submited/appointment-detail-submited';
import { Notifications } from '../notifications/notifications';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';
import { RatingPopup } from '../rating-popup/rating-popup';
import { AuthservicesProvider } from './../../providers/authservices/authservices';

@Component({
  selector: 'page-my-appointments',
  templateUrl: 'my-appointments.html',
})
export class MyAppointments {
  submitS:boolean = false;
  shedulS:boolean = false;
  completeS:boolean = false;
  //appointments: any;
  userType:any;
  userId:any;
  token:any;
  connectSubscription:any;
  alert:any;
  appointmentsData:any;
  data1:any;
  myAppoint:any;
  sheduledData:any;
  completeAppoint:any;
  submittedData:any;
  getAppointmentsData:{user_id:any;login_token:any;user_type:any;}
  actionData:{student_id:any;login_token:any;appointment_id:any;action:any;}
  public appointments: string = 'submitted';
  public categories: Array<string> = ['submitted', 'scheduled', 'completed','cancelled']
  getBadgeCount:any;
  logoutDataSend: { user_id: any; login_token: any; };
  cancelledData: any;
  cancelD: boolean = false;

  constructor(public app:App, public authservices:AuthservicesProvider, public modalCtrl:ModalController,public platform:Platform,public alertCtrl:AlertController,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public studentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    // this.appointments="submitted";

  }

  onTabChanged(tabName) {
    this.appointments = tabName;
  }

  ionViewDidEnter() {
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getNotificationCounts();
      this.getMyAppointments();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getMyAppointments();
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
              this.nativeStorage.remove('skipData');
              this.platform.exitApp();
            }
          }
        ]
      });
      this.alert.present();
    }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  getNotificationCounts(){
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.studentServices.badgeCount(countData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getBadgeCount = this.data1;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getMyAppointments(){
    this.spinner.show();
    this.getAppointmentsData = {
      user_id : this.userId,
      login_token:this.token,
      user_type:this.userType
    }

    this.studentServices.myAppointmentsApi(this.getAppointmentsData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.myAppoint = this.data1.data;
      if(this.data1.status == 200){
        this.myAppoint = this.data1.data;
        this.submittedData = this.myAppoint.submitted;
        this.sheduledData = this.myAppoint.scheduled;
        this.completeAppoint =  this.myAppoint.completed;
        this.cancelledData = this.myAppoint.cancelled;
        if(this.submittedData.length == 0){
          this.submitS = true;
        }else{
          this.submitS = false;
        }
        if(this.sheduledData.length == 0){
          this.shedulS = true;
        }else{
          this.shedulS = false;
        }
        if(this.completeAppoint.length == 0){
          this.completeS = true;
        }else{
          this.completeS = false;
        }
        if(this.cancelledData.length == 0){
          this.cancelD = true;
        }else{
          this.cancelD = false;
        }
      }else{
        if(this.data1.message == 'Wrong token entered!.Please try again.'){
          this.presentToast("Session expired Please login again");
          this.sessionExpired();
        }else{
          this.presentToast(this.data1.message);
        }
      }
    }, (err) => {
       this.spinner.hide();
      console.log(err);
    })
  }

  actionClick(appointmentId,action){
    this.spinner.show();
    this.actionData = {
      student_id : this.userId,
      login_token:this.token,
      appointment_id:appointmentId,
      action:action
    }
    this.studentServices.myAppointmentAction(this.actionData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getMyAppointments();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  noClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'student_no'});
    modal.onDidDismiss(data => {
      if(data){
        this.getMyAppointments();
        this.appointments = "scheduled";
      }else{
        console.log("cancel");
      }
    })
    modal.present();
  }
  noClickAppStart(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'start_no'});
    modal.onDidDismiss(data => {
      if(data){
        this.appointments = "scheduled";
        this.getMyAppointments();
      }else{
        console.log("cancel");
      }
    })
    modal.present();
  }

  cancelAction(appointmentId,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:appointmentId,action:action,popup:'student_cancel'});
    modal.onDidDismiss(data => {
      if(data){
        this.appointments = "scheduled";
        this.getMyAppointments();
      }else{
        console.log("cancel");
      }

    })
    modal.present();
  }

  giveFeedBack(id,tId){
    let modal = this.modalCtrl.create(RatingPopup,{appointment_id:id,tutorId:tId});
    modal.onDidDismiss(data => {
      this.getMyAppointments();
    })
    modal.present();
  }

  goToDetailSubmit(id){
    this.navCtrl.push(AppointmentDetailSubmited,{appointment_id:id});
  }

  goToNotifications(){
    let dataSend = {
        user_id : this.userId,
        login_token:this.token
      }
    this.studentServices.badgeCountReadStatus(dataSend).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.navCtrl.push(Notifications);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
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
