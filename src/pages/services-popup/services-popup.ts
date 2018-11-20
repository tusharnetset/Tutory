import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-services-popup',
  templateUrl: 'services-popup.html',
})
export class ServicesPopup {
  categories:any;
  userId:any;
  token:any;
  ctData=[];
  constructor(public nativeStorage:NativeStorage,public viewCtrl: ViewController,public navParams:NavParams) {
  }

  ionViewDidLoad() {
    this.categories = this.navParams.get('serv');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;      
    })

    for (var i = 0; i < this.categories.length; i++) {
      this.ctData.push(this.categories[i]);
    }

  }
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
