import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-forgot-password-popup',
  templateUrl: 'forgot-password-popup.html',
})
export class ForgotPasswordPopup {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidEnter() {
    setTimeout(()=>{
      this.viewCtrl.dismiss();
    },3000)
  }

  dismiss(data) {
    this.viewCtrl.dismiss();
  }

}
