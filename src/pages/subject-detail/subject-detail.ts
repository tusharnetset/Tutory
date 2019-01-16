import { Component } from '@angular/core';
import { NavController,NavParams,ToastController,AlertController ,Platform ,Toast} from 'ionic-angular';
import { TutorList } from '../tutor-list/tutor-list';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignupType } from '../signup-type/signup-type';

@Component({
  selector: 'page-subject-detail',
  templateUrl: 'subject-detail.html',
})
export class SubjectDetail {
  showPage:boolean = false;
  toast: Toast;
  catId:any;
  subId:any;
  catName:any;
  levelId:any;
  subCatName:any;
  alert:any;
  userId:any;
  token:any;
  data1:any;
  connectSubscription:any;
  getDetailData:any;
  getDetaildata : {user_id : any;login_token:any;category_id:any;subcategory_id:any}
  userIdSkip:any;
  loginTokenSkip:any;
  constructor(public spinner:NgxSpinnerService,public toastCtrl:ToastController,public studentservices:StudentservicesProvider,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public navParams:NavParams,public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.catId = this.navParams.get('categoryId');
    this.subId = this.navParams.get('subCateId');
    this.levelId = this.navParams.get('levelId');
    this.catName = this.navParams.get('catName');
    this.subCatName = this.navParams.get('subCateName');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userId = data.id;
      this.token = data.login_token;
      this.getSubDetail();
    })
    this.nativeStorage.getItem('skipData').then((data) => {
      this.userIdSkip = data.user_id;
      this.loginTokenSkip = data.login_token;
      this.getSubDetail();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getSubDetail();
    });
    console.log('ionViewDidLoad SubjectDetail');
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

  getSubDetail(){
    if(this.userIdSkip){
      this.getDetaildata = {
        user_id : this.userIdSkip,
        login_token:this.loginTokenSkip,
        category_id:this.catId,
        subcategory_id:this.subId
      }
    }else{
      this.getDetaildata = {
        user_id : this.userId,
        login_token:this.token,
        category_id:this.catId,
        subcategory_id:this.subId
      }
    }
    this.spinner.show();
    this.studentservices.getSubDetailApi(this.getDetaildata).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.getDetailData = this.data1.data;
      if(this.data1.status == 200){
        this.getDetailData = this.data1.data;
      }else{
        this.presentToast(this.data1.message);
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

  goToTutorList(){
    console.log('this.catId',this.catId ,'this.subId',this.subId,'this.levelId',this.levelId);
    this.navCtrl.push(TutorList,{
      categoryId :this.catId,
      subCateId : this.subId,
      levelId:this.levelId
    });
  }

  presentToast(message)
  {
    try {
      this.toast.dismiss();
    } catch(e) {
      console.log('eeeeeeeeeeeee',e)
    }
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
