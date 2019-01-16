import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,ModalController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { ForgotPasswordPopup } from '../forgot-password-popup/forgot-password-popup';
import { Signin } from '../signin/signin';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPassword {
  connectSubscription:any;
  data1:any;
  sendForgotData:{email:any}

  authForm : FormGroup
  constructor(public network:Network,public modalCtrl:ModalController,public toastCtrl:ToastController,public spinner:NgxSpinnerService,public authService:AuthservicesProvider,private fb: FormBuilder,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    this.authForm = fb.group({
      'email' : ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidEnter() {
   this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
    //const index = this.navCtrl.getActive().index;
    //this.navCtrl.remove(0, index);
  }

  submitForm(val,valid){
    if(valid){
      this.spinner.show();
      this.sendForgotData = {
        email:this.authForm.value.email
      }
      this.authService.forgotPassApi(this.sendForgotData).then((result) => {
        this.spinner.hide();
         console.log('resultttttttttttttttt',result);
         this.data1  = result;
         if(this.data1.status == 200){
          let modal = this.modalCtrl.create(ForgotPasswordPopup);
          modal.present();
          this.navCtrl.push(Signin);
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

  goToForgotPop(){
  	let modal = this.modalCtrl.create(ForgotPasswordPopup);
    modal.present();
  }

}
