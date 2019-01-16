import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, ModalController, Platform, ViewController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { PhoneVerification } from '../phone-verification/phone-verification';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TermConditonPage } from '../term-conditon/term-conditon';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  connectSubscription:any;
  appVersion:any;
  data1:any;
  signupData:any;
  uType:any;
  deviceId:any;
  signUpdata: { device_id:any;device_type: string; login_type: string; country_id: string; email: any; password: any; mobile_number: any; user_type: any; app_version: any; };
  userType:any;
  emailValidate = "^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  authForm : FormGroup
  sendCategorydata: { user_id: string; login_token: string; };
  aboutU: any;
  conditions: any;
  privacy_policy: any;
  alert: any;
  trimFun: any;

  constructor(public viewCtrl:ViewController, public platform:Platform, public modalCtrl:ModalController, public studentservices:StudentservicesProvider, public alertCtrl:AlertController, public network:Network,public toastCtrl:ToastController,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public navCtrl: NavController,private fb: FormBuilder,public navParams:NavParams,public signupService:AuthservicesProvider) {
    this.authForm = fb.group({
      'email' : [null, Validators.compose([Validators.required])],
      'mobile_number': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(5)])],
      'rePassword': [null, Validators.compose([Validators.required])]
    });
  }


  ionViewDidEnter() {
    this.getPrivacy();
    this.nativeStorage.getItem('deviceId').then((data) => {
      this.deviceId = data;
    })
    this.nativeStorage.getItem('userType').then((data) => {
      this.uType = data;
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
    this.platform.registerBackButtonAction(() => {
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }else{
        this.navCtrl.pop();
      }
    })
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
    // const index = this.viewCtrl.index;
    // this.navCtrl.remove(index);
  }


  // async buildVersion()
  // {
  //   console.log("build version");
  //   const versionNumber = await this.appVersion.getVersionNumber();
  //   console.log(versionNumber);
  //   this.appVersion = versionNumber;
  // }

  moveInput(event) {
    let bcSpc = event.key;
    if(bcSpc == 'Backspace'){
      console.log('previousss',bcSpc);
    }else if(bcSpc ==  'Unidentified' || bcSpc ==  'Enter'){
      event.target.value = event.target.value.trim();
      console.log("trim",  event.target.value);
      return;
    }else{
      console.log("right");
    }
  }

  submitForm(val,valid){
    if(valid){
      if(this.authForm.value.password != this.authForm.value.rePassword){
        this.presentToast("Password doesn't match");
        return;
      }
      this.spinner.show();
      this.signUpdata = {
        device_id: this.deviceId,
        device_type:'A',
        login_type :'N',
        country_id:'174',
        email:this.authForm.value.email,
        password:this.authForm.value.password,
        mobile_number:this.authForm.value.mobile_number,
        user_type:this.uType,
        app_version:'1.0'
      }
      this.signupService.signupApi(this.signUpdata).then((result) => {
        this.spinner.hide();
        console.log('resultttttttttttttttt',result);
        this.data1  = result;
        if(this.data1.status == 200){
          this.presentToast(this.data1.message);
          this.signupData = this.data1.data;
          this.nativeStorage.remove('skipData');
          this.nativeStorage.setItem('userData', this.signupData).then(
            (result) => {
              console.log("succesfully set ",result);
            }
          );
          this.navCtrl.push(PhoneVerification);
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

  getPrivacy(){
    this.sendCategorydata = {
      user_id:'0',
      login_token:'0'
    }
    this.studentservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.conditions = this.data1.data.conditions;
      this.privacy_policy = this.data1.data.privacy_policy;
    }, (err) => {
      console.log(err);
    })
  }

  termAndContions(){
    let profileModal = this.modalCtrl.create(TermConditonPage,{term:this.conditions});
    profileModal.present();
    // let alert = this.alertCtrl.create({
    //   title: 'Terms and Conditions',
    //   cssClass: 'my-class',
    //   subTitle: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //   buttons: ['Agree']
    // });
    // alert.present();
  }

  privacyPolicy(){
    let profileModal = this.modalCtrl.create(PrivacyPolicyPage,{privacy:this.privacy_policy});
    profileModal.present();
    // let alert = this.alertCtrl.create({
    //   title: 'Privacy policy',
    //   cssClass: 'my-class',
    //   subTitle: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    //   buttons: ['Ok']
    // });
    // alert.present();
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
