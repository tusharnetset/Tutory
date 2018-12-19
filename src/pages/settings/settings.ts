import { Component } from '@angular/core';
import { NavController,AlertController,ToastController, ModalController,ViewController, App } from 'ionic-angular';
import { Notifications } from '../notifications/notifications';
import { Signin } from '../signin/signin';
import { ContactUs } from '../contact-us/contact-us';
import { Subscription } from '../subscription/subscription';
import { SignupType } from '../signup-type/signup-type';
import { NativeStorage } from '@ionic-native/native-storage';
import { NotificationsTeacherPage } from '../notifications-teacher/notifications-teacher';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { Network } from '@ionic-native/network';
import { NgxSpinnerService } from 'ngx-spinner';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { AboutUsPage } from '../about-us/about-us';
import { TermConditonPage } from '../term-conditon/term-conditon';
import { FaqPage } from '../faq/faq';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {
   uType:any;
  alert:any;
  userType:any;
  userId:any;
  token:any;
  connectSubscription:any;
  logoutDataSend : {
    user_id : any;
    login_token:any;
  }
  data1:any;
  isToggled:boolean = false;
  getProfileData:any;
  sendProfileData : { user_id:any;login_token:any;user_type:any; }
  notiOnOffData : { user_id : any;login_token:any;user_type :any; status:any; }
  toggleStatus:any;
  getBadgeCount:any;
  getD: any;
  sendCategorydata: { user_id: any; login_token: any; };
  privacy: any;
  aboutU: any;
  conditions: any;
  privacy_policy: any;
  userIdSkip: any;
  loginTokenSkip: any;

  constructor(public app: App, public viewCtrl:ViewController, public modalCtrl:ModalController, public tutorservices:TutorservicesProvider,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public authservices:AuthservicesProvider,public network:Network,public alertCtrl:AlertController,public nativeStorage:NativeStorage,public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.getPrivacyCon();
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getNotificationCounts();
      this.getProfile();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getNotificationCounts();
      this.getProfile();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getProfile();
    });
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
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

  getProfile(){
    this.sendProfileData = {
      user_id : this.userId,
      login_token:this.token,
      user_type :this.userType
    }
    this.spinner.show();
    this.tutorservices.getProfile(this.sendProfileData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getProfileData = this.data1.data;
        if(this.getProfileData.notifications == 'Y'){
          this.isToggled = true;
        }else{
          this.isToggled = false;
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


  getPrivacyCon(){
    this.sendCategorydata = {
      user_id : '0',
      login_token:'0'
    }
    this.tutorservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.data1 = result;
      this.aboutU = this.data1.data.about_us;
      this.conditions = this.data1.data.conditions;
      this.privacy_policy = this.data1.data.privacy_policy;
    }, (err) => {
      console.log(err);
    })
  }
  aboutUs(){
    let profileModal = this.modalCtrl.create(AboutUsPage,{about:this.aboutU});
    profileModal.present();
  }
  faq(){
    let profileModal = this.modalCtrl.create(FaqPage);
    profileModal.present();
  }
  termCondition(){
    let profileModal = this.modalCtrl.create(TermConditonPage,{term:this.conditions});
    profileModal.present();
  }

  public notify() {
    if(this.isToggled == true){
      this.toggleStatus = "Y";
    }else{
      this.toggleStatus = "N";
    }
    this.notiOnOffData = {
      user_id : this.userId,
      login_token:this.token,
      user_type :this.userType,
      status:this.toggleStatus
    }
    this.spinner.show();
    this.tutorservices.notificationOnOffApi(this.notiOnOffData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){

      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })

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

  logOut(){
     this.alert = this.alertCtrl.create({
      title: 'Logout?',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.spinner.show();
            this.logoutDataSend = {
              user_id : this.userId,
              login_token:this.token,
            }
            this.authservices.logoutApi(this.logoutDataSend).then((result) => {
              console.log(result);
              this.spinner.hide();
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
        }
      ]
    });
    this.alert.present();
  }
  goToContactUs(){
    this.navCtrl.push(ContactUs);
  }
  goToSubscription(){
    this.navCtrl.push(Subscription);
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
