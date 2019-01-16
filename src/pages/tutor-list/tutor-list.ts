import { Component,NgZone } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController ,Platform, ModalController,ViewController} from 'ionic-angular';
import { ServicesPopup } from '../services-popup/services-popup';
import { Filters } from '../filters/filters';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Geolocation } from '@ionic-native/geolocation';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-tutor-list',
  templateUrl: 'tutor-list.html',
})
export class TutorList {
  data1:any;
  check:boolean = false;
  connectSubscription:any;
  alert:any;
  userId:any;
  token:any;
  catId:any;
  subId:any;
  lat:any;
  long:any;
  tutorData:{
    user_id : any;
    login_token:any;
    category_id:any;
    subcategory_id:any;
    sort_by:string;
    latitude:number;
    longitude:number;
    level_id:any;
  }
  latitude:number;
  longitude:number;
  getTutordata:any;
  tutorArr:any[];
  levelid:any;
  userIdSkip:any;
  loginTokenSkip:any;
  noDataShow: boolean = false;
  groups: any[];
  selectedItem: any;
  userType: any;
  favData: { user_id: any; login_token: any; user_type: any; screen_type: string; };
  getFavData: any;
  show: boolean = false;
  favArr: any[];
  allShow:boolean = true;
  favShow:boolean = false;
  userSkipData: any;
  sortBy: string;
  constructor(public viewCtrl:ViewController, public zone: NgZone,public toastCtrl: ToastController,public spinner:NgxSpinnerService,public geolocation:Geolocation,public studentservices:StudentservicesProvider,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public navCtrl: NavController,public modalCtrl:ModalController) {
  }

  ionViewDidEnter() {
    this.favArr = [];
    this.catId = this.navParams.get('categoryId');
    this.subId = this.navParams.get('subCateId');
    this.levelid = this.navParams.get('levelId');
    this.userSkipData = this.navParams.get('userSkip');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
      this.userType = data.user_type;
      this.lat = data.latitude;
      this.long = data.longitude;
      if(this.lat && this.long){
        this.lat = data.latitude;
        this.long = data.longitude;
        this.getTutorListWithlat();
        this.getFavorites();
      }else{
        this.nativeStorage.getItem('locationLat').then((data) => {
          this.lat = data;
        })
        this.nativeStorage.getItem('locationLng').then((data) => {
          this.long = data;
          this.getTutorListWithlat();
          this.getFavorites();
        })
      }
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      console.log(data);
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.nativeStorage.getItem('locationLat').then((data) => {
        this.lat = data;
      })
      this.nativeStorage.getItem('locationLng').then((data) => {
        this.long = data;
        this.getTutorListWithlat();
      })
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getTutorListWithlat();
      this.getFavorites();
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

    this.groups = [{
      name:'All'
    },{
      name:'Favorites'
    }]

  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
    if(this.selectedItem.name == 'All'){
      this.allShow = true;
      this.favShow = false;
    }else{
      this.allShow = false;
      this.favShow = true;
    }
  }

  getTutorListWithlat()
  {
    this.tutorArr = [];
    if(this.userSkipData){
      this.sortBy = 'S'
    }else{
      this.sortBy = 'A'
    }
    if(this.userIdSkip){
      this.tutorData = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip,
        category_id:this.catId,
        subcategory_id:this.subId,
        level_id:this.levelid,
        sort_by:this.sortBy,
        latitude:this.lat,
        longitude: this.long
      }
      console.log("this.tutorData",this.tutorData)
    }else{
      this.tutorData = {
        user_id : this.userId,
        login_token:this.token,
        category_id:this.catId,
        subcategory_id:this.subId,
        level_id:this.levelid,
        sort_by:this.sortBy,
        latitude:this.lat,
        longitude: this.long
      }
    }
    this.studentservices.getTutorListApi(this.tutorData).then((result) => {
      this.data1 = result;
      if(this.data1.status == 200){
        this.zone.run(() => {
          this.getTutordata = this.data1.data;
          if(this.getTutordata.length == 0){
            this.check = true;
          }else{
            this.check = false;
          }
          for (var i = 0; i < this.getTutordata.length; i++) {
            this.tutorArr.push({
              tutor_id:this.getTutordata[i].tutor_id,
              profile_pic:this.getTutordata[i].profile_pic,
              first_name:this.getTutordata[i].first_name,
              last_name:this.getTutordata[i].last_name,
              age:this.getTutordata[i].age,
              address:this.getTutordata[i].address,
              distance:this.getTutordata[i].distance.toFixed(0),
              rate:this.getTutordata[i].rate,
              avg_rating:this.getTutordata[i].avg_rating,
              gender:this.getTutordata[i].gender,
              categories:this.getTutordata[i].categories,
              catLength:this.getTutordata[i].categories.length-1
            })
          }
        })
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getFavorites(){
    this.favData = {
      user_id : this.userId,
      login_token:this.token,
      user_type:this.userType,
      screen_type:'F'
    }
    this.spinner.show();
    this.studentservices.getfavTutorApi(this.favData).then((result) => {
        this.spinner.hide();
        this.data1 = result;
        if(this.data1.status == 200){
          this.zone.run(() => {
            this.getFavData = this.data1.data;
            for (let i = 0; i < this.getFavData.length; i++) {
              this.favArr.push({
                first_name:this.getFavData[i].first_name,
                last_name:this.getFavData[i].last_name,
                age:this.getFavData[i].age,
                address:this.getFavData[i].address,
                tutor_id:this.getFavData[i].tutor_id,
                fav_status:this.getFavData[i].fav_status,
                profile_pic:this.getFavData[i].profile_pic,
                distance:this.getFavData[i].distance.toFixed(0),
                avg_rating:this.getFavData[i].avg_rating,
                categories:this.getFavData[i].categories,
                rate:this.getFavData[i].rate,
                gender:this.getFavData[i].gender,
                catLength:this.getFavData[i].categories.length-1
              })
            }
            if(this.getFavData.fav_status == 0){
              this.show = true;
            }else{
              this.show = false;
            }
          })
        }else{
          if(this.data1.message == 'Wrong token entered!.Please try again.'){
            this.presentToast("Session expired Please login again");
            this.sessionExpired();
          }else{
            this.presentToast(this.data1.message);
          }
        }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  showAlert() {
    console.log('Do you want to exit the app?');
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

  favorite(){

  }

  sessionExpired(){
    this.nativeStorage.remove('userType');
    this.nativeStorage.remove('userData');
    this.navCtrl.push(SignupType);
  }

  goToServicesPopup(serv){
    let modal = this.modalCtrl.create(ServicesPopup,{serv:serv});
    modal.present();
  }
  goToFilters(){
    this.navCtrl.push(Filters,{categoryId:this.catId,subCateId:this.subId,levelId:this.levelid}).then(() => {
    });
  }
  goTutorProfile(id){
    this.navCtrl.push(TutorProfileview,{tutorId:id,catId:this.catId,subCatId:this.subId});
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
