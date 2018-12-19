import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform, AlertController, ModalController, App} from 'ionic-angular';
import { TeacherAppointmentDetailSubmited } from '../teacher-appointment-detail-submited/teacher-appointment-detail-submited';
import { TeacherAppointmentDetailProgress } from '../teacher-appointment-detail-progress/teacher-appointment-detail-progress';
import { TeacherAppointmentDetailAccepted } from '../teacher-appointment-detail-accepted/teacher-appointment-detail-accepted';
import { TeacherAppointmentDetailCompleted } from '../teacher-appointment-detail-completed/teacher-appointment-detail-completed';
import { Notifications } from '../notifications/notifications';
import { NotificationsTeacherPage } from '../notifications-teacher/notifications-teacher';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';
import { EndPopup } from '../end-popup/end-popup';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';
import { AuthservicesProvider } from './../../providers/authservices/authservices';

@Component({
  selector: 'page-teacher-my-appointments',
  templateUrl: 'teacher-my-appointments.html',
})
export class TeacherMyAppointments {
  completeAppoint:any;
  sheduledData:any;
  //appointments: any;
  check:boolean = false;
  userType:any;
  userId:any;
  token:any;
  data1:any;
  connectSubscription:any;
  getSlotsData:any;
  tutorId:any;
  getViewAvailbilityData:any;
  alert:any;
  dateSend:any;
  getMyAppointments:{user_id:any;login_token:any;user_type:any;};
  public anArray:any=[];
  private newAttribute: any = {};
  currentEvents=[];
  slotArr = [];
  myAppoint:any;
  sheduleSh:boolean = false;
  comSh:boolean = false;
  actionData : {
    tutor_id : any;
    login_token:any;
    appointment_id:any;
    action:any;
  }

  public appointments: string = 'scheduled';
  public categories: Array<string> = ['scheduled', 'completed']
  getBadgeCount:any;
  logoutDataSend: { user_id: any; login_token: any; };

  constructor(public app:App, public authservices:AuthservicesProvider, public modalCtrl:ModalController,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public tutorservices:TutorservicesProvider,public navCtrl:NavController,public navParams:NavParams,public toastCtrl:ToastController) {
  }

  onTabChanged(tabName) {
    this.appointments = tabName;
  }

  ionViewDidEnter() {
    // this.appointments="scheduled";
    this.tutorId = this.navParams.get('tutorId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getNotificationCounts();
      this.myAppointMents();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.myAppointMents();
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
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  getNotificationCounts(){
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.badgeCount(countData).then((result) => {
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

  myAppointMents(){
    this.getMyAppointments = {
      user_id : this.userId,
      login_token:this.token,
      user_type:this.userType
    }
    this.spinner.show();
    this.tutorservices.myAppointments(this.getMyAppointments).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.myAppoint = this.data1.data;
        this.sheduledData = this.myAppoint.scheduled;
        this.completeAppoint =  this.myAppoint.completed;
        if(this.sheduledData.length == 0){
          this.sheduleSh = true;
        }else{
          this.sheduleSh = false;
        }
        if(this.completeAppoint.length == 0){
          this.comSh = true;
        }else{
          this.comSh = false;
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
      console.log(err);
    })
  }


  actionClick(appointmentId,action){
    this.alert = this.alertCtrl.create({
      title: 'Start appointment',
      message: 'Are you sure you want to start this appointment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancel");
          }
        },
        {
          text: 'Start',
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
                this.myAppointMents();
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

  goToEnd(id,action){
    let modal = this.modalCtrl.create(EndPopup,{appointment_id:id,action:action});
    modal.onDidDismiss(data => {
      this.nativeStorage.getItem('userData').then((data) => {
        this.userType = data.user_type;
        this.userId = data.id;
        this.token = data.login_token;
        this.myAppointMents();
      })
    })
    modal.present();
  }

  cancelClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_cancel'});
    modal.onDidDismiss(data => {
      if(data){
        this.myAppointMents();
      }else{
        console.log("cancel");
      }

    })
    modal.present();
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

  goToDetail(appointmentId){
    this.navCtrl.push(TeacherAppointmentDetailSubmited,{appointment_id:appointmentId});
  }
  goToDetailprogress(){
    this.navCtrl.push(TeacherAppointmentDetailProgress);
  }
  goToDetailAccepted(){
    this.navCtrl.push(TeacherAppointmentDetailAccepted);
  }
  goToDetailCompleted(){
  	this.navCtrl.push(TeacherAppointmentDetailCompleted);
  }

  goToNotifications(){
    let dataSend = {
        user_id : this.userId,
        login_token:this.token
      }
    this.tutorservices.badgeCountReadStatus(dataSend).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.navCtrl.push(NotificationsTeacherPage);
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
