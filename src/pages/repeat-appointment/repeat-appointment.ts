import { Component,NgZone} from '@angular/core';
import { SuccessPopup } from '../success-popup/success-popup';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { NavController,NavParams,ModalController,ToastController ,Platform,AlertController,App, Events} from 'ionic-angular';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { ConfigProvider } from './../../providers/config/config';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { MyAppointments } from '../my-appointments/my-appointments';
import { SignupType } from '../signup-type/signup-type';
import { TabsStudentPage } from '../tabs-student/tabs-student';
import { MapSearchPage } from '../map-search/map-search';

@Component({
  selector: 'page-repeat-appointment',
  templateUrl: 'repeat-appointment.html',
})

export class RepeatAppointmentPage {
  show :boolean = false;
  minDate: string = new Date().toISOString();
  selectedDate: string = new Date().toISOString();
  newAttri:any;
  cateD:any;
  getCategory:any;
  userType:any;
  userId:any;
  token:any;
  data1:any;
  connectSubscription:any;
  getSlotsData:any;
  tutorId:any;
  getViewAvailbilityData:any;
  alert:any;
  baseUrl:any;
  appVersion:any;
  sendCategorydata:{
    user_id:any;
    login_token:any;
    tutor_id:any;
  }
  bookAppointmentData:{
    user_id: any,
    login_token: any;
    tutor_id:any;
    date: any;
    service_id: any;
    no_of_students: any;
    location_preference: any;
    other_location:any;
    other_location_id:any;
    tutor_rate: any;
    start_time: any;
    service_name:any;
    end_time:  any;
    currency_id: string;
    special_instructions:any;
    slots:any;
  }
  authForm : FormGroup
  trate:any;
  cateId:any;
  subCatId:any;
  slotArr=[];
  toTimeVal:any;
  frTime:any;
  getCategoryData:any;
  locationF:any;
  servName:any;
  frTim: any;
  userIdSkip:any;
  loginTokenSkip:any;
  tGrRate:any;
  rateCheck:any;
  sendSuggesteddata: { user_id: any; login_token: any; };
  suggestedLocations: any;
  val: any;
  va: any;
  showSuggest: boolean = false;
  showiNPUT: boolean = false;
  suggestId: any;
  getBookCategory: any;
  showLevel: boolean = true;
  subCatArr: any[];
  levArr: any[];
  selectCateId: any;
  cateName: any;
  subCateSelectId: any;
  subCateSelectName: any;
  levelSelectId: any;
  levelsSelectName: any;
  levePresent: any;
  serviceArr: any;
  serviceArrPush: any[];
  subCat: any;
  levelData: any;
  sendRepeatApi: { user_id: any; login_token: any; tutor_id: any; };
  getRepeatData: any;
  dateFo: string;
  fTime: string;
  tTime: string;
  locationPref: any;
  noOfStudent: any;
  spclInstruction: any;
  frmTime: any;
  frmTime1: any;
  frmTimeSend: any;
  toTimeSend: any;
  toTime1: any;
  sTime: any;
  endT: any;
  toTimeSendMinutes: any;
  fromTimeSendMinutes: any;
  currentDate: string;
  localISOTime: string;
  getFrmTimeObj: { hour: any; minute: any; };
  newAttri2: { from_time: string; to_time: string; };
  slotArr2 = [];

  constructor(public events:Events, public app:App,public tutorservices:TutorservicesProvider,public httpBaseUrl:ConfigProvider,public fb:FormBuilder,public studentServices:StudentservicesProvider,public modalCtrl: ModalController,public zone:NgZone,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public navCtrl:NavController,public navParams:NavParams,public toastCtrl:ToastController) {
    this.baseUrl = this.httpBaseUrl.baseUrl;
    this.appVersion = this.httpBaseUrl.appVersion;
    this.authForm = fb.group({
      'start_time' : ["", Validators.compose([Validators.required])],
      'end_time': ["", Validators.compose([Validators.required])],
      'date': ["", Validators.compose([Validators.required])],
      // 'service_id': ["", Validators.compose([Validators.required])],
      'category': ["", Validators.compose([Validators.required])],
      'subcategory': ["", Validators.compose([Validators.required])],
      'levels': [""],
      'location_preference': ["", Validators.compose([Validators.required])],
      'no_of_students': ["", Validators.compose([Validators.required])],
      'special_instructions': ["", Validators.compose([Validators.required])],
      'other_location': [""]
    });

    events.subscribe('markData:created', (user, time) => {
      console.log('Welcome', user, 'at', time);
      this.suggestId = user.id;
      this.authForm.get('other_location').setValue(user.address);
    });

    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    this.localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-1);

  }

  ionViewDidEnter() {
    this.serviceArrPush = [];
    this.subCatArr=[];
    this.levArr=[];
    this.val = this.navParams.get("value");
    if(this.val){
      this.va = this.val;
      this.authForm.get('other_location').setValue(this.va);
      this.show = true;
    }else{
      this.show = false;
    }
    this.getBookCategory = this.navParams.get('bookCategory');
    this.authForm.get('category').setValue(this.cateId);
    this.authForm.get('subcategory').setValue(this.subCatId);
    this.tutorId = this.navParams.get('tutorId');
    this.trate = this.navParams.get('tutorRate');
    this.tGrRate = this.navParams.get('tutorGroupRate');
    this.cateId = this.navParams.get('catId');
    this.subCatId = this.navParams.get('subCatId');
    this.noOfStudent = this.navParams.get('noOfStudent');
    this.authForm.get('no_of_students').setValue(this.noOfStudent);
    this.spclInstruction = this.navParams.get('spclInstruction');
    this.authForm.get('special_instructions').setValue(this.spclInstruction);
    this.locationPref = this.navParams.get('locationPref');
    this.authForm.get('location_preference').setValue(this.locationPref);
    this.authForm.get('other_location').setValue(this.va);
    if(this.locationPref == "AO"){
      this.show = true;
      this.showiNPUT  = true;
    }else{
      // this.show = false;
      this.showiNPUT  = false;
    }

    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getRepeatAppi();
      this.getSuggestLocations();
    })

    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getRepeatAppi();
      this.getSuggestLocations();
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

  getRepeatAppi(){
    this.sendRepeatApi = {
      user_id : this.userId,
      login_token:this.token,
      tutor_id:this.tutorId
    }
    this.studentServices.repeatAppointments(this.sendRepeatApi).then((result) => {
      console.log("getRepeatData",result);
      this.data1 = result;
      if(this.data1.status == 200){
        this.getRepeatData = this.data1.data;
        this.authForm.get('start_time').setValue(this.getRepeatData.from_time);
        this.authForm.get('end_time').setValue(this.getRepeatData.to_time);
        this.dateFo = moment(this.getRepeatData.date).format('YYYY-MM-DD');
        this.authForm.get('date').setValue(this.dateFo);
        this.newAttri = {
          from_time: this.getRepeatData.from_time,
          to_time:this.getRepeatData.to_time
        };
        console.log('this.newAttri',this.newAttri)
        this.slotArr.push(this.newAttri);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getSuggestLocations(){
    this.sendSuggesteddata = {
      user_id : this.userId,
      login_token:this.token
    }
    this.studentServices.suggestedLocations(this.sendSuggesteddata).then((result) => {
      console.log("suggested location data",result);
      this.data1 = result;
      if(this.data1.status == 200){
        this.suggestedLocations = this.data1.data;
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  eventFire(event){
    console.log(event);
    this.locationF = event;
    if(event == 'AO'){
      this.show = true;
      this.showiNPUT  = true;
    }else{
      this.show = false;
      this.showiNPUT  = false;
    }
  }

  suggestClick(){
    this.show = true;
  }

  clickSuggest(add,id){
    this.suggestId = id;
    this.show = false;
    this.va = add;
    this.authForm.get('other_location').setValue(this.va);
  }

  mapGo(){
    this.navCtrl.push(MapSearchPage,{mapData:this.suggestedLocations});
  }


  fromTime(event){
    this.currentDate = moment(this.localISOTime).format("YYYY-MM-DD");
    console.log('this.currentDate',this.currentDate);
    this.frTime = event.hour;
    this.fromTimeSendMinutes = event.minute;
    this.getFrmTimeObj = {
      hour:event.hour+1,
      minute:event.minute
    }
    var str = new String(this.getFrmTimeObj.hour);
    var str2 = new String(this.getFrmTimeObj.minute);

    if(str.length == 1){
      this.getFrmTimeObj = {
        hour:'0'+this.getFrmTimeObj.hour,
        minute:this.getFrmTimeObj.minute
      }
    }
    if(str2.length == 1){
      this.getFrmTimeObj = {
        hour:this.getFrmTimeObj.hour,
        minute:'0'+this.getFrmTimeObj.minute
      }
    }
    let getDate = this.currentDate+'T'+this.getFrmTimeObj.hour+':'+this.getFrmTimeObj.minute+':00'+'.000Z'
    // this.authForm.get('end_time').setValue(getDate);
    if(this.toTimeVal) {
      console.log("this.toTimeVal", this.toTimeVal);
      if(this.toTimeVal < this.frTime) {
        this.presentToast('From time must be less than to time.');
        this.authForm.value.start_time = "";
      } else {
        this.frTime = this.frTime;
      }
    }else {
      this.frTime = this.frTime;
    }
  }

  toTime(event){
    this.slotArr = [];
    this.toTimeVal = event.hour;
    this.toTimeSendMinutes = event.minute;
    if(this.frTime){
      if(this.toTimeVal > this.frTime) {
        // var from = parseInt(this.frTime);
        // var to = parseInt(this.toTimeVal);
        // var to_time = from;

        // for(var i=from; i < to; i++) {
          // from = to_time;
          // to_time = from + 1;
          this.newAttri = {
            from_time: this.frTime+':'+this.fromTimeSendMinutes,
            to_time:this.toTimeVal+':'+this.toTimeSendMinutes
          };
          console.log('this.newAttri',this.newAttri)
          this.slotArr.push(this.newAttri);
        // }
        console.log("this.slotArr",this.slotArr)
      }else{
        this.presentToast('Please select time greater than from time');
        this.authForm.value.end_time = "";
      }
    }else {
      this.presentToast('Please select from time first');
      this.authForm.value.end_time = "";
    }
  }

  selectCategory(id,levelPresent,catname){
    this.subCatArr = [];
    this.levArr = [];
    this.cateName = catname;
    this.selectCateId = id;
    console.log(levelPresent);
    this.levePresent = levelPresent;
    if(this.levePresent == 0){
      this.showLevel = false;
    }else{
      this.showLevel = true;
    }
    for (let i = 0; i < this.getBookCategory.length; i++) {
      if(this.getBookCategory[i].category_id == this.selectCateId){
        this.subCat = this.getBookCategory[i].subcategories;
        this.levelData = this.getBookCategory[i].levels;
      }else{
        console.log("elseeeeeee",this.getBookCategory[i]);
      }
    }
  }

  categorySelectSub(id,name){
    this.subCateSelectId = id;
    this.subCateSelectName = name;
  }
  levelsSelect(id,name){
    this.levelSelectId = id;
    this.levelsSelectName = name;
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  submitForm(val,valid){
    this.slotArr2 = [];
    this.serviceArrPush = [];
    if(this.levePresent == 0){
      this.levelSelectId = 0;
    }
    this.servName = this.cateName+'-'+this.subCateSelectName+'-'+this.levelsSelectName;
    this.serviceArr = [this.selectCateId,this.subCateSelectId,this.levelSelectId];

    this.serviceArrPush.push(this.serviceArr);
    console.log('this.serviceArrPush', this.serviceArrPush);

    var s = this.authForm.value.start_time;
    this.sTime = s.substring(0, s.indexOf(':'));

    var t = this.authForm.value.end_time;
    this.endT = t.substring(0, t.indexOf(':'));

    for(var j in this.slotArr) {
      var from = parseInt(this.slotArr[j].from_time.split(':')[0]);
      var to = parseInt(this.slotArr[j].to_time.split(':')[0]);
      var to_time = from;
      var endMins = '';
      if(this.slotArr[j].from_time.split(':')[1] == '0'){
        endMins = ':00';
      }
      else{
        endMins = ':30';
      }

      for (var i = from; i < to; i++) {
        from = to_time;
        to_time = from + 1;
        this.newAttri2 = {
          from_time: from+endMins,
          to_time: to_time+endMins
        };
        this.slotArr2.push(this.newAttri2);
      }
      if(this.newAttri.from_time.split(':')[1] != this.newAttri.to_time.split(':')[1]){
        if(this.newAttri.from_time.split(':')[1] == '0' && this.newAttri.to_time.split(':')[1] == '30') {
          var lastHour = this.slotArr2[this.slotArr2.length-1].to_time.split(':')[0];
          let lastFrom = this.slotArr2[this.slotArr2.length-1].to_time;
            this.slotArr2.push({from_time: lastFrom, to_time: lastHour+':30'});
        }
        else{
          var lastHour2 = this.slotArr2[this.slotArr2.length-1].to_time.split(':')[0];
          this.slotArr2[this.slotArr2.length-1].to_time = lastHour2 + ':00';
        }
      }
    }

    if(valid){
      console.log(this.toTimeVal,this.frTime);
      if(this.frTime > this.toTimeVal) {
        this.presentToast("From time must be less than to time");
        return;
      }
      if(this.locationF == 'AO'){
        if(this.locationF == '' || this.locationF == undefined || this.locationF == null){
          this.presentToast("Please enter other location");
          return;
        }
      }

      if(this.levePresent == 1){
        if(this.levelSelectId == "" || this.levelSelectId == undefined || this.levelSelectId == null){
          this.presentToast("Please select level");
          return;
        }
      }

      if(this.authForm.value.no_of_students > 10){
        this.presentToast("Only 10 users allowed");
        return;
      }
      if(this.authForm.value.no_of_students <= 0){
        this.presentToast("Please add atleast one student");
        return;
      }

      if(this.authForm.value.no_of_students > 1){
        this.rateCheck = this.tGrRate
      }else{
        this.rateCheck = this.trate
      }

      let alert = this.alertCtrl.create({
        title: 'Are you sure?',
        message: 'You want to repeat book appointment',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.spinner.show();
              this.bookAppointmentData = {
                user_id: this.userId,
                login_token: this.token,
                tutor_id:this.tutorId,
                date: this.authForm.value.date,
                // service_id: this.authForm.value.service_id,
                service_id:  this.serviceArr,
                no_of_students: this.authForm.value.no_of_students,
                location_preference: this.authForm.value.location_preference,
                other_location:this.authForm.value.other_location,
                other_location_id:this.suggestId,
                tutor_rate: this.trate,
                service_name:this.servName,
                start_time: this.authForm.value.start_time,
                end_time:  this.authForm.value.end_time,
                special_instructions:this.authForm.value.special_instructions,
                slots:JSON.stringify(this.slotArr),
                currency_id: '85'
              }
              this.studentServices.bookAppointmentsApi(this.bookAppointmentData).then((result) => {
                this.spinner.hide();
                this.data1 = result;
                if(this.data1.status == 200){
                  let modal = this.modalCtrl.create(SuccessPopup);
                  modal.present();
                  // this.app.getRootNav().setRoot(MyAppointments);
                  this.navCtrl.setRoot(TabsStudentPage, {opentab: 2});
                }else{
                  this.presentToast(this.data1.message);
                }
              }, (err) => {
                this.spinner.hide();
                console.log(err);
              })
            }
          }
        ]
      });
      alert.present();
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

  skipLogout(){
    this.alert = this.alertCtrl.create({
      title: 'login',
      message: 'You need to login first',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.nativeStorage.remove('skipData');
            this.navCtrl.push(SignupType);
          }
        }
      ]
    });
    this.alert.present();
  }

    // goToSuccessPopup() {
    // 	let modal = this.modalCtrl.create(SuccessPopup);
    //   modal.present();
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
