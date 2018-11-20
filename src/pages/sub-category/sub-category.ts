import { Component } from '@angular/core';
import { Platform,NavController,NavParams,ToastController,AlertController } from 'ionic-angular';
import { SubCategoryLevel } from '../sub-category-level/sub-category-level';;
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { SignupType } from '../signup-type/signup-type';
import { SubjectDetail } from '../subject-detail/subject-detail';

@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategory {
  levelId:any;
  userType:any;
  mobileNumber:any;
  userId:any;
  token:any;
  getCategory:any;
  sendCategorydata:{user_id:any;login_token:any;}
  catId:any;
  subCateArr:any[];
  sendSubId:any;
  catName:any;
  data1:any;
  cateD:any;
  getSubCategory:any;
  subName:any;
  connectSubscription:any;
  alert:any;
  userIdSkip:any;
  loginTokenSkip:any;
  levelPresent:any;

  constructor(public alertCtrl:AlertController,public platform:Platform,public StudentServices:StudentservicesProvider,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
  }
  ionViewDidLoad() {
    this.subCateArr = [];
    this.catId = this.navParams.get('categoryId');
    this.catName= this.navParams.get('cateName');
    this.levelPresent= this.navParams.get('level_present');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getSubCategories();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getSubCategories();
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

  getSubCategories(){
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
    this.StudentServices.getCategorySubCategory(this.sendCategorydata).then((result) => {
      console.log(result);
      this.data1 = result;
      this.cateD = this.data1.data;
      if(this.data1.status == 200){
        this.getSubCategory = this.cateD.subcategories;
        for (let i = 0; i < this.getSubCategory.length; i++) {
          if(this.getSubCategory[i].category_id == this.catId){
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

  subCateSelect(id,name){
    this.sendSubId = id;
    this.subName = name;
    console.log('this.catId',this.catId,'subCateId',this.sendSubId)
    if(this.sendSubId){
      if(this.levelPresent == 0){
        this.levelId = 0;
        this.navCtrl.push(SubjectDetail,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,catName:this.catName,levelId:this.levelId});
      }else{
        this.navCtrl.push(SubCategoryLevel,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,cateName:this.catName});
      }
    }else{
      this.presentToast("Please select subcategory");
    }
  }

  // goToLevel(){
  //   console.log('this.catId',this.catId,'subCateId',this.sendSubId)
  //   if(this.sendSubId){
  //     if(this.levelPresent == 0){
  //       this.levelId = 0;
  //       this.navCtrl.push(SubjectDetail,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,catName:this.catName,levelId:this.levelId});
  //     }else{
  //       this.navCtrl.push(SubCategoryLevel,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,cateName:this.catName});
  //     }
  //   }else{
  //     this.presentToast("Please select subcategory");
  //   }
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
