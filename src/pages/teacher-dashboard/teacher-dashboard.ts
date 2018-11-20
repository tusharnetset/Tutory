import { Component } from '@angular/core';
import { NavController,ToastController,Platform ,NavParams ,AlertController,ModalController} from 'ionic-angular';
import { TeacherAppointmentDetailSubmited } from '../teacher-appointment-detail-submited/teacher-appointment-detail-submited';
import { NotificationsTeacherPage } from '../notifications-teacher/notifications-teacher';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';
import { EndPopup } from '../end-popup/end-popup';
import Swal from 'sweetalert2';

@Component({
  selector: 'page-teacher-dashboard',
  templateUrl: 'teacher-dashboard.html',
})
export class TeacherDashboard {
  newShow:boolean = false;
  toShow:boolean = false;
  tomShow:boolean = false;
  nextWShow:boolean = false;
  nodata:boolean = false;
  connectSubscription:any;
  userType:any;
  userId:any;
  alert:any;
  token:any;
  data1:any;
  getDashData:{user_id:any;login_token:any;}
  myAppoint:any;
  newAppData : any;
  todayAppData : any;
  tomorrowAppData :  any;
  nextweekAppData :  any;
  timezone:any;
  actionData:{tutor_id:any;login_token:any;appointment_id:any;action:any;}
  getBadgeCount:any;
  successMessage: string;
  title: string;
  content: string;

  constructor(public modalCtrl: ModalController,public alertCtrl:AlertController,public navParams:NavParams,public toastCtrl:ToastController, public tutorservices:TutorservicesProvider, public platform:Platform, public spinner:NgxSpinnerService,public nativeStorage:NativeStorage,public network:Network, public navCtrl: NavController) {
    this.timezone = moment.tz.guess();
  }

  ionViewDidEnter() {
      this.nativeStorage.getItem('userData').then((data) => {
        this.userType = data.user_type;
        this.userId = data.id;
        this.token = data.login_token;
        this.getNotificationCounts();
        this.getDashBoardData();
      })
      this.connectSubscription = this.network.onConnect().subscribe(() => {
        this.getNotificationCounts();
        this.getDashBoardData();
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

  getDashBoardData(){
    this.spinner.show();
    this.getDashData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.getDashBoardApi(this.getDashData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.myAppoint = this.data1.data;
        this.newAppData = this.myAppoint.new;
        this.todayAppData = this.myAppoint.today;
        this.tomorrowAppData =  this.myAppoint.tomorrow;
        this.nextweekAppData =  this.myAppoint.next_week;

        if(this.newAppData.length != 0){
          this.newShow = true;
        }else{
          this.newShow = false;
        }
        if(this.todayAppData.length != 0){
          this.toShow = true;
        }else{
          this.toShow = false;
        }
        if(this.tomorrowAppData.length != 0){
          this.tomShow = true;
        }else{
          this.tomShow = false;
        }
        if(this.nextweekAppData != 0){
          this.nextWShow = true;
        }else{
          this.nextWShow = false;
        }

        if(this.newAppData.length == 0 && this.todayAppData == 0  && this.tomorrowAppData == 0 && this.nextweekAppData == 0){
          this.nodata = true;
        }else{
          this.nodata = false;
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

  actionButton(appointmentId,action){

    if(action == 'accept'){
      this.title = "accept";
      this.successMessage = 'Successfully Accepted'
      this.content = "You want to accept the appointment !"
    }else if(action == 'start'){
      this.title = "start";
      this.successMessage = 'Successfully Started'
      this.content = "You want to start the appointment !"
    }
    Swal({
      title: 'Are you sure?',
      text: this.content,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, '+this.title+' it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
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
            Swal(
              this.title,
              this.successMessage,
              'success'
            )
            this.getDashBoardData();
          }else{
            this.presentToast(this.data1.message);
          }
        }, (err) => {
          this.spinner.hide();
          console.log(err);
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your dont '+this.title+' the appointment :)',
          'error'
        )
      }
    })


    // this.spinner.show();
    // this.actionData = {
    //   tutor_id : this.userId,
    //   login_token:this.token,
    //   appointment_id:appointmentId,
    //   action:action
    // }
    // this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
    //   console.log(result);
    //   this.spinner.hide();
    //   this.data1 = result;
    //   this.myAppoint = this.data1.data;
    //   if(this.data1.status == 200){
    //     this.getDashBoardData();
    //   }else{
    //     this.presentToast(this.data1.message);
    //   }
    // }, (err) => {
    //    this.spinner.hide();
    //   console.log(err);
    // })
  }

  rejectClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_reject'});
    modal.onDidDismiss(data => {
      this.nativeStorage.getItem('userData').then((data) => {
       console.log("reject return data", data);
        if(data){
          this.userType = data.user_type;
          this.userId = data.id;
          this.token = data.login_token;
          this.getDashBoardData();
        }else{
          console.log("cross");
        }
      })
    })
    modal.present();
  }

  cancelClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_cancel'});
    modal.onDidDismiss(data => {
      this.nativeStorage.getItem('userData').then((data) => {
        if(data){
          this.userType = data.user_type;
          this.userId = data.id;
          this.token = data.login_token;
          this.getDashBoardData();
        }else{
          console.log("cross");
        }
      })
    })
    modal.present();
  }

  endClick(id,action){
    let modal = this.modalCtrl.create(EndPopup,{appointment_id:id,action:action});
    modal.onDidDismiss(data => {
      this.nativeStorage.getItem('userData').then((data) => {
        if(data){
          this.userType = data.user_type;
          this.userId = data.id;
          this.token = data.login_token;
          this.getDashBoardData();
        }else{
          console.log("cross");
        }
      })
    })
    modal.present();
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

  goToDetailSubmit(apId){
    this.navCtrl.push(TeacherAppointmentDetailSubmited,{appointment_id:apId});
  }

  sessionExpired(){
    this.nativeStorage.remove('userType');
    this.nativeStorage.remove('userData');
    this.navCtrl.push(SignupType);
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
