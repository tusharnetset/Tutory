import { Component } from '@angular/core';
import { NavController,ToastController,Platform,AlertController } from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { EditProfile } from '../edit-profile/edit-profile';
import { Notifications } from '../notifications/notifications';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfile {
  userLanguages:any;
  data1:any;
  show:boolean = false;
  userType:any;
  mobileNumber:any;
  userId:any;
  token:any;
  sendProfileData:{user_id:any;login_token:any;user_type:any;};
  getProfileData:any;
  connectSubscription:any;
  alert:any;
  getBadgeCount:any;
  proShow:boolean = false;
  userIdSkip: any;
  loginTokenSkip: any;
  skipShow: boolean = false;

  constructor(public alertCtrl:AlertController,public platform:Platform,public studentservices:StudentservicesProvider,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public nativeStorage:NativeStorage,public network:Network,public navCtrl: NavController) {
  }

  ionViewDidEnter()
  {
    this.nativeStorage.getItem('userData').then((data) => {
      console.log("getuserdata",data);
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.mobileNumber = data.mobile_number;
      this.getNotificationCounts();
      this.getProfile();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getProfile();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getProfile();
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

  getNotificationCounts()
  {
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.studentservices.badgeCount(countData).then((result) => {
      console.log(result);
      this.data1 = result;
      if(this.data1.status == 200){
        this.getBadgeCount = this.data1.data;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getProfile(){
    if(this.userIdSkip){
      this.skipShow = true;
    }else{
      this.sendProfileData = {
        user_id : this.userId,
        login_token:this.token,
        user_type :this.userType
      }
      this.spinner.show();
      this.studentservices.getProfile(this.sendProfileData).then((result) => {
        console.log(result);
        this.spinner.hide();
        this.proShow = true;
        this.data1 = result;
        this.getProfileData = this.data1.data;
        if(this.data1.status == 200){
          this.getProfileData = this.data1.data;
          this.userLanguages = this.getProfileData.user_languages;
        }else{
          this.presentToast(this.data1.message);
        }
      }, (err) => {
        console.log(err);
      })
    }
  }

  goToEditProfile()
  {
  	this.navCtrl.push(EditProfile)
  }

  goToNotifications()
  {
    let dataSend = {
      user_id : this.userId,
      login_token:this.token
    }
    this.studentservices.badgeCountReadStatus(dataSend).then((result) => {
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
