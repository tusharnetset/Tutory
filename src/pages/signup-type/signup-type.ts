import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Signin } from '../signin/signin';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-signup-type',
  templateUrl: 'signup-type.html',
})
export class SignupType {
  connectSubscription:any;
  
  constructor(public network:Network,public navCtrl: NavController,public nativeStorage:NativeStorage) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SignupType');
    this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  goToSignIn(type){
    this.nativeStorage.setItem('userType', type).then(
      (result) => {
      }
    );
    this.navCtrl.push(Signin,{userType:type});
  }

}
