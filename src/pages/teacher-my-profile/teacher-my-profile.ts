import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { EditProfile } from '../edit-profile/edit-profile';
import { ServicesOffered } from '../services-offered/services-offered';
import { Notifications } from '../notifications/notifications';
import { TeacherEditProfile } from '../teacher-edit-profile/teacher-edit-profile';
import { ViewAvailability } from '../view-availability/view-availability';
import { Reviews } from '../reviews/reviews';
import { NotificationsTeacherPage } from '../notifications-teacher/notifications-teacher';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { SignupType } from '../signup-type/signup-type';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-teacher-my-profile',
  templateUrl: 'teacher-my-profile.html',
})
export class TeacherMyProfile {
  userLanguages:any;
  data1:any;
  show:boolean = false;
  userType:any;
  mobileNumber:any;
  userId:any;
  token:any;
  sendProfileData:{user_id:any;login_token:any;user_type:any;};
  getProfileData:any;
  connectSubscription:any;
  ratingData:any;
  getBadgeCount:any;
  userLevels: any;

  constructor(public toastCtrl:ToastController,public spinner:NgxSpinnerService,public nativeStorage:NativeStorage,public tutorservices:TutorservicesProvider,public network:Network,public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.nativeStorage.getItem('userData').then((data) => {
      console.log("localstorage data", data);
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.mobileNumber = data.mobile_number;
      this.getNotificationCounts();
      this.getProfile();

    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getNotificationCounts();
      this.getProfile();
    });
  }

  getNotificationCounts(){
    let countData = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.badgeCount(countData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getBadgeCount = this.data1;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getProfile(){
    this.sendProfileData = {
      user_id : this.userId,
      login_token:this.token,
      user_type :this.userType
    }
    this.spinner.show();
    this.tutorservices.getProfile(this.sendProfileData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getProfileData = this.data1.data;
        this.ratingData = this.getProfileData.avg_rating;
        this.userLanguages = this.getProfileData.user_languages;
        this.userLevels = this.getProfileData.teaching_levels;
      }else{
          this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  goToEditProfile()
  {
  	this.navCtrl.push(EditProfile)
  }
  goToNotifications(){
    let dataSend = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.badgeCountReadStatus(dataSend).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.navCtrl.push(NotificationsTeacherPage);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  goToServices(){
    this.navCtrl.push(ServicesOffered,{tutorId:this.userId});
  }
  goToTeacherEditProfile(){
    this.navCtrl.push(TeacherEditProfile);
  }
  goToReviews(id){
    this.navCtrl.push(Reviews,{tutor_id:id,com_screen:'my_profile'});
  }
  goToViewAvailability(){
    this.navCtrl.push(ViewAvailability,{tutorId:this.userId});
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
