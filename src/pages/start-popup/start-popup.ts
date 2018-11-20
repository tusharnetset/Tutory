import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  selector: 'page-start-popup',
  templateUrl: 'start-popup.html',
})
export class StartPopup {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPopup');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
