import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
@Component({
  selector: 'page-share-profile-popup',
  templateUrl: 'share-profile-popup.html',
})
export class ShareProfilePopup {
  getImage:any;
  userId:any;
  token:any;
  iconSh:any;
  tutorFirst: any;
  tutorLast: any;
  tutorId: any;
  recommenddata: { user_id: any; login_token: any; tutor_id: any; };
  data1: any;

  constructor(public studentservices:StudentservicesProvider, public spinner:NgxSpinnerService,public navParams:NavParams,public nativeStorage:NativeStorage,private socialSharing: SocialSharing,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.tutorId = this.navParams.get('tutorId');
    this.getImage = this.navParams.get('profilePic');
    this.tutorFirst = this.navParams.get('tutorFirst');
    this.tutorLast = this.navParams.get('tutorLast');
    this.iconSh = this.navParams.get('icon');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
    })
  }
   dismiss(data) {
    this.viewCtrl.dismiss("dismiss");
  }

  shareProfile(){
    this.viewCtrl.dismiss("share");
  }

}
