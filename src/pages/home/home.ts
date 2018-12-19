import { Component } from '@angular/core';
import { Platform, NavController,NavParams,ToastController ,ViewController, AlertController} from 'ionic-angular';
import { SubCategory } from '../sub-category/sub-category';
import { Search } from '../search/search';
import { TutorList } from '../tutor-list/tutor-list';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { Notifications } from '../notifications/notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  userType:any;
  mobileNumber:any;
  userId:any;
  token:any;
  getCategory:any;
  data1:any;
  cateD:any;
  connectSubscription:any;
  userIdSkip:any;
  loginTokenSkip:any;
  sendCategorydata:{user_id:any;login_token:any;};
  getBadgeCount:any;
  alert: any;

  constructor(public alertCtrl:AlertController,public platform:Platform, public viewCtrl:ViewController,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public StudentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {

  }

  ionViewDidEnter(){
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getNotificationCounts();
      this.getCategories();
    })

    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getCategories();
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getCategories();
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

  getNotificationCounts(){
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.StudentServices.badgeCount(countData).then((result) => {
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

  getCategories(){
    this.spinner.show();
    if(this.userIdSkip){
      this.sendCategorydata = {
        user_id:this.userIdSkip,
        login_token:this.loginTokenSkip
      }
    }else{
      this.sendCategorydata = {
        user_id : this.userId,
        login_token:this.token
      }
    }
    this.StudentServices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getCategory = this.cateD.categories;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  goToSubCategory(catId,name,levePresent){
    this.navCtrl.push(SubCategory,{categoryId:catId,cateName:name,level_present:levePresent});
  }

  goToSearch(){
    // this.navCtrl.push(Search);
    this.navCtrl.push(Search).then(() => {
      // const index = this.viewCtrl.index;
      // this.navCtrl.remove(index);
    });
  }

  goToNotifications(){
    let dataSend = {
        user_id : this.userId,
        login_token:this.token
      }
    this.StudentServices.badgeCountReadStatus(dataSend).then((result) => {
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
  skipTutorProfile(){
    this.navCtrl.push(TutorList);
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
