import { Component,NgZone } from '@angular/core';
import { NavController,NavParams,ToastController ,Platform,AlertController } from 'ionic-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUs {
	connectSubscription:any;
	alert:any;
	userType:any;
	userId:any;
	token:any;
  constructor(public zone:NgZone,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public navCtrl:NavController,public navParams:NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
  	this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
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


}
