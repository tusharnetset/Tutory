import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-success-popup',
  templateUrl: 'success-popup.html',
})
export class SuccessPopup {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.viewCtrl.dismiss();
    },5000)
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
