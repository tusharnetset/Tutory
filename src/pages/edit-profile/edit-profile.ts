import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, ToastController, NavParams, ActionSheetController, ModalController, normalizeURL, Platform, AlertController, Events} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AuthservicesProvider } from './../../providers/authservices/authservices';
import { ConfigProvider } from './../../providers/config/config';
import { StudentservicesProvider } from './../../providers/studentservices/studentservices';
import { AutocompletePage} from '../autocomplete/autocomplete';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsStudentPage } from '../tabs-student/tabs-student';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
declare var google: any;
import { DomSanitizer } from '@angular/platform-browser';
import { File } from '@ionic-native/file';
import { MyProfile } from '../my-profile/my-profile';
import { MapsAPILoader } from '@agm/core';
import { google } from "google-maps";
import { SignupType } from '../signup-type/signup-type';
import { AddressMapPage } from '../address-map/address-map';
import { XhrFactory } from '@angular/common/http';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfile {
  getProfileData:any;
  b:any;
  c:any;
  a:any;
  imgData:any;
  connectSubscription:any;
  US : boolean = false;
  SS : boolean = false;
  WP : boolean = false;
  GR : boolean = false;
  timezone:any;
  deviceId:any;
  token:any;
  userType:any;
  selectType:any;
  userId:any;
  getCitiesData:any;
  mobileNumber:any;
  languagesData:{
    user_id:any;
    user_token:any;
  }
  languagescheck:any;
  citiesData:{
    user_id:any;
    user_token:any;
    country_id:string;
  }
  sendProfileData:{user_id:any;login_token:any;user_type:any;};
  authForm : FormGroup
  lat: any;
  appVersion:any;
  long: any;
  data1:any;
  getLang: any;
  baseUrl:any;
  langD:any;
  base64Image:any;
  sendEditProfileData: { device_id: any; device_type: string; user_type: any; timezone: any; latitude: any; longitude: any; user_id: any; login_token: any; app_version: string; first_name: any; last_name: any; dob: any; address: any; student_type: any; university_name: any; course_title: any; school_name: any; grade: any; company_name: any; occupation: any; school_university_name: any; qualification: any; city_id: any; gender: any; languages: any; bio: any;age:string };
  age: number;
  public htmlImageFromCamera: string;
  langPush:any[];
  address:any;
  latitude:any;
  longitude:any;
  latS:any;
  longS :any;
  alert:any;
  addres: any;
  getAddLat: any;
  getAddLng: any;
  getCurrentlng: any;
  getCurrentlat: any;
  constructor(public events:Events, public alertCtrl:AlertController,public mapsAPILoader:MapsAPILoader,public studentservices:StudentservicesProvider,public file:File,private sanitizer: DomSanitizer,public platform:Platform,public modalCtrl:ModalController,public zone:NgZone,public fileTransfer:FileTransfer,public httpBaseUrl:ConfigProvider,public network:Network,public camera:Camera,public actionSheetCtrl:ActionSheetController,public toastCtrl: ToastController,public spinner: NgxSpinnerService,public authServices: AuthservicesProvider,private fb: FormBuilder,public navCtrl: NavController, public navParams:NavParams,public nativeStorage:NativeStorage) {
    this.timezone = moment.tz.guess();
    this.baseUrl = this.httpBaseUrl.baseUrl;
    this.appVersion = this.httpBaseUrl.appVersion;
    this.authForm = fb.group({
      'first_name' : ["", Validators.compose([Validators.required])],
      'last_name': ["", Validators.compose([Validators.required])],
      'dob': ["", Validators.compose([Validators.required])],
      'address': ["", Validators.compose([Validators.required])],
      'mobile_number': [""],
      'email':[""],
      'student_type': ["", Validators.compose([Validators.required])],
      'university_name': [""],
      'course_title': [""],
      'school_name': [""],
      'grade': [""],
      'company_name': [""],
      'occupation': [""],
      'school_university_name': [""],
      'qualification': [""],
      'city_id': ["", Validators.compose([Validators.required])],
      'gender': ["", Validators.compose([Validators.required])],
      'languages': ["", Validators.compose([Validators.required])],
      'bio': ["", Validators.compose([Validators.required])]
    });
    this.langPush = [];

    events.subscribe('user:created', (user, time) => {
      console.log('Welcome', user, 'at', time);
      this.getAddLat = user.lat;
      this.getAddLng = user.lng;
      this.authForm.get('address').setValue(user.address);
    });
  }

  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      console.log(data);
      this.authForm.setValue({address: data});
    });
    modal.present();
  }


  goAddressMap(){
    this.navCtrl.push(AddressMapPage,{navigateTo:'student_edit'});
  }

  ionViewDidLoad() {
    this.nativeStorage.getItem('deviceId').then((data) => {
      this.deviceId = data;
    })
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.lat = data.latitude;
      this.long = data.longitude;
      this.getProfile();
      this.getLanguages();
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

    var nativeHomeInputBox = document.getElementById('txtHome1').getElementsByTagName('input')[0];
    // let autocomplete1 = new google.maps.places.Autocomplete(nativeHomeInputBox, searchOptions);
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.zone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log('placessss', place);
          this.address = place.formatted_address;
          this.authForm.get('address').setValue(this.address);
          console.log('address', this.address)
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
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

  getProfile(){
    this.sendProfileData = {
      user_id : this.userId,
      login_token:this.token,
      user_type :this.userType
    }
    this.spinner.show();
    this.studentservices.getProfile(this.sendProfileData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.data1 = result;
      this.getProfileData = this.data1.data;
      if(this.data1.status == 200){
        this.getProfileData = this.data1.data;
        this.languagescheck = this.getProfileData.user_languages;
        this.authForm.get('first_name').setValue(this.getProfileData.first_name);
        this.authForm.get('last_name').setValue(this.getProfileData.last_name);
        this.authForm.get('email').setValue(this.getProfileData.email);
        this.authForm.get('dob').setValue(this.getProfileData.dob);
        this.authForm.get('address').setValue(this.getProfileData.address);
        this.authForm.get('mobile_number').setValue(this.getProfileData.mobile_number);

        this.authForm.get('student_type').setValue(this.getProfileData.student_type);
        this.authForm.get('university_name').setValue(this.getProfileData.university_name);
        this.authForm.get('course_title').setValue(this.getProfileData.course_title);
        this.authForm.get('school_name').setValue(this.getProfileData.school_name);
        this.authForm.get('grade').setValue(this.getProfileData.grade);
        this.authForm.get('company_name').setValue(this.getProfileData.company_name);
        this.authForm.get('occupation').setValue(this.getProfileData.occupation);
        this.authForm.get('school_university_name').setValue(this.getProfileData.school_university_name);
        this.authForm.get('qualification').setValue(this.getProfileData.qualification);

        this.authForm.get('city_id').setValue(this.getProfileData.city_id);
        this.authForm.get('gender').setValue(this.getProfileData.gender);
        this.authForm.get('bio').setValue(this.getProfileData.bio);
        for (let i = 0; i < this.languagescheck.length; i++) {
          this.langPush.push(this.languagescheck[i].language_id)
        }
        this.authForm.get('languages').setValue(this.langPush);

        if(this.getProfileData.student_type == 'US'){
          this.US = true;
          this.SS = false;
          this.WP = false;
          this.GR = false;
        }else if(this.getProfileData.student_type == 'SS'){
          this.SS = true;
          this.WP = false;
          this.GR = false;
          this.US = false;
        }else if(this.getProfileData.student_type == 'WP'){
          this.WP = true;
          this.GR = false;
          this.US = false;
          this.SS = false;
        }else if(this.getProfileData.student_type == 'GR'){
          this.GR = true;
          this.US = false;
          this.SS = false;
          this.WP = false;
        }else{
          console.log("kuch ni");
        }

      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      console.log(err);
    })
  }

  changeSelect(val){
    this.selectType = val;
    if(val == 'US'){
      this.US = true;
      this.SS = false;
      this.WP = false;
      this.GR = false;
    }else if(val == 'SS'){
      this.SS = true;
      this.WP = false;
      this.GR = false;
      this.US = false;
    }else if(val == 'WP'){
      console.log("val WP");
      this.WP = true;
      this.GR = false;
      this.US = false;
      this.SS = false;
    }else if(val == 'GR'){
      this.GR = true;
      this.US = false;
      this.SS = false;
      this.WP = false;
    }else{
      console.log("kuch ni");
    }
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

  getData(date){
    console.log(date);
    var timeDiff = Math.abs(Date.now() - date);
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    console.log(this.age);
  }


  clickImage(){
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
    if(this.a < 16){
      this.presentToast("Your age must be atleast 16 to register as a student");
    }
  }


  submitForm(val,valid){
    let birthdate = new Date(this.authForm.value.dob);
    this.b = birthdate
    let cur = new Date();
    this.c = cur;
    let diff = this.c-this.b;
    let age = Math.floor(diff/31557600000);
    this.a = age;
    if(valid){

      if(this.a < 16){
        this.presentToast("Your age must be atleast 16 to register as a student");
        return;
      }

      if(this.selectType == 'US'){
        if(this.authForm.value.university_name == '' || this.authForm.value.course_title == ''){
          this.presentToast("please fill in university and course name");
          return;
        }
      }else if(this.selectType == 'SS'){
        if(this.authForm.value.school_name == '' || this.authForm.value.grade == ''){
          this.presentToast("please fill in school_name and grade");
          return;
        }
      }else if(this.selectType == 'WP'){
        if(this.authForm.value.company_name == '' || this.authForm.value.occupation == '' || this.authForm.value.school_university_name == '' || this.authForm.value.qualification == ''){
          this.presentToast("please fill in company_name, occupation, school_university_name and qualification");
          return;
        }
      }else if(this.selectType == 'GR'){
        if(this.authForm.value.school_university_name == '' || this.authForm.value.qualification == '' ){
          this.presentToast("please fill in school_university_name and qualification");
          return;
        }
      }

      if(this.getAddLat == "" || this.getAddLat == undefined || this.getAddLat == null ){
        if(this.getProfileData.latitude == "" || this.getProfileData.latitude == undefined || this.getProfileData.latitude == null){
          this.latS = this.getCurrentlat;
          this.longS = this.getCurrentlng;
        }else{
          this.latS = this.getProfileData.latitude;
          this.longS = this.getProfileData.longitude;
        }
      }else{
        this.latS = this.getAddLat;
        this.longS = this.getAddLng;
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
            longitude             : this.longS,
            user_id               : this.userId,
            login_token           : this.token,
            app_version           : this.appVersion,
            first_name            : this.authForm.value.first_name,
            last_name             : this.authForm.value.last_name,
            dob                   : this.authForm.value.dob,
            address               : this.authForm.value.address,
            student_type          : this.authForm.value.student_type,
            university_name       : this.authForm.value.university_name,
            course_title          : this.authForm.value.course_title,
            school_name           : this.authForm.value.school_name,
            grade                 : this.authForm.value.grade,
            company_name          : this.authForm.value.company_name,
            occupation            : this.authForm.value.occupation,
            school_university_name: this.authForm.value.school_university_name,
            qualification         : this.authForm.value.qualification,
            city_id               : this.authForm.value.city_id,
            gender                : this.authForm.value.gender,
            languages             : this.authForm.value.languages.toString(),
            bio                   : this.authForm.value.bio,
            age                   : this.a
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
            this.navCtrl.setRoot(MyProfile);
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
          longitude             : this.longS,
          user_id               : this.userId,
          login_token           : this.token,
          app_version           : this.appVersion,
          first_name            : this.authForm.value.first_name,
          last_name             : this.authForm.value.last_name,
          dob                   : this.authForm.value.dob,
          address               : this.authForm.value.address,
          student_type          : this.authForm.value.student_type,
          university_name       : this.authForm.value.university_name,
          course_title          : this.authForm.value.course_title,
          school_name           : this.authForm.value.school_name,
          grade                 : this.authForm.value.grade,
          company_name          : this.authForm.value.company_name,
          occupation            : this.authForm.value.occupation,
          school_university_name: this.authForm.value.school_university_name,
          qualification         : this.authForm.value.qualification,
          city_id               : this.authForm.value.city_id,
          gender                : this.authForm.value.gender,
          languages             : this.authForm.value.languages,
          bio                   : this.authForm.value.bio,
          age                   : this.a
        }
        this.studentservices.editProfileStudent(this.sendEditProfileData).then((result) => {
          this.spinner.hide();
          this.data1  = result;
          if(this.data1.status == 200){
            this.presentToast(this.data1.message);
            this.navCtrl.setRoot(MyProfile);
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
