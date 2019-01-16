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
export class TutorservicesProvider {
  baseUrl:any;
  appVersion:any;
  public deviceInfo: deviceInterface = {};
  deviceType: string;
  constructor(public httpBaseUrl:ConfigProvider,public device:Device,public http: Http,public toastCtrl:ToastController) {
    this.baseUrl = this.httpBaseUrl.baseUrl;
    this.appVersion = this.httpBaseUrl.appVersion;
  }

  getCategorySubCategory(data)
  {
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

  addServices(data)
  {
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
      category_id:data.category_id,
      subcategory_id:data.subcategory_id,
      level_id:data.level_id
    });
    console.log(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'tutor_services',body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  deleteServices(data)
  {
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      type:data.type,
      service_id:data.service_id,
      slot_id:data.slot_id,
      slot_date:data.slot_date,
      app_version:this.appVersion,
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'delete_data',body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getServices(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'services_offered/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.tutor_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getProfile(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'my_profile/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.user_type,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  editProfileTutor(data)
  {
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
      teaching_levels       : data.teaching_levels,
      languages             : data.languages,
      bio                   : data.bio,
      rate                  : data.rate,
      group_rate            : data.group_rate,
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
      this.http.post(this.baseUrl+'edit_profile', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  checkViewAvailability(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'view_availability/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.tutor_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  addSlotsApi(data)
  {
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      // date:data.date,
      app_version:this.appVersion,
      slots:data.slots
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'tutor_slots',body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getSpecificSlots(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'date_specific_slots/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.date+'/'+data.tutor_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  myAppointments(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'my_appointments/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.user_type,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getDashBoardApi(data)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'dashboard/'+data.user_id+'/'+data.login_token+'/'+this.appVersion,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  myAppointmentsDetailApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'appointment_details/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.appointment_id+'/'+data.user_type,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  myAppointmentActionsApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      tutor_id : data.tutor_id,
      login_token:data.login_token,
      appointment_id:data.appointment_id,
      app_version:this.appVersion,
      reason:data.reason,
      action:data.action
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'tutor_actions', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  favReviewApi(data)
  {
     console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'favorites_reviews/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.user_type+'/'+data.screen_type,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getNotificationsApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'notifications_list/'+data.user_id+'/'+data.login_token+'/'+this.appVersion,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  currentSubscriptionApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'current_subscription/'+data.user_id+'/'+data.login_token+'/'+this.appVersion, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  subscriptionsApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      subscription_id:data.subscription_id,
      expire_after:data.expire_after,
      app_version:this.appVersion,
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'subscription', body ,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  notificationOnOffApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id : data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
      status:data.status
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'notifications_setting', body ,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }


  badgeCount(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'batch_count/'+data.user_id+'/'+data.login_token+'/'+this.appVersion, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  badgeCountReadStatus(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'read_status/'+data.user_id+'/'+data.login_token+'/'+this.appVersion, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  badgeCountDelete(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'delete_notifications/'+data.user_id+'/'+data.login_token+'/'+this.appVersion, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  public StringQuery(jsonString)
  {
    return Object.keys(jsonString).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
    }).join('&');
  }

}
