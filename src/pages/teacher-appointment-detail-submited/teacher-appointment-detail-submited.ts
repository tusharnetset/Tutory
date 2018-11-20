import { Component } from '@angular/core';
import { NavController, ModalController,ToastController,Platform,NavParams,AlertController } from 'ionic-angular';
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

  constructor(private launchNavigator: LaunchNavigator,public sms:SMS, public call:CallNumber, public alertCtrl:AlertController, public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public platform:Platform, public toastCtrl:ToastController, public spinner: NgxSpinnerService,public tutorservices:TutorservicesProvider, public navCtrl: NavController, public modalCtrl: ModalController) {

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
        // this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  actionClick(appointmentId,action){
    if(action == 'accept'){
      this.title = "accept";
      this.successMessage = 'Successfully Accepted'
      this.content = "You want to accept the appointment ?"
    }else if(action == 'start'){
      this.title = "start";
      this.successMessage = 'Successfully Started'
      this.content = "You want to start the appointment"
      this.dateF  = moment(this.localISOTime).format("YYYY-MM-DD");
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
            this.getAppointmentDetail();
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
  }

  messageClick(num){
    this.sms.send(num, 'Hello!');
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
      this.apId = data;
      this.getAppointmentDetail();
    })
    modal.present();
  }

  goToReject(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_reject'});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getAppointmentDetail();
    })
    modal.present();
  }

  cancelClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'teacher_cancel'});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getAppointmentDetail();
    })
    modal.present();
  }

  viewMap(lat,lng){
    this.latLng  = lat.concat(','+lng);
    let options: LaunchNavigatorOptions ={
      // app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    this.launchNavigator.navigate(this.latLng,options).then(()=>{
      console.log("launched successfully");
    }).catch(()=>{
      console.log("launch failed");
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
