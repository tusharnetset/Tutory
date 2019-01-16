import { Component ,NgZone} from '@angular/core';
import { NavController, ModalController ,ToastController,AlertController,Platform, App} from 'ionic-angular';
import { ServicesPopup } from '../services-popup/services-popup';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
import { Notifications } from '../notifications/notifications';
import { SignupType } from '../signup-type/signup-type';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {
  show:boolean = false;
  userId:any;
  token:any;
  userType:any;
  favData:{
    user_id : any;
    login_token:any;
    user_type:any;
    screen_type:any;
  }
  alert:any;
  data1:any;
  getFavData:any;
  connectSubscription:any;
  favArr :any[];
  getBadgeCount:any;
  logoutDataSend: { user_id: any; login_token: any; };
  constructor(public app:App, public authservices:AuthservicesProvider, public zone:NgZone,public platform:Platform,public alertCtrl:AlertController,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public studentservices:StudentservicesProvider,public network:Network,public nativeStorage:NativeStorage,public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidEnter() {
   this.favArr = [];
   this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
      this.userType = data.user_type;
      this.getNotificationCounts();
      this.getFavorites();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getFavorites();
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

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
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

  getFavorites(){
    this.favData = {
      user_id : this.userId,
      login_token:this.token,
      user_type:this.userType,
      screen_type:'F'
    }
    this.spinner.show();
    this.studentservices.getfavTutorApi(this.favData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.zone.run(() => {
          this.getFavData = this.data1.data;
          for (let i = 0; i < this.getFavData.length; i++) {
            this.favArr.push({
              first_name:this.getFavData[i].first_name,
              last_name:this.getFavData[i].last_name,
              age:this.getFavData[i].age,
              address:this.getFavData[i].address,
              tutor_id:this.getFavData[i].tutor_id,
              fav_status:this.getFavData[i].fav_status,
              profile_pic:this.getFavData[i].profile_pic,
              distance:this.getFavData[i].distance.toFixed(0),
              avg_rating:this.getFavData[i].avg_rating,
              categories:this.getFavData[i].categories,
              rate:this.getFavData[i].rate,
              gender:this.getFavData[i].gender,
              catLength:this.getFavData[i].categories.length-1
            })
          }
          if(this.getFavData.length == 0){
            // this.presentToast("You have no favourited tutors yet. Any favourited tutors shall appear in this section.");
            this.show = true;
          }else{
            this.show = false;
          }
        })
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

  goToTutorProfile(id){
    console.log(id);
    this.navCtrl.push(TutorProfileview,{tutorId:id,navTo:'fav'});
  }
  goToServicesPopup(serv){
    let modal = this.modalCtrl.create(ServicesPopup,{serv:serv});
    modal.present();
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
