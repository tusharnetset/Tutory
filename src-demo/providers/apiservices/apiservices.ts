import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { BoundCallbackObservable } from 'rxjs/observable/BoundCallbackObservable';
// import { Base64 } from '@ionic-native/base64';

let apiUrl = 'http://www.haryanagyan.com/api/v1/'

@Injectable()
export class AuthServiceProvider {

  User_id: any;
  Auth_Pass: any;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  firstPageApi() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'services/getMainHeading/', options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getCategoryApi(data) {
    let body = this.StringQuery({
      main_heading_id: data,
   });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'services/getHeading/',body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getCategoryDatailApi(data) {
    let body = this.StringQuery({
      heading_listing_id: data,
   });
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'services/getQuestionListing/',body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
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
