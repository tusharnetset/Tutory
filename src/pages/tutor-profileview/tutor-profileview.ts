import { Component,NgZone,ViewChild } from '@angular/core';
import { NavController, ModalController,AlertController,ToastController ,NavParams,Platform, Content} from 'ionic-angular';
import { ShareProfilePopup } from '../share-profile-popup/share-profile-popup';
import { BookAppointment } from '../book-appointment/book-appointment';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewAvailability } from '../view-availability/view-availability';
import { SignupType } from '../signup-type/signup-type';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Reviews } from '../reviews/reviews';

@Component({
  selector: 'page-tutor-profileview',
  templateUrl: 'tutor-profileview.html',
})
export class TutorProfileview {
 	@ViewChild(Content) content: Content;
 	screenShot:boolean = true;
	unFav:boolean = false;
	fav:boolean = false;
	data1:any;
	check:boolean = false;
	connectSubscription:any;
	alert:any;
	userId:any;
  token:any;
	lat:any;
	long:any;
	tutorData:{
    user_id : any;
    login_token:any;
    tutor_id:any;
	}
	latitude:number;
	longitude:number;
	getTutordata:any;
	tId:any;
	catId:any;
	subId:any;
	favData:{
		user_id:any;
		tutor_id:any;
		login_token:any;
		status:any;
	}
  recommenddata:{
    user_id : any
    login_token:any
    tutor_id:any
  }
  shareProImage:any;
	shareImg:any;
  favDataS:any;
  ratingData:any;
  loginTokenSkip:any;
  userIdSkip:any;
  getBookAppointCategory: any;
  teachingLevel: any;
  screenShotSave: any;
  recomendation: any;
  profileStatus: any;

	constructor(public screenshot:Screenshot,private socialSharing: SocialSharing, public zone: NgZone,public toastCtrl: ToastController,public spinner:NgxSpinnerService,public geolocation:Geolocation,public studentservices:StudentservicesProvider,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public navCtrl: NavController,public modalCtrl:ModalController) {
	}

	ionViewDidEnter()
	{
		this.tId = this.navParams.get('tutorId');
    this.favDataS = this.navParams.get('navTo');
		this.catId = this.navParams.get('catId');
    this.subId = this.navParams.get('subCatId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.profileStatus = data.profile_status
      this.token = data.login_token;
      this.lat = data.latitude;
      this.long = data.longitude;
      this.getTutorProfile();
    })

    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getTutorProfile();
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getTutorProfile();
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
	}

	ionViewDidLeave()
	{
  	this.connectSubscription.unsubscribe();
 	}

	showAlert()
	{
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

	getTutorProfile()
	{
    if(this.userIdSkip){
      this.tutorData = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip,
        tutor_id:this.tId
      }
    }else{
    	this.tutorData = {
        user_id : this.userId,
        login_token:this.token,
  		  tutor_id:this.tId
      }
    }
    this.spinner.show();
  	this.studentservices.getTutorProfileApi(this.tutorData).then((result) => {
    	console.log(result);
      this.spinner.hide();
    	this.data1 = result;
    	if(this.data1.status == 200){
        this.zone.run(() => {
          this.getTutordata = this.data1.data;
          this.recomendation = this.getTutordata.getTutordata;
          this.ratingData = this.getTutordata.avg_rating;
          // this.teachingLevel = this.getTutordata.teaching_levels;
          this.getBookAppointCategory = this.getTutordata.book_appointment_categories;
          if(this.getTutordata.fav_status == 0){
            this.unFav = true;
            this.fav = false;
          }else if(this.getTutordata.fav_status == 'U'){
        		this.unFav = true;
        		this.fav = false;
        	}else{
        		this.fav = true;
        		this.unFav = false;
        	}
          console.log(this.getTutordata);
        })
    	}else{
        this.presentToast(this.data1.message);
      }
  	}, (err) => {
      this.spinner.hide();
      console.log(err);
    })
	}

  	heartClick(status)
  	{
      if(this.userIdSkip){
        this.presentToast("Please login your account first for favorite tutor profile");
        return;
      }
  		if(status == 'F'){
  			this.unFav = false;
    		this.fav = true;
  		}else{
  			this.unFav = true;
    		this.fav = false;
  		}
  		this.favData = {
	      user_id:this.userId,
	      tutor_id:this.tId,
      	login_token:this.token,
      	status:status
	    }
    	this.studentservices.favUnFav(this.favData).then((result) => {
        	console.log(result);
        	this.data1 = result;
        	if(this.data1.status == 200){
             if(this.data1.current_status == 'U'){

             }else{
                let modal = this.modalCtrl.create(ShareProfilePopup,{icon:"fav"});
                modal.onDidDismiss(data => {
                  if(data == 'share'){
                    this.goToShareProfileShare();
                  }else{
                    console.log("dismiss");
                  }
                })
                modal.present();
             }
        	}else{
          	this.presentToast(this.data1.message);
        	}
    	}, (err) => {
        console.log(err);
    	})
    }

  	goToShareProfile()
  	{
      this.screenshot.URI(80).then((res) => {
        console.log("url",res.URI);
        this.screenShotSave = res.URI;
        // this.socialSharing.share("Check this item:  tutoryapp://items/" + this.tId, this.getTutordata.first_name,scrn)
        this.socialSharing.share("Check this item:  tutoryapp://items/" + this.tId, this.getTutordata.first_name,this.screenShotSave)
        .then(() => {
          if(this.userIdSkip){
            this.presentToast("Please login your account first for share tutor profile");
            return;
          }
          this.recommenddata = {
            user_id : this.userId,
            login_token:this.token,
            tutor_id:this.tId
          }
          this.spinner.show();
          this.studentservices.recommendApi(this.recommenddata).then((result) => {
            console.log(result);
            this.spinner.hide();
            this.data1 = result;
            if(this.data1.status == 200){
              // this.presentToast("Successfully shared");
            }else{
              this.presentToast(this.data1.message);
            }
          }, (err) => {
            this.spinner.hide();
            console.log(err);
          })
        }).catch((err) => {
          console.log(err);
        });
      }, (err) => {
        console.log("errrrrrr",err);
      });
    }

    goToShareProfileShare(){
      this.screenshot.URI(80).then((res) => {
        this.screenShotSave = res.URI;
        this.socialSharing.share("Check this item:  tutoryapp://items/" + this.tId, this.getTutordata.first_name,this.screenShotSave)
        .then(() => {
          if(this.userIdSkip){
            this.presentToast("Please create an account to access and update this section of your profile.");
            return;
          }
          this.recommenddata = {
            user_id : this.userId,
            login_token:this.token,
            tutor_id:this.tId
          }
          this.spinner.show();
          this.studentservices.recommendApi(this.recommenddata).then((result) => {
            console.log(result);
            this.spinner.hide();
            this.data1 = result;
            if(this.data1.status == 200){
              // this.presentToast("Successfully shared");
            }else{
              this.presentToast(this.data1.message);
            }
          }, (err) => {
            this.spinner.hide();
            console.log(err);
          })
        }).catch((err) => {
          console.log(err);
        });
      }, (err) => {
        console.log("errrrrrr",err);
      });
    }

  	goToBookAppointment(tId,tRate,tGroupRate)
  	{
      if(this.userIdSkip){
        this.presentToast("Please login your account first for Book Appointment");
        return;
      }else if(this.profileStatus == 0){
        this.presentToast("Please complete your profile");
        return;
      }else{
        this.navCtrl.push(BookAppointment,{tutorId:tId,tutorRate:tRate,tutorGroupRate:tGroupRate,catId:this.catId,subCatId:this.subId,bookCategory:this.getBookAppointCategory});
      }
  	}

  	checkAvail(id)
  	{
  		this.navCtrl.push(ViewAvailability,{tutorId:id})
  	}

    review(tId){
      this.navCtrl.push(Reviews,{tutor_id:tId,com_screen:'tutor_profile'})
    }

  	presentToast(message)
  	{
	    console.log(message);
	    let toast = this.toastCtrl.create({
	      message: message,
	      duration: 5000,
	      position: 'bottom'
	    });

	    toast.onDidDismiss(() => {
	      console.log('Dismissed toast');
	    });
	    toast.present();
  	}
}
