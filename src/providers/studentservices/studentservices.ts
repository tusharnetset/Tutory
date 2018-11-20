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
export class StudentservicesProvider {
  baseUrl:any;
  appVersion:any;
  public deviceInfo: deviceInterface = {};
  deviceType:any;
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

   editProfileStudent(data)
   {
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
      this.http.post(this.baseUrl+'edit_profile', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getSubDetailApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'subject_detail/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.category_id+'/'+data.subcategory_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getTutorListApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id: data.user_id,
      login_token: data.login_token,
      category_id:data.category_id,
      subcategory_id:data.subcategory_id,
      level_id:data.level_id,
      sort_by:data.sort_by,
      latitude:data.latitude,
      longitude:data.longitude,
      app_version:this.appVersion
    })
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'tutor_list', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getTutorProfileApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'tutor_profiles/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.tutor_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  suggestedLocations(data){
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'suggested_locations/'+data.user_id+'/'+data.login_token+'/'+this.appVersion,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  bookAppointmentsApi(data)
  {
    let body = this.StringQuery({
      user_id: data.user_id,
      login_token: data.login_token,
      tutor_id:data.tutor_id,
      date: data.date,
      service_id: data.service_id,
      // category_id:data.category_id,
      // subcategory_id:data.subcategory_id,
      // level_id:data.level_id,
      no_of_students: data.no_of_students,
      location_preference: data.location_preference,
      other_location:data.other_location,
      other_location_id:data.other_location_id,
      service_name:data.service_name,
      tutor_rate: data.tutor_rate,
      start_time: data.start_time,
      end_time:  data.end_time,
      app_version: this.appVersion,
      special_instructions:data.special_instructions,
      slots:data.slots,
      currency_id: '85'
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'book_appointment', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  repeatAppointments(data){
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'repeat_appointment/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.tutor_id,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  myAppointmentsApi(data)
  {
    console.log(data);
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

  myAppointmentAction(data)
  {
    console.log(data);
    let body = this.StringQuery({
      student_id : data.student_id,
      login_token:data.login_token,
      reason:data.reason,
      appointment_id:data.appointment_id,
      app_version:this.appVersion,
      action:data.action
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'student_actions', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  favUnFav(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id:data.user_id,
      tutor_id : data.tutor_id,
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
      this.http.post(this.baseUrl+'favorite_tutor', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  filterSaveApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id:data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
      latitude:data.latitude,
      longitude:data.longitude,
      city:data.city,
      category_id:data.category_id,
      subcategory_id:data.subcategory_id,
      level_id:data.level_id,
      price:data.price,
      rating:data.rating
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'filter_list', body,options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  getfavTutorApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'favorites_reviews/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.user_type+'/'+data.screen_type, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  searchLoadApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'category_search/'+data.user_id+'/'+data.login_token+'/'+this.appVersion, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  searchCount(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id:data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
      subcategory_id:data.subcategory_id,
      search_count:data.search_count
    });

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'search_count',body, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  ratingsApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id:data.user_id,
      login_token:data.login_token,
      app_version:this.appVersion,
      appointment_id:data.appointment_id,
      tutor_id:data.tutor_id,
      rating:data.rating,
      feedback:data.feedback
    });

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'tutor_feedback',body, options)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        resolve(err.json());
        reject(err);
      });
    });
  }

  checkTutorReviewApi(data)
  {
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl+'tutor_reviews/'+data.user_id+'/'+data.login_token+'/'+this.appVersion+'/'+data.tutor_id, options)
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
      this.http.get(this.baseUrl+'notifications_list/'+data.user_id+'/'+data.login_token+'/'+this.appVersion ,options)
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

  recommendApi(data)
  {
    console.log(data);
    let body = this.StringQuery({
      user_id  :  data.user_id,
      login_token :  data.login_token,
      app_version :  this.appVersion,
      tutor_id    :  data.tutor_id
    });
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({
      headers: headers
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl+'recommend_tutor', body ,options)
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
