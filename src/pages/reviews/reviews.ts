import { Component } from '@angular/core';
import { NavController,NavParams,ToastController ,Platform, AlertController} from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})

export class Reviews {
	userType:any;
	userId:any;
	token:any;
	connectSubscription:any;
	alert:any;
	data1:any;
	reviewData : {
    user_id : any;
    login_token:any;
    user_type:any;
    screen_type:any;
  }
  checkreviewData:{
    user_id:any;
    login_token:any;
    user_type:any
    tutor_id:any;
  }
  getReviewData:any;
  tutorId:any;
  checkData:any;
  userIdSkip:any;
  loginTokenSkip:any;
  constructor(public studentservices:StudentservicesProvider,public alertCtrl:AlertController,public platform:Platform,public tutorservices:TutorservicesProvider,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:	NativeStorage) {
  }

  ionViewDidEnter() {
    this.checkData = this.navParams.get('com_screen');
    this.tutorId = this.navParams.get('tutor_id');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;

      if(this.checkData == 'my_profile'){
      this.getReviews();
      }else{
        console.log("check reviews function...");
        this.checkReview();
      }
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      console.log(data);
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.checkReview();
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getReviews();
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

  getReviews(){
    this.reviewData = {
      user_id:this.userId,
      login_token:this.token,
      user_type:this.userType,
      screen_type:'R'
    }
    this.spinner.show();
    this.tutorservices.favReviewApi(this.reviewData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getReviewData = this.data1.data;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  checkReview(){
    if(this.userIdSkip){
      this.checkreviewData = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip,
        user_type:"U",
        tutor_id:this.tutorId
      }
      }else{
      this.checkreviewData = {
        user_id:this.userId,
        login_token:this.token,
        user_type:this.userType,
        tutor_id:this.tutorId
      }
		}
    this.spinner.show();
    this.studentservices.checkTutorReviewApi(this.checkreviewData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getReviewData = this.data1.data;
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
