import { RepeatAppointmentPage } from './../repeat-appointment/repeat-appointment';
import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController,Platform,ModalController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { RatingPopup } from '../rating-popup/rating-popup';
import { RejectReasonPopup } from '../reject-reason-popup/reject-reason-popup';

@Component({
  selector: 'page-appointment-detail-submited',
  templateUrl: 'appointment-detail-submited.html',
})
export class AppointmentDetailSubmited {
  userType : any;
  userId : any;
  token : any;
  alert : any;
  connectSubscription : any;
  apId : any;
  getAppointmentsDetailData : {user_id:any; login_token:any; appointment_id:any; user_type:any;}
  data1 : any;
  myAppointDetail : any;
  latLng : any;
  actionData : {student_id:any; login_token:any; appointment_id:any; action:any}
  rating : any;
  avgRating : any;
  getBookAppointCategory : any;

  constructor(public modalCtrl:ModalController,private launchNavigator: LaunchNavigator,public platform:Platform,public alertCtrl:AlertController,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public StudentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
  }

  ionViewDidEnter() {
    this.apId = this.navParams.get('appointment_id');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getMyAppointmentDetail();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
    this.platform.registerBackButtonAction(() => {
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }else{
        if(this.alert){
          this.alert.dismiss();
          this.alert = null;
        }else{
          this.showAlert();
        }
      }
    })
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  showAlert() {
    this.alert = this.alertCtrl.create({
      title: 'Exit?',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  getMyAppointmentDetail(){
    this.spinner.show();
    this.getAppointmentsDetailData = {
      user_id : this.userId,
      login_token:this.token,
      appointment_id:this.apId,
      user_type:this.userType
    }
    this.StudentServices.myAppointmentsDetailApi(this.getAppointmentsDetailData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.myAppointDetail = this.data1.data;
        this.rating = this.myAppointDetail.rating;
        this.avgRating = this.myAppointDetail.avg_rating;
        this.getBookAppointCategory = this.myAppointDetail.book_appointment_categories;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
       this.spinner.hide();
      console.log(err);
    })
  }

  goToProfile(id){
    this.navCtrl.push(TutorProfileview,{tutorId:id,navTo:'detail'});
  }


  viewMap(lat,lng){
    this.latLng  = lat.concat(','+lng);
    let options: LaunchNavigatorOptions ={
      // app: this.launchNavigator.APP.GOOGLE_MAPS
    }
    this.launchNavigator.navigate(this.latLng,options).then(()=>{
      console.log("launched successfully");
    }).catch(()=>{
      console.log("launch failed");
    })
  }

  actionClick(appointmentId,action){
    this.spinner.show();
    this.actionData = {
      student_id : this.userId,
      login_token:this.token,
      appointment_id:appointmentId,
      action:action
    }
    this.StudentServices.myAppointmentAction(this.actionData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getMyAppointmentDetail();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
       this.spinner.hide();
      console.log(err);
    })
  }

  giveFeedback(id,tId){
    let modal = this.modalCtrl.create(RatingPopup,{appointment_id:id,tutorId:tId});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getMyAppointmentDetail();
    })
    modal.present();
  }

  noClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'end_no'});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getMyAppointmentDetail();
    })
    modal.present();
  }

  noClickAppStart(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'start_no'});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getMyAppointmentDetail();
    })
    modal.present();
  }

  cancelClick(id,action){
    let modal = this.modalCtrl.create(RejectReasonPopup,{appointment_id:id,action:action,popup:'student_cancel'});
    modal.onDidDismiss(data => {
      this.apId = data;
      this.getMyAppointmentDetail();
    })
    modal.present();
  }

  repeatAppointment(apId,tutorId){
    this.navCtrl.push(RepeatAppointmentPage,{tutorId:tutorId, bookCategory:this.getBookAppointCategory, catId: this.myAppointDetail.category_id, subCatId: this.myAppointDetail.subcategory_id, trate:this.myAppointDetail.rate, tGrRate:this.myAppointDetail.group_rate, locationPref:this.myAppointDetail.location_preference, noOfStudent:this.myAppointDetail.no_of_students, spclInstruction:this.myAppointDetail.special_instructions, tutorRate:this.myAppointDetail.tutor_rate, tutorGroupRate:this.myAppointDetail.group_rate, oLocations:this.myAppointDetail.other_location });
  }

  // goToBookAppointment(tId,tRate,tGroupRate)
  // {
  //   this.navCtrl.push(RepeatAppointmentPage,{tutorId:tId,tutorRate:tRate,tutorGroupRate:tGroupRate,catId:this.catId,subCatId:this.subId,bookCategory:this.getBookAppointCategory});
  // }

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
