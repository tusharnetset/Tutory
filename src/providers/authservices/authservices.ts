import { Injectable } from '@angular/core';
import { Http ,HttpModule, Headers,RequestOptions } from '@angular/http';
import { NavController,NavParams,MenuController,LoadingController,ToastController} from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
import { ConfigProvider } from '../config/config';
import 'rxjs/add/operator/map';

interface deviceInterface {
  id?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  isVirtual?: boolean,
};
@Injectable()
export class AuthservicesProvider {
  baseUrl:any;
  appVersion:any;
  deviceType: string;
  public deviceInfo: deviceInterface = {};

  constructor(public httpBaseUrl:ConfigProvider,public device:Device,public http: Http,public toastCtrl:ToastController) {
    this.baseUrl = this.httpBaseUrl.baseUrl;
    this.appVersion = this.httpBaseUrl.appVersion;
  }

  signupApi(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id:data.device_id,
    	device_type:this.deviceType,
    	login_type :data.login_type,
    	country_id:data.country_id,
    	email:data.email,
    	password:data.password,
    	mobile_number:data.mobile_number,
    	user_type:data.user_type,
    	app_version:this.appVersion
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'signup', body,options)
      .subscribe(res => {
        console.log("service data",data);
        resolve(res.json());
      }, (err) => {
        console.log('service error data',err);
        resolve(err.json());
        reject(err);
      });
    });
  }

  loginApi(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id: data.device_id,
      device_type: this.deviceType,
      user_identity:data.user_identity,
      password:data.password,
      timezone:data.timezone,
      //latitude: data.latitude,
      //longitude:data.longitude,
      app_version:this.appVersion

   });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'login', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  otpApi(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id: data.device_id,
      device_type: this.deviceType,
      type:'S', //signup type
      otp:data.otp,
      mobile_number:data.mobile_number,
      app_version:this.appVersion
   });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'verify_otp', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  resendotpApi(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id: data.device_id,
      device_type: this.deviceType,
      type:data.type,
      mobile_number:data.mobile_number,
      app_version:this.appVersion,
   });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'resend_otp', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  forgotPassApi(data) {
    let body = this.StringQuery({
      email:data.email
   });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'forgot_password', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  createProfileStudent(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id:data.device_id,
      device_type:this.deviceType,
      user_type:data.user_type,
      timezone:data.timezone,
      latitude: data.latitude,
      longitude:data.longitude,
      user_id : data.user_id,
      login_token:data.login_token,
      first_name : data.first_name,
      last_name: data.last_name,
      dob: data.dob,
      address: data.address,
      student_type: data.student_type,
      university_name: data.university_name,
      course_title: data.course_title,
      school_name: data.school_name,
      grade: data.grade,
      company_name: data.company_name,
      occupation: data.occupation,
      school_university_name: data.school_university_name,
      qualification: data.qualification,
      city_id: data.city_id,
      gender: data.gender,
      languages: data.languages,
      bio: data.bio,
      age: data.age,
      app_version:this.appVersion
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'create_profile', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  createProfileTutor(data) {
    this.deviceInfo.platform = this.device.platform;
    if(this.deviceInfo.platform == 'Android'){
      this.deviceType = "A";
    }else{
      this.deviceType = "I";
    }
    let body = this.StringQuery({
      device_id             : data.device_id,
      device_type           : this.deviceType,
      user_type             : data.user_type,
      timezone              : data.timezone,
      latitude              : data.latitude,
      longitude             : data.longitude,
      user_id               : data.user_id,
      login_token           : data.login_token,
      app_version           : this.appVersion,
      first_name            : data.first_name,
      last_name             : data.last_name,
      dob                   : data.dob,
      address               : data.address,
      university_name       : data.university_name,
      city_id               : data.city_id,
      gender                : data.gender,
      languages             : data.languages,
      bio                   : data.bio,
      rate                  : data.rate,
      qualification         : data.qualification,
      location_preference   : data.location_preference,
      other_location        : data.other_location,
      other_location_id     : data.other_location_id,
      other_info            : data.other_info,
      age                   : data.age,
      currency_id           : "85"
   });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'create_profile', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getCities(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'cities'+'/'+data.user_id+'/'+data.user_token+'/'+this.appVersion+'/'+data.country_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getLanguagesAndLocationPreference(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'tutor_profile_dropdowns'+'/'+data.user_id+'/'+data.user_token+'/'+this.appVersion,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getCategorySubCategory(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'categories_subcategories/'+data.user_id+'/'+data.login_token+'/'+this.appVersion,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  logoutApi(data){
    let body = this.StringQuery({
      user_id:data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'logout' ,body,options)
      .subscribe(res => {
        console.log("res",res);
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  public StringQuery(jsonString) {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }

}
