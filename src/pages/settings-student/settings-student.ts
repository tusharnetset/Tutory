import { Component } from '@angular/core';
import { NavController,AlertController,ToastController,ModalController,ViewController, App } from 'ionic-angular';
import { Notifications } from '../notifications/notifications';
import { Signin } from '../signin/signin';
import { ContactUs } from '../contact-us/contact-us';
import { SignupType } from '../signup-type/signup-type';
import { NativeStorage } from '@ionic-native/native-storage';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { Network } from '@ionic-native/network';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { AboutUsPage } from '../about-us/about-us';
import { TermConditonPage } from '../term-conditon/term-conditon';
import { FaqPage } from '../faq/faq';

@Component({
  selector: 'page-settings-student',
  templateUrl: 'settings-student.html',
})
export class SettingsStudentPage {
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
  sendProfileData : {user_id:any;login_token:any;user_type:any;};
  notiOnOffData : {user_id : any;login_token:any;user_type :any; status:any;}
  getProfileData:any;
  isToggled:boolean = false;
  toggleStatus:any;
  userIdSkip:any;
  loginTokenSkip:any;
  getBadgeCount:any;
  sendCategorydata: { user_id: any; login_token: any; };
  privacy: any;
  conditions: any;
  privacy_policy: any;
  aboutU: any;

  constructor(public app: App, public viewCtrl:ViewController, public modalCtrl:ModalController, public studentservices:StudentservicesProvider,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public authservices:AuthservicesProvider,public network:Network,public alertCtrl:AlertController,public nativeStorage:NativeStorage,public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.getPrivacy();
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

  getPrivacy(){
    this.sendCategorydata = {
      user_id:'0',
      login_token:'0'
    }
    this.studentservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
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

  getNotificationCounts(){
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.studentservices.badgeCount(countData).then((result) => {
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
    this.studentservices.getProfile(this.sendProfileData).then((result) => {
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

  public notify() {
    console.log("Toggled: "+ this.isToggled);

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
    this.studentservices.notificationOnOffApi(this.notiOnOffData).then((result) => {
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
                // this.navCtrl.push(SignupType);
                this.app.getRootNav().setRoot(SignupType);
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

  goToContactUs(){
    this.navCtrl.push(ContactUs);
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
