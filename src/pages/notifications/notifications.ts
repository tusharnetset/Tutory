import { Component } from '@angular/core';
import { NavController, ModalController ,ToastController,NavParams, Platform, AlertController } from 'ionic-angular';
import { RejectPopup } from '../reject-popup/reject-popup';
import { StartPopup } from '../start-popup/start-popup';
import { SignupType } from '../signup-type/signup-type';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { AppointmentDetailSubmited } from '../appointment-detail-submited/appointment-detail-submited';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})

export class Notifications {
  userType:any;
  userId:any;
  token:any;
  connectSubscription:any;
  data1:any;
  notificationD:any;
  alert: any;
  show: boolean = false;

  constructor(public alertCtrl:AlertController, public platform:Platform, public toastCtrl:ToastController,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public network:Network,public studentservices:StudentservicesProvider,public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log("notification controller");
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getNotification();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotification();
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

  showAlert()
  {
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

  getNotification(){
    let notificationData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.spinner.show();
    this.studentservices.getNotificationsApi(notificationData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.notificationD = this.data1.data;
        if(this.notificationD.length == 0){
          console.log("if statement");
          this.show = true;
        }else{
          console.log("else statement");
          this.show = false;
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  goApointmentDetail(id){
    this.navCtrl.push(AppointmentDetailSubmited,{appointment_id:id});
  }

  goToRejectPopup(){
  	let modal = this.modalCtrl.create(RejectPopup);
    modal.present();
  }
  goToStartPopup(){
    let modal = this.modalCtrl.create(StartPopup);
    modal.present();
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
