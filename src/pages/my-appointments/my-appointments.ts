import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController,Platform,ModalController } from 'ionic-angular';
import { AppointmentDetailSubmited } from '../appointment-detail-submited/appointment-detail-submited';
import { AppointmentDetailRejected } from '../appointment-detail-rejected/appointment-detail-rejected';
import { AppointmentDetailProgress } from '../appointment-detail-progress/appointment-detail-progress';
import { AppointmentDetailAccepted } from '../appointment-detail-accepted/appointment-detail-accepted';
import { AppointmentDetailCompleted } from '../appointment-detail-completed/appointment-detail-completed';
import { AppointmentDetailCompletedFeedback } from '../appointment-detail-completed-feedback/appointment-detail-completed-feedback';
import { Notifications } from '../notifications/notifications';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';
import { RatingPopup } from '../rating-popup/rating-popup';

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
  public categories: Array<string> = ['submitted', 'scheduled', 'completed']
  getBadgeCount:any;

  constructor(public modalCtrl:ModalController,public platform:Platform,public alertCtrl:AlertController,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public studentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
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

    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = '';
      });
    }
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
      }else{
        this.presentToast(this.data1.message);
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
    })
    modal.present();
  }
  noClickAppStart(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'start_no'});
    modal.onDidDismiss(data => {
    })
    modal.present();
  }

  cancelAction(appointmentId,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:appointmentId,action:action,popup:'student_cancel'});
    modal.onDidDismiss(data => {
      this.nativeStorage.getItem('userData').then((data) => {
        this.userType = data.user_type;
        this.userId = data.id;
        this.token = data.login_token;
        this.getMyAppointments();
      })
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
  goToDetailReject(){
  	this.navCtrl.push(AppointmentDetailRejected);
  }
  goToDetailProgress(){
    this.navCtrl.push(AppointmentDetailProgress);
  }
  goToDetailAccepted(){
    this.navCtrl.push(AppointmentDetailAccepted);
  }
  goToDetailCompleted(){
    this.navCtrl.push(AppointmentDetailCompleted);
  }
  goToDetailCompletedFeedback(){
    this.navCtrl.push(AppointmentDetailCompletedFeedback);
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
