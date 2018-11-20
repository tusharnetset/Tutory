import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController ,Platform} from 'ionic-angular';
import { SubjectDetail } from '../subject-detail/subject-detail';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-sub-category-level',
  templateUrl: 'sub-category-level.html',
})
export class SubCategoryLevel {
  levelsId:any;
  catName:any;
  catId:any;
  subCatId:any;
  subCatName:any;
  userId:any;
  token:any;
  connectSubscription:any;
  alert:any;
  getCatLevels:any;
  sendCategorydata:{user_id:any;login_token:any;}

  userType:any;
  mobileNumber:any;
  getCategory:any;
  data1:any;
  cateD:any;
  userIdSkip:any;
  loginTokenSkip:any;
  cateLevel: any;
  getD:any;
  levelsArr:any[];
  constructor(public toastCtrl:ToastController,public spinner:NgxSpinnerService,public StudentServices:StudentservicesProvider,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public navCtrl: NavController) {
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

  ionViewDidLoad() {
    this.levelsArr = [];
    this.catId = this.navParams.get('categoryId');
    this.subCatId = this.navParams.get('subCateId');
    this.subCatName = this.navParams.get('subCateName');
    this.catName = this.navParams.get('cateName');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
      this.getLevels();
    })

    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getLevels();
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

  getLevels(){
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
      this.getD = this.data1.data;
      if(this.data1.status == 200){
        this.getCatLevels = this.getD.levels;
        for (let i = 0; i < this.getCatLevels.length; i++) {
          if(this.getCatLevels[i].category_id == this.catId){
            this.levelsArr.push({
              name:this.getCatLevels[i].name,
              id:this.getCatLevels[i].id
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

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }


  subCateSelect(id,name){
    this.levelsId = id;
    if(this.levelsId){
      this.navCtrl.push(SubjectDetail,{categoryId:this.catId,subCateId:this.subCatId,catName:this.catName,subCateName:this.subCatName,levelId:this.levelsId});
     }else{
       this.presentToast("Please select level");
     }
  }

  goToSubjectDetail(){
    if(this.levelsId){
     this.navCtrl.push(SubjectDetail,{categoryId:this.catId,subCateId:this.subCatId,catName:this.catName,subCateName:this.subCatName,levelId:this.levelsId});
    }else{
      this.presentToast("Please select level");
    }
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

