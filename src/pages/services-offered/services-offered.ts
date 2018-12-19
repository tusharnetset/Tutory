import { Component } from '@angular/core';
import { NavController,NavParams,ToastController ,Platform, AlertController} from 'ionic-angular';
import { SubCategory } from '../sub-category/sub-category';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-services-offered',
  templateUrl: 'services-offered.html',
})
export class ServicesOffered {
  showLevel:boolean = true;
  _levelId:any;
  getLevelsD:any;
  show:boolean = false;
  userType:any;
  mobileNumber:any;
  userId:any;
  token:any;
  getCategory:any;
  data1:any;
  cateD:any;
  connectSubscription:any;
  userIdSkip:any;
  loginTokenSkip:any;
  sendCategorydata:{user_id:any;login_token:any;};
  getCategoriesdata:{user_id:any;login_token:any;tutor_id:any;};
  addServiceData:{user_id : any;login_token:any;category_id:any;subcategory_id:any;level_id:any;}
  deleteData:{user_id : any;login_token:any;type:string;service_id:any;}
  authForm : FormGroup;
  getSubCategory: any;
  subCateArr: any[];
  getServiceData:any;
  getCategoriesDataa:any;
  _catId:any;
  _subCatId:any;
  tutorId:any;
  alert:any;
  levelsArr:any[];
  levelSel:any;

  constructor(public alertCtrl:AlertController,public platform:Platform,public tutorservices:TutorservicesProvider,public fb :FormBuilder,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public StudentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    this.authForm = fb.group({
      'category' : [null, Validators.compose([Validators.required])],
      'subcategory': [null, Validators.compose([Validators.required])],
      'levels': [""]
    });
    this.subCateArr = [];
    this.levelsArr = [];
  }

  ionViewDidEnter() {
    this.tutorId = this.navParams.get('tutorId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.mobileNumber = data.mobile_number;
      this.getCategories();
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getCategories();
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


  getCategories(){
    this.sendCategorydata = {
      user_id : this.userId,
      login_token:this.token
    }
    this.spinner.show();
    this.tutorservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getCategory = this.cateD.categories;
        this.getServicesFun();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
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

  categorySelect(_cateId){
    console.log(_cateId);
    this._catId = _cateId;
    this.subCateArr = [];
    this.levelsArr = [];
    this._subCatId = "";
    this._levelId = "";
    this.subCateSelect(_cateId);
    this.getLevels(_cateId);
  }

  categorySelectSub(_subId){
    this._subCatId = _subId;
    console.log(_subId);
  }

  subCateSelect(_cateId){
    this.sendCategorydata = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
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

  getLevels(_cateId){
    this.sendCategorydata = {
      user_id : this.userId,
      login_token:this.token
    }
    this.tutorservices.getCategorySubCategory(this.sendCategorydata).then((result) => {
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

  levelsSelect(levelId){
    console.log(levelId);
    this._levelId = levelId;
  }

  getServicesFun(){
    this.getCategoriesdata = {
      user_id : this.userId,
      login_token:this.token,
      tutor_id:this.tutorId
    }
    this.spinner.show();
    this.tutorservices.getServices(this.getCategoriesdata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.getServiceData = this.data1.data;
      if(this.data1.status == 200){
        this.show = false;
        this.getCategoriesDataa = this.getServiceData;
        if(this.getCategoriesDataa.length == 0){
          this.show = true;
        }else{
          this.show = false;
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  submitForm(val,valid){
    if(valid){
      if(this._catId == '' || this._catId == undefined || this._catId == null){
        this.presentToast("Please select category");
        return;
      }
      if(this._subCatId == ""){
        this.presentToast("Please select sub category");
        return;
      }
      if(this.levelSel == 0){
        this._levelId = 0;
      }else{
        if(this._levelId == "" || this._levelId == undefined || this._levelId == null){
          this.presentToast("Please select level");
          return;
        }
      }

      this.addServiceData = {
        user_id : this.userId,
        login_token : this.token,
        category_id : this._catId,
        subcategory_id : this._subCatId,
        level_id : this._levelId
      }
      this.spinner.show();
      this.tutorservices.addServices(this.addServiceData).then((result) => {
        console.log(result);
        this.spinner.hide();
        this.data1 = result;
        this.getServiceData = this.data1.data;
        if(this.data1.status == 200){
          this._subCatId = "";
          this._levelId = "";
          this.subCateArr = [];
          this.levelsArr = [];
          this.subCateSelect(this._catId);
          this.getLevels(this._catId);
          this.getCategories();
          //this.getServicesFun();
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

  deleteServ(_id){
   this.deleteData = {
      user_id : this.userId,
      login_token:this.token,
      type:'SO',//service offered
      service_id:_id
    }
    this.spinner.show();
    this.tutorservices.deleteServices(this.deleteData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      if(this.data1.status == 200){
        this.getServicesFun();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  dismiss(data) {
    this.navCtrl.pop(data);
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
