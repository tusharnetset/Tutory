import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,Platform,AlertController, App } from 'ionic-angular';
import { ForgotPassword } from '../forgot-password/forgot-password';
import { Signup } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { TabsStudentPage } from '../tabs-student/tabs-student';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { PhoneVerification } from '../phone-verification/phone-verification';
import { CreateProfile } from '../create-profile/create-profile';
import { Network } from '@ionic-native/network';
import { TeacherCreateProfile } from '../teacher-create-profile/teacher-create-profile';
import { TutorialPage } from '../tutorial/tutorial';
import { TeacherTutorialPage } from '../teacher-tutorial/teacher-tutorial';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class Signin {
  connectSubscription:any;
  timezone:any;
  lat:any;
  long:any;
  movnt = moment();
  userType:any;
  uType:any;
  appVersion:any;
  data1:any;
  deviceId:any;
  loginData:any;
  loginDataSend: { device_id:any;device_type: string; user_identity: any; password : any; app_version: any;timezone:any; };
  skipData:{
    user_id :any;
    login_token:any;
    app_version:string;
  }
  alert:any;
  authForm : FormGroup
  constructor(public app: App, public alertCtrl:AlertController,public platform:Platform,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public loginService: AuthservicesProvider,private fb: FormBuilder,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    this.timezone = moment.tz.guess();
    this.authForm = fb.group({
      'user_identity' : [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])]
    });
  }

  ionViewDidEnter()
  {
    this.nativeStorage.getItem('deviceId').then((data) => {
      this.deviceId = data;
    })
    this.nativeStorage.getItem('userType').then((data) => {
      this.uType = data;
    })
    this.nativeStorage.getItem('locationLat').then((data) => {
      this.lat = data;
    })
    this.nativeStorage.getItem('locationLng').then((data) => {
      this.long = data;
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

  ionViewDidLeave()
  {
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
              this.platform.exitApp();
            }
          }
        ]
      });
      this.alert.present();
    }

  submitForm(val,valid)
  {
    if(valid){
      this.spinner.show();
      this.loginDataSend = {
        device_id:this.deviceId,
        device_type:'A',
        user_identity:this.authForm.value.user_identity,
        password:this.authForm.value.password,
        timezone:this.timezone,
        app_version:'1.0'
      }
      this.loginService.loginApi(this.loginDataSend).then((result) => {
        this.spinner.hide();
        this.data1  = result;
        this.loginData = this.data1.data;
        if(this.data1.status == 200){
          this.nativeStorage.remove('skipData');
          this.nativeStorage.setItem('userData', this.loginData).then(
            (result) => {
            }
          );
          this.nativeStorage.setItem('userType', this.loginData.user_type).then(
            (result) => {
            }
          );
          this.presentToast(this.data1.message);
          if(this.loginData.user_type == 'S'){
            if(this.loginData.otp_verified == 'N'){
              this.navCtrl.push(PhoneVerification);
            }else if(this.loginData.profile_status == 0){
              this.navCtrl.push(CreateProfile);
            }else{
              // this.navCtrl.setRoot(TabsStudentPage);
              this.app.getRootNav().setRoot(TabsStudentPage);
            }
          }else{
            if(this.loginData.otp_verified == 'N'){
              this.navCtrl.push(PhoneVerification);
            }else if(this.loginData.admin_verify == '0'){
              this.presentToast(this.data1.message);
            }else if(this.loginData.profile_status == 0){
              this.navCtrl.push(TeacherCreateProfile);
            }else{
              // this.navCtrl.setRoot(TabsPage);
              this.app.getRootNav().setRoot(TabsPage);
            }
          }
        }else if(this.data1.status == 204){
          this.presentToast(this.data1.message);
        }else{
          this.presentToast(this.data1.message);
        }
      }, (err) => {
        this.spinner.hide();
        console.log(err);
      })
    }else{
      this.validateAllFormFields(this.authForm)
    }
  }

   validateAllFormFields(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  goToForgotPassword()
  {
    this.navCtrl.push(ForgotPassword).then(() => {
    });
  }

  goToSignUp()
  {
  	this.navCtrl.push(Signup);
  }

  viewTutorial()
  {
    if(this.uType == 'T'){
      this.navCtrl.push(TeacherTutorialPage);
    }else{
      this.navCtrl.push(TutorialPage);
    }

  }

  skip()
  {
    this.skipData = {
      user_id :"0",
      login_token:"0",
      app_version:'1.0'
    }
    this.nativeStorage.remove('userData');
    this.nativeStorage.setItem('skipData', this.skipData).then(
      (result) => {
        this.navCtrl.push(TabsStudentPage);
      }
    );

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
