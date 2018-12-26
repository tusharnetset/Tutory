import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  template: `
  <ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <button ion-item (click)="close()">Learn Ionic</button>
    <button ion-item (click)="close()">Documentation</button>
    <button ion-item (click)="close()">Showcase</button>
    <button ion-item (click)="close()">GitHub Repo</button>
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
