import { Component } from '@angular/core';
import { ViewController,NavController,NavParams,ToastController,AlertController,Platform } from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-rating-popup',
  templateUrl: 'rating-popup.html',
})
export class RatingPopup {
  apId:any;
  userType:any;
  userId:any;
  token:any;
  connectSubscription:any;
  ratingData:{
    user_id : any;
    login_token:any;
    appointment_id:any;
    tutor_id:any;
    rating:any;
    feedback:any;
  }
  data1:any;
  tutorId:any;
  ratingVal:any;

  constructor(public viewCtrl:ViewController,public platform:Platform,public alertCtrl:AlertController,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public studentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
  }

  ionViewDidEnter() {
    this.apId = this.navParams.get('appointment_id');
    this.tutorId = this.navParams.get('tutorId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      console.log('this.userId',this.userId);
      this.token = data.login_token;
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
  }

  onModelChange(val){
    console.log(val);
    this.ratingVal = val;
  }

  submit(feedBack){
    console.log(feedBack);
    if(!this.ratingVal){
      this.presentToast("Please give rating");
      return;
    }
    if(!feedBack){
      this.presentToast("Please give feedback");
      return;
    }

    this.spinner.show();
    this.ratingData = {
      user_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      tutor_id:this.tutorId,
      rating:this.ratingVal,
      feedback:feedBack
    }
    this.studentServices.ratingsApi(this.ratingData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.viewCtrl.dismiss(this.apId);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
       this.spinner.hide();
      console.log(err);
    })
  }

  dismiss(data) {
    this.viewCtrl.dismiss(this.apId);
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
