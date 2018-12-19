import { Component, NgZone } from '@angular/core';
import { NavController, ActionSheetController, Platform, normalizeURL, ToastController, AlertController, NavParams, Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import { ServicesOffered } from '../services-offered/services-offered';
import { ScheduleAvailability } from '../schedule-availability/schedule-availability';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { ConfigProvider } from './../../providers/config/config';
import { AutocompletePage} from '../autocomplete/autocomplete';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import * as moment from 'moment-timezone';
import { TeacherMyProfile } from '../teacher-my-profile/teacher-my-profile';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";
declare var google : google;
import { SignupType } from '../signup-type/signup-type';
import { AddressMapPage } from '../address-map/address-map';

@Component({
  selector: 'page-teacher-edit-profile',
  templateUrl: 'teacher-edit-profile.html',
})
export class TeacherEditProfile {
  alert:any;
  appVersion:any;
  ti:any;
  b:any;
  a:any;
  c:any;
  dobD:any;
  dateFormate:any;
  getCitiesData:any;
  imgDataR:any;
  imgData:any;
  deviceId: any;
  userType: any;
  userId: any;
  mobileNumber: any;
  token: any;
  lat: any;
  long: any;
  languagesData:{
    user_id:any;
    user_token:any;
  }
  citiesData:{
    user_id:any;
    user_token:any;
    country_id:string;
  }
  languagescheck:any;
  data1:any;
  connectSubscription: any;
  langD: any;
  getLang: any;
  baseUrl:any;
  getProfileData:any;
  timezone: string;
  langPush:any[];
  sendProfileData:{user_id : any;login_token:any;user_type :any;}
  sendEditProfileData: { device_id: any; device_type: string; user_type: any; timezone: string; latitude: any; longitude: any; user_id: any; login_token: any; app_version: string; first_name: any; last_name: any; dob: any; address: any; university_name: any; city_id: any; gender: any;teaching_levels:any; languages: any; bio: any; rate: any; group_rate:any; qualification: any; location_preference: any;other_location:any;other_location_id:any; other_info: any; age: number; currency_id: string; };
  age: number;
  latitude:any;
  longitude:any;
  address:any;
  latS:any;
  lngS:any;
  authForm : FormGroup
  getLevels: { user_id: any; login_token: any; };
  getD: any;
  getCatLevels: any;
  addres: any;
  getAddLat: any;
  getAddLng: any;
  getCurrentlat: any;
  getCurrentlong: any;
  getCurrentlng: any;
  arrPush: any[];
  levelCheck: any;
  levelPush: any[];
  show :boolean = false;
  showiNPUT: boolean = false;
  showSuggest: boolean = false;
  suggestId: any;
  va: any;
  sendSuggesteddata: { user_id: any; login_token: any; };
  suggestedLocations: any;
  locationF: any;

  constructor(public events:Events, public StudentServices:StudentservicesProvider, public navParams:NavParams, public alertCtrl:AlertController,public ngZone:NgZone,public mapsAPILoader:MapsAPILoader,public tutorservices:TutorservicesProvider,public fileTransfer:FileTransfer,public toastCtrl:ToastController,public network:Network,public nativeStorage:NativeStorage,public httpBaseUrl:ConfigProvider,public authServices: AuthservicesProvider,public spinner :NgxSpinnerService,public fb:FormBuilder, public platform: Platform, public navCtrl: NavController,public camera:Camera,public actionSheetCtrl:ActionSheetController) {
    this.baseUrl = this.httpBaseUrl.baseUrl;
    this.appVersion = this.httpBaseUrl.appVersion;
    this.timezone = moment.tz.guess();
    this.authForm = fb.group({
      'first_name' : ["", Validators.compose([Validators.required])],
      'last_name': ["", Validators.compose([Validators.required])],
      'dob': ["", Validators.compose([Validators.required])],
      'address': ["", Validators.compose([Validators.required])],
      'mobile_number': [""],
      'university_name': ["", Validators.compose([Validators.required])],
      'rate': ["", Validators.compose([Validators.required])],
      'group_rate': ["", Validators.compose([Validators.required])],
      'qualification': ["", Validators.compose([Validators.required])],
      'city_id': ["", Validators.compose([Validators.required])],
      'gender': ["", Validators.compose([Validators.required])],
      'teaching_levels': ["", Validators.compose([Validators.required])],
      'languages': ["", Validators.compose([Validators.required])],
      'bio': ["", Validators.compose([Validators.required])],
      'location_preference':["",Validators.compose([Validators.required])],
      'other_location': [""],
      'other_info':["",Validators.compose([Validators.required])]
    });
    this.langPush = [];
    this.levelPush = [];

    events.subscribe('user:created', (user, time) => {
      console.log('Welcome', user, 'at', time);
      this.getAddLat = user.lat;
      this.getAddLng = user.lng;
      this.authForm.get('address').setValue(user.address);
    });
  }

  addressMap(){
    this.navCtrl.push(AddressMapPage,{navigateTo:'tutor_edit'});
  }

  ionViewDidLoad() {
    this.nativeStorage.getItem('deviceId').then((data) => {
      this.deviceId = data;
    })
    this.nativeStorage.getItem('userData').then((data) => {
      console.log('storage data', data);
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getTechLevels();
      this.getProfile();
      this.getLanguages();
      this.getSuggestLocations();
    })
    this.nativeStorage.getItem('locationLat').then((data) => {
      this.getCurrentlat = data;
    })
    this.nativeStorage.getItem('locationLng').then((data) => {
      this.getCurrentlng = data;
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.getLanguages();
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

  getProfile(){
    this.sendProfileData = {
      user_id : this.userId,
      login_token:this.token,
      user_type :this.userType
    }
    this.spinner.show();
    this.tutorservices.getProfile(this.sendProfileData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.getProfileData = this.data1.data;
      if(this.data1.status == 200){
        this.getProfileData = this.data1.data;
        this.languagescheck = this.getProfileData.user_languages;
        this.levelCheck = this.getProfileData.teaching_levels;

        this.authForm.get('first_name').setValue(this.getProfileData.first_name);
        this.authForm.get('last_name').setValue(this.getProfileData.last_name);
        this.authForm.get('dob').setValue(this.getProfileData.dob);
        this.authForm.get('address').setValue(this.getProfileData.address);
        this.authForm.get('mobile_number').setValue(this.getProfileData.mobile_number);
        this.authForm.get('university_name').setValue(this.getProfileData.university_name);
        this.authForm.get('rate').setValue(this.getProfileData.rate);
        this.authForm.get('group_rate').setValue(this.getProfileData.group_rate);
        this.authForm.get('qualification').setValue(this.getProfileData.qualification);
        this.authForm.get('city_id').setValue(this.getProfileData.city_id);
        this.authForm.get('gender').setValue(this.getProfileData.gender);
        this.authForm.get('bio').setValue(this.getProfileData.bio);
        this.authForm.get('location_preference').setValue(this.getProfileData.location_preference);
        this.authForm.get('other_info').setValue(this.getProfileData.other_info);
        for (let i = 0; i < this.levelCheck.length; i++) {
          this.levelPush.push(this.levelCheck[i].level_id)
          console.log("this.levelPushthis.levelPush", this.levelPush);
        }
        this.authForm.get('teaching_levels').setValue(this.levelPush);

        for (let i = 0; i < this.languagescheck.length; i++) {
          this.langPush.push(this.languagescheck[i].language_id)
        }
        this.authForm.get('languages').setValue(this.langPush);

        if(this.getProfileData.location_preference == 'AO'){
          this.showiNPUT = true;
          this.authForm.get('other_location').setValue(this.getProfileData.other_location);
        }else{
          this.showiNPUT = false;
        }
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  goToServiceOffered(){
    this.navCtrl.push(ServicesOffered);
  }

  goToScheduleAvailability(){
    this.navCtrl.push(ScheduleAvailability);
  }

  getLanguages(){
    this.languagesData = {
      user_id : this.userId,
      user_token:this.token
    }
    this.authServices.getLanguagesAndLocationPreference(this.languagesData).then((result) => {
      console.log(result);
      this.data1 = result;
      this.langD = this.data1.data;
      if(this.data1.status == 200){
        this.getLang = this.langD.languages;
        this.getCity();
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  getTechLevels(){
    this.arrPush = [];
    this.getLevels = {
      user_id : this.userId,
      login_token:this.token
    }
    console.log("this.getLevelssssssssss",this.getLevels);
    this.authServices.getCategorySubCategoryDistinctLevels(this.getLevels).then((result) => {
      console.log("levels dataaaaa",result);
      this.data1 = result;
      this.getD = this.data1.data;
      if(this.data1.status == 200){
        this.getCatLevels = this.getD.levels;

        for (let i = 0; i < this.getCatLevels.length; i++) {
          this.arrPush.push(this.getCatLevels[i]);
        }
        // var obj = {};
        //   for ( var i = 0, len = this.getCatLevels.length; i < len; i++ )
        //     obj[this.getCatLevels[i]['name']] = this.getCatLevels[i];
        //     this.getCatLevels = new Array();
        //     for ( var key in obj )
        //       this.getCatLevels.push(obj[key]);
        //     this.arrPush = this.getCatLevels;
        //     console.log('this.arrPushthis.arrPushthis.arrPush',this.arrPush);
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
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

  getSuggestLocations(){
    this.sendSuggesteddata = {
      user_id : this.userId,
      login_token:this.token
    }
    this.StudentServices.suggestedLocations(this.sendSuggesteddata).then((result) => {
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

  dismiss(data) {
    this.navCtrl.pop(data);
  }

     imagePopOver(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add picture with',
      buttons: [
      {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.takePicture();
        }
      },{
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          this.gallery();
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'undo',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
   });
   actionSheet.present();
  }

 takePicture() {
    let options: CameraOptions = {
      quality: 95,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit :true,
      correctOrientation: true
    };
   this.camera.getPicture(options).then(imageData => {
    if (this.platform.is('ios'))
      this.imgData = normalizeURL(imageData);
    else
      this.imgDataR = normalizeURL(imageData);
      this.imgData= "data:image/jpeg;base64," + imageData;
    }, error => {
       console.log('ERROR -> ' + JSON.stringify(error));
    });
  }

  gallery(){
    let options: CameraOptions = {
      quality: 95,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      allowEdit :true,
      correctOrientation: true
    };
   this.camera.getPicture(options).then(imageData => {
      if (this.platform.is('ios'))
        this.imgData = normalizeURL(imageData);
      else
       this.imgDataR = normalizeURL(imageData);
        this.imgData= "data:image/jpeg;base64," + imageData;
    }, error => {
      console.log('ERROR -> ' + JSON.stringify(error));
    });
  }


  dobChange(event,dob){
    let birthdate = new Date(dob);
    this.b = birthdate
    let cur = new Date();
    this.c = cur;
    let diff = this.c-this.b;
    let age = Math.floor(diff/31557600000);
    this.a = age;
    if(this.a < 18){
      this.presentToast("Your age must be atleast 18 to register as a tutor");
    }
  }


  eventFire(event){
    console.log(event);
    this.locationF = event;
    if(event == 'AO'){
      this.show = true;
      this.showiNPUT  = true;
      this.showSuggest = true;
    }else{
      this.show = false;
      this.showiNPUT = false;
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

  submitForm(val,valid){
    console.log(val,valid);
    let birthdate = new Date(this.authForm.value.dob);
    this.b = birthdate
    let cur = new Date();
    this.c = cur;
    let diff = this.c-this.b;
    let age = Math.floor(diff/31557600000);
    this.a = age;

    if(this.getAddLat == "" || this.getAddLat == undefined || this.getAddLat == null ){
      if(this.getProfileData.latitude == "" || this.getProfileData.latitude == undefined || this.getProfileData.latitude == null){
        this.latS = this.getCurrentlat;
        this.lngS = this.getCurrentlng;
      }else{
        this.latS = this.getProfileData.latitude;
        this.lngS = this.getProfileData.longitude;
      }
    }else{
      this.latS = this.getAddLat;
      this.lngS = this.getAddLng;
    }
    if(valid){

      if(this.a < 18){
        this.presentToast("Your age must be At least 18 to register as a tutor");
        return;
      }

      if(this.imgData){
        this.spinner.show();
        let url = this.baseUrl+'edit_profile';
        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        let targetPath =  this.imgData;
        let filename = targetPath.split("/").pop();
        filename = filename.split('?');
        let options = {
          fileKey: "profile_pic",
          fileName: filename[0],
          chunkedMode: false,
          mimeType: "image/jpg",
          params : {
            device_id             : this.deviceId,
            device_type           : 'A',
            user_type             : this.userType,
            timezone              : this.timezone,
            latitude              : this.latS,
            longitude             : this.lngS,
            user_id               : this.userId,
            login_token           : this.token,
            app_version           : this.appVersion,
            first_name            : this.authForm.value.first_name,
            last_name             : this.authForm.value.last_name,
            dob                   : this.authForm.value.dob,
            address               : this.authForm.value.address,
            university_name       : this.authForm.value.university_name,
            city_id               : this.authForm.value.city_id,
            gender                : this.authForm.value.gender,
            teaching_levels       : this.authForm.value.teaching_levels.toString(),
            languages             : this.authForm.value.languages.toString(),
            bio                   : this.authForm.value.bio,
            rate                  : this.authForm.value.rate,
            group_rate            : this.authForm.value.group_rate,
            qualification         : this.authForm.value.qualification,
            location_preference   : this.authForm.value.location_preference,
            other_location        : this.authForm.value.other_location,
            other_location_id     : this.suggestId,
            other_info            : this.authForm.value.other_info,
            age                   : this.a,
            currency_id           : '85'
          }
        };
        console.log("optionssss",options);
        fileTransfer.upload(targetPath, url, options).then((data) => {
          this.spinner.hide();
          console.log(targetPath, url, options);
          console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa gyaaa",data);
          this.data1 = JSON.parse(data.response);
          console.log(this.data1);
          if(this.data1.status == 200){
            this.presentToast(this.data1.message);
            this.navCtrl.setRoot(TeacherMyProfile);
          } else {
            this.presentToast(this.data1.message);
          }
        }, (err) => {
          this.spinner.hide();
          console.log(err);
          let mesg = JSON.parse(err.body);
          this.presentToast(mesg.message);
        });
      }else{
        this.spinner.show();
        this.sendEditProfileData = {
          device_id             : this.deviceId,
          device_type           : 'A',
          user_type             : this.userType,
          timezone              : this.timezone,
          latitude              : this.latS,
          longitude             : this.lngS,
          user_id               : this.userId,
          login_token           : this.token,
          app_version           : this.appVersion,
          first_name            : this.authForm.value.first_name,
          last_name             : this.authForm.value.last_name,
          dob                   : this.authForm.value.dob,
          address               : this.authForm.value.address,
          university_name       : this.authForm.value.university_name,
          city_id               : this.authForm.value.city_id,
          gender                : this.authForm.value.gender,
          teaching_levels       : this.authForm.value.teaching_levels.toString(),
          languages             : this.authForm.value.languages.toString(),
          bio                   : this.authForm.value.bio,
          rate                  : this.authForm.value.rate,
          group_rate            : this.authForm.value.group_rate,
          qualification         : this.authForm.value.qualification,
          location_preference   : this.authForm.value.location_preference,
          other_location        : this.authForm.value.other_location,
          other_location_id     : this.suggestId,
          other_info            : this.authForm.value.other_info,
          age                   : this.a,
          currency_id           : '85'
        }
        this.tutorservices.editProfileTutor(this.sendEditProfileData).then((result) => {
          this.spinner.hide();
          this.data1  = result;
          if(this.data1.status == 200){
            this.presentToast(this.data1.message);

            this.navCtrl.setRoot(TeacherMyProfile);
          }else{
            this.presentToast(this.data1.message);
          }
        }, (err) => {
          this.spinner.hide();
          console.log(err);
        })
      }
    }else{
     this.validateAllFormFields(this.authForm)
    }
  }

  validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
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
