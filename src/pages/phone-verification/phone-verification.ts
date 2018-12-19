import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController } from 'ionic-angular';
import { CreateProfile } from '../create-profile/create-profile';
import { TeacherCreateProfile } from '../teacher-create-profile/teacher-create-profile';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Signin } from '../signin/signin';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-phone-verification',
  templateUrl: 'phone-verification.html',
})
export class PhoneVerification {
  connectSubscription:any;
  mobileNumber:any;
  token:any;
  data1:any;
  otpSe:any;
  getOtpData:any;
  otpVal:any;
  otpCon:any;
  deviceId:any;
  otpData:{device_id:any;device_type: string,type:string;otp:any;mobile_number:any;app_version:any;};
  resendOtpData:{device_id:any;device_type: string,type:string;mobile_number:any;app_version:any;};
  authForm : FormGroup
  otpGet: any;
  signUpType: any;

  constructor(public alertCtrl:AlertController, public network:Network,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public authService:AuthservicesProvider,private fb: FormBuilder,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {

   this.authForm = fb.group({
      'one'   : ["", Validators.compose([Validators.required])],
      'two'   : ["", Validators.compose([Validators.required])],
      'three' : ["", Validators.compose([Validators.required])],
      'four'  : ["", Validators.compose([Validators.required])]
    });

  }

  ionViewDidEnter() {
    this.nativeStorage.getItem('deviceId').then((data) => {
      this.deviceId = data;
    })
    this.nativeStorage.getItem('userData').then((data) => {
      console.log(data);
      this.otpGet = data.otp;
      this.token = data.login_token;
      this.signUpType = data.user_type;
      this.mobileNumber = data.mobile_number
      // let toast = this.toastCtrl.create({
      //   message: "Your OTP is"+' '+data.otp,
      //   position: 'top',
      //   showCloseButton: true,
      //   closeButtonText: 'close',
      //   dismissOnPageChange: true,
      // });
      // toast.onDidDismiss((data, role) => {
      //   if (role == 'close') {
      //   }else{
      //   }
      // });
      // toast.present();
    })
      this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  // moveFocus(nextElement) {
  //   nextElement.setFocus();
  // }

  moveInput(event,nextElement,prevElement) {
    let bcSpc = event.key;
    console.log('backdata ',bcSpc,prevElement,nextElement);
    if(bcSpc == 'Backspace'){
      console.log('previousss',bcSpc,prevElement);
      prevElement.setFocus();
    }else if(bcSpc ==  'Unidentified' || bcSpc ==  'Enter'){
     console.log("chl rha hai na tu ")
      return;
    } else{
      console.log('else',nextElement);
      nextElement.setFocus();
      if(this.authForm.value.one+this.authForm.value.two+this.authForm.value.three+this.authForm.value.four == this.otpGet){

      }
    }
  }

  submitForm(val,valid){
    this.otpCon = this.authForm.value.one.concat(this.authForm.value.two);
    this.otpSe  = this.otpCon.concat(this.authForm.value.three);
    this.otpVal = this.otpSe.concat(this.authForm.value.four);
    if(valid){
      this.spinner.show();
      this.otpData = {
        device_id: this.deviceId,
        device_type: 'A',
        type:this.signUpType, //signup type
        otp:this.otpVal,
        mobile_number:this.mobileNumber,
        app_version:'1.0'
      }
      this.authService.otpApi(this.otpData).then((result) => {
        this.spinner.hide();
         this.data1  = result;
         if(this.data1.status == 200){
          this.presentToast(this.data1.message);
          this.getOtpData = this.data1.data;
          this.nativeStorage.setItem('userData', this.getOtpData).then(
            (result) => {
              console.log("succesfully set ",result);
            }
          );
          if(this.getOtpData.user_type == 'S'){
            this.navCtrl.push(CreateProfile);
          }else{
            this.navCtrl.push(TeacherCreateProfile);
          }

        }else{
          this.presentToast(this.data1.message);
        }
      }, (err) => {
        this.spinner.hide();
        console.log(err);
      })
    }else{
      this.presentToast("PLease fill in required fields");
    }
  }

  resendOtp(){

    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'You want to resend otp',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.spinner.show();
            this.resendOtpData = {
              device_id: this.deviceId,
              device_type: "A",
              type:'S', //signup type
              mobile_number:this.mobileNumber,
              app_version:"1.0"
            }
            this.authService.resendotpApi(this.resendOtpData).then((result) => {
              this.spinner.hide();
              this.data1  = result;
              if(this.data1.status == 200){
                let toast = this.toastCtrl.create({
                  message: "Your OTP is"+' '+this.data1.data.otp,
                  position: 'top',
                  showCloseButton: true,
                  closeButtonText: 'close',
                  dismissOnPageChange: true,
                });
                toast.onDidDismiss((data, role) => {
                  if (role == 'close') {
                  }else{
                  }
                });
                toast.present();
                this.presentToast(this.data1.message);
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
    alert.present();
  }

  goToCreateProfile(){
   this.navCtrl.push(CreateProfile);
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

  //   <ion-list >
  //     <ion-item *ngFor="let date of arrPush; let i = index;">
  //        <input type="time" (input)="onChangeTime($event.target.value)" />
  //        <ion-icon name="remove-circle" (click)="remove(i)"></ion-icon>
  //     </ion-item>
  //   </ion-list>
  // </div>
  // <button (click)="addMore()">
  //   add more
  // </button>
  //   <button (click)="senddata()">
  //   Send Data
  // </button> -->

  // addMore(){
  //   this.arr = this.currentNumber++;
  //   console.log(this.arr);
  //   this.arrPush.push(this.arr)
  // }

  // remove(index){
  //   (this.arrPush).splice(index, 1);
  //   (this.timeArr).splice(index, 1);
  // }

  // onChangeTime(date){
  //   console.log(date);
  //   this.timeArr.push(date)
  // }

  // senddata(){
  //   console.log(this.timeArr);
  // }
