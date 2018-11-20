import { Component ,ChangeDetectorRef} from '@angular/core';
import { NavController,NavParams,ToastController ,Platform, ViewController,AlertController} from 'ionic-angular';
import { SignupType } from '../signup-type/signup-type';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { TabsStudentPage } from '../tabs-student/tabs-student';
import { SubjectDetail } from '../subject-detail/subject-detail';
import { SubCategoryLevel } from '../sub-category-level/sub-category-level';;

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class Search {
  search: any;
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
  catSelId:any;
  alert:any;
  sendCategorydata:{user_id:any;login_token:any;};
  cateData: any[];
  subArr: any[];
  subC: any;
  pushSubData:any[];
  subPush:any[];
  _levPresent: any;
  catName: any;
  levelId: number;
  searchSel: any;
  selectedSegment: any;
  sendSearchCount : {
    user_id : any;
    login_token:any;
    subcategory_id:any;
    search_count:any;
  } 

  constructor(public ref: ChangeDetectorRef,public alertCtrl:AlertController,public viewCtrl:ViewController,public platform:Platform,public network:Network,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public studentServices:StudentservicesProvider,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    this.search="academic";
  }

  ionViewDidEnter(){
    this.subArr = [];
    this.pushSubData = [];
    this.subPush = [];
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getCategories();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
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
    this.ref.markForCheck();
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
    this.spinner.show();
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
    this.studentServices.searchLoadApi(this.sendCategorydata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.cateD = this.data1.data; 
      if(this.data1.status == 200){
        this.getCategory = this.cateD; 
        this.search = this.getCategory[0].id;
        this.searchSel = this.getCategory[0].name;
        this.pushSubData = [];
          if(this.getCategory[0].id){
            for (let j = 0; j < this.getCategory[0].subcategories.length; j++) {
              this.pushSubData.push(this.getCategory[0].subcategories[j])
            }
            this.initializeItems();
          }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  public setOption(index,event,id,name,_isLevPresent) {
    if (this.getCategory[index] != null) {
      this.selectedSegment = this.getCategory[index]; 
      let segments = event.target.parentNode.children;
      let len = segments.length;
      for (let i=0; i < len; i++) {
        segments[i].classList.remove('segment-activated');
      }
      event.target.classList.add('segment-activated');

      this.subPush = [];
      this.cateData = [];
      this.catSelId = id;
      this.catName = name;
      this.searchSel = name;
      this._levPresent = _isLevPresent;
      this.pushSubData = [];
      for (let i = 0; i < this.getCategory.length; i++) {
        if(this.catSelId == this.getCategory[i].id){
          for (let j = 0; j < this.getCategory[i].subcategories.length; j++) {
            this.pushSubData.push(this.getCategory[i].subcategories[j])
          }
          this.initializeItems();
        }
      }
    }
  }

  initializeItems() {
    this.cateData = this.pushSubData;
    console.log('this.cateData',this.cateData);
  }

  getSeachCategory(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.cateData = this.cateData.filter((catD) => {
        console.log("catD.subcategory_name",catD.subcategory_name);
        return (catD.subcategory_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }

  clickSeach(subCatId,subCatName,_searchCount){

   this.spinner.show();
    if(this.userIdSkip){
      this.sendSearchCount = {
        user_id : this.userId,
        login_token:this.token,
        subcategory_id:subCatId,
        search_count:_searchCount
      } 
    }else{
      this.sendSearchCount = {
        user_id : this.userId,
        login_token:this.token,
        subcategory_id:subCatId,
        search_count:_searchCount
      }
    }
    this.studentServices.searchCount(this.sendSearchCount).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.cateD = this.data1.data; 
      if(this.data1.status == 200){
        if(this._levPresent == 0){
          this.levelId = 0;
          this.navCtrl.push(SubjectDetail,{categoryId: this.catSelId,subCateId:subCatId,subCateName:subCatName,catName:this.catName,levelId:this.levelId});
        }else{
          this.navCtrl.push(SubCategoryLevel,{categoryId: this.catSelId,subCateId:subCatId,subCateName:subCatName,cateName:this.catName});
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  close(){
    //this.navCtrl.push(TabsStudentPage);
    this.navCtrl.push(TabsStudentPage).then(() => {
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
