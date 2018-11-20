import { Component } from '@angular/core';
import { NavController,ToastController ,NavParams,Platform,AlertController} from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { SignupType } from '../signup-type/signup-type';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-student-profileview',
  templateUrl: 'student-profileview.html',
})
export class StudentProfileview {
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
  studentId:any;
  alert:any;

  constructor(public alertCtrl:AlertController,public tutorservices:TutorservicesProvider,public platform:Platform,public navParams:NavParams,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public nativeStorage:NativeStorage,public network:Network,public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  	this.studentId = this.navParams.get('studentId');
   this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getProfile();
    })
   	this.connectSubscription = this.network.onConnect().subscribe(() => {
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

  getProfile(){
  	// this.sendProfileData = {
   //    user_id : this.studentId,
   //    login_token:this.token,
   //    user_type :this.userType
   //  }
   //  this.spinner.show();
   //  this.tutorservices.getProfile(this.sendProfileData).then((result) => {
   //    console.log(result);
   //    this.spinner.hide();
   //    this.data1 = result;
   //    this.getProfileData = this.data1.data;
   //    if(this.data1.status == 200){
   //      this.getProfileData = this.data1.data;
   //      this.userLanguages = this.getProfileData.user_languages;
   //    }else{
   //        this.presentToast(this.data1.message);
   //    }
   //  }, (err) => {
   //    console.log(err);
   //  })
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
