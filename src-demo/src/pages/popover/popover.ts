import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  template: `
  <ion-list>
    <ion-list-header>Gyan</ion-list-header>
    <button ion-item (click)="close()">Privacy policy</button>
    <button ion-item (click)="close()">Rate App</button>
    <button ion-item (click)="close()">Contact us</button>
  </ion-list>
`
})
export class PopoverPage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
