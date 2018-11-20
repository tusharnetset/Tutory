import { Component ,NgZone} from '@angular/core';
import { NavController,NavParams,ToastController,AlertController ,Platform, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { TutorList } from '../tutor-list/tutor-list';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { NgxSpinnerService } from 'ngx-spinner';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { SignupType } from '../signup-type/signup-type';
import { google } from "google-maps";
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'page-filters',
  templateUrl: 'filters.html',
})
export class Filters {
  userId:any;
  token:any;
  alert:any;
  connectSubscription:any;
  sendCategorydata:{user_id:any;login_token:any}
  getCategory:any;
  data1:any;
  cateD:any;
  getSubCategory:any;
  subCateArr = [];
  catId:any;
  subId:any;
  levelid:any;
  lat:any;
  lng:any;
  location:any;
  latitude:any;
  longitude:any;
  catSelect:any;
  subIdSlect:any;
  catI:any;
  subCatI:any;
  lati:any;
  lngi:any;
  userIdSkip:any;
  loginTokenSkip:any;
  authForm : FormGroup
  citiesData: { user_id: any; user_token: any; country_id: string; };
  getCitiesData: any;
  getLevelsD: any;
  levelsArr: any[];
  levelId: any;
  addFilterdata: { user_id: any; login_token: any; latitude: any; longitude: any; city: any; category_id: any; subcategory_id: any; level_id: any; price: any; rating: any; };
  levelSel: any;
  showLevel:boolean = true;

  constructor(public authServices:AuthservicesProvider,public viewCtrl:ViewController,public mapsAPILoader:MapsAPILoader,public zone:NgZone,public studentservices:StudentservicesProvider,public fb:FormBuilder,public tutorservices:TutorservicesProvider, public toastCtrl:ToastController, public spinner:NgxSpinnerService,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public navCtrl: NavController) {
    this.authForm = fb.group({
      'price' : [""],
      'rating': [""],
      'city': [""],
      'category_id': ["", Validators.compose([Validators.required])],
      'subcategory_id': ["", Validators.compose([Validators.required])],
      'levels': [""]
    });
  }

 ionViewDidEnter() {
   this.levelsArr = [];
    this.catId = this.navParams.get('categoryId');
    this.subId = this.navParams.get('subCateId');
    this.levelid = this.navParams.get('levelId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.getCity();
      this.categories();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getCity();
      this.categories();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getCity();
      this.categories();
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

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
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

  getCity(){
    this.spinner.show();
    this.citiesData = {
      user_id : this.userId,
      user_token:this.token,
      country_id:'174'
    }
    this.authServices.getCities(this.citiesData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1  = result;
      if(this.data1.status == 200){
        this.getCitiesData = this.data1.data;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }


  categories(){
    if(this.userIdSkip){
      this.sendCategorydata = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip
      }
    }else{
      this.sendCategorydata = {
        user_id : this.userId,
        login_token:this.token
      }
    }
    this.spinner.show();
    this.studentservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getCategory = this.cateD.categories;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  categorySelect(_cateId){
    console.log(_cateId);
    this.catSelect = _cateId;
    this.subCate(this.catSelect);
    this.levelsGet(this.catSelect);
  }
  levelSend(level){
    console.log("level",level);
    this.levelSel = level;
    if(this.levelSel == 0){
      this.showLevel = false;
    }else{
      this.showLevel = true;
    }
  }

  subCate(_cateId){
    if(this.userIdSkip){
      this.sendCategorydata = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip
      }
    }else{
      this.sendCategorydata = {
        user_id : this.userId,
        login_token:this.token
      }
    }
    this.studentservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getSubCategory = this.cateD.subcategories;
        for (let i = 0; i < this.getSubCategory.length; i++) {
          if(this.getSubCategory[i].category_id == _cateId){
            this.subCateArr.push({
              name:this.getSubCategory[i].name,
              id:this.getSubCategory[i].id
            })
          }
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  categorySelectSub(id){
    this.subIdSlect = id;
  }

  levelsGet(_cateId){
    if(this.userIdSkip){
      this.sendCategorydata = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip
      }
    }else{
      this.sendCategorydata = {
        user_id : this.userId,
        login_token:this.token
      }
    }
    this.studentservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getLevelsD = this.cateD.levels;
        for (let i = 0; i < this.getLevelsD.length; i++) {
          if(this.getLevelsD[i].category_id == _cateId){
            this.levelsArr.push({
              name:this.getLevelsD[i].name,
              id:this.getLevelsD[i].id
            })
          }
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  levelsSelect(id){
    this.levelId = id;
  }

  submitForm(valid){

    if(this.latitude == "" || this.latitude == undefined || this.latitude == null || this.longitude == "" || this.longitude == undefined || this.longitude == null){
      this.lati = this.lat;
      this.lngi = this.lng;
    }else{
      this.lati = this.latitude;
      this.lngi = this.longitude;
    }
    if(valid){

      if(this.levelSel == 0){
        this.levelid = 0;
        this.catI = this.catSelect;
        this.subCatI = this.subIdSlect;
      }else{
        if(this.levelId == "" || this.levelId == undefined || this.levelId == null ){
          this.presentToast("Please select level");
          return;
        }else{
          this.levelid = this.levelId;
          this.catI = this.catSelect;
          this.subCatI = this.subIdSlect;
        }
      }

      if(this.userIdSkip){
        this.addFilterdata = {
          user_id : this.userIdSkip,
          login_token:this.loginTokenSkip,
          latitude:this.lati,
          longitude:this.lngi,
          city:this.authForm.value.city,
          category_id:this.catI,
          subcategory_id:this.subCatI,
          level_id:this.levelId,
          price:this.authForm.value.price,
          rating:this.authForm.value.rating
        }
      }else{
        this.addFilterdata = {
          user_id : this.userId,
          login_token:this.token,
          latitude:this.lati,
          longitude:this.lngi,
          city:this.authForm.value.city,
          category_id:this.catI,
          subcategory_id:this.subCatI,
          level_id:this.levelId,
          price:this.authForm.value.price,
          rating:this.authForm.value.rating
        }
      }
      this.studentservices.filterSaveApi(this.addFilterdata).then((result) => {
        console.log(result);
        this.data1 = result;
        if(this.data1.status == 200){
          this.navCtrl.push(TutorList,{categoryId:this.catI,subCateId:this.subCatI,levelId:this.levelid}).then(() => {
            const index = this.viewCtrl.index;
            this.navCtrl.remove(index);
          });

          // this.navCtrl.push(TutorList,{categoryId:this.catI,subCateId:this.subCatI,levelId:this.levelid});
        }else{
          this.presentToast(this.data1.message);
        }
      }, (err) => {
        console.log(err);
      })
    }else{
      this.validateAllFormFields(this.authForm)
    }

  }
  validateAllFormFields(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  goToTutorListClose(){
    // this.navCtrl.pop();
    this.navCtrl.push(TutorList,{categoryId:this.catI,subCateId:this.subCatI,levelId:this.levelid}).then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    });
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
