webpackJsonp([2],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentProfileview = /** @class */ (function () {
    function StudentProfileview(alertCtrl, tutorservices, platform, navParams, toastCtrl, spinner, nativeStorage, network, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.tutorservices = tutorservices;
        this.platform = platform;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.navCtrl = navCtrl;
        this.show = false;
    }
    StudentProfileview.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.studentId = this.navParams.get('studentId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getProfile();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    StudentProfileview.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    StudentProfileview.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    StudentProfileview.prototype.getProfile = function () {
        // this.sendProfileData = {
        //    user_id : this.studentId,
        //    login_token:this.token,
        //    user_type :this.userType
        //  }
        //  this.spinner.show();
        //  this.tutorservices.getProfile(this.sendProfileData).then((result) => {
        //    console.log(result);
        //    this.spinner.hide();
        //    this.data1 = result;
        //    this.getProfileData = this.data1.data;
        //    if(this.data1.status == 200){
        //      this.getProfileData = this.data1.data;
        //      this.userLanguages = this.getProfileData.user_languages;
        //    }else{
        //        this.presentToast(this.data1.message);
        //    }
        //  }, (err) => {
        //    console.log(err);
        //  })
    };
    StudentProfileview.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    StudentProfileview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-profileview',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/student-profileview/student-profileview.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Student Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="profile_view">\n  	<div class="big_profile_image">\n		<img *ngIf="!getProfileData?.profile_pic" class="profile_pic_big" src="img/user.jpg">\n		<img *ngIf="getProfileData?.profile_pic" class="profile_pic_big" src="{{getProfileData?.profile_pic}}">\n	</div>\n	<div class="name_image_area center">\n		<img  *ngIf="!getProfileData?.profile_pic" src="img/ash.jpg" alt="" class="user_image" />\n		<img  *ngIf="getProfileData?.profile_pic" src="{{getProfileData?.profile_pic}}" alt="" class="user_image" />\n		<h1>{{getProfileData?.first_name}} {{getProfileData?.last_name}}, {{getProfileData?.age}}</h1>\n\n		<span *ngIf="getProfileData?.student_type == \'US\'" class="white_text">University Student</span>\n		<span *ngIf="getProfileData?.student_type == \'SS\'" class="white_text">School Student</span>\n		<span *ngIf="getProfileData?.student_type == \'WP\'" class="white_text">Working Professional</span>\n		<span *ngIf="getProfileData?.student_type == \'GR\'" class="white_text">Graduate</span>\n	</div>\n	<div padding>\n		<div class="white_box">\n			<p class="bio">{{getProfileData?.bio}}</p>\n			<ul>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Address</h3>\n					<p>{{getProfileData?.address}}</p>\n				</li>\n\n				<li *ngIf="getProfileData?.student_type == \'SS\'">\n					<img src="img/school_icon.png" alt="" />\n					<h3>School Name</h3>\n					<p>{{getProfileData?.school_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.student_type == \'SS\'">\n					<img src="img/grade_icon.png" alt="" />\n					<h3>Grade</h3>\n					<p>{{getProfileData?.grade}}</p>\n				</li>\n				\n\n				<li *ngIf="getProfileData?.stydent_type == \'US\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>University Name</h3>\n					<p>{{getProfileData?.university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'US\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Course Title</h3>\n					<p>{{getProfileData?.course_title}}</p>\n				</li>\n				\n\n				<li *ngIf="getProfileData?.stydent_type == \'GR\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>School/University Name</h3>\n					<p>{{getProfileData?.school_university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'GR\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualification</h3>\n					<p>{{getProfileData?.qualification}}</p>\n				</li>\n\n\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/company_icon.png" alt="" />\n					<h3>Company Name</h3>\n					<p>{{getProfileData?.company_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/service_icon.png" alt="" />\n					<h3>Occupation</h3>\n					<p>{{getProfileData?.occupation}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>School/University Name</h3>\n					<p>{{getProfileData?.school_university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualification</h3>\n					<p>{{getProfileData?.qualification}}</p>\n				</li>\n				\n\n				<li>\n					<img src="img/appointments_icon_active.png" alt="" />\n					<h3>Date of Birth</h3>\n					<p>{{getProfileData?.dob | date:\'dd/MM/yyyy\'}}</p>\n				</li>\n				<li>\n					<img src="img/gender_icon.png" alt="" />\n					<h3>Gender</h3>\n					<p>{{getProfileData?.gender}}</p>\n				</li>\n				<li>\n					<img src="img/mobile_icon.png" alt="" />\n					<h3>Mobile Number</h3>\n					<p>{{getProfileData?.mobile_number}}</p>\n				</li>\n				<li>\n					<img src="img/globe_icon.png" alt="" />\n					<h3>Languages Spoken</h3>\n					<p style="display: inline-block;" *ngFor="let lang of getProfileData?.user_languages; let isLast=last">{{lang.name}} {{isLast ? \'\' : \', \'}}</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/student-profileview/student-profileview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], StudentProfileview);
    return StudentProfileview;
}());

//# sourceMappingURL=student-profileview.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermConditonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermConditonPage = /** @class */ (function () {
    function TermConditonPage(viewCtrl, platform, studentservices, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.studentservices = studentservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    TermConditonPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getTerm = this.navParams.get('term');
        this.show = true;
        console.log('ionViewDidLoad TermConditonPage');
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    TermConditonPage.prototype.dismissCan = function () {
        this.viewCtrl.dismiss();
    };
    TermConditonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-term-conditon',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/term-conditon/term-conditon.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Terms and Condition</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="dismissCan()">\n             <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="white_box" padding *ngIf="show">\n    <div class="content-detail" [innerHTML]="getTerm | keepHtml"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/term-conditon/term-conditon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TermConditonPage);
    return TermConditonPage;
}());

//# sourceMappingURL=term-conditon.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailSubmited; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat_appointment_repeat_appointment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rating_popup_rating_popup__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppointmentDetailSubmited = /** @class */ (function () {
    function AppointmentDetailSubmited(modalCtrl, launchNavigator, platform, alertCtrl, network, toastCtrl, spinner, StudentServices, navCtrl, navParams, nativeStorage) {
        this.modalCtrl = modalCtrl;
        this.launchNavigator = launchNavigator;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.StudentServices = StudentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
    }
    AppointmentDetailSubmited.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apId = this.navParams.get('appointment_id');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getMyAppointmentDetail();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    AppointmentDetailSubmited.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    AppointmentDetailSubmited.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    AppointmentDetailSubmited.prototype.getMyAppointmentDetail = function () {
        var _this = this;
        this.spinner.show();
        this.getAppointmentsDetailData = {
            user_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            user_type: this.userType
        };
        this.StudentServices.myAppointmentsDetailApi(this.getAppointmentsDetailData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.myAppointDetail = _this.data1.data;
                _this.rating = _this.myAppointDetail.rating;
                _this.avgRating = _this.myAppointDetail.avg_rating;
                _this.getBookAppointCategory = _this.myAppointDetail.book_appointment_categories;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    AppointmentDetailSubmited.prototype.goToProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */], { tutorId: id, navTo: 'detail' });
    };
    AppointmentDetailSubmited.prototype.viewMap = function (lat, lng) {
        this.latLng = lat.concat(',' + lng);
        var options = {};
        this.launchNavigator.navigate(this.latLng, options).then(function () {
            console.log("launched successfully");
        }).catch(function () {
            console.log("launch failed");
        });
    };
    AppointmentDetailSubmited.prototype.actionClick = function (appointmentId, action) {
        var _this = this;
        this.spinner.show();
        this.actionData = {
            student_id: this.userId,
            login_token: this.token,
            appointment_id: appointmentId,
            action: action
        };
        this.StudentServices.myAppointmentAction(this.actionData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getMyAppointmentDetail();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    AppointmentDetailSubmited.prototype.giveFeedback = function (id, tId) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__rating_popup_rating_popup__["a" /* RatingPopup */], { appointment_id: id, tutorId: tId });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getMyAppointmentDetail();
        });
        modal.present();
    };
    AppointmentDetailSubmited.prototype.noClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'end_no' });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getMyAppointmentDetail();
        });
        modal.present();
    };
    AppointmentDetailSubmited.prototype.noClickAppStart = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'start_no' });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getMyAppointmentDetail();
        });
        modal.present();
    };
    AppointmentDetailSubmited.prototype.cancelClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'student_cancel' });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getMyAppointmentDetail();
        });
        modal.present();
    };
    AppointmentDetailSubmited.prototype.repeatAppointment = function (apId, tutorId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__repeat_appointment_repeat_appointment__["a" /* RepeatAppointmentPage */], { tutorId: tutorId, bookCategory: this.getBookAppointCategory, catId: this.myAppointDetail.category_id, subCatId: this.myAppointDetail.subcategory_id, trate: this.myAppointDetail.rate, tGrRate: this.myAppointDetail.group_rate, locationPref: this.myAppointDetail.location_preference, noOfStudent: this.myAppointDetail.no_of_students, spclInstruction: this.myAppointDetail.special_instructions, tutorRate: this.myAppointDetail.tutor_rate, tutorGroupRate: this.myAppointDetail.group_rate, oLocations: this.myAppointDetail.other_location });
    };
    // goToBookAppointment(tId,tRate,tGroupRate)
    // {
    //   this.navCtrl.push(RepeatAppointmentPage,{tutorId:tId,tutorRate:tRate,tutorGroupRate:tGroupRate,catId:this.catId,subCatId:this.subId,bookCategory:this.getBookAppointCategory});
    // }
    AppointmentDetailSubmited.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AppointmentDetailSubmited = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-appointment-detail-submited',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-submited/appointment-detail-submited.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="{{myAppointDetail?.profile_pic}}" class="user_img" (click)="goToProfile(myAppointDetail?.tutor_id)">\n			<h2>{{myAppointDetail?.first_name}} {{myAppointDetail?.last_name}}, {{myAppointDetail?.gender}} {{myAppointDetail?.age}}\n				<span class="rating">\n          <rating [(ngModel)]="avgRating"\n              readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n					</rating>\n        </span>\n			</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />{{myAppointDetail?.address}}</p>\n			<p class="bold_font underline view_map" (click)="viewMap(myAppointDetail?.latitude,myAppointDetail?.longitude)" >View on map</p>\n			<h3 class="bold_font">{{myAppointDetail?.tutor_rate}} Q.R/hr</h3>\n			<p *ngIf="myAppointDetail?.no_of_students <= 1">For individual student</p>\n			<p *ngIf="myAppointDetail?.no_of_students > 1">For group of students</p>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>{{myAppointDetail?.start_time}} to {{myAppointDetail?.end_time}}, {{myAppointDetail?.date | date:\'dd/MM/yyyy\'}}</p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>{{myAppointDetail?.category_name}} - <span>{{myAppointDetail?.subcategory_name}}</span> - <span>{{myAppointDetail?.level_name}}</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p *ngIf="myAppointDetail?.location_preference == \'TL\'">Tutor\'s Location</p>\n					<p *ngIf="myAppointDetail?.location_preference == \'SH\'">Student\'s Home</p>\n					<p *ngIf="myAppointDetail?.location_preference == \'AO\'">Any other public location</p>\n					<p *ngIf="myAppointDetail?.location_preference == \'NP\'">No preference</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>{{myAppointDetail?.no_of_students}}</p>\n				</ion-col>\n      </ion-row>\n      <h3 *ngIf="myAppointDetail?.location_preference == \'AO\'" class="bold_font">Other Location</h3>\n			<p *ngIf="myAppointDetail?.location_preference == \'AO\'">{{myAppointDetail?.other_location}}</p>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>{{myAppointDetail?.special_instructions}}</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>{{myAppointDetail?.total_cost}} Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p *ngIf=" myAppointDetail?.student_status == \'R_SE_BS\'"  class="pink_color">Waiting for your tutor to respond.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_AC_BT\'"  class="blue">Your appointment has been accepted by your tutor.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_RJ_BT\'"  class="pink_color">Your appointment has been rejected by your tutor.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_CA_BS\'"  class="green">Appointment cancelled by you.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_CA_BT\'"  class="pink_color">Appointment cancelled by your tutor.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'A_ST_BT\'"  class="green">Tutor has started your appointment.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'S_NCN_BS\'" class="green">You are not ready for this appointment</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'S_CN_BS\'" class="green">Appointment in process.</p>\n		<p *ngIf="myAppointDetail?.student_status == \'A_EN_BT\'"  class="green">Please confirm the appointment has completed or not.</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'END\'"  class="green">Your appointment has been completed</p>\n		<p *ngIf=" myAppointDetail?.student_status == \'EXP\'" class="pink_color">Your appointment has expired</p>\n\n    <h5 *ngIf=" myAppointDetail?.student_status == \'R_CA_BS\'" class="bold_font">Reason:</h5>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_CA_BS\'"  class="reason">{{myAppointDetail?.reason}}</p>\n\n    <h5 *ngIf=" myAppointDetail?.student_status == \'R_RJ_BT\'"  class="bold_font">Reason:</h5>\n		<p  *ngIf=" myAppointDetail?.student_status == \'R_RJ_BT\'"  class="reason">{{myAppointDetail?.reason}}</p>\n\n    <h5 *ngIf=" myAppointDetail?.student_status == \'R_CA_BT\'" class="bold_font">Reason:</h5>\n		<p *ngIf=" myAppointDetail?.student_status == \'R_CA_BT\'" class="reason">{{myAppointDetail?.reason}}</p>\n\n    <h5 *ngIf=" myAppointDetail?.student_status == \'S_NCN_BS\'" class="bold_font">Reason:</h5>\n		<p *ngIf=" myAppointDetail?.student_status == \'S_NCN_BS\'"  class="reason">{{myAppointDetail?.reason}}</p>\n\n		<button  *ngIf=" myAppointDetail?.student_status == \'A_ST_BT\'" class="btn btn-text" ion-button full (click)="actionClick(myAppointDetail?.appointment_id,\'yes\')">Yes</button>\n    <button  *ngIf=" myAppointDetail?.student_status == \'A_ST_BT\'" class="btn btn-text blue_btn" ion-button full (click)="noClickAppStart(myAppointDetail?.appointment_id,\'no\')">No</button>\n\n		<button *ngIf=" myAppointDetail?.student_status == \'R_AC_BT\'"  class="btn btn-text" ion-button full (click)="cancelClick(myAppointDetail?.appointment_id,\'cancel\')">Cancel Appointment</button>\n		<button *ngIf=" myAppointDetail?.student_status == \'R_SE_BS\'"  class="btn btn-text" ion-button full (click)="cancelClick(myAppointDetail?.appointment_id,\'cancel\')">Cancel Appointment</button>\n		<button *ngIf=" myAppointDetail?.student_status == \'END\'  && myAppointDetail?.feedback_given == \'N\' " class="btn btn-text" ion-button full (click)="giveFeedback(myAppointDetail?.appointment_id,myAppointDetail?.tutor_id)">Give Feedback</button>\n\n		<button *ngIf=" myAppointDetail?.student_status == \'A_EN_BT\'"  class="btn btn-text" ion-button (click)="actionClick(myAppointDetail?.appointment_id,\'end_yes\')">Yes</button>\n		<button *ngIf=" myAppointDetail?.student_status == \'A_EN_BT\'" class="btn btn-text blue_btn" ion-button (click)="noClick(myAppointDetail?.appointment_id,\'end_no\')">No</button>\n\n\n		<div *ngIf="myAppointDetail?.student_status == \'END\' && myAppointDetail?.feedback_given != \'N\' " class="center status_area">\n			<h5 class="bold_font">Your Feedback:</h5>\n			<span class="rating">\n	    		<rating *ngIf="myAppointDetail?.rating != null" [(ngModel)]="rating"\n		        readOnly="true" max="5" value="3" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)"></rating>\n	        	<rating *ngIf="myAppointDetail?.rating == null"\n		        readOnly="true" max="5" value="0" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n				</rating>\n	    	</span>\n			<p>{{myAppointDetail?.feedback}}</p>\n    </div>\n    <button *ngIf="myAppointDetail?.student_status == \'END\' && myAppointDetail?.feedback_given != \'N\' " class="btn btn-text" ion-button full (click)="repeatAppointment(myAppointDetail?.appointment_id,myAppointDetail?.tutor_id)">Repeat Appointment</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-submited/appointment-detail-submited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], AppointmentDetailSubmited);
    return AppointmentDetailSubmited;
}());

//# sourceMappingURL=appointment-detail-submited.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RatingPopup = /** @class */ (function () {
    function RatingPopup(viewCtrl, platform, alertCtrl, network, toastCtrl, spinner, studentServices, navCtrl, navParams, nativeStorage) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.studentServices = studentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
    }
    RatingPopup.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apId = this.navParams.get('appointment_id');
        this.tutorId = this.navParams.get('tutorId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            console.log('this.userId', _this.userId);
            _this.token = data.login_token;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
    };
    RatingPopup.prototype.onModelChange = function (val) {
        console.log(val);
        this.ratingVal = val;
    };
    RatingPopup.prototype.submit = function (feedBack) {
        var _this = this;
        console.log(feedBack);
        if (!this.ratingVal) {
            this.presentToast("Please give rating");
            return;
        }
        if (!feedBack) {
            this.presentToast("Please give feedback");
            return;
        }
        this.spinner.show();
        this.ratingData = {
            user_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            tutor_id: this.tutorId,
            rating: this.ratingVal,
            feedback: feedBack
        };
        this.studentServices.ratingsApi(this.ratingData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.viewCtrl.dismiss(_this.apId);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    RatingPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(this.apId);
    };
    RatingPopup.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RatingPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rating-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/rating-popup/rating-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<h3 class="bold_font">Give Feedback</h3>\n				<span class="rating">\n					<!-- <img src="img/star-light.png" alt="" />\n					<img src="img/star-light.png" alt="" />\n					<img src="img/star-light.png" alt="" />\n					<img src="img/star-light.png" alt="" />\n					<img src="img/star-light.png" alt="" />\n					<img src="img/star-light.png" alt="" /> -->\n\n					<rating [(ngModel)]="rate" \n			        readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n					</rating>\n				</span>\n				<ion-list class="input_forms" no-lines>\n					<ion-item>\n				    	<ion-textarea placeholder="Enter Message" [(ngModel)]="feedback"></ion-textarea>\n				    </ion-item>\n				</ion-list>\n				<button class="btn btn-text" ion-button full (click)="submit(feedback)">Submit</button>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/rating-popup/rating-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], RatingPopup);
    return RatingPopup;
}());

//# sourceMappingURL=rating-popup.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_list_tutor_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubjectDetail = /** @class */ (function () {
    function SubjectDetail(spinner, toastCtrl, studentservices, alertCtrl, platform, network, nativeStorage, navParams, navCtrl) {
        this.spinner = spinner;
        this.toastCtrl = toastCtrl;
        this.studentservices = studentservices;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    SubjectDetail.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.catId = this.navParams.get('categoryId');
        this.subId = this.navParams.get('subCateId');
        this.levelId = this.navParams.get('levelId');
        this.catName = this.navParams.get('catName');
        this.subCatName = this.navParams.get('subCateName');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getSubDetail();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getSubDetail();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        console.log('ionViewDidLoad SubjectDetail');
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    SubjectDetail.prototype.getSubDetail = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.getDetaildata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                category_id: this.catId,
                subcategory_id: this.subId
            };
        }
        else {
            this.getDetaildata = {
                user_id: this.userId,
                login_token: this.token,
                category_id: this.catId,
                subcategory_id: this.subId
            };
        }
        this.spinner.show();
        this.studentservices.getSubDetailApi(this.getDetaildata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.getDetailData = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getDetailData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    SubjectDetail.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    SubjectDetail.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    SubjectDetail.prototype.goToTutorList = function () {
        console.log('this.catId', this.catId, 'this.subId', this.subId, 'this.levelId', this.levelId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_list_tutor_list__["a" /* TutorList */], {
            categoryId: this.catId,
            subCateId: this.subId,
            levelId: this.levelId
        });
    };
    SubjectDetail.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SubjectDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subject-detail',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/subject-detail/subject-detail.html"*/'<!--\n  Generated template for the SubjectDetail page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Subject Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ngx-spinner\n		bdColor = "rgba(51, 51, 51, 0.8)"\n		size = "medium"\n		color = "#fff"\n		type = "line-scale-pulse-out-rapid">\n	</ngx-spinner>\n	<div class="subject_image">\n		<img src="img/subject_image.jpg" alt="" />\n	</div>\n	<div padding>\n		<div class="white_box">\n			<h2 class="bold_font">{{getDetailData?.title}}</h2>\n			<h4>{{catName}} > {{subCatName}}</h4>\n			<p>{{getDetailData?.detail}}</p>\n		</div>\n		<button class="btn btn-text" ion-button full (click)="goToTutorList()">Browse Available Tutors</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/subject-detail/subject-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SubjectDetail);
    return SubjectDetail;
}());

//# sourceMappingURL=subject-detail.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_services_popup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TutorList = /** @class */ (function () {
    function TutorList(viewCtrl, zone, toastCtrl, spinner, geolocation, studentservices, alertCtrl, platform, network, nativeStorage, navParams, navCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.geolocation = geolocation;
        this.studentservices = studentservices;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.check = false;
        this.tutorArr = [];
        this.noDataShow = false;
        this.show = false;
        this.allShow = true;
        this.favShow = false;
    }
    TutorList.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.tutorArr = [];
        this.favArr = [];
        this.catId = this.navParams.get('categoryId');
        this.subId = this.navParams.get('subCateId');
        this.levelid = this.navParams.get('levelId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.userType = data.user_type;
            _this.lat = data.latitude;
            _this.long = data.longitude;
            if (_this.lat && _this.long) {
                _this.lat = data.latitude;
                _this.long = data.longitude;
                _this.getTutorListWithlat();
                _this.getFavorites();
            }
            else {
                _this.nativeStorage.getItem('locationLat').then(function (data) {
                    _this.lat = data;
                });
                _this.nativeStorage.getItem('locationLng').then(function (data) {
                    _this.long = data;
                    _this.getTutorListWithlat();
                    _this.getFavorites();
                });
            }
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            console.log(data);
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.nativeStorage.getItem('locationLat').then(function (data) {
                _this.lat = data;
            });
            _this.nativeStorage.getItem('locationLng').then(function (data) {
                _this.long = data;
                _this.getTutorListWithlat();
            });
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getTutorListWithlat();
            _this.getFavorites();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
        this.groups = [{
                name: 'All'
            }, {
                name: 'Favorites'
            }];
    };
    TutorList.prototype.listClick = function (event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue; // don't forget to update the model here
        if (this.selectedItem.name == 'All') {
            this.allShow = true;
            this.favShow = false;
        }
        else {
            this.allShow = false;
            this.favShow = true;
        }
    };
    TutorList.prototype.getTutorListWithlat = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.tutorData = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                category_id: this.catId,
                subcategory_id: this.subId,
                level_id: this.levelid,
                sort_by: "A",
                latitude: this.lat,
                longitude: this.long
            };
            console.log("this.tutorData", this.tutorData);
        }
        else {
            this.tutorData = {
                user_id: this.userId,
                login_token: this.token,
                category_id: this.catId,
                subcategory_id: this.subId,
                level_id: this.levelid,
                sort_by: "A",
                latitude: this.lat,
                longitude: this.long
            };
        }
        this.studentservices.getTutorListApi(this.tutorData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getTutordata = _this.data1.data;
                    if (_this.getTutordata.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                    console.log(_this.getTutordata);
                    for (var i = 0; i < _this.getTutordata.length; i++) {
                        _this.tutorArr.push({
                            tutor_id: _this.getTutordata[i].tutor_id,
                            profile_pic: _this.getTutordata[i].profile_pic,
                            first_name: _this.getTutordata[i].first_name,
                            last_name: _this.getTutordata[i].last_name,
                            age: _this.getTutordata[i].age,
                            address: _this.getTutordata[i].address,
                            distance: _this.getTutordata[i].distance.toFixed(0),
                            rate: _this.getTutordata[i].rate,
                            avg_rating: _this.getTutordata[i].avg_rating,
                            gender: _this.getTutordata[i].gender,
                            categories: _this.getTutordata[i].categories,
                            catLength: _this.getTutordata[i].categories.length - 1
                        });
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TutorList.prototype.getFavorites = function () {
        var _this = this;
        this.favData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType,
            screen_type: 'F'
        };
        this.spinner.show();
        this.studentservices.getfavTutorApi(this.favData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getFavData = _this.data1.data;
                    for (var i = 0; i < _this.getFavData.length; i++) {
                        _this.favArr.push({
                            first_name: _this.getFavData[i].first_name,
                            last_name: _this.getFavData[i].last_name,
                            age: _this.getFavData[i].age,
                            address: _this.getFavData[i].address,
                            tutor_id: _this.getFavData[i].tutor_id,
                            fav_status: _this.getFavData[i].fav_status,
                            profile_pic: _this.getFavData[i].profile_pic,
                            distance: _this.getFavData[i].distance.toFixed(0),
                            avg_rating: _this.getFavData[i].avg_rating,
                            categories: _this.getFavData[i].categories,
                            rate: _this.getFavData[i].rate,
                            gender: _this.getFavData[i].gender,
                            catLength: _this.getFavData[i].categories.length - 1
                        });
                    }
                    if (_this.getFavData.fav_status == 0) {
                        _this.show = true;
                    }
                    else {
                        _this.show = false;
                    }
                    console.log(_this.getFavData);
                });
            }
            else {
                if (_this.data1.message == 'Wrong token entered!.Please try again.') {
                    _this.presentToast("Session expired Please login again");
                    _this.sessionExpired();
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TutorList.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    TutorList.prototype.showAlert = function () {
        var _this = this;
        console.log('Do you want to exit the app?');
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TutorList.prototype.favorite = function () {
    };
    TutorList.prototype.sessionExpired = function () {
        this.nativeStorage.remove('userType');
        this.nativeStorage.remove('userData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__["a" /* SignupType */]);
    };
    TutorList.prototype.goToServicesPopup = function (serv) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__services_popup_services_popup__["a" /* ServicesPopup */], { serv: serv });
        modal.present();
    };
    TutorList.prototype.goToFilters = function () {
        // this.navCtrl.push(Filters,{categoryId:this.catId,subCateId:this.subId,levelId:this.levelid});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* Filters */], { categoryId: this.catId, subCateId: this.subId, levelId: this.levelid }).then(function () {
        });
    };
    TutorList.prototype.goTutorProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */], { tutorId: id, catId: this.catId, subCatId: this.subId });
    };
    TutorList.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TutorList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-list',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/tutor-list/tutor-list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Tutor List</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToFilters()">\n          <ion-icon><img src="img/filter_icon.png" alt="" /></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="sort">\n		<p>Sort By</p>\n		<!-- <ul>\n			<li class="active" (click)="allShow()">All</li>\n			<li (click)="favorite()">Favorites</li>\n    </ul> -->\n\n    <ul id="grouplist" class="list-group">\n        <li class="list-group-item" [ngClass]="{\'active\': selectedItem == item}" (click)="listClick($event, item)" *ngFor="let item of groups">\n           {{ item.name }}\n        </li>\n   </ul>\n\n	</div>\n</ion-header>\n<ion-content padding>\n		<div class="white_box">\n			<ion-list no-lines *ngIf="allShow" >\n				<ion-item *ngFor="let tutor of tutorArr">\n			        <ion-avatar item-start (click)="goTutorProfile(tutor.tutor_id)">\n			        	<img src="{{tutor.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goTutorProfile(tutor.tutor_id)">{{tutor.first_name}} {{tutor.last_name}}, {{tutor.gender}}, {{tutor.age}}\n              <span (click)="goTutorProfile(tutor.tutor_id)" class="rating">\n              <rating  *ngIf="tutor.rating != null"\n					        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n							</rating>\n							<rating *ngIf="tutor.rating == null"  [(ngModel)]="tutor.avg_rating"\n					        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n							</rating>\n			        	</span>\n			        </h2>\n			        <p (click)="goTutorProfile(tutor.tutor_id)" class="location"><img src="img/location_icon.png" alt="" />{{tutor.address}} <span>{{tutor.distance}} km</span></p>\n			        <h4 (click)="goTutorProfile(tutor.tutor_id)" class="bold_font">{{tutor.rate}} Q.R/hr</h4>\n			        <div class="services bold_font" (click)="goToServicesPopup(tutor.categories)">\n			        	<span>{{tutor.categories[0].category_name}}</span>- {{tutor.categories[0].subcategories[0]}}\n			        	<span class="more">+{{tutor.catLength}} more</span>\n			        </div>\n			    </ion-item>\n			    <p style="text-align: center;margin-top: 50%;" *ngIf="check">There is no data found.</p>\n        </ion-list>\n\n\n        <ion-list no-lines *ngIf="favShow">\n            <ion-item *ngFor="let review of favArr">\n			        <ion-avatar item-start (click)="goTutorProfile(tutor.tutor_id)">\n			        	<img src="{{review.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goTutorProfile(review.tutor_id)">{{review.first_name}} {{review.last_name}}, {{review.gender}}, {{review.age}}\n              <span (click)="goTutorProfile(review.tutor_id)" class="rating">\n              <rating  *ngIf="review.rating != null"\n					        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n							</rating>\n							<rating *ngIf="review.rating == null"  [(ngModel)]="review.avg_rating"\n					        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n							</rating>\n			        	</span>\n			        </h2>\n			        <p (click)="goTutorProfile(review.tutor_id)" class="location"><img src="img/location_icon.png" alt="" />{{review.address}} <span>{{review.distance}} km</span></p>\n			        <h4 (click)="goTutorProfile(review.tutor_id)" class="bold_font">{{review.rate}} Q.R/hr</h4>\n			        <div class="services bold_font" (click)="goToServicesPopup(review.categories)">\n			        	<span>{{review.categories[0].category_name}}</span>- {{review.categories[0].subcategories[0]}}\n			        	<span class="more">+{{review.catLength}} more</span>\n			        </div>\n            </ion-item>\n            <p *ngIf="show" style="text-align: center;">There is no data in your favorite list.</p>\n        </ion-list>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/tutor-list/tutor-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TutorList);
    return TutorList;
}());

//# sourceMappingURL=tutor-list.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesOffered; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServicesOffered = /** @class */ (function () {
    function ServicesOffered(alertCtrl, platform, tutorservices, fb, network, toastCtrl, spinner, StudentServices, navCtrl, navParams, nativeStorage) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tutorservices = tutorservices;
        this.fb = fb;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.StudentServices = StudentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.showLevel = true;
        this.show = false;
        this.authForm = fb.group({
            'category': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'subcategory': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'levels': [""]
        });
        this.subCateArr = [];
        this.levelsArr = [];
    }
    ServicesOffered.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.tutorId = this.navParams.get('tutorId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.mobileNumber = data.mobile_number;
            _this.getCategories();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getCategories();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    ServicesOffered.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    ServicesOffered.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    ServicesOffered.prototype.getCategories = function () {
        var _this = this;
        this.sendCategorydata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.spinner.show();
        this.tutorservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCategory = _this.cateD.categories;
                _this.getServicesFun();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesOffered.prototype.levelSend = function (level) {
        console.log("level", level);
        this.levelSel = level;
        if (this.levelSel == 0) {
            this.showLevel = false;
        }
        else {
            this.showLevel = true;
        }
    };
    ServicesOffered.prototype.categorySelect = function (_cateId) {
        console.log(_cateId);
        this._catId = _cateId;
        this.subCateArr = [];
        this.levelsArr = [];
        this._subCatId = "";
        this._levelId = "";
        this.subCateSelect(_cateId);
        this.getLevels(_cateId);
    };
    ServicesOffered.prototype.categorySelectSub = function (_subId) {
        this._subCatId = _subId;
        console.log(_subId);
    };
    ServicesOffered.prototype.subCateSelect = function (_cateId) {
        var _this = this;
        this.sendCategorydata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getSubCategory = _this.cateD.subcategories;
                for (var i = 0; i < _this.getSubCategory.length; i++) {
                    if (_this.getSubCategory[i].category_id == _cateId) {
                        _this.subCateArr.push({
                            name: _this.getSubCategory[i].name,
                            id: _this.getSubCategory[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesOffered.prototype.getLevels = function (_cateId) {
        var _this = this;
        this.sendCategorydata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLevelsD = _this.cateD.levels;
                for (var i = 0; i < _this.getLevelsD.length; i++) {
                    if (_this.getLevelsD[i].category_id == _cateId) {
                        _this.levelsArr.push({
                            name: _this.getLevelsD[i].name,
                            id: _this.getLevelsD[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesOffered.prototype.levelsSelect = function (levelId) {
        console.log(levelId);
        this._levelId = levelId;
    };
    ServicesOffered.prototype.getServicesFun = function () {
        var _this = this;
        this.getCategoriesdata = {
            user_id: this.userId,
            login_token: this.token,
            tutor_id: this.tutorId
        };
        this.spinner.show();
        this.tutorservices.getServices(this.getCategoriesdata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.getServiceData = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.show = false;
                _this.getCategoriesDataa = _this.getServiceData;
                if (_this.getCategoriesDataa.length == 0) {
                    _this.show = true;
                }
                else {
                    _this.show = false;
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesOffered.prototype.submitForm = function (val, valid) {
        var _this = this;
        if (valid) {
            if (this._catId == '' || this._catId == undefined || this._catId == null) {
                this.presentToast("Please select category");
                return;
            }
            if (this._subCatId == "") {
                this.presentToast("Please select sub category");
                return;
            }
            if (this.levelSel == 0) {
                this._levelId = 0;
            }
            else {
                if (this._levelId == "" || this._levelId == undefined || this._levelId == null) {
                    this.presentToast("Please select level");
                    return;
                }
            }
            this.addServiceData = {
                user_id: this.userId,
                login_token: this.token,
                category_id: this._catId,
                subcategory_id: this._subCatId,
                level_id: this._levelId
            };
            this.spinner.show();
            this.tutorservices.addServices(this.addServiceData).then(function (result) {
                console.log(result);
                _this.spinner.hide();
                _this.data1 = result;
                _this.getServiceData = _this.data1.data;
                if (_this.data1.status == 200) {
                    _this.subCateArr = [];
                    _this.levelsArr = [];
                    _this._subCatId = "";
                    _this._levelId = "";
                    _this.getCategories();
                    // this.getServicesFun();
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    ServicesOffered.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ServicesOffered.prototype.deleteServ = function (_id) {
        var _this = this;
        this.deleteData = {
            user_id: this.userId,
            login_token: this.token,
            type: 'SO',
            service_id: _id
        };
        this.spinner.show();
        this.tutorservices.deleteServices(this.deleteData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getServicesFun();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ServicesOffered.prototype.dismiss = function (data) {
        this.navCtrl.pop(data);
    };
    ServicesOffered.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ServicesOffered = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-services-offered',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/services-offered/services-offered.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Services Offered</ion-title>\n    <ion-buttons right class="only_text">\n        <button ion-button (click)="dismiss(data)">\n          <ion-label>Done</ion-label>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="blue_box">\n		<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n			<ion-list class="input_forms" no-lines>\n				<ion-item class="drops">\n			    	<ion-label>Select Category</ion-label>\n				 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n				  	<ion-select formControlName="category" placeholder="Category" (ngModelChange)="categorySelect($event)">\n				    	<ion-option *ngFor="let cat of getCategory" [value]="cat.id" (ionSelect)="levelSend(cat.levels_present)">{{cat.name}}</ion-option>\n				    </ion-select>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'category\'].hasError(\'required\') && authForm.controls[\'category\'].touched">* Category is required!</div>\n			    <ion-item class="drops">\n			    	<ion-label>Select sub category</ion-label>\n				 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n				  	<ion-select formControlName="subcategory" placeholder="Sub category" (ngModelChange)="categorySelectSub($event)">\n				    	<ion-option *ngFor="let subCat of subCateArr" [value]="subCat.id">{{subCat.name}}</ion-option>\n				    </ion-select>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'subcategory\'].hasError(\'required\') && authForm.controls[\'subcategory\'].touched">* Sub category is required!</div>\n				<ion-item *ngIf="showLevel" class="drops">\n			    	<ion-label>Level</ion-label>\n				 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n				  	<ion-select formControlName="levels" placeholder="Level" (ngModelChange)="levelsSelect($event)">\n				    	<ion-option *ngFor="let level of levelsArr" [value]="level.id">{{level.name}}</ion-option>\n				    </ion-select>\n				</ion-item>\n			</ion-list>\n			<button class="btn btn-text" ion-button full type="submit">Add</button>\n		</form>\n	</div>\n	<div padding>\n		<div class="white_box">\n			<!-- when no services-->\n			<!--<div class="no_services">\n				<div class="inner_services">\n					<h1 class="bold_font">OOPS!</h1>\n					<p>Please add services using the drop down menus above, and they will appear here.</p>\n				</div>\n			</div>-->\n			<!-- when no services-->\n\n			<!-- when services-->\n			<div class="services_box">\n				<h3 class="bold_font"><img src="img/service_icon.png" alt="" />My Services</h3>\n				<ion-list no-lines>\n					<ion-item *ngFor="let services of getCategoriesDataa">\n				    	<ion-label>{{services.category}} - <span>{{services.subcategory}}</span><br><span *ngIf="services.level_id != 0" class="btn btn-text">{{services.level}}</span></ion-label>\n					 	<ion-icon (click)="deleteServ(services.service_id)" item-end><img src="img/cross_icon.png" alt=""/></ion-icon>\n					</ion-item>\n					<p *ngIf="show" style="text-align: center;">Please add service using the drop down menus above, and they will appear here.</p>\n				</ion-list>\n			</div>\n			<!-- when services-->\n\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/services-offered/services-offered.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], ServicesOffered);
    return ServicesOffered;
}());

//# sourceMappingURL=services-offered.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentservicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var StudentservicesProvider = /** @class */ (function () {
    function StudentservicesProvider(httpBaseUrl, device, http, toastCtrl) {
        this.httpBaseUrl = httpBaseUrl;
        this.device = device;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.deviceInfo = {};
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
    }
    StudentservicesProvider.prototype.getCategorySubCategory = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'categories_subcategories/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getProfile = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'my_profile/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.editProfileStudent = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            user_type: data.user_type,
            timezone: data.timezone,
            latitude: data.latitude,
            longitude: data.longitude,
            user_id: data.user_id,
            login_token: data.login_token,
            first_name: data.first_name,
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
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'edit_profile', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getSubDetailApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'subject_detail/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.category_id + '/' + data.subcategory_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getTutorListApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            category_id: data.category_id,
            subcategory_id: data.subcategory_id,
            level_id: data.level_id,
            sort_by: data.sort_by,
            latitude: data.latitude,
            longitude: data.longitude,
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'tutor_list', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getTutorProfileApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'tutor_profiles/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.suggestedLocations = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'suggested_locations/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.bookAppointmentsApi = function (data) {
        var _this = this;
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            tutor_id: data.tutor_id,
            date: data.date,
            service_id: data.service_id,
            // category_id:data.category_id,
            // subcategory_id:data.subcategory_id,
            // level_id:data.level_id,
            no_of_students: data.no_of_students,
            location_preference: data.location_preference,
            other_location: data.other_location,
            other_location_id: data.other_location_id,
            service_name: data.service_name,
            tutor_rate: data.tutor_rate,
            start_time: data.start_time,
            end_time: data.end_time,
            app_version: this.appVersion,
            special_instructions: data.special_instructions,
            slots: data.slots,
            currency_id: '85'
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'book_appointment', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.repeatAppointments = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'repeat_appointment/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.myAppointmentsApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'my_appointments/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.myAppointmentsDetailApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'appointment_details/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.appointment_id + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.myAppointmentAction = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            student_id: data.student_id,
            login_token: data.login_token,
            reason: data.reason,
            appointment_id: data.appointment_id,
            app_version: this.appVersion,
            action: data.action
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'student_actions', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.favUnFav = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            tutor_id: data.tutor_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            status: data.status
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'favorite_tutor', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.filterSaveApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            category_id: data.category_id,
            subcategory_id: data.subcategory_id,
            level_id: data.level_id,
            price: data.price,
            rating: data.rating
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'filter_list', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getfavTutorApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'favorites_reviews/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type + '/' + data.screen_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.searchLoadApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'category_search/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.searchCount = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            subcategory_id: data.subcategory_id,
            search_count: data.search_count
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'search_count', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.ratingsApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            appointment_id: data.appointment_id,
            tutor_id: data.tutor_id,
            rating: data.rating,
            feedback: data.feedback
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'tutor_feedback', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.checkTutorReviewApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'tutor_reviews/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.getNotificationsApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'notifications_list/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.notificationOnOffApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            status: data.status
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'notifications_setting', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.badgeCount = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'batch_count/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.badgeCountReadStatus = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'read_status/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.badgeCountDelete = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'delete_notifications/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.recommendApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            tutor_id: data.tutor_id
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'recommend_tutor', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    StudentservicesProvider.prototype.StringQuery = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    StudentservicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], StudentservicesProvider);
    return StudentservicesProvider;
}());

//# sourceMappingURL=studentservices.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneVerification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_profile_create_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_create_profile_teacher_create_profile__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PhoneVerification = /** @class */ (function () {
    function PhoneVerification(alertCtrl, network, toastCtrl, spinner, authService, fb, navCtrl, navParams, nativeStorage) {
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authService = authService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.authForm = fb.group({
            'one': ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'two': ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'three': ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            'four': ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]
        });
    }
    PhoneVerification.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userData').then(function (data) {
            console.log(data);
            _this.otpGet = data.otp;
            _this.token = data.login_token;
            _this.signUpType = data.user_type;
            _this.mobileNumber = data.mobile_number;
            var toast = _this.toastCtrl.create({
                message: "Your OTP is" + ' ' + data.otp,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'close',
                dismissOnPageChange: true,
            });
            toast.onDidDismiss(function (data, role) {
                if (role == 'close') {
                }
                else {
                }
            });
            toast.present();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
    };
    PhoneVerification.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    // moveFocus(nextElement) {
    //   nextElement.setFocus();
    // }
    PhoneVerification.prototype.moveInput = function (event, nextElement, prevElement) {
        var bcSpc = event.key;
        console.log('backdata ', bcSpc, prevElement, nextElement);
        if (bcSpc == 'Backspace') {
            console.log('previousss', bcSpc, prevElement);
            prevElement.setFocus();
        }
        else if (bcSpc == 'Unidentified' || bcSpc == 'Enter') {
            console.log("chl rha hai na tu ");
            return;
        }
        else {
            console.log('else', nextElement);
            nextElement.setFocus();
            if (this.authForm.value.one + this.authForm.value.two + this.authForm.value.three + this.authForm.value.four == this.otpGet) {
            }
        }
    };
    PhoneVerification.prototype.submitForm = function (val, valid) {
        var _this = this;
        this.otpCon = this.authForm.value.one.concat(this.authForm.value.two);
        this.otpSe = this.otpCon.concat(this.authForm.value.three);
        this.otpVal = this.otpSe.concat(this.authForm.value.four);
        if (valid) {
            this.spinner.show();
            this.otpData = {
                device_id: this.deviceId,
                device_type: 'A',
                type: this.signUpType,
                otp: this.otpVal,
                mobile_number: this.mobileNumber,
                app_version: '1.0'
            };
            this.authService.otpApi(this.otpData).then(function (result) {
                _this.spinner.hide();
                _this.data1 = result;
                if (_this.data1.status == 200) {
                    _this.presentToast(_this.data1.message);
                    _this.getOtpData = _this.data1.data;
                    _this.nativeStorage.setItem('userData', _this.getOtpData).then(function (result) {
                        console.log("succesfully set ", result);
                    });
                    if (_this.getOtpData.user_type == 'S') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_profile_create_profile__["a" /* CreateProfile */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacher_create_profile_teacher_create_profile__["a" /* TeacherCreateProfile */]);
                    }
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }
        else {
            this.presentToast("PLease fill in required fields");
        }
    };
    PhoneVerification.prototype.resendOtp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'You want to resend otp',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.spinner.show();
                        _this.resendOtpData = {
                            device_id: _this.deviceId,
                            device_type: "A",
                            type: 'S',
                            mobile_number: _this.mobileNumber,
                            app_version: "1.0"
                        };
                        _this.authService.resendotpApi(_this.resendOtpData).then(function (result) {
                            _this.spinner.hide();
                            _this.data1 = result;
                            if (_this.data1.status == 200) {
                                var toast = _this.toastCtrl.create({
                                    message: "Your OTP is" + ' ' + _this.data1.data.otp,
                                    position: 'top',
                                    showCloseButton: true,
                                    closeButtonText: 'close',
                                    dismissOnPageChange: true,
                                });
                                toast.onDidDismiss(function (data, role) {
                                    if (role == 'close') {
                                    }
                                    else {
                                    }
                                });
                                toast.present();
                                _this.presentToast(_this.data1.message);
                            }
                            else {
                                _this.presentToast(_this.data1.message);
                            }
                        }, function (err) {
                            _this.spinner.hide();
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PhoneVerification.prototype.goToCreateProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_profile_create_profile__["a" /* CreateProfile */]);
    };
    PhoneVerification.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PhoneVerification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phone-verification',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/phone-verification/phone-verification.html"*/'<ion-header class="transparent_header with_back">\n  <ion-navbar>\n    <ion-title>Phone Verification</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="bg center">\n	<p padding>We’ve sent a 4-digit code to <span class="bold_font">(+91) {{mobileNumber}}</span> Enter the code below.</p>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n	<ion-list class="input_forms" no-lines>\n\n    <ion-row>\n			<ion-col col-3>\n				<ion-item>\n			    	<ion-input type="tel" [formControl]="authForm.controls[\'one\']" id="myText" placeholder=""  maxlength="1" tabindex="1" #a (keyup)="moveInput($event,b,a)" ></ion-input>\n			    </ion-item>\n			</ion-col>\n			<ion-col col-3>\n				<ion-item>\n			    	<ion-input type="tel" [formControl]="authForm.controls[\'two\']"  id="val2" placeholder="" maxlength="1" tabindex="2" #b (keyup)="moveInput($event,c,a)"></ion-input>\n			    </ion-item>\n			</ion-col>\n			<ion-col col-3>\n				<ion-item>\n			    	<ion-input type="tel" [formControl]="authForm.controls[\'three\']"  id="val3" placeholder="" maxlength="1" tabindex="3" #c (keyup)="moveInput($event,d,b)" ></ion-input>\n			    </ion-item>\n			</ion-col>\n			<ion-col col-3>\n				<ion-item>\n			    	<ion-input type="tel" [formControl]="authForm.controls[\'four\']"  id="val4" placeholder="" maxlength="1" tabindex="4" #d (keyup)="moveInput($event,d,c)"></ion-input>\n			    </ion-item>\n			</ion-col>\n		</ion-row>\n\n\n	</ion-list>\n	<button class="btn btn-text" ion-button full type="submit">Verify Number</button>\n	</form>\n	<p class="resend" (click)="resendOtp()"><span>Resend Code?</span></p>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/phone-verification/phone-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_5__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], PhoneVerification);
    return PhoneVerification;
}());

//   <ion-list >
//     <ion-item *ngFor="let date of arrPush; let i = index;">
//        <input type="time" (input)="onChangeTime($event.target.value)" />
//        <ion-icon name="remove-circle" (click)="remove(i)"></ion-icon>
//     </ion-item>
//   </ion-list>
// </div>
// <button (click)="addMore()">
//   add more
// </button>
//   <button (click)="senddata()">
//   Send Data
// </button> -->
// addMore(){
//   this.arr = this.currentNumber++;
//   console.log(this.arr);
//   this.arrPush.push(this.arr)
// }
// remove(index){
//   (this.arrPush).splice(index, 1);
//   (this.timeArr).splice(index, 1);
// }
// onChangeTime(date){
//   console.log(date);
//   this.timeArr.push(date)
// }
// senddata(){
//   console.log(this.timeArr);
// }
//# sourceMappingURL=phone-verification.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__address_map_address_map__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var CreateProfile = /** @class */ (function () {
    function CreateProfile(events, mapsAPILoader, file, sanitizer, platform, modalCtrl, zone, fileTransfer, httpBaseUrl, network, camera, actionSheetCtrl, toastCtrl, spinner, authServices, fb, navCtrl, navParams, nativeStorage) {
        var _this = this;
        this.events = events;
        this.mapsAPILoader = mapsAPILoader;
        this.file = file;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.fileTransfer = fileTransfer;
        this.httpBaseUrl = httpBaseUrl;
        this.network = network;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authServices = authServices;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.US = false;
        this.SS = false;
        this.WP = false;
        this.GR = false;
        this.timezone = __WEBPACK_IMPORTED_MODULE_9_moment_timezone__["tz"].guess();
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.authForm = fb.group({
            'first_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'last_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'dob': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'address': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'mobile_number': [""],
            'student_type': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'university_name': [""],
            'course_title': [""],
            'school_name': [""],
            'grade': [""],
            'company_name': [""],
            'occupation': [""],
            'school_university_name': [""],
            'qualification': [""],
            'city_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'gender': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'languages': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'bio': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        events.subscribe('user:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.getAddressLat = user.lat;
            _this.getAddressLng = user.lng;
            _this.authForm.get('address').setValue(user.address);
        });
    }
    CreateProfile.prototype.showAddressModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__address_map_address_map__["a" /* AddressMapPage */], { navigateTo: 'student_create' });
    };
    CreateProfile.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.mobileNumber = data.mobile_number;
            _this.authForm.get('mobile_number').setValue(_this.mobileNumber);
            _this.getLanguages();
        });
        this.nativeStorage.getItem('locationLat').then(function (data) {
            _this.lat = data;
        });
        this.nativeStorage.getItem('locationLng').then(function (data) {
            _this.long = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getLanguages();
        });
    };
    CreateProfile.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    CreateProfile.prototype.changeSelect = function (val) {
        this.selectType = val;
        if (val == 'US') {
            this.US = true;
            this.SS = false;
            this.WP = false;
            this.GR = false;
        }
        else if (val == 'SS') {
            this.SS = true;
            this.WP = false;
            this.GR = false;
            this.US = false;
        }
        else if (val == 'WP') {
            this.WP = true;
            this.GR = false;
            this.US = false;
            this.SS = false;
        }
        else if (val == 'GR') {
            this.GR = true;
            this.US = false;
            this.SS = false;
            this.WP = false;
        }
    };
    CreateProfile.prototype.getLanguages = function () {
        var _this = this;
        this.languagesData = {
            user_id: this.userId,
            user_token: this.token
        };
        this.authServices.getLanguagesAndLocationPreference(this.languagesData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.langD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLang = _this.langD.languages;
                _this.getCity();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CreateProfile.prototype.getCity = function () {
        var _this = this;
        this.spinner.show();
        this.citiesData = {
            user_id: this.userId,
            user_token: this.token,
            country_id: '174'
        };
        this.authServices.getCities(this.citiesData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCitiesData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    CreateProfile.prototype.getData = function (date) {
        console.log(date);
        var timeDiff = Math.abs(Date.now() - date);
        //Used Math.floor instead of Math.ceil
        //so 26 years and 140 days would be considered as 26, not 27.
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        console.log(this.age);
    };
    CreateProfile.prototype.clickImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add picture with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicture();
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'undo',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateProfile.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    CreateProfile.prototype.gallery = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    CreateProfile.prototype.dobChange = function (event, dob) {
        var birthdate = new Date(dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.a < 16) {
            this.presentToast("Your age must be atleast 16 to register as a student");
        }
    };
    CreateProfile.prototype.submitForm = function (val, valid) {
        var _this = this;
        var birthdate = new Date(this.authForm.value.dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (valid) {
            if (this.a < 16) {
                this.presentToast("Your age must be atleast 16 to register as a student");
                return;
            }
            if (this.selectType == 'US') {
                if (this.authForm.value.university_name == '' || this.authForm.value.course_title == '') {
                    this.presentToast("please fill in university and course name");
                    return;
                }
            }
            else if (this.selectType == 'SS') {
                if (this.authForm.value.school_name == '' || this.authForm.value.grade == '') {
                    this.presentToast("please fill in school_name and grade");
                    return;
                }
            }
            else if (this.selectType == 'WP') {
                if (this.authForm.value.company_name == '' || this.authForm.value.occupation == '' || this.authForm.value.school_university_name == '' || this.authForm.value.qualification == '') {
                    this.presentToast("please fill in company_name, occupation, school_university_name and qualification");
                    return;
                }
            }
            else if (this.selectType == 'GR') {
                if (this.authForm.value.school_university_name == '' || this.authForm.value.qualification == '') {
                    this.presentToast("please fill in school_university_name and qualification");
                    return;
                }
            }
            if (this.getAddressLat == "" || this.getAddressLat == undefined || this.getAddressLat == null) {
                this.latS = this.lat;
                this.lngS = this.long;
            }
            else {
                this.latS = this.getAddressLat;
                this.lngS = this.getAddressLng;
            }
            if (this.imgData) {
                this.spinner.show();
                var url_1 = this.baseUrl + 'create_profile';
                var fileTransfer = this.fileTransfer.create();
                var targetPath_1 = this.imgData;
                var filename = targetPath_1.split("/").pop();
                filename = filename.split('?');
                var options_1 = {
                    fileKey: "profile_pic",
                    fileName: filename[0],
                    chunkedMode: false,
                    mimeType: "image/jpg",
                    params: {
                        device_id: this.deviceId,
                        device_type: 'A',
                        user_type: this.userType,
                        timezone: this.timezone,
                        latitude: this.latS,
                        longitude: this.lngS,
                        user_id: this.userId,
                        login_token: this.token,
                        app_version: this.appVersion,
                        first_name: this.authForm.value.first_name,
                        last_name: this.authForm.value.last_name,
                        dob: this.authForm.value.dob,
                        address: this.authForm.value.address,
                        student_type: this.authForm.value.student_type,
                        university_name: this.authForm.value.university_name,
                        course_title: this.authForm.value.course_title,
                        school_name: this.authForm.value.school_name,
                        grade: this.authForm.value.grade,
                        company_name: this.authForm.value.company_name,
                        occupation: this.authForm.value.occupation,
                        school_university_name: this.authForm.value.school_university_name,
                        qualification: this.authForm.value.qualification,
                        city_id: this.authForm.value.city_id,
                        gender: this.authForm.value.gender,
                        languages: this.authForm.value.languages.toString(),
                        bio: this.authForm.value.bio,
                        age: this.a
                    }
                };
                console.log("optionssss", options_1);
                fileTransfer.upload(targetPath_1, url_1, options_1).then(function (data) {
                    _this.spinner.hide();
                    console.log(targetPath_1, url_1, options_1);
                    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa gyaaa", data);
                    _this.data1 = JSON.parse(data.response);
                    console.log("yhi hai wo randua jo ", _this.data1.data);
                    if (_this.data1.status == 200) {
                        _this.events.unsubscribe('user:created');
                        _this.presentToast(_this.data1.message);
                        _this.nativeStorage.setItem('userData', _this.data1.data)
                            .then(function (result) { return console.log('Stored item!', result); }, function (error) { return console.error('Error storing item', error); });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_student_tabs_student__["a" /* TabsStudentPage */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                    var mesg = JSON.parse(err.body);
                    _this.presentToast(mesg.message);
                });
            }
            else {
                this.spinner.show();
                this.sendCreateProfileData = {
                    device_id: this.deviceId,
                    device_type: 'A',
                    user_type: this.userType,
                    timezone: this.timezone,
                    latitude: this.latS,
                    longitude: this.lngS,
                    user_id: this.userId,
                    login_token: this.token,
                    app_version: this.appVersion,
                    first_name: this.authForm.value.first_name,
                    last_name: this.authForm.value.last_name,
                    dob: this.authForm.value.dob,
                    address: this.authForm.value.address,
                    student_type: this.authForm.value.student_type,
                    university_name: this.authForm.value.university_name,
                    course_title: this.authForm.value.course_title,
                    school_name: this.authForm.value.school_name,
                    grade: this.authForm.value.grade,
                    company_name: this.authForm.value.company_name,
                    occupation: this.authForm.value.occupation,
                    school_university_name: this.authForm.value.school_university_name,
                    qualification: this.authForm.value.qualification,
                    city_id: this.authForm.value.city_id,
                    gender: this.authForm.value.gender,
                    languages: this.authForm.value.languages,
                    bio: this.authForm.value.bio,
                    age: this.a
                };
                this.authServices.createProfileStudent(this.sendCreateProfileData).then(function (result) {
                    _this.spinner.hide();
                    _this.data1 = result;
                    if (_this.data1.status == 200) {
                        _this.events.unsubscribe('user:created');
                        _this.presentToast(_this.data1.message);
                        _this.nativeStorage.setItem('userData', _this.data1.data).then(function (result) {
                        });
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_student_tabs_student__["a" /* TabsStudentPage */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    CreateProfile.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    CreateProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CreateProfile.prototype.goToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
    };
    CreateProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/create-profile/create-profile.html"*/'<ion-header class="no_back">\n  <ion-navbar>\n    <ion-title>Create Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="upload_outer center">\n		<div class="upload_inner" (click)="clickImage()">\n			<img *ngIf="!imgData" src="img/camera_icon.png" alt="" class="camera_icon" />\n			<img *ngIf="imgData" src="{{imgData}}"  alt="" class="upload_inner" />\n		</div>\n		<p>Upload Profile Picture</p>\n	</div>\n	<div padding>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n				    </ion-item>\n				    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'first_name\'].hasError(\'required\') && authForm.controls[\'first_name\'].touched">* Firstname is required!</div>\n				</ion-col>\n\n				<ion-col col-50>\n				    <ion-item>\n				    	<ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n				    </ion-item>\n				    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'last_name\'].hasError(\'required\') && authForm.controls[\'last_name\'].touched">* Lastname is required!</div>\n				</ion-col>\n			</ion-row>\n			<ion-item class="drops">\n			  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n			  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date of Birth" formControlName="dob" (ionChange)="dobChange($event,dob)"></ion-datetime>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'dob\'].hasError(\'required\') && authForm.controls[\'dob\'].touched">* Date of birth is required!</div>\n			<ion-item class="drops">\n		    	<ion-label>User Type</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="student_type" placeholder="User Type" (ngModelChange)="changeSelect($event)">\n			    	<ion-option value="US">University Student</ion-option>\n			    	<ion-option value="SS">School Student</ion-option>\n			    	<ion-option value="WP">Working Professional</ion-option>\n			    	<ion-option value="GR">Parent</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'student_type\'].hasError(\'required\') && authForm.controls[\'student_type\'].touched">* User Type is required!</div>\n\n\n			<ion-item  *ngIf="US">\n		    	<ion-input type="text" placeholder="University Name" formControlName="university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="US">\n		    	<ion-input type="text" placeholder="Course Title" formControlName="course_title"></ion-input>\n		    </ion-item>\n\n		    <ion-item  *ngIf="SS">\n		    	<ion-input type="text" placeholder="School Name" formControlName="school_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="SS">\n		    	<ion-input type="text" placeholder="Grade" formControlName="grade"></ion-input>\n		    </ion-item>\n\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Company Name" formControlName="company_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Occupation" formControlName="occupation"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="School/University Name" formControlName="school_university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n		    </ion-item>\n\n	      	<ion-item  *ngIf="GR">\n		    	<ion-input type="text" placeholder="School/University Name" formControlName="school_university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="GR">\n		    	<ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n		    </ion-item>\n\n			<ion-item (tap)="showAddressModal()">\n		    	<ion-input type="text" readonly id="txtHome1" placeholder="Address" formControlName="address" ></ion-input><!-- (tap)="showAddressModal()" -->\n      </ion-item>\n		    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'address\'].hasError(\'required\') && authForm.controls[\'address\'].touched">* Address is required!</div>\n\n		    <ion-item class="drops">\n		    	<ion-label>City</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="city_id" placeholder="City">\n			    	<ion-option *ngFor="let city of getCitiesData" [value]="city.id">{{city.name}}</ion-option>\n			    	<!-- <ion-option value="s">San Francisco</ion-option> -->\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'city_id\'].hasError(\'required\') && authForm.controls[\'city_id\'].touched">* City is required!</div>\n\n			<ion-item>\n		    	<ion-input disabled="true" type="text" formControlName="mobile_number" placeholder="Mobile Number"></ion-input>\n		    </ion-item>\n\n		    <ion-item class="drops">\n		    	<ion-label>Gender</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="gender" placeholder="Gender" >\n			    	<ion-option value="M">Male</ion-option>\n			    	<ion-option value="F">Female</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'gender\'].hasError(\'required\') && authForm.controls[\'gender\'].touched">* Gender is required!</div>\n\n			<ion-item>\n		    	<ion-textarea placeholder="Biography"  formControlName="bio" ></ion-textarea>\n		    </ion-item>\n		    <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'bio\'].hasError(\'required\') && authForm.controls[\'bio\'].touched">* Biography is required!</div>\n\n		    <ion-item class="drops">\n		    	<ion-label>Languages Spoken</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="languages" placeholder="Languages Spoken" multiple="true">\n			    	<ion-option *ngFor="let lang of getLang" [value]="lang.id">{{lang.name}}</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'languages\'].hasError(\'required\') && authForm.controls[\'languages\'].touched">* Language is required!</div>\n\n		</ion-list>\n		<button class="btn btn-text" ion-button full type="submit">Submit</button>\n		</form>\n		<p class="center"><span class="underline" (click)="goToHome()">Skip</span></p>\n	</div>\n\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/create-profile/create-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_15__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], CreateProfile);
    return CreateProfile;
}());

//# sourceMappingURL=create-profile.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactUs = /** @class */ (function () {
    function ContactUs(zone, alertCtrl, platform, network, nativeStorage, spinner, navCtrl, navParams, toastCtrl) {
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
    }
    ContactUs.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    ContactUs.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    ContactUs.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    ContactUs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/contact-us/contact-us.html"*/'<!--\n  Generated template for the ContactUs page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="white_box">\n		<div class="blue_box center">\n			<img src="img/logo.png" alt="" />\n		</div>\n		<ul>\n			<li>\n				<img alt="" src="img/contact_icon.png">\n				<h3>Contact Number</h3>\n				<p>+01 987-6543-210</p>\n			</li>\n			<li>\n				<img alt="" src="img/email_icon.png">\n				<h3>Email Address</h3>\n				<p>Tutorry@gmail.com</p>\n      </li>\n      <li>\n				<img alt="" src="img/globe_icon.png">\n				<h3>Website</h3>\n				<p>Tutorry-app.com</p>\n			</li>\n			<li>\n				<img alt="" src="img/address_icon.png">\n				<h3>Address</h3>\n				<p>202 Main Town, San Francisco, CA, USA</p>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ContactUs);
    return ContactUs;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RejectPopup = /** @class */ (function () {
    function RejectPopup(navParams, tutorservices, spinner, nativeStorage, network, viewCtrl) {
        this.navParams = navParams;
        this.tutorservices = tutorservices;
        this.spinner = spinner;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.viewCtrl = viewCtrl;
    }
    RejectPopup.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apId = this.navParams.get('appointment_id');
        this.action = this.navParams.get('action');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
        });
    };
    RejectPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    RejectPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reject-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/reject-popup/reject-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center" padding>\n					<h3>Your appointment has been rejected by <span class="bold_font">“James Thomas”</span> for <span class="bold_font">“Skill Test Preparation - TOFEL”.</span></h3>\n					<p><span class="bold_font">Reason:</span>Need to attend urgent meeting so i cannot accept your appointment at the moment.</p>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/reject-popup/reject-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], RejectPopup);
    return RejectPopup;
}());

//# sourceMappingURL=reject-popup.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartPopup = /** @class */ (function () {
    function StartPopup(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    StartPopup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPopup');
    };
    StartPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    StartPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-start-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/start-popup/start-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center" padding>\n				<h3>Ready!! <span class="bold_font">“James Thomas”</span> has started your appointment, please confirm.</h3>\n				<button class="btn btn-text blue_btn" ion-button (click)="dismiss()">No</button>\n				<button class="btn btn-text" ion-button (click)="dismiss()">Yes</button>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/start-popup/start-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], StartPopup);
    return StartPopup;
}());

//# sourceMappingURL=start-popup.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(viewCtrl, alertCtrl, platform, studentservices, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.studentservices = studentservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getAboutUs = this.navParams.get('about');
        this.show = true;
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    AboutUsPage.prototype.dismissCan = function () {
        this.viewCtrl.dismiss();
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/about-us/about-us.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Us</ion-title>\n    <ion-buttons right>\n	    <button ion-button (click)="dismissCan()">\n	         <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n	    </button>\n	  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="white_box" padding *ngIf="show">\n      <div class="content-detail" [innerHTML]="getAboutUs | keepHtml"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqPage = /** @class */ (function () {
    function FaqPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.dismissCan = function () {
        this.viewCtrl.dismiss();
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-faq',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/faq/faq.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>FAQ\'s</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="dismissCan()">\n        <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="white_box" padding>\n    <h4>What is Lorem Ipsum?</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\n    <h4>Where does it come from?</h4>\n    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>\n    <h4>Why do we use it?</h4>\n    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherMyProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offered_services_offered__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_edit_profile_teacher_edit_profile__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_availability_view_availability__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reviews_reviews__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_teacher_notifications_teacher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TeacherMyProfile = /** @class */ (function () {
    function TeacherMyProfile(toastCtrl, spinner, nativeStorage, tutorservices, network, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.nativeStorage = nativeStorage;
        this.tutorservices = tutorservices;
        this.network = network;
        this.navCtrl = navCtrl;
        this.show = false;
    }
    TeacherMyProfile.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            console.log("localstorage data", data);
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.mobileNumber = data.mobile_number;
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getProfile();
        });
    };
    TeacherMyProfile.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyProfile.prototype.getProfile = function () {
        var _this = this;
        this.sendProfileData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.tutorservices.getProfile(this.sendProfileData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getProfileData = _this.data1.data;
                _this.ratingData = _this.getProfileData.avg_rating;
                _this.userLanguages = _this.getProfileData.user_languages;
                _this.userLevels = _this.getProfileData.teaching_levels;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyProfile.prototype.goToEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfile */]);
    };
    TeacherMyProfile.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyProfile.prototype.goToServices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_offered_services_offered__["a" /* ServicesOffered */], { tutorId: this.userId });
    };
    TeacherMyProfile.prototype.goToTeacherEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__teacher_edit_profile_teacher_edit_profile__["a" /* TeacherEditProfile */]);
    };
    TeacherMyProfile.prototype.goToReviews = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reviews_reviews__["a" /* Reviews */], { tutor_id: id, com_screen: 'my_profile' });
    };
    TeacherMyProfile.prototype.goToViewAvailability = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__view_availability_view_availability__["a" /* ViewAvailability */], { tutorId: this.userId });
    };
    TeacherMyProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherMyProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-my-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-my-profile/teacher-my-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Profile</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToNotifications()">\n          <ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n           <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n 			 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile_view">\n  	<div class="big_profile_image">\n		<img  *ngIf="!getProfileData?.profile_pic" class="profile_pic_big" src="img/user.jpg">\n		<img *ngIf="getProfileData?.profile_pic" class="profile_pic_big" src="{{getProfileData?.profile_pic}}">\n	</div>\n\n	<div class="name_image_area center">\n		<img *ngIf="!getProfileData?.profile_pic" src="img/user.jpg" alt="" class="user_image" />\n		<img *ngIf="getProfileData?.profile_pic" src="{{getProfileData?.profile_pic}}" alt="" class="user_image" />\n\n		<h1>{{getProfileData?.first_name}} {{getProfileData?.last_name}}, {{getProfileData?.gender}}, {{getProfileData?.age}}</h1>\n		<span class="rating">\n			<!-- <img src="img/star-yellow.png" alt="" />\n			<img src="img/star-yellow.png" alt="" />\n			<img src="img/star-yellow.png" alt="" />\n			<img src="img/star-yellow.png" alt="" />\n			<img src="img/star-light.png" alt="" /> -->\n			<rating *ngIf="ratingData != null" [(ngModel)]="ratingData"\n	        	readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n			</rating>\n			<rating *ngIf="ratingData == null"\n	        	readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n			</rating>\n		</span>\n		<span class="white_text underline" (click)="goToReviews(getProfileData?.id)">({{getProfileData?.reviews_count}} reviews)</span>\n	</div>\n\n	<div padding>\n		<div class="white_box">\n			<div class="edit_icon"><img src="img/edit_icon.png" alt="" (click)="goToTeacherEditProfile()" /></div>\n			<p class="bio">{{getProfileData?.bio}}.</p>\n			<ul>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Address</h3>\n					<p>{{getProfileData?.address}}</p>\n				</li>\n				<li>\n					<img src="img/mobile_icon.png" alt="" />\n					<h3>Phone Number</h3>\n					<p>{{getProfileData?.mobile_number}}</p>\n				</li>\n				<li>\n					<img src="img/calendar_icon.png" alt="" />\n					<h3>Date of Birth</h3>\n					<p>{{getProfileData?.dob | date:\'dd/MM/yyyy\'}}</p>\n				</li>\n				<li>\n					<img src="img/service_icon.png" alt="" />\n					<h3>Services Offered</h3>\n					<p (click)="goToServices()"><span class="bold_font underline">View, Delete and Add New Services</span></p>\n				</li>\n				<li>\n					<img src="img/riyal_icon.png" alt="" />\n					<h3>Rate Per Hour</h3>\n					<p><span>{{getProfileData?.rate}} Q.R/hr</span> for individual students</p>\n					<p><span>{{getProfileData?.group_rate}} Q.R/hr</span> for group of students</p>\n				</li>\n				<li>\n					<img src="img/calendar_icon.png" alt="" />\n					<h3>Schedule Availability</h3>\n					<p (click)="goToViewAvailability()"><span class="bold_font underline">View Availability</span></p>\n        </li>\n        <li>\n					<img src="img/university_icon.png" alt="" />\n					<h3>Teaching Levels</h3>\n					<p style="display: inline-block;" *ngFor="let lang of getProfileData?.teaching_levels; let isLast=last">{{lang.name}}{{isLast ? \'\' : \' , \'}}</p>\n				</li>\n				<li>\n					<img src="img/globe_icon.png" alt="" />\n					<h3>Languages Spoken</h3>\n					<p style="display: inline-block;" *ngFor="let lang of getProfileData?.user_languages; let isLast=last">{{lang.name}}{{isLast ? \'\' : \' , \'}}</p>\n				</li>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Preferred Service Location</h3>\n					<p *ngIf="getProfileData?.location_preference == \'TL\'">Tutor Location</p>\n					<p *ngIf="getProfileData?.location_preference == \'SH\'">Student Location</p>\n					<p *ngIf="getProfileData?.location_preference == \'AO\'">Any other public location</p>\n					<p *ngIf="getProfileData?.location_preference == \'NP\'">No preference</p>\n        </li>\n\n        <li *ngIf="getProfileData?.location_preference == \'AO\'">\n          <img src="img/address_icon.png" alt="" />\n          <h3>Other Location</h3>\n          <p>{{getProfileData?.other_location}}</p>\n        </li>\n\n				<li>\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualifications</h3>\n					<p>{{getProfileData?.qualification}}</p>\n				</li>\n				<li>\n					<img src="img/university_icon.png" alt="" />\n					<h3>University Name</h3>\n					<p>{{getProfileData?.university_name}}</p>\n				</li>\n				<li>\n					<img src="img/info_icon.png" alt="" />\n					<h3>Other Information</h3>\n					<p>{{getProfileData?.other_info}}.</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-my-profile/teacher-my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_8__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TeacherMyProfile);
    return TeacherMyProfile;
}());

//# sourceMappingURL=teacher-my-profile.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_profile_my_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__address_map_address_map__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var EditProfile = /** @class */ (function () {
    function EditProfile(events, alertCtrl, mapsAPILoader, studentservices, file, sanitizer, platform, modalCtrl, zone, fileTransfer, httpBaseUrl, network, camera, actionSheetCtrl, toastCtrl, spinner, authServices, fb, navCtrl, navParams, nativeStorage) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.studentservices = studentservices;
        this.file = file;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.fileTransfer = fileTransfer;
        this.httpBaseUrl = httpBaseUrl;
        this.network = network;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authServices = authServices;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.US = false;
        this.SS = false;
        this.WP = false;
        this.GR = false;
        this.timezone = __WEBPACK_IMPORTED_MODULE_9_moment_timezone__["tz"].guess();
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.authForm = fb.group({
            'first_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'last_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'dob': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'address': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'mobile_number': [""],
            'email': [""],
            'student_type': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'university_name': [""],
            'course_title': [""],
            'school_name': [""],
            'grade': [""],
            'company_name': [""],
            'occupation': [""],
            'school_university_name': [""],
            'qualification': [""],
            'city_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'gender': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'languages': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'bio': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        this.langPush = [];
        events.subscribe('user:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.getAddLat = user.lat;
            _this.getAddLng = user.lng;
            _this.authForm.get('address').setValue(user.address);
        });
    }
    EditProfile.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__autocomplete_autocomplete__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.authForm.setValue({ address: data });
        });
        modal.present();
    };
    EditProfile.prototype.goAddressMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__address_map_address_map__["a" /* AddressMapPage */], { navigateTo: 'student_edit' });
    };
    EditProfile.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.lat = data.latitude;
            _this.long = data.longitude;
            _this.getProfile();
            _this.getLanguages();
        });
        this.nativeStorage.getItem('locationLat').then(function (data) {
            _this.getCurrentlat = data;
        });
        this.nativeStorage.getItem('locationLng').then(function (data) {
            _this.getCurrentlng = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getLanguages();
        });
        var nativeHomeInputBox = document.getElementById('txtHome1').getElementsByTagName('input')[0];
        // let autocomplete1 = new google.maps.places.Autocomplete(nativeHomeInputBox, searchOptions);
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log('placessss', place);
                    _this.address = place.formatted_address;
                    _this.authForm.get('address').setValue(_this.address);
                    console.log('address', _this.address);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                });
            });
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    EditProfile.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    EditProfile.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    EditProfile.prototype.getProfile = function () {
        var _this = this;
        this.sendProfileData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.studentservices.getProfile(this.sendProfileData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.getProfileData = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getProfileData = _this.data1.data;
                _this.languagescheck = _this.getProfileData.user_languages;
                _this.authForm.get('first_name').setValue(_this.getProfileData.first_name);
                _this.authForm.get('last_name').setValue(_this.getProfileData.last_name);
                _this.authForm.get('email').setValue(_this.getProfileData.email);
                _this.authForm.get('dob').setValue(_this.getProfileData.dob);
                _this.authForm.get('address').setValue(_this.getProfileData.address);
                _this.authForm.get('mobile_number').setValue(_this.getProfileData.mobile_number);
                _this.authForm.get('student_type').setValue(_this.getProfileData.student_type);
                _this.authForm.get('university_name').setValue(_this.getProfileData.university_name);
                _this.authForm.get('course_title').setValue(_this.getProfileData.course_title);
                _this.authForm.get('school_name').setValue(_this.getProfileData.school_name);
                _this.authForm.get('grade').setValue(_this.getProfileData.grade);
                _this.authForm.get('company_name').setValue(_this.getProfileData.company_name);
                _this.authForm.get('occupation').setValue(_this.getProfileData.occupation);
                _this.authForm.get('school_university_name').setValue(_this.getProfileData.school_university_name);
                _this.authForm.get('qualification').setValue(_this.getProfileData.qualification);
                _this.authForm.get('city_id').setValue(_this.getProfileData.city_id);
                _this.authForm.get('gender').setValue(_this.getProfileData.gender);
                _this.authForm.get('bio').setValue(_this.getProfileData.bio);
                for (var i = 0; i < _this.languagescheck.length; i++) {
                    _this.langPush.push(_this.languagescheck[i].language_id);
                    _this.authForm.get('languages').setValue(_this.langPush);
                }
                if (_this.getProfileData.student_type == 'US') {
                    _this.US = true;
                    _this.SS = false;
                    _this.WP = false;
                    _this.GR = false;
                }
                else if (_this.getProfileData.student_type == 'SS') {
                    _this.SS = true;
                    _this.WP = false;
                    _this.GR = false;
                    _this.US = false;
                }
                else if (_this.getProfileData.student_type == 'WP') {
                    _this.WP = true;
                    _this.GR = false;
                    _this.US = false;
                    _this.SS = false;
                }
                else if (_this.getProfileData.student_type == 'GR') {
                    _this.GR = true;
                    _this.US = false;
                    _this.SS = false;
                    _this.WP = false;
                }
                else {
                    console.log("kuch ni");
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfile.prototype.changeSelect = function (val) {
        this.selectType = val;
        if (val == 'US') {
            this.US = true;
            this.SS = false;
            this.WP = false;
            this.GR = false;
        }
        else if (val == 'SS') {
            this.SS = true;
            this.WP = false;
            this.GR = false;
            this.US = false;
        }
        else if (val == 'WP') {
            this.WP = true;
            this.GR = false;
            this.US = false;
            this.SS = false;
        }
        else if (val == 'GR') {
            this.GR = true;
            this.US = false;
            this.SS = false;
            this.WP = false;
        }
        else {
            console.log("kuch ni");
        }
    };
    EditProfile.prototype.getLanguages = function () {
        var _this = this;
        this.languagesData = {
            user_id: this.userId,
            user_token: this.token
        };
        this.authServices.getLanguagesAndLocationPreference(this.languagesData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.langD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLang = _this.langD.languages;
                _this.getCity();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditProfile.prototype.getCity = function () {
        var _this = this;
        this.spinner.show();
        this.citiesData = {
            user_id: this.userId,
            user_token: this.token,
            country_id: '174'
        };
        this.authServices.getCities(this.citiesData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCitiesData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    EditProfile.prototype.getData = function (date) {
        console.log(date);
        var timeDiff = Math.abs(Date.now() - date);
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        console.log(this.age);
    };
    EditProfile.prototype.clickImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add picture with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicture();
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'undo',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditProfile.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    EditProfile.prototype.gallery = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    EditProfile.prototype.dobChange = function (event, dob) {
        var birthdate = new Date(dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.a < 16) {
            this.presentToast("Your age must be atleast 16 to register as a student");
        }
    };
    EditProfile.prototype.submitForm = function (val, valid) {
        var _this = this;
        var birthdate = new Date(this.authForm.value.dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (valid) {
            if (this.a < 16) {
                this.presentToast("Your age must be atleast 16 to register as a student");
                return;
            }
            if (this.selectType == 'US') {
                if (this.authForm.value.university_name == '' || this.authForm.value.course_title == '') {
                    this.presentToast("please fill in university and course name");
                    return;
                }
            }
            else if (this.selectType == 'SS') {
                if (this.authForm.value.school_name == '' || this.authForm.value.grade == '') {
                    this.presentToast("please fill in school_name and grade");
                    return;
                }
            }
            else if (this.selectType == 'WP') {
                if (this.authForm.value.company_name == '' || this.authForm.value.occupation == '' || this.authForm.value.school_university_name == '' || this.authForm.value.qualification == '') {
                    this.presentToast("please fill in company_name, occupation, school_university_name and qualification");
                    return;
                }
            }
            else if (this.selectType == 'GR') {
                if (this.authForm.value.school_university_name == '' || this.authForm.value.qualification == '') {
                    this.presentToast("please fill in school_university_name and qualification");
                    return;
                }
            }
            if (this.getAddLat == "" || this.getAddLat == undefined || this.getAddLat == null) {
                if (this.getProfileData.latitude == "" || this.getProfileData.latitude == undefined || this.getProfileData.latitude == null) {
                    this.latS = this.getCurrentlat;
                    this.longS = this.getCurrentlng;
                }
                else {
                    this.latS = this.getProfileData.latitude;
                    this.longS = this.getProfileData.longitude;
                }
            }
            else {
                this.latS = this.getAddLat;
                this.longS = this.getAddLng;
            }
            if (this.imgData) {
                this.spinner.show();
                var url_1 = this.baseUrl + 'edit_profile';
                var fileTransfer = this.fileTransfer.create();
                var targetPath_1 = this.imgData;
                var filename = targetPath_1.split("/").pop();
                filename = filename.split('?');
                var options_1 = {
                    fileKey: "profile_pic",
                    fileName: filename[0],
                    chunkedMode: false,
                    mimeType: "image/jpg",
                    params: {
                        device_id: this.deviceId,
                        device_type: 'A',
                        user_type: this.userType,
                        timezone: this.timezone,
                        latitude: this.latS,
                        longitude: this.longS,
                        user_id: this.userId,
                        login_token: this.token,
                        app_version: this.appVersion,
                        first_name: this.authForm.value.first_name,
                        last_name: this.authForm.value.last_name,
                        dob: this.authForm.value.dob,
                        address: this.authForm.value.address,
                        student_type: this.authForm.value.student_type,
                        university_name: this.authForm.value.university_name,
                        course_title: this.authForm.value.course_title,
                        school_name: this.authForm.value.school_name,
                        grade: this.authForm.value.grade,
                        company_name: this.authForm.value.company_name,
                        occupation: this.authForm.value.occupation,
                        school_university_name: this.authForm.value.school_university_name,
                        qualification: this.authForm.value.qualification,
                        city_id: this.authForm.value.city_id,
                        gender: this.authForm.value.gender,
                        languages: this.authForm.value.languages.toString(),
                        bio: this.authForm.value.bio,
                        age: this.a
                    }
                };
                console.log("optionssss", options_1);
                fileTransfer.upload(targetPath_1, url_1, options_1).then(function (data) {
                    _this.spinner.hide();
                    console.log(targetPath_1, url_1, options_1);
                    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa gyaaa", data);
                    _this.data1 = JSON.parse(data.response);
                    console.log(_this.data1);
                    if (_this.data1.status == 200) {
                        _this.presentToast(_this.data1.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__my_profile_my_profile__["a" /* MyProfile */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                    var mesg = JSON.parse(err.body);
                    _this.presentToast(mesg.message);
                });
            }
            else {
                this.spinner.show();
                this.sendEditProfileData = {
                    device_id: this.deviceId,
                    device_type: 'A',
                    user_type: this.userType,
                    timezone: this.timezone,
                    latitude: this.latS,
                    longitude: this.longS,
                    user_id: this.userId,
                    login_token: this.token,
                    app_version: this.appVersion,
                    first_name: this.authForm.value.first_name,
                    last_name: this.authForm.value.last_name,
                    dob: this.authForm.value.dob,
                    address: this.authForm.value.address,
                    student_type: this.authForm.value.student_type,
                    university_name: this.authForm.value.university_name,
                    course_title: this.authForm.value.course_title,
                    school_name: this.authForm.value.school_name,
                    grade: this.authForm.value.grade,
                    company_name: this.authForm.value.company_name,
                    occupation: this.authForm.value.occupation,
                    school_university_name: this.authForm.value.school_university_name,
                    qualification: this.authForm.value.qualification,
                    city_id: this.authForm.value.city_id,
                    gender: this.authForm.value.gender,
                    languages: this.authForm.value.languages,
                    bio: this.authForm.value.bio,
                    age: this.a
                };
                this.studentservices.editProfileStudent(this.sendEditProfileData).then(function (result) {
                    _this.spinner.hide();
                    _this.data1 = result;
                    if (_this.data1.status == 200) {
                        _this.presentToast(_this.data1.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__my_profile_my_profile__["a" /* MyProfile */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    EditProfile.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    EditProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/edit-profile/edit-profile.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="upload_outer center">\n		<div class="upload_inner" (click)="clickImage()">\n			<img *ngIf="imgData" src="{{imgData}}" alt="" class="upload_inner" />\n			<img *ngIf="!imgData" src="{{getProfileData?.profile_pic}}"  alt="" class="upload_inner" />\n		</div>\n		<p>Update Profile Picture</p>\n	</div>\n	<div padding>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n				    </ion-item>\n				    <div style="color: red" *ngIf="authForm.controls[\'first_name\'].hasError(\'required\') && authForm.controls[\'first_name\'].touched">* Firstname is required!</div>\n				</ion-col>\n\n				<ion-col col-50>\n				    <ion-item>\n				    	<ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n				    </ion-item>\n				    <div style="color: red" *ngIf="authForm.controls[\'last_name\'].hasError(\'required\') && authForm.controls[\'last_name\'].touched">* Lastname is required!</div>\n				</ion-col>\n			</ion-row>\n\n			 <ion-item>\n		    	<ion-input disabled="true" type="text" type="email" placeholder="Email" formControlName="email"></ion-input>\n		    </ion-item>\n\n			<ion-item class="drops">\n			  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n			  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date of Birth" formControlName="dob" (ionChange)="dobChange($event,dob)"></ion-datetime>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'dob\'].hasError(\'required\') && authForm.controls[\'dob\'].touched">* Lastname is required!</div>\n			<ion-item class="drops">\n		    	<ion-label>User Type</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="student_type" placeholder="User Type" (ngModelChange)="changeSelect($event)">\n			    	<ion-option value="US">University Student</ion-option>\n			    	<ion-option value="SS">School Student</ion-option>\n			    	<ion-option value="WP">Working Professional</ion-option>\n			    	<ion-option value="GR">Parent</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="color: red"  *ngIf="authForm.controls[\'student_type\'].hasError(\'required\') && authForm.controls[\'student_type\'].touched">* User Type is required!</div>\n\n\n			<ion-item  *ngIf="US">\n		    	<ion-input type="text" placeholder="University Name" formControlName="university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="US">\n		    	<ion-input type="text" placeholder="Course Title" formControlName="course_title"></ion-input>\n		    </ion-item>\n\n		    <ion-item  *ngIf="SS">\n		    	<ion-input type="text" placeholder="School Name" formControlName="school_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="SS">\n		    	<ion-input type="text" placeholder="Grade" formControlName="grade"></ion-input>\n		    </ion-item>\n\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Company Name" formControlName="company_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Occupation" formControlName="occupation"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="School/University Name" formControlName="school_university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="WP">\n		    	<ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n		    </ion-item>\n\n	      	<ion-item  *ngIf="GR">\n		    	<ion-input type="text" placeholder="School/University Name" formControlName="school_university_name"></ion-input>\n		    </ion-item>\n		    <ion-item  *ngIf="GR">\n		    	<ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n		    </ion-item>\n\n\n			<ion-item (tap)="goAddressMap()">\n		    	<ion-input type="text" id="txtHome1" placeholder="Address" formControlName="address" ></ion-input><!-- (tap)="showAddressModal()" -->\n		    </ion-item>\n		    <div style="color: red"  *ngIf="authForm.controls[\'address\'].hasError(\'required\') && authForm.controls[\'address\'].touched">* Address is required!</div>\n\n		    <ion-item class="drops">\n		    	<ion-label>City</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="city_id" placeholder="City">\n			    	<ion-option *ngFor="let city of getCitiesData" [value]="city.id">{{city.name}}</ion-option>\n			    	<!-- <ion-option value="s">San Francisco</ion-option> -->\n			    </ion-select>\n			</ion-item>\n			<div style="color: red"  *ngIf="authForm.controls[\'city_id\'].hasError(\'required\') && authForm.controls[\'city_id\'].touched">* City is required!</div>\n\n			<ion-item>\n		    	<ion-input disabled="true" type="text" formControlName="mobile_number" placeholder="Mobile Number"></ion-input>\n		    </ion-item>\n\n		    <ion-item class="drops">\n		    	<ion-label>Gender</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="gender" placeholder="Gender" >\n			    	<ion-option value="M">Male</ion-option>\n			    	<ion-option value="F">Female</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="color: red"  *ngIf="authForm.controls[\'gender\'].hasError(\'required\') && authForm.controls[\'gender\'].touched">* Gender is required!</div>\n\n			<ion-item>\n		    	<ion-textarea placeholder="Biography"  formControlName="bio" ></ion-textarea>\n		    </ion-item>\n		    <div style="color: red"  *ngIf="authForm.controls[\'bio\'].hasError(\'required\') && authForm.controls[\'bio\'].touched">* Biography is required!</div>\n\n		    <ion-item class="drops">\n		    	<ion-label>Languages Spoken</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="languages" placeholder="Languages Spoken" multiple="true">\n			    	<ion-option *ngFor="let lang of getLang" [value]="lang.id">{{lang.name}}</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'languages\'].hasError(\'required\') && authForm.controls[\'languages\'].touched">* Language is required!</div>\n\n		</ion-list>\n		<button class="btn btn-text" ion-button full type="submit">Update profile</button>\n		</form>\n	</div>\n\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_16__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], EditProfile);
    return EditProfile;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyProfile = /** @class */ (function () {
    function MyProfile(alertCtrl, platform, studentservices, toastCtrl, spinner, nativeStorage, network, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.studentservices = studentservices;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.navCtrl = navCtrl;
        this.show = false;
        this.proShow = false;
        this.skipShow = false;
    }
    MyProfile.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            console.log("getuserdata", data);
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.mobileNumber = data.mobile_number;
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    MyProfile.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    MyProfile.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyProfile.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyProfile.prototype.getProfile = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.skipShow = true;
        }
        else {
            this.sendProfileData = {
                user_id: this.userId,
                login_token: this.token,
                user_type: this.userType
            };
            this.spinner.show();
            this.studentservices.getProfile(this.sendProfileData).then(function (result) {
                console.log(result);
                _this.spinner.hide();
                _this.proShow = true;
                _this.data1 = result;
                _this.getProfileData = _this.data1.data;
                if (_this.data1.status == 200) {
                    _this.getProfileData = _this.data1.data;
                    _this.userLanguages = _this.getProfileData.user_languages;
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    MyProfile.prototype.goToEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfile */]);
    };
    MyProfile.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* Notifications */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/my-profile/my-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Profile</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToNotifications()">\n          	<ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n      	 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n          	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="profile_view" >\n  <div *ngIf="proShow">\n  	<div class="big_profile_image">\n		<img *ngIf="!getProfileData?.profile_pic" class="profile_pic_big" src="img/user.jpg">\n		<img *ngIf="getProfileData?.profile_pic" class="profile_pic_big" src="{{getProfileData?.profile_pic}}">\n	</div>\n	<div class="name_image_area center">\n		<img  *ngIf="!getProfileData?.profile_pic" src="img/ash.jpg" alt="" class="user_image" />\n		<img  *ngIf="getProfileData?.profile_pic" src="{{getProfileData?.profile_pic}}" alt="" class="user_image" />\n		<h1>{{getProfileData?.first_name}} {{getProfileData?.last_name}}, {{getProfileData?.gender}}, {{getProfileData?.age}}</h1>\n\n		<span *ngIf="getProfileData?.student_type == \'US\'" class="white_text">University Student</span>\n		<span *ngIf="getProfileData?.student_type == \'SS\'" class="white_text">School Student</span>\n		<span *ngIf="getProfileData?.student_type == \'WP\'" class="white_text">Working Professional</span>\n		<span *ngIf="getProfileData?.student_type == \'PR\'" class="white_text">Parent</span>\n	</div>\n	<div padding>\n		<div class="white_box">\n			<div class="edit_icon"><img src="img/edit_icon.png" alt="" (click)="goToEditProfile()" /></div>\n			<p class="bio">{{getProfileData?.bio}}</p>\n			<ul>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Address</h3>\n					<p>{{getProfileData?.address}}</p>\n				</li>\n\n				<li *ngIf="getProfileData?.student_type == \'SS\'">\n					<img src="img/school_icon.png" alt="" />\n					<h3>School Name</h3>\n					<p>{{getProfileData?.school_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.student_type == \'SS\'">\n					<img src="img/grade_icon.png" alt="" />\n					<h3>Grade</h3>\n					<p>{{getProfileData?.grade}}</p>\n				</li>\n\n\n				<li *ngIf="getProfileData?.stydent_type == \'US\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>University Name</h3>\n					<p>{{getProfileData?.university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'US\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Course Title</h3>\n					<p>{{getProfileData?.course_title}}</p>\n				</li>\n\n\n				<li *ngIf="getProfileData?.stydent_type == \'GR\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>School/University Name</h3>\n					<p>{{getProfileData?.school_university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'GR\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualification</h3>\n					<p>{{getProfileData?.qualification}}</p>\n				</li>\n\n\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/company_icon.png" alt="" />\n					<h3>Company Name</h3>\n					<p>{{getProfileData?.company_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/service_icon.png" alt="" />\n					<h3>Occupation</h3>\n					<p>{{getProfileData?.occupation}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/university_icon.png" alt="" />\n					<h3>School/University Name</h3>\n					<p>{{getProfileData?.school_university_name}}</p>\n				</li>\n				<li *ngIf="getProfileData?.stydent_type == \'WP\'">\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualification</h3>\n					<p>{{getProfileData?.qualification}}</p>\n				</li>\n\n\n				<li>\n					<img src="img/appointments_icon_active.png" alt="" />\n					<h3>Date of Birth</h3>\n					<p>{{getProfileData?.dob | date:\'dd/MM/yyyy\'}}</p>\n				</li>\n				<li>\n					<img src="img/gender_icon.png" alt="" />\n					<h3>Gender</h3>\n					<p *ngIf="getProfileData?.gender == \'M\'">Male</p>\n					<p *ngIf="getProfileData?.gender == \'F\'">Female</p>\n				</li>\n				<li>\n					<img src="img/mobile_icon.png" alt="" />\n					<h3>Mobile Number</h3>\n					<p>{{getProfileData?.mobile_number}}</p>\n				</li>\n				<li>\n					<img src="img/globe_icon.png" alt="" />\n					<h3>Languages Spoken</h3>\n					<p style="display: inline-block;" *ngFor="let lang of getProfileData?.user_languages; let isLast=last">{{lang.name}} {{isLast ? \'\' : \', \'}}</p>\n				</li>\n			</ul>\n		</div>\n  </div>\n</div>\n  <p style="text-align: center;margin-top: 50%;" *ngIf="skipShow">Please create a account first.</p>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], MyProfile);
    return MyProfile;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessPopup = /** @class */ (function () {
    function SuccessPopup(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SuccessPopup.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 5000);
    };
    SuccessPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    SuccessPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-success-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/success-popup/success-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<div class="gradient_bg big_icon center">\n					<img src="img/book_appointment_icon.png" alt="" />\n				</div>\n				<div class="pop_content" padding>\n					<p>Your request for appointment is submitted successfully. Please wait for Tutor\'s response.</p>\n				</div>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/success-popup/success-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], SuccessPopup);
    return SuccessPopup;
}());

//# sourceMappingURL=success-popup.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapSearchPage = /** @class */ (function () {
    function MapSearchPage(events, nativeGeocoder, nativeStorage, mapsAPILoader, loadingCtrl, navCtrl, navParams, viewCtrl, zone, menuCtrl) {
        var _this = this;
        this.events = events;
        this.nativeGeocoder = nativeGeocoder;
        this.nativeStorage = nativeStorage;
        this.mapsAPILoader = mapsAPILoader;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.events.subscribe('latLng:created', function (event, time) {
            console.log('Welcome', event, 'at', time);
            _this.lat = event.lat;
            _this.lng = event.lng;
        });
        this.events.subscribe('hello', function (data) {
            alert('subscribed to hello with data');
        });
        this.markerArr = [];
    }
    MapSearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navTo = this.navParams.get('navigateTo');
        this.markData = this.navParams.get('mapData');
        console.log("this.markData", this.markData);
        this.nativeStorage.getItem('locationLat').then(function (result) {
            _this.lat = result;
        });
        this.nativeStorage.getItem('locationLng').then(function (result) {
            _this.lng = result;
        });
        setTimeout(function () {
            _this.loadMap();
        }, 1000);
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
    };
    MapSearchPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map1', mapOptions);
        var markers = this.map.addMarker({
            title: 'My location',
            icon: 'blue',
            position: {
                lat: this.lat,
                lng: this.lng
            }
        })
            .then(function (marker) {
            var _loop_1 = function (i) {
                var htmlInfoWindow = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* HtmlInfoWindow */]();
                var frame = document.createElement('div');
                frame.innerHTML = [
                    // '<h5 style="margin: 0;padding: 0 10px 6px;overflow: hidden;font-size: 1.4rem;text-overflow: ellipsis;white-space: nowrap;">'+this.markData[i].address+'</h5><br>',
                    '<p style="margin: 0;font-size: 10px;position: relative;text-align:center;">' + _this.markData[i].address + '</p>',
                    '<button style="background-color: #fe3464;border-radius: 16px;font-size: 11px; color:#fff;margin-top: 8px;padding: 5px 10px;">Select this location</button>'
                ].join("");
                frame.getElementsByTagName("button")[0].addEventListener("click", function (data) {
                    // this.navCtrl.push(EventDetail,{eventId:this.loadEventdata[i].eventId,catId:this.loadEventdata[i].category.id,navig:'map'});
                    var obj = {
                        address: _this.markData[i].address,
                        id: _this.markData[i].id
                    };
                    _this.events.publish('markData:created', obj, Date.now());
                    _this.navCtrl.pop();
                });
                htmlInfoWindow.setContent(frame, { width: "auto", height: "80px" });
                setTimeout(function () {
                    var markers = _this.map.addMarker({
                        icon: {
                            // url: this.apiUrl+this.loadEventdata[i].eventImage,
                            size: {
                                width: 50,
                                height: 50
                            }
                        },
                        position: {
                            lat: _this.markData[i].latitude,
                            lng: _this.markData[i].longitude
                        }
                    })
                        .then(function (marker) {
                        _this.markerArr.push(marker);
                        marker.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
                            htmlInfoWindow.open(marker);
                        });
                    });
                }, 1000);
            };
            for (var i = 0; i < _this.markData.length; i++) {
                _loop_1(i);
            }
        });
    };
    MapSearchPage.prototype.geocodeCheck = function (lat, lng) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) {
            console.log(JSON.stringify(result[0]));
            _this.address = JSON.stringify(result[0]);
        })
            .catch(function (error) { return console.log(error); });
    };
    MapSearchPage.prototype.updateSearch = function () {
        console.log("chla");
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: '' } }, function (predictions, status) {
            console.log(status);
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    MapSearchPage.prototype.chooseItem = function (item) {
        // this.viewCtrl.dismiss(this.geo);
        this.geo = item;
        this.geoCode(this.geo);
        // let obj = {
        //   address:this.geo
        // }
        // this.events.publish('user:created', obj, Date.now());
        // this.navCtrl.pop();
        // if(this.navTo == 'student_create'){
        //   this.navCtrl.push(CreateProfile,{val:obj});
        // }else if(this.navTo == 'tutor_create'){
        //   this.navCtrl.push(TeacherCreateProfile,{val:obj});
        // }else if(this.navTo == 'student_edit'){
        //   this.navCtrl.push(EditProfile,{val:obj});
        // }else if(this.navTo == 'tutor_edit'){
        //   this.navCtrl.push(TeacherEditProfile,{val:obj});
        // }else{
        //   this.navCtrl.push(Filters,{val:obj});
        // }
    };
    MapSearchPage.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            _this.mapCam(_this.latitude, _this.longitude);
            var obj = {
                address: address,
                lat: _this.latitude,
                lng: _this.longitude
            };
            _this.events.publish('user:created', obj, Date.now());
            // this.navCtrl.pop();
        });
    };
    MapSearchPage.prototype.mapCam = function (lat, long) {
        this.map.animateCamera({
            target: {
                lat: lat,
                lng: long
            },
            zoom: 10
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapSearchPage.prototype, "mapElement", void 0);
    MapSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map-search',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/map-search/map-search.html"*/'<ion-header class="with_back">\n  	<ion-navbar>\n    	<ion-title>Custom Location</ion-title>\n  	</ion-navbar>\n    <ion-searchbar id="txtHome1" [(ngModel)]="autocomplete.query" (keyup)="updateSearch()" placeholder="Search here" ></ion-searchbar>\n    <ion-list>\n       <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n         {{ item }}\n       </ion-item>\n     </ion-list></ion-header>\n<ion-content>\n	<div id="map1" style="height: 100%;width: 100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/map-search/map-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], MapSearchPage);
    return MapSearchPage;
}());

//# sourceMappingURL=map-search.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAvailability; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewAvailability = /** @class */ (function () {
    function ViewAvailability(zone, alertCtrl, platform, network, nativeStorage, spinner, tutorservices, navCtrl, navParams, toastCtrl) {
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.tutorservices = tutorservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.calShow = false;
        this.dataCom = false;
        this.show = true;
        this.hide = false;
        this.check = false;
        this.anArray = [];
        this.newAttribute = {};
        this.currentEvents = [];
        this.slotArr = [];
        this.slotArr2 = [];
        this.getDatesArr = [];
        this.slotData = [];
        this.markDisabled = function (date) {
            var current = new Date();
            return date < current;
        };
        this.optionsRange = {
            pickMode: 'range'
        };
        this.optionsMulti = {
            pickMode: 'multi'
        };
    }
    ViewAvailability.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dateArr = [];
        this.tutorId = this.navParams.get('tutorId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getViewAvailability();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.userType = "U";
            _this.loginTokenSkip = data.login_token;
            _this.getViewAvailability();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getViewAvailability();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    ViewAvailability.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    ViewAvailability.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    ViewAvailability.prototype.getViewAvailability = function () {
        var _this = this;
        this.slotData = [];
        this.calShow = false;
        if (this.userIdSkip) {
            this.getSlotsdata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                tutor_id: this.tutorId
            };
        }
        else {
            this.getSlotsdata = {
                user_id: this.userId,
                login_token: this.token,
                tutor_id: this.tutorId
            };
        }
        this.spinner.show();
        this.tutorservices.checkViewAvailability(this.getSlotsdata).then(function (result) {
            console.log(result);
            _this.dataCom = true;
            _this.spinner.hide();
            _this.data1 = result;
            console.log("this.currentEvents ", _this.currentEvents);
            if (_this.data1.status == 200) {
                _this.getdates = _this.data1.dates;
                _this.zone.run(function () {
                    for (var i = 0; i < _this.getdates.length; i++) {
                        var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(_this.getdates[i], 'YYYY/MM/DD');
                        console.log(check);
                        _this.events = {
                            year: check.format('YYYY'),
                            month: check.format('M'),
                            date: check.format('D')
                        };
                        _this.eventsDouble = {
                            year: _this.events.year,
                            month: _this.events.month - 1,
                            date: _this.events.date
                        };
                        _this.currentEvents.push(_this.eventsDouble);
                    }
                    console.log('this.currentEvents', _this.currentEvents);
                    _this.calShow = true;
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ViewAvailability.prototype.deleteSlot = function (_id, date) {
        var _this = this;
        this.slotData = [];
        this.deleteData = {
            user_id: this.userId,
            login_token: this.token,
            type: 'SL',
            slot_date: date,
            slot_id: _id
        };
        this.spinner.show();
        this.tutorservices.deleteServices(this.deleteData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ViewAvailability.prototype.addNewSlots = function () {
        this.show = false;
        this.hide = true;
        this.anArray.push(this.newAttribute);
        this.newAttribute = {};
    };
    ViewAvailability.prototype.addMore = function () {
        if (this.anArray.length <= 9) {
            this.anArray.push(this.newAttribute);
            console.log("this.anArray", this.anArray);
            this.newAttribute = {};
        }
        else {
            this.presentToast("You can add five slots at a time");
        }
    };
    ViewAvailability.prototype.remove = function (_index) {
        this.anArray.splice(_index, 1);
        this.slotArr.splice(_index, 1);
        if (this.anArray.length == 0) {
            this.show = true;
            this.hide = false;
        }
    };
    ViewAvailability.prototype.onDaySelect = function (event) {
        this.anArray = [];
        this.slotArr = [];
        this.show = true;
        this.hide = false;
        console.log("onDaySelect", event);
        this.monthPlus = event.month + 1;
        this.dateSend = event.year + '-' + this.monthPlus + '-' + event.date;
        console.log(this.dateSend);
        this.slotData = [];
        this.getSpecificApi(this.dateSend);
    };
    ViewAvailability.prototype.onSelectStart = function (event) {
        console.log(event);
        var selectD = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.time).format('YYYY-MM-DD');
        console.log(selectD);
        this.getSpecificApi(selectD);
    };
    ViewAvailability.prototype.getSpecificApi = function (date) {
        var _this = this;
        this.dataCom = false;
        this.slotData = [];
        this.dateArr = [];
        console.log(date);
        if (this.userIdSkip) {
            this.getSpecificdata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                date: date,
                tutor_id: this.tutorId
            };
        }
        else {
            this.getSpecificdata = {
                user_id: this.userId,
                login_token: this.token,
                date: date,
                tutor_id: this.tutorId
            };
        }
        this.tutorservices.getSpecificSlots(this.getSpecificdata).then(function (result) {
            console.log('result', result);
            _this.dataCom = true;
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.show = true;
                _this.hide = false;
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ViewAvailability.prototype.onDateSelected = function (event) {
        console.log("onDateSelected", event);
    };
    ViewAvailability.prototype.onCurrentDatechanged = function (event) {
        console.log('onCurrentDatechanged', event);
    };
    ViewAvailability.prototype.onEventSelected = function (event) {
        console.log('onEventSelected', event);
    };
    ViewAvailability.prototype.onTimeSelected = function (event) {
        console.log('onTimeSelected', event);
    };
    ViewAvailability.prototype.fromTime = function (event, i) {
        console.log("eventevent", event, i);
        if (i != 0) {
            console.log("this.slotArr.length", this.slotArr.length);
            var lastTotime = this.slotArr[i - 1].to_time;
            console.log("hii lastTotime ", lastTotime, this.slotArr[i - 1].to_time);
            if (lastTotime <= event.hour) {
                console.log("if lastTotime <= event.hour");
                this.frTime = event.hour;
            }
            else {
                this.presentToast('From time must be greater than previous to time.');
            }
        }
        else {
            console.log("array empty");
            this.frTime = event.hour;
        }
    };
    ViewAvailability.prototype.toTime = function (event, idi) {
        this.toTimeVal = event.hour;
        if (this.toTimeVal > this.frTime) {
            this.newAttri = {
                from_time: this.frTime,
                to_time: this.toTimeVal
            };
            console.log('this.newAttri', this.newAttri);
            this.slotArr[idi] = this.newAttri;
            // var from = parseInt(this.frTime);
            // var to = parseInt(this.toTimeVal);
            //    var to_time = from;
            //    var inc = 0;
            //    for(var i=from; i < to; i++) {
            //    	from = to_time;
            //    	to_time = from + 1;
            //    	this.newAttri = {
            // 		from_time: from,
            // 		to_time:to_time
            // 	};
            // 	console.log('this.newAttri',this.newAttri)
            //    	this.slotArr[idi + inc]=this.newAttri;
            //    	inc = inc + 1;
            //    }
            console.log("this.slotArr", this.slotArr);
        }
        else {
            this.presentToast('Please select time greater than from time');
        }
    };
    ViewAvailability.prototype.onChange = function (event) {
        console.log('on change', event);
        var checkFrom = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.from).format('YYYY-MM-DD');
        console.log(checkFrom);
        var checkTo = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.to).format('YYYY-MM-DD');
        console.log(checkTo);
        var startDate = new Date(checkFrom); //YYYY-MM-DD
        var endDate = new Date(checkTo); //YYYY-MM-DD
        var getDateArray = function (start, end) {
            var arr = new Array();
            var dt = new Date(start);
            while (dt <= end) {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        };
        var dateArr = getDateArray(startDate, endDate);
        var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(dateArr).format('YYYY-MM-DD');
        this.dateArr = dateArr;
    };
    ViewAvailability.prototype.submitSlot = function () {
        var _this = this;
        this.dataCom = false;
        this.slotData = [];
        // for(let j in this.slotArr) {
        // 	let from = parseInt(this.slotArr[j].from_time);
        // let to = parseInt(this.slotArr[j].to_time);
        //   let to_time = from;
        //   for(let i=from; i < to; i++) {
        //   	from = to_time;
        //   	to_time = from + 1;
        //   	this.newAttri2 = {
        // 		from_time: from,
        // 		to_time:to_time
        // 	};
        // 	console.log('this.newAttri2',this.newAttri2)
        //    	this.slotArr2.push(this.newAttri2);
        //   }
        // }
        for (var k = 0; k < this.dateArr.length; k++) {
            for (var j in this.slotArr) {
                var from = parseInt(this.slotArr[j].from_time);
                var to = parseInt(this.slotArr[j].to_time);
                var to_time = from;
                for (var i = from; i < to; i++) {
                    from = to_time;
                    to_time = from + 1;
                    this.newAttri2 = {
                        from_time: from,
                        to_time: to_time,
                        date: __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(this.dateArr[k]).format('YYYY-MM-DD')
                    };
                    console.log('this.newAttri2', this.newAttri2);
                    this.slotArr2.push(this.newAttri2);
                }
            }
        }
        if (!this.dateSend) {
            this.currentDate = new Date();
            var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(this.currentDate, 'YYYY/MM/DD');
            console.log(check);
            var month = check.format('M');
            var day = check.format('D');
            var year = check.format('YYYY');
            this.dateSend = year + '-' + month + '-' + day;
        }
        else {
            this.dateSend = this.dateSend;
        }
        this.submitSlotData = {
            user_id: this.userId,
            login_token: this.token,
            // date:this.dateSend,
            slots: JSON.stringify(this.slotArr2)
        };
        this.spinner.show();
        this.tutorservices.addSlotsApi(this.submitSlotData).then(function (result) {
            console.log(result);
            _this.dataCom = true;
            _this.spinner.hide();
            _this.show = true;
            _this.hide = false;
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.slotArr2 = [];
                _this.anArray = [];
                _this.slotArr = [];
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i_1 = 0; i_1 < _this.getViewAvailbilityData.length; i_1++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i_1].from_time,
                            to_time: _this.getViewAvailbilityData[i_1].to_time,
                            slot_id: _this.getViewAvailbilityData[i_1].slot_id,
                            date: _this.getViewAvailbilityData[i_1].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else if (_this.data1.status == 204) {
                _this.presentToast(_this.data1.message);
                _this.slotArr2 = [];
                _this.anArray = [];
                _this.slotArr = [];
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i_2 = 0; i_2 < _this.getViewAvailbilityData.length; i_2++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i_2].from_time,
                            to_time: _this.getViewAvailbilityData[i_2].to_time,
                            slot_id: _this.getViewAvailbilityData[i_2].slot_id,
                            date: _this.getViewAvailbilityData[i_2].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ViewAvailability.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ViewAvailability = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-availability',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/view-availability/view-availability.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>View Availability</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="calShow" class="blue_box">\n    <ion-calendar #calendar [(ngModel)]="dateRange"\n      [options]="optionsRange"\n      [type]="type"\n      [format]="\'YYYY-MM-DD\'"\n      (onDaySelect)="onDaySelect($event)"\n      (dateSelected)="onDateSelected($event)"\n      (onSelectStart)="onSelectStart($event)"\n      (onChange)="onChange($event)"\n      step="30">\n    </ion-calendar>\n	</div>\n	<div padding >\n		<div class="white_box">\n			<div class="services_box">\n				<h3 class="bold_font"><img src="img/clockwd_icon.png" alt="" />Time Slots</h3>\n				<!-- <p>No time slot added for this dates yet.</p> -->\n				<ion-list *ngIf="dataCom" class="input_forms" no-lines>\n					<ion-item *ngFor="let slots of slotData">\n				    	<ion-label>{{slots.from_time}}:00 to {{slots.to_time}}:00</ion-label>\n					 	<ion-icon *ngIf="userType == \'T\'" (click)="deleteSlot(slots.slot_id,slots.date)" item-end><img src="img/cross_icon.png" alt=""/></ion-icon>\n					</ion-item>\n					<p *ngIf="check" style="text-align: center;">No time slot added for this date yet.</p>\n					<ion-row style="padding: 0 15px;" *ngFor="let att of anArray;let i = index">\n						<ion-col col-50>\n							<ion-item class="drops">\n							  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n							  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="From" (ionChange)="fromTime($event,i)"></ion-datetime>\n							</ion-item>\n						</ion-col>\n						<ion-col col-50>\n						    <ion-item class="drops">\n							  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n							  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="To" (ionChange)="toTime($event,i)"></ion-datetime>\n							</ion-item>\n						</ion-col>\n						<ion-icon style="height: 20px;width: 20px;margin-top: 26px;" item-end (click)="remove(i)"><img src="img/cross_icon.png" alt=""/></ion-icon>\n					</ion-row>\n				</ion-list>\n				<p *ngIf="hide" class="add_more"><span class="underline" (click)="addMore()">+ Add More</span></p>\n			</div>\n			<button  class="btn btn-text" *ngIf="show && userType == \'T\'" ion-button full (click)="addNewSlots()">Add New Slot</button>\n			<button  class="btn btn-text" *ngIf="hide && userType == \'T\'" ion-button full (click)="submitSlot()">Submit</button>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/view-availability/view-availability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ViewAvailability);
    return ViewAvailability;
}());

//# sourceMappingURL=view-availability.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reviews; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Reviews = /** @class */ (function () {
    function Reviews(studentservices, alertCtrl, platform, tutorservices, network, toastCtrl, spinner, navCtrl, navParams, nativeStorage) {
        this.studentservices = studentservices;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.tutorservices = tutorservices;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
    }
    Reviews.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.checkData = this.navParams.get('com_screen');
        this.tutorId = this.navParams.get('tutor_id');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            if (_this.checkData == 'my_profile') {
                _this.getReviews();
            }
            else {
                _this.checkReview();
            }
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            console.log(data);
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.checkReview();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getReviews();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Reviews.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Reviews.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Reviews.prototype.getReviews = function () {
        var _this = this;
        this.reviewData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType,
            screen_type: 'R'
        };
        this.spinner.show();
        this.tutorservices.favReviewApi(this.reviewData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getReviewData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Reviews.prototype.checkReview = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.checkreviewData = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                user_type: "U",
                tutor_id: this.tutorId
            };
        }
        else {
            this.checkreviewData = {
                user_id: this.userId,
                login_token: this.token,
                user_type: this.userType,
                tutor_id: this.tutorId
            };
        }
        this.spinner.show();
        this.studentservices.checkTutorReviewApi(this.checkreviewData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getReviewData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Reviews.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Reviews = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reviews',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/reviews/reviews.html"*/'\n<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Reviews</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="white_box">\n			<ion-list no-lines>\n				<ion-item *ngFor="let reviews of getReviewData">\n			        <ion-avatar item-start>\n			        	<img src="{{reviews.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goToTutorProfile()">{{reviews.first_name}} {{reviews.last_name}}, {{reviews.gender}}, {{reviews.age}} <span class="date">{{reviews.created_at | timeAgo}}</span></h2>\n			        <span class="rating">\n		        		<rating [(ngModel)]="reviews.rating"\n			        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n					</rating>\n		        	</span>\n		        	<p>{{reviews.feedback}}</p>\n			    </ion-item>\n			</ion-list>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/reviews/reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Reviews);
    return Reviews;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategoryLevel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subject_detail_subject_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubCategoryLevel = /** @class */ (function () {
    function SubCategoryLevel(toastCtrl, spinner, StudentServices, alertCtrl, platform, network, nativeStorage, navParams, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.StudentServices = StudentServices;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
    }
    SubCategoryLevel.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    SubCategoryLevel.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.levelsArr = [];
        this.catId = this.navParams.get('categoryId');
        this.subCatId = this.navParams.get('subCateId');
        this.subCatName = this.navParams.get('subCateName');
        this.catName = this.navParams.get('cateName');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getLevels();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getLevels();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    SubCategoryLevel.prototype.getLevels = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.StudentServices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.getD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCatLevels = _this.getD.levels;
                for (var i = 0; i < _this.getCatLevels.length; i++) {
                    if (_this.getCatLevels[i].category_id == _this.catId) {
                        _this.levelsArr.push({
                            name: _this.getCatLevels[i].name,
                            id: _this.getCatLevels[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategoryLevel.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    SubCategoryLevel.prototype.subCateSelect = function (id, name) {
        this.levelsId = id;
        if (this.levelsId) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subject_detail_subject_detail__["a" /* SubjectDetail */], { categoryId: this.catId, subCateId: this.subCatId, catName: this.catName, subCateName: this.subCatName, levelId: this.levelsId });
        }
        else {
            this.presentToast("Please select level");
        }
    };
    SubCategoryLevel.prototype.goToSubjectDetail = function () {
        if (this.levelsId) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subject_detail_subject_detail__["a" /* SubjectDetail */], { categoryId: this.catId, subCateId: this.subCatId, catName: this.catName, subCateName: this.subCatName, levelId: this.levelsId });
        }
        else {
            this.presentToast("Please select level");
        }
    };
    SubCategoryLevel.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SubCategoryLevel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-category-level',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/sub-category-level/sub-category-level.html"*/'<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>{{subCatName}}<span>({{catName}})</span></ion-title>\n    <!-- <ion-buttons right class="only_text">\n        <button ion-button (click)="goToSubjectDetail()">\n          <ion-label>Done</ion-label>\n        </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="white_box">\n		<ion-list radio-group class="category_listview">\n			<ion-item *ngFor="let subCatLevel of levelsArr;let i=index">\n			    <ion-label>{{subCatLevel.name}}</ion-label>\n			    <ion-radio [value]="i" (ionSelect)="subCateSelect(subCatLevel.id,subCatLevel.name)"></ion-radio>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/sub-category-level/sub-category-level.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SubCategoryLevel);
    return SubCategoryLevel;
}());

//# sourceMappingURL=sub-category-level.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesPopup = /** @class */ (function () {
    function ServicesPopup(nativeStorage, viewCtrl, navParams) {
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.ctData = [];
    }
    ServicesPopup.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.categories = this.navParams.get('serv');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
        });
        for (var i = 0; i < this.categories.length; i++) {
            this.ctData.push(this.categories[i]);
        }
    };
    ServicesPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ServicesPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-services-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/services-popup/services-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer">\n			<div *ngFor="let cate of ctData">\n				<div class="gradient_bg bold_font">\n					<span>\n						<img src="img/academic_icon.png" alt="" />\n					</span>\n					{{cate.category_name}}\n				</div>\n				<div class="pop_content" padding>\n					<p *ngFor="let sub of cate.subcategories; let isLast=last" style="display: inline-block;">{{sub}} {{isLast ? \'\' : \', \'}}</p>\n				</div>\n				</div>\n				<!-- <div class="gradient_bg bold_font">\n					<span>\n						<img src="img/music_icon.png" alt="" />\n					</span>\n					Music\n				</div>\n				<div class="pop_content" padding>\n					<p>Drums, Classical Guitar, Piano, Violin</p>\n				</div> -->\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/services-popup/services-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ServicesPopup);
    return ServicesPopup;
}());

//# sourceMappingURL=services-popup.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleAvailability; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleAvailability = /** @class */ (function () {
    function ScheduleAvailability(zone, alertCtrl, platform, network, nativeStorage, spinner, tutorservices, navCtrl, navParams, toastCtrl) {
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.tutorservices = tutorservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.calShow = false;
        this.show = true;
        this.hide = false;
        this.check = false;
        this.currentEvents = [];
        this.slotArr = [];
        this.anArray = [];
        this.newAttribute = {};
        this.slotData = [];
        this.slotArr2 = [];
        this.optionsRange = {
            pickMode: 'range'
        };
    }
    ScheduleAvailability.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dateArr = [];
        this.tutorId = this.navParams.get('tutorId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getViewAvailability();
            _this.addMore();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
        this.currentEvents = [];
    };
    ScheduleAvailability.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    ScheduleAvailability.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    ScheduleAvailability.prototype.getViewAvailability = function () {
        var _this = this;
        this.calShow = false;
        this.getSlotsdata = {
            user_id: this.userId,
            login_token: this.token,
            tutor_id: this.tutorId
        };
        this.spinner.show();
        this.tutorservices.checkViewAvailability(this.getSlotsdata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            console.log("this.currentEvents ", _this.currentEvents);
            if (_this.data1.status == 200) {
                _this.getdates = _this.data1.dates;
                _this.zone.run(function () {
                    for (var i_1 = 0; i_1 < _this.getdates.length; i_1++) {
                        var dat = _this.getdates[i_1].split('-');
                        var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(_this.getdates[i_1], 'YYYY/MM/DD');
                        console.log(check);
                        // let event  = {
                        //   year: dat[0],
                        //   month: dat[1]-1,
                        //   date: dat[2]
                        // }
                        // this.currentEvents.push(event)
                        _this.events = {
                            year: check.format('YYYY'),
                            month: check.format('M'),
                            date: check.format('D')
                        };
                        _this.eventsDouble = {
                            year: _this.events.year,
                            month: _this.events.month - 1,
                            date: _this.events.date
                        };
                        _this.currentEvents.push(_this.eventsDouble);
                    }
                    _this.calShow = true;
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ScheduleAvailability.prototype.deleteSlot = function (_id, date) {
        var _this = this;
        this.deleteData = {
            user_id: this.userId,
            login_token: this.token,
            type: 'SL',
            slot_date: date,
            slot_id: _id
        };
        this.spinner.show();
        this.tutorservices.deleteServices(this.deleteData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ScheduleAvailability.prototype.addMore = function () {
        this.anArray.push(this.newAttribute);
        this.newAttribute = {};
    };
    ScheduleAvailability.prototype.remove = function (_index) {
        this.anArray.splice(_index, 1);
        this.slotArr.splice(_index, 1);
    };
    ScheduleAvailability.prototype.onDaySelect = function (event) {
        console.log(event);
        this.anArray = [];
        this.slotArr = [];
        this.monthPlus = event.month + 1;
        this.dateSend = event.year + '-' + this.monthPlus + '-' + event.date;
        console.log(this.dateSend);
        this.slotData = [];
        this.getSpecificApi(this.dateSend);
    };
    // fromTime(event){
    //  console.log(event);
    //  this.fromarry.push{from:event}
    // }
    ScheduleAvailability.prototype.getSpecificApi = function (date) {
        var _this = this;
        console.log(date);
        this.dateArr = [];
        this.getSpecificdata = {
            user_id: this.userId,
            login_token: this.token,
            date: date,
            tutor_id: this.tutorId
        };
        this.tutorservices.getSpecificSlots(this.getSpecificdata).then(function (result) {
            console.log('result', result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.show = true;
                _this.hide = false;
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    // this.addMore();
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ScheduleAvailability.prototype.fromTime = function (event, i) {
        console.log("eventevent", event, i);
        if (i != 0) {
            console.log("this.slotArr.length", this.slotArr.length);
            var lastTotime = this.slotArr[i - 1].to_time;
            console.log("hii lastTotime ", lastTotime, this.slotArr[i - 1].to_time);
            if (lastTotime <= event.hour) {
                console.log("if lastTotime <= event.hour");
                this.frTime = event.hour;
            }
            else {
                this.presentToast('From time must be greater than previous to time.');
            }
        }
        else {
            console.log("array empty");
            this.frTime = event.hour;
        }
    };
    ScheduleAvailability.prototype.toTime = function (event, idi) {
        this.toTimeVal = event.hour;
        if (this.toTimeVal > this.frTime) {
            this.newAttri = {
                from_time: this.frTime,
                to_time: this.toTimeVal
            };
            console.log('this.newAttri', this.newAttri);
            this.slotArr[idi] = this.newAttri;
            console.log("this.slotArr", this.slotArr);
        }
        else {
            this.presentToast('Please select time greater than from time');
        }
    };
    ScheduleAvailability.prototype.onSelectStart = function (event) {
        console.log(event);
        var selectD = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.time).format('YYYY-MM-DD');
        console.log(selectD);
        this.getSpecificApi(selectD);
    };
    ScheduleAvailability.prototype.onDateSelected = function (event) {
        console.log(event);
    };
    ScheduleAvailability.prototype.onChange = function (event) {
        console.log('on change', event);
        var checkFrom = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.from).format('YYYY-MM-DD');
        console.log(checkFrom);
        var checkTo = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(event.to).format('YYYY-MM-DD');
        console.log(checkTo);
        var startDate = new Date(checkFrom); //YYYY-MM-DD
        var endDate = new Date(checkTo); //YYYY-MM-DD
        var getDateArray = function (start, end) {
            var arr = new Array();
            var dt = new Date(start);
            while (dt <= end) {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        };
        var dateArr = getDateArray(startDate, endDate);
        var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(dateArr).format('YYYY-MM-DD');
        this.dateArr = dateArr;
    };
    ScheduleAvailability.prototype.submitSlot = function () {
        var _this = this;
        for (var k = 0; k < this.dateArr.length; k++) {
            for (var j in this.slotArr) {
                var from = parseInt(this.slotArr[j].from_time);
                var to = parseInt(this.slotArr[j].to_time);
                var to_time = from;
                for (var i = from; i < to; i++) {
                    from = to_time;
                    to_time = from + 1;
                    this.newAttri2 = {
                        from_time: from,
                        to_time: to_time,
                        date: __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(this.dateArr[k]).format('YYYY-MM-DD')
                    };
                    console.log('this.newAttri2', this.newAttri2);
                    this.slotArr2.push(this.newAttri2);
                }
            }
        }
        // for(var j in this.slotArr) {
        //   var from = parseInt(this.slotArr[j].from_time);
        //   var to = parseInt(this.slotArr[j].to_time);
        //     var to_time = from;
        //     for(var i=from; i < to; i++) {
        //       from = to_time;
        //       to_time = from + 1;
        //       this.newAttri2 = {
        //         from_time: from,
        //         to_time:to_time
        //       };
        //     console.log('this.newAttri2',this.newAttri2)
        //       this.slotArr2.push(this.newAttri2);
        //     }
        // }
        if (!this.dateSend) {
            this.currentDate = new Date();
            var check = __WEBPACK_IMPORTED_MODULE_5_moment_timezone__(this.currentDate, 'YYYY/MM/DD');
            console.log(check);
            var month = check.format('M');
            var day = check.format('D');
            var year = check.format('YYYY');
            this.dateSend = year + '-' + month + '-' + day;
        }
        else {
            this.dateSend = this.dateSend;
        }
        this.submitSlotData = {
            user_id: this.userId,
            login_token: this.token,
            // date:this.dateSend,
            slots: JSON.stringify(this.slotArr2)
        };
        this.spinner.show();
        this.tutorservices.addSlotsApi(this.submitSlotData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.anArray = [];
            _this.show = true;
            _this.hide = false;
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    _this.addMore();
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else if (_this.data1.status == 204) {
                _this.slotArr2 = [];
                _this.anArray = [];
                _this.slotArr = [];
                _this.zone.run(function () {
                    _this.getViewAvailbilityData = _this.data1.data;
                    for (var i = 0; i < _this.getViewAvailbilityData.length; i++) {
                        _this.slotData.push({
                            from_time: _this.getViewAvailbilityData[i].from_time,
                            to_time: _this.getViewAvailbilityData[i].to_time,
                            slot_id: _this.getViewAvailbilityData[i].slot_id,
                            date: _this.getViewAvailbilityData[i].date
                        });
                    }
                    _this.addMore();
                    if (_this.getViewAvailbilityData.length == 0) {
                        _this.check = true;
                    }
                    else {
                        _this.check = false;
                    }
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    ScheduleAvailability.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ScheduleAvailability = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-schedule-availability',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/schedule-availability/schedule-availability.html"*/'\n<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Schedule Availability</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<div *ngIf="calShow" class="blue_box">\n    <ion-calendar #calendar [(ngModel)]="dateRange"\n      [options]="optionsRange"\n      [type]="type"\n      [format]="\'YYYY-MM-DD\'"\n      (onDaySelect)="onDaySelect($event)"\n      (dateSelected)="onDateSelected($event)"\n      (onSelectStart)="onSelectStart($event)"\n      (onChange)="onChange($event)"\n      step="30">\n    </ion-calendar>\n	</div>\n	<div padding>\n		<div class="white_box">\n			<p class="center">Set Time Slots</p>\n\n			<ion-list class="input_forms" no-lines>\n			<ion-item *ngFor="let slots of getViewAvailbilityData">\n				    	<ion-label>{{slots.from_time}}:00 to {{slots.to_time}}:00</ion-label>\n					 	<ion-icon *ngIf="userType == \'T\'" (click)="deleteSlot(slots.slot_id,slots.date)" item-end><img src="img/cross_icon.png" alt=""/></ion-icon>\n					</ion-item>\n\n          <ion-row *ngFor="let att of anArray;let i = index">\n					<ion-col col-50>\n						<ion-item class="drops">\n						  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n						  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="From" (ionChange)="fromTime($event,i)"></ion-datetime>\n						</ion-item>\n					</ion-col>\n					<ion-col col-50>\n					    <ion-item class="drops">\n						  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n						  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="To" minuteValues="0" (ionChange)="toTime($event,i)"></ion-datetime>\n						</ion-item>\n					</ion-col>\n					<ion-icon style="height: 20px;width: 20px;margin-top: 26px;" item-end (click)="remove(i)"><img src="img/cross_icon.png" alt=""/></ion-icon>\n				</ion-row>\n\n\n			</ion-list>\n			<p class="add_more"><span class="underline" (click)="addMore()">+ Add More</span></p>\n			<button class="btn btn-text" ion-button full (click)="submitSlot()">Submit</button>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/schedule-availability/schedule-availability.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ScheduleAvailability);
    return ScheduleAvailability;
}());

//# sourceMappingURL=schedule-availability.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherCreateProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offered_services_offered__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_availability_schedule_availability__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__address_map_address_map__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var TeacherCreateProfile = /** @class */ (function () {
    function TeacherCreateProfile(events, navParams, StudentServices, zone, mapsAPILoader, fileTransfer, toastCtrl, network, nativeStorage, httpBaseUrl, authServices, spinner, fb, platform, navCtrl, camera, actionSheetCtrl) {
        var _this = this;
        this.events = events;
        this.navParams = navParams;
        this.StudentServices = StudentServices;
        this.zone = zone;
        this.mapsAPILoader = mapsAPILoader;
        this.fileTransfer = fileTransfer;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.httpBaseUrl = httpBaseUrl;
        this.authServices = authServices;
        this.spinner = spinner;
        this.fb = fb;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.show = false;
        this.showiNPUT = false;
        this.showSuggest = false;
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.timezone = __WEBPACK_IMPORTED_MODULE_14_moment_timezone__["tz"].guess();
        this.authForm = fb.group({
            'first_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'last_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'dob': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'address': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'mobile_number': [""],
            'university_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'rate': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'group_rate': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'qualification': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'city_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'gender': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'languages': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'teaching_levels': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'bio': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'location_preference': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'other_location': [""],
            'other_info': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        events.subscribe('user:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.getAddressLat = user.lat;
            _this.getAddressLng = user.lng;
            _this.authForm.get('address').setValue(user.address);
        });
    }
    TeacherCreateProfile.prototype.showAddressModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__address_map_address_map__["a" /* AddressMapPage */], { navigateTo: 'tutor_create' });
    };
    TeacherCreateProfile.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userData').then(function (data) {
            console.log('userDataLocalStorage', data);
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.mobileNumber = data.mobile_number;
            _this.authForm.get('mobile_number').setValue(_this.mobileNumber);
            _this.getLanguages();
            _this.getTechLevels();
            _this.getSuggestLocations();
        });
        this.nativeStorage.getItem('locationLat').then(function (data) {
            _this.lat = data;
        });
        this.nativeStorage.getItem('locationLng').then(function (data) {
            _this.long = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getLanguages();
        });
    };
    TeacherCreateProfile.prototype.getLanguages = function () {
        var _this = this;
        this.languagesData = {
            user_id: this.userId,
            user_token: this.token
        };
        this.authServices.getLanguagesAndLocationPreference(this.languagesData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.langD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLang = _this.langD.languages;
                _this.getCity();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherCreateProfile.prototype.getTechLevels = function () {
        var _this = this;
        this.arrPush = [];
        this.getLevels = {
            user_id: this.userId,
            login_token: this.token
        };
        this.StudentServices.getCategorySubCategory(this.getLevels).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.getD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCatLevels = _this.getD.levels;
                for (var i_1 = 0; i_1 < _this.getCatLevels.length; i_1++) {
                    _this.arrPush.push(_this.getCatLevels[i_1]);
                }
                var obj = {};
                for (var i = 0, len = _this.getCatLevels.length; i < len; i++)
                    obj[_this.getCatLevels[i]['name']] = _this.getCatLevels[i];
                _this.getCatLevels = new Array();
                for (var key in obj)
                    _this.getCatLevels.push(obj[key]);
                _this.arrPush = _this.getCatLevels;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherCreateProfile.prototype.getCity = function () {
        var _this = this;
        this.spinner.show();
        this.citiesData = {
            user_id: this.userId,
            user_token: this.token,
            country_id: '174'
        };
        this.authServices.getCities(this.citiesData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCitiesData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TeacherCreateProfile.prototype.getSuggestLocations = function () {
        var _this = this;
        this.sendSuggesteddata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.StudentServices.suggestedLocations(this.sendSuggesteddata).then(function (result) {
            console.log("suggested location data", result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.suggestedLocations = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherCreateProfile.prototype.goToServiceOffered = function () {
        console.log('this.userId', this.userId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__services_offered_services_offered__["a" /* ServicesOffered */], { tutorId: this.userId });
    };
    TeacherCreateProfile.prototype.goToScheduleAvailability = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__schedule_availability_schedule_availability__["a" /* ScheduleAvailability */], { tutorId: this.userId });
    };
    TeacherCreateProfile.prototype.imagePopOver = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add picture with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicture();
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'undo',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TeacherCreateProfile.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgDataR = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    TeacherCreateProfile.prototype.gallery = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgDataR = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    TeacherCreateProfile.prototype.dobChange = function (event, dob) {
        var birthdate = new Date(dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.a < 18) {
            this.presentToast("Your age must be atleast 18 to register as a tutor");
        }
    };
    TeacherCreateProfile.prototype.eventFire = function (event) {
        console.log(event);
        this.locationF = event;
        if (event == 'AO') {
            this.show = true;
            this.showiNPUT = true;
            this.showSuggest = true;
        }
        else {
            this.show = false;
        }
    };
    TeacherCreateProfile.prototype.suggestClick = function () {
        this.show = true;
        this.showSuggest = true;
    };
    TeacherCreateProfile.prototype.clickSuggest = function (add, id) {
        this.suggestId = id;
        this.show = false;
        this.va = add;
        this.authForm.get('other_location').setValue(this.va);
    };
    TeacherCreateProfile.prototype.submitForm = function (val, valid) {
        var _this = this;
        var birthdate = new Date(this.authForm.value.dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.getAddressLat == "" || this.getAddressLat == undefined || this.getAddressLat == null) {
            this.latS = this.lat;
            this.lngS = this.long;
        }
        else {
            this.latS = this.getAddressLat;
            this.lngS = this.getAddressLng;
        }
        if (this.locationF == 'AO') {
            if (this.locationF == '' || this.locationF == undefined || this.locationF == null) {
                this.presentToast("Please enter other location");
                return;
            }
        }
        if (valid) {
            if (this.a < 18) {
                this.presentToast("Your age must be atleast 18 to register as a tutor");
                return;
            }
            if (this.imgData) {
                this.spinner.show();
                var url_1 = this.baseUrl + 'create_profile';
                var fileTransfer = this.fileTransfer.create();
                var targetPath_1 = this.imgData;
                var filename = targetPath_1.split("/").pop();
                filename = filename.split('?');
                var options_1 = {
                    fileKey: "profile_pic",
                    fileName: filename[0],
                    chunkedMode: false,
                    mimeType: "image/jpg",
                    params: {
                        device_id: this.deviceId,
                        device_type: 'A',
                        user_type: this.userType,
                        timezone: this.timezone,
                        latitude: this.latS,
                        longitude: this.lngS,
                        user_id: this.userId,
                        login_token: this.token,
                        app_version: this.appVersion,
                        first_name: this.authForm.value.first_name,
                        last_name: this.authForm.value.last_name,
                        dob: this.authForm.value.dob,
                        address: this.authForm.value.address,
                        university_name: this.authForm.value.university_name,
                        city_id: this.authForm.value.city_id,
                        gender: this.authForm.value.gender,
                        teaching_levels: this.authForm.value.teaching_levels.toString(),
                        languages: this.authForm.value.languages.toString(),
                        bio: this.authForm.value.bio,
                        rate: this.authForm.value.rate,
                        group_rate: this.authForm.value.group_rate,
                        qualification: this.authForm.value.qualification,
                        location_preference: this.authForm.value.location_preference,
                        other_location: this.authForm.value.other_location,
                        other_location_id: this.suggestId,
                        other_info: this.authForm.value.other_info,
                        age: this.a,
                        currency_id: '85'
                    }
                };
                console.log("optionssss", options_1);
                fileTransfer.upload(targetPath_1, url_1, options_1).then(function (data) {
                    _this.spinner.hide();
                    console.log(targetPath_1, url_1, options_1);
                    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa gyaaa", data);
                    _this.data1 = JSON.parse(data.response);
                    console.log(_this.data1);
                    if (_this.data1.status == 200) {
                        _this.events.unsubscribe('user:created');
                        _this.presentToast(_this.data1.message);
                        _this.nativeStorage.setItem('userData', _this.data1.data)
                            .then(function (result) { return console.log('Stored item!', result); }, function (error) { return console.error('Error storing item', error); });
                        if (_this.data1.data.admin_verify == '0') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__signup_type_signup_type__["a" /* SignupType */]);
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                    var mesg = JSON.parse(err.body);
                    _this.presentToast(mesg.message);
                });
            }
            else {
                this.spinner.show();
                this.sendCreateProfileData = {
                    device_id: this.deviceId,
                    device_type: 'A',
                    user_type: this.userType,
                    timezone: this.timezone,
                    latitude: this.latS,
                    longitude: this.lngS,
                    user_id: this.userId,
                    login_token: this.token,
                    app_version: this.appVersion,
                    first_name: this.authForm.value.first_name,
                    last_name: this.authForm.value.last_name,
                    dob: this.authForm.value.dob,
                    address: this.authForm.value.address,
                    university_name: this.authForm.value.university_name,
                    city_id: this.authForm.value.city_id,
                    gender: this.authForm.value.gender,
                    teaching_levels: this.authForm.value.teaching_levels.toString(),
                    languages: this.authForm.value.languages.toString(),
                    bio: this.authForm.value.bio,
                    rate: this.authForm.value.rate,
                    group_rate: this.authForm.value.group_rate,
                    qualification: this.authForm.value.qualification,
                    location_preference: this.authForm.value.location_preference,
                    other_location: this.authForm.value.other_location,
                    other_location_id: this.suggestId,
                    other_info: this.authForm.value.other_info,
                    age: this.a,
                    currency_id: '85'
                };
                this.authServices.createProfileTutor(this.sendCreateProfileData).then(function (result) {
                    _this.spinner.hide();
                    _this.data1 = result;
                    if (_this.data1.status == 200) {
                        _this.events.unsubscribe('user:created');
                        _this.presentToast(_this.data1.message);
                        _this.nativeStorage.setItem('userData', _this.data1.data).then(function (result) {
                        });
                        if (_this.data1.data.admin_verify == '0') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__signup_type_signup_type__["a" /* SignupType */]);
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    TeacherCreateProfile.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    TeacherCreateProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherCreateProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-create-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-create-profile/teacher-create-profile.html"*/'\n<ion-header class="no_back">\n\n  <ion-navbar>\n    <ion-title>Create Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="upload_outer center">\n		<div class="upload_inner">\n			<img *ngIf="!imgData" (click)="imagePopOver()" src="img/camera_icon.png" alt="" class="camera_icon" />\n			<!-- <input type="file" value="" /> -->\n			<img *ngIf="imgData" src="{{imgData}}" (click)="imagePopOver()" class="upload_inner">\n		</div>\n		<p>Upload Profile Picture</p>\n	</div>\n	<div padding>\n			<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n					</ion-item>\n					<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'first_name\'].hasError(\'required\') && authForm.controls[\'first_name\'].touched">* Firstname is required!</div>\n\n				</ion-col>\n				<ion-col col-50>\n				    <ion-item>\n				    	<ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n					</ion-item>\n					<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'last_name\'].hasError(\'required\') && authForm.controls[\'last_name\'].touched">* Lastname is required!</div>\n\n				</ion-col>\n			</ion-row>\n			<ion-item>\n				<ion-textarea placeholder="Biography" formControlName="bio"></ion-textarea>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'bio\'].hasError(\'required\') && authForm.controls[\'bio\'].touched">* Biography is required!</div>\n\n		    </ion-item>\n		    <ion-item class="check_point" (click)="goToServiceOffered()">\n			  	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-input type="text" placeholder="Services Offered" readonly></ion-input>\n			</ion-item>\n\n		     <ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="tel" placeholder="Q.R/hr (Single)" formControlName="rate"></ion-input>\n				    </ion-item>\n				    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'rate\'].hasError(\'required\') && authForm.controls[\'rate\'].touched">* Individual price is required!</div>\n				</ion-col>\n				<ion-col col-50>\n				    <ion-item>\n			    		<ion-input type="tel" placeholder="Q.R/hr (Group)" formControlName="group_rate"></ion-input>\n			    	</ion-item>\n			     <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'group_rate\'].hasError(\'required\') && authForm.controls[\'group_rate\'].touched">* Group price is required!</div>\n				</ion-col>\n			</ion-row>\n			<p style="text-align: center;">Please enter rates for teaching single students and group of students above</p>\n\n		    <ion-item class="check_point" (click)="goToScheduleAvailability()">\n			  	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-input type="text" placeholder="Schedule Availability" readonly></ion-input>\n			</ion-item>\n			<ion-item (tap)="showAddressModal()">\n				<ion-input type="text" readonly id="txtHome1" placeholder="Address" formControlName="address"></ion-input>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'address\'].hasError(\'required\') && authForm.controls[\'address\'].touched">* Address is required!</div>\n\n		    </ion-item>\n		    <ion-item class="drops">\n					<ion-label>City</ion-label>\n					 <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="city_id" placeholder="City">\n						<ion-option *ngFor="let city of getCitiesData" [value]="city.id">{{city.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'city_id\'].hasError(\'required\') && authForm.controls[\'city_id\'].touched">* City is required!</div>\n\n			<ion-item>\n		    	<ion-input disabled="true" type="text"  placeholder="Mobile Number" formControlName="mobile_number"></ion-input>\n		    </ion-item>\n			<ion-item class="drops">\n			  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n			  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date of Birth"  formControlName="dob" (ionChange)="dobChange($event,dob)"></ion-datetime>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'dob\'].hasError(\'required\') && authForm.controls[\'dob\'].touched">* Date of birth is required!</div>\n\n			<ion-item>\n		    	<ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'qualification\'].hasError(\'required\') && authForm.controls[\'qualification\'].touched">* Qualification is required!</div>\n\n			<ion-item>\n		    	<ion-input type="text" placeholder="University Name" formControlName="university_name"></ion-input>\n        </ion-item>\n        <ion-item class="drops">\n					<ion-label>Teaching levels</ion-label>\n          <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="teaching_levels" placeholder="Teaching levels" multiple="true">\n						<ion-option *ngFor="let level of arrPush" [value]="level.id">{{level.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'teaching_levels\'].hasError(\'required\') && authForm.controls[\'teaching_levels\'].touched">* Teaching levels is required!</div>\n\n		    <ion-item class="drops">\n					<ion-label>Languages Spoken</ion-label>\n					 <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="languages" placeholder="Languages Spoken" multiple="true">\n						<ion-option *ngFor="let lang of getLang" [value]="lang.id">{{lang.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'languages\'].hasError(\'required\') && authForm.controls[\'languages\'].touched">* University name is required!</div>\n\n			<ion-item class="drops">\n		    	<ion-label>Location Preferences</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="location_preference" placeholder="Location Preferences" (ionChange)="eventFire($event)">\n              <ion-option value="TL">Tutor Location</ion-option>\n              <ion-option value="SH">Student Location</ion-option>\n            <ion-option value="AO">Any other public location</ion-option>\n			    	<ion-option value="NP">No preference</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'location_preference\'].hasError(\'required\') && authForm.controls[\'location_preference\'].touched">* Location Preference is required!</div>\n\n\n      <ion-item class="check_point" *ngIf="showiNPUT" (tap)="suggestClick()">\n        <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n        <ion-input type="text" placeholder="Other location" value="{{va}}" formControlName="other_location" readonly></ion-input>\n      </ion-item>\n      <div class="dd" *ngIf="show">\n        <ion-list class="input_forms" no-lines style="margin-bottom: 0;">\n            <div class="droparea">\n              <h3 class="bold_font">Suggested Locations</h3>\n              <ul>\n                <li (click)="clickSuggest(sugestLocation.address,sugestLocation.id)" *ngFor="let sugestLocation of suggestedLocations">\n                  <img src="img/address_icon.png" alt=""/>\n                  <h4 class="bold_font">CCD</h4>\n                  <p>{{sugestLocation.address}}</p>\n                </li>\n              </ul>\n            </div>\n        </ion-list>\n      </div>\n\n\n		    <ion-item class="drops">\n		    	<ion-label>Gender</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="gender" placeholder="Gender">\n			    	<ion-option value="M">Male</ion-option>\n			    	<ion-option value="F">Female</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'gender\'].hasError(\'required\') && authForm.controls[\'gender\'].touched">* Gender is required!</div>\n\n			<ion-item>\n		    	<ion-textarea placeholder="Other Information" formControlName="other_info"></ion-textarea>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'other_info\'].hasError(\'required\') && authForm.controls[\'other_info\'].touched">* Other Information is required!</div>\n\n		</ion-list>\n		<button class="btn btn-text" ion-button full type="submit" >Submit</button>\n		</form>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-create-profile/teacher-create-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], TeacherCreateProfile);
    return TeacherCreateProfile;
}());

//# sourceMappingURL=teacher-create-profile.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherTutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeacherTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherTutorialPage = /** @class */ (function () {
    function TeacherTutorialPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeacherTutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherTutorialPage');
    };
    // ionViewWillLeave(){
    //   const index = this.viewCtrl.index;
    //   this.navCtrl.remove(index);
    // }
    TeacherTutorialPage.prototype.doneGoToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* Signin */]);
    };
    TeacherTutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-tutorial',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-tutorial/teacher-tutorial.html"*/'<ion-slides pager="true">\n  	<ion-slide>\n    			<img src="img/tutor_tutorials/2_1.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n    			<img src="img/tutor_tutorials/2_2.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n    			<img src="img/tutor_tutorials/2_3.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n  		<img src="img/tutor_tutorials/2_4.jpg" />\n    	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">Done</button>\n	</ion-slide>\n</ion-slides>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-tutorial/teacher-tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TeacherTutorialPage);
    return TeacherTutorialPage;
}());

//# sourceMappingURL=teacher-tutorial.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = /** @class */ (function () {
    function TutorialPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    // ionViewWillLeave(){
    //   const index = this.viewCtrl.index;
    //   this.navCtrl.remove(index);
    // }
    TutorialPage.prototype.doneGoToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* Signin */]);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/tutorial/tutorial.html"*/'<ion-slides pager="true">\n  	<ion-slide>\n    			<img src="img/student_tutorials/2_1.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n    			<img src="img/student_tutorials/2_2.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n    			<img src="img/student_tutorials/2_3.jpg" />\n        	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">skip</button>\n  	</ion-slide>\n \n  	<ion-slide>\n  		<img src="img/student_tutorials/2_4.jpg" />\n    	<button style="position: absolute;right: 8px;bottom: 8px;" ion-button color="light" (click)="doneGoToLogin()">Done</button>\n	</ion-slide>\n</ion-slides>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorservicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var TutorservicesProvider = /** @class */ (function () {
    function TutorservicesProvider(httpBaseUrl, device, http, toastCtrl) {
        this.httpBaseUrl = httpBaseUrl;
        this.device = device;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.deviceInfo = {};
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
    }
    TutorservicesProvider.prototype.getCategorySubCategory = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'categories_subcategories/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.addServices = function (data) {
        var _this = this;
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            category_id: data.category_id,
            subcategory_id: data.subcategory_id,
            level_id: data.level_id
        });
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'tutor_services', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.deleteServices = function (data) {
        var _this = this;
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            type: data.type,
            service_id: data.service_id,
            slot_id: data.slot_id,
            slot_date: data.slot_date,
            app_version: this.appVersion,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'delete_data', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.getServices = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'services_offered/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.getProfile = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'my_profile/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.editProfileTutor = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            user_type: data.user_type,
            timezone: data.timezone,
            latitude: data.latitude,
            longitude: data.longitude,
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            first_name: data.first_name,
            last_name: data.last_name,
            dob: data.dob,
            address: data.address,
            university_name: data.university_name,
            city_id: data.city_id,
            gender: data.gender,
            teaching_levels: data.teaching_levels,
            languages: data.languages,
            bio: data.bio,
            rate: data.rate,
            group_rate: data.group_rate,
            qualification: data.qualification,
            location_preference: data.location_preference,
            other_location: data.other_location,
            other_location_id: data.other_location_id,
            other_info: data.other_info,
            age: data.age,
            currency_id: "85"
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'edit_profile', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.checkViewAvailability = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'view_availability/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.addSlotsApi = function (data) {
        var _this = this;
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            date: data.date,
            app_version: this.appVersion,
            slots: data.slots
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'tutor_slots', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.getSpecificSlots = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'date_specific_slots/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.date + '/' + data.tutor_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.myAppointments = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'my_appointments/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.getDashBoardApi = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'dashboard/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.myAppointmentsDetailApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'appointment_details/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.appointment_id + '/' + data.user_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.myAppointmentActionsApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            tutor_id: data.tutor_id,
            login_token: data.login_token,
            appointment_id: data.appointment_id,
            app_version: this.appVersion,
            reason: data.reason,
            action: data.action
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'tutor_actions', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.favReviewApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'favorites_reviews/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion + '/' + data.user_type + '/' + data.screen_type, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.getNotificationsApi = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'notifications_list/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.currentSubscriptionApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'current_subscription/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.subscriptionsApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            subscription_id: data.subscription_id,
            expire_after: data.expire_after,
            app_version: this.appVersion,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'subscription', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.notificationOnOffApi = function (data) {
        var _this = this;
        console.log(data);
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            status: data.status
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'notifications_setting', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.badgeCount = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'batch_count/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.badgeCountReadStatus = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'read_status/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.badgeCountDelete = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'delete_notifications/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    TutorservicesProvider.prototype.StringQuery = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    TutorservicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], TutorservicesProvider);
    return TutorservicesProvider;
}());

//# sourceMappingURL=tutorservices.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/teacher-tutorial/teacher-tutorial.module": [
		937,
		1
	],
	"../pages/tutorial/tutorial.module": [
		938,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 280;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_popup_forgot_password_popup__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPassword = /** @class */ (function () {
    function ForgotPassword(network, modalCtrl, toastCtrl, spinner, authService, fb, navCtrl, navParams, nativeStorage) {
        this.network = network;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authService = authService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.authForm = fb.group({
            'email': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    ForgotPassword.prototype.ionViewDidEnter = function () {
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
    };
    ForgotPassword.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
        //const index = this.navCtrl.getActive().index;
        //this.navCtrl.remove(0, index);
    };
    ForgotPassword.prototype.submitForm = function (val, valid) {
        var _this = this;
        if (valid) {
            this.spinner.show();
            this.sendForgotData = {
                email: this.authForm.value.email
            };
            this.authService.forgotPassApi(this.sendForgotData).then(function (result) {
                _this.spinner.hide();
                console.log('resultttttttttttttttt', result);
                _this.data1 = result;
                if (_this.data1.status == 200) {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__forgot_password_popup_forgot_password_popup__["a" /* ForgotPasswordPopup */]);
                    modal.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* Signin */]);
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    ForgotPassword.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ForgotPassword.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ForgotPassword.prototype.goToForgotPop = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__forgot_password_popup_forgot_password_popup__["a" /* ForgotPasswordPopup */]);
        modal.present();
    };
    ForgotPassword = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/forgot-password/forgot-password.html"*/'<ion-header class="transparent_header with_back">\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg center">\n	<img src="img/key.png" alt="" />\n	<p>Reset password using email address</p>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-item>\n		    	<ion-input type="email" placeholder="Enter Email ID" [formControl]="authForm.controls[\'email\']"></ion-input>\n		    </ion-item>\n		      <div style="margin-top: 6px;color: red;position: absolute;"   *ngIf="authForm.controls[\'email\'].hasError(\'required\') && authForm.controls[\'email\'].touched">* Email is required!</div>\n		</ion-list>\n		<button class="btn btn-text" ion-button full type="submit">Reset Password</button>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], ForgotPassword);
    return ForgotPassword;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthservicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;
var AuthservicesProvider = /** @class */ (function () {
    function AuthservicesProvider(httpBaseUrl, device, http, toastCtrl) {
        this.httpBaseUrl = httpBaseUrl;
        this.device = device;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.deviceInfo = {};
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
    }
    AuthservicesProvider.prototype.signupApi = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            login_type: data.login_type,
            country_id: data.country_id,
            email: data.email,
            password: data.password,
            mobile_number: data.mobile_number,
            user_type: data.user_type,
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'signup', body, options)
                .subscribe(function (res) {
                console.log("service data", data);
                resolve(res.json());
            }, function (err) {
                console.log('service error data', err);
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.loginApi = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            user_identity: data.user_identity,
            password: data.password,
            timezone: data.timezone,
            //latitude: data.latitude,
            //longitude:data.longitude,
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'login', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.otpApi = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            type: 'S',
            otp: data.otp,
            mobile_number: data.mobile_number,
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'verify_otp', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.resendotpApi = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            type: data.type,
            mobile_number: data.mobile_number,
            app_version: this.appVersion,
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'resend_otp', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.forgotPassApi = function (data) {
        var _this = this;
        var body = this.StringQuery({
            email: data.email
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'forgot_password', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.createProfileStudent = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            user_type: data.user_type,
            timezone: data.timezone,
            latitude: data.latitude,
            longitude: data.longitude,
            user_id: data.user_id,
            login_token: data.login_token,
            first_name: data.first_name,
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
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'create_profile', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.createProfileTutor = function (data) {
        var _this = this;
        this.deviceInfo.platform = this.device.platform;
        if (this.deviceInfo.platform == 'Android') {
            this.deviceType = "A";
        }
        else {
            this.deviceType = "I";
        }
        var body = this.StringQuery({
            device_id: data.device_id,
            device_type: this.deviceType,
            user_type: data.user_type,
            timezone: data.timezone,
            latitude: data.latitude,
            longitude: data.longitude,
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion,
            first_name: data.first_name,
            last_name: data.last_name,
            dob: data.dob,
            address: data.address,
            university_name: data.university_name,
            city_id: data.city_id,
            gender: data.gender,
            languages: data.languages,
            bio: data.bio,
            rate: data.rate,
            qualification: data.qualification,
            location_preference: data.location_preference,
            other_location: data.other_location,
            other_location_id: data.other_location_id,
            other_info: data.other_info,
            age: data.age,
            currency_id: "85"
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'create_profile', body, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.getCities = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'cities' + '/' + data.user_id + '/' + data.user_token + '/' + _this.appVersion + '/' + data.country_id, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.getLanguagesAndLocationPreference = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'tutor_profile_dropdowns' + '/' + data.user_id + '/' + data.user_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.getCategorySubCategory = function (data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl + 'categories_subcategories/' + data.user_id + '/' + data.login_token + '/' + _this.appVersion, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.logoutApi = function (data) {
        var _this = this;
        var body = this.StringQuery({
            user_id: data.user_id,
            login_token: data.login_token,
            app_version: this.appVersion
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'logout', body, options)
                .subscribe(function (res) {
                console.log("res", res);
                resolve(res.json());
            }, function (err) {
                resolve(err.json());
                reject(err);
            });
        });
    };
    AuthservicesProvider.prototype.StringQuery = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    AuthservicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], AuthservicesProvider);
    return AuthservicesProvider;
}());

//# sourceMappingURL=authservices.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupType = /** @class */ (function () {
    function SignupType(network, navCtrl, nativeStorage) {
        this.network = network;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
    }
    SignupType.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad SignupType');
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
    };
    SignupType.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    SignupType.prototype.goToSignIn = function (type) {
        this.nativeStorage.setItem('userType', type).then(function (result) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* Signin */], { userType: type });
    };
    SignupType = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup-type',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/signup-type/signup-type.html"*/'<ion-header class="transparent_header no_back">\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg center">\n	<div class="table_box">\n		<div class="table_inner">\n			<img src="img/logo.png" alt="" class="logo" />\n			<button class="btn btn-text" ion-button full (click)="goToSignIn(\'T\')">Continue as a Tutor</button>\n			<button class="btn btn-text" ion-button full (click)="goToSignIn(\'S\')">Continue as a Student</button>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/signup-type/signup-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SignupType);
    return SignupType;
}());

//# sourceMappingURL=signup-type.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordPopup = /** @class */ (function () {
    function ForgotPasswordPopup(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ForgotPasswordPopup.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 3000);
    };
    ForgotPasswordPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss();
    };
    ForgotPasswordPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/forgot-password-popup/forgot-password-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<div class="gradient_bg big_icon center">\n					<img src="img/msg_sent.png" alt="" />\n				</div>\n				<div class="pop_content" padding>\n					<p>An email has been sent to your registered email address. Follow the directions in the email to reset your password.</p>\n				</div>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/forgot-password-popup/forgot-password-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ForgotPasswordPopup);
    return ForgotPasswordPopup;
}());

//# sourceMappingURL=forgot-password-popup.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phone_verification_phone_verification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__privacy_policy_privacy_policy__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__term_conditon_term_conditon__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Signup = /** @class */ (function () {
    function Signup(viewCtrl, platform, modalCtrl, studentservices, alertCtrl, network, toastCtrl, nativeStorage, spinner, navCtrl, fb, navParams, signupService) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.studentservices = studentservices;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.navParams = navParams;
        this.signupService = signupService;
        this.emailValidate = "^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
        this.authForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'mobile_number': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]*')])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])],
            'rePassword': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    }
    Signup.prototype.ionViewWillEnter = function () {
    };
    Signup.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getPrivacy();
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userType').then(function (data) {
            _this.uType = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    Signup.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
        // const index = this.viewCtrl.index;
        // this.navCtrl.remove(index);
    };
    // async buildVersion()
    // {
    //   console.log("build version");
    //   const versionNumber = await this.appVersion.getVersionNumber();
    //   console.log(versionNumber);
    //   this.appVersion = versionNumber;
    // }
    Signup.prototype.moveInput = function (event) {
        var bcSpc = event.key;
        if (bcSpc == 'Backspace') {
            console.log('previousss', bcSpc);
        }
        else if (bcSpc == 'Unidentified' || bcSpc == 'Enter') {
            event.target.value = event.target.value.trim();
            console.log("trim", event.target.value);
            return;
        }
        else {
            console.log("right");
        }
    };
    Signup.prototype.submitForm = function (val, valid) {
        var _this = this;
        if (valid) {
            if (this.authForm.value.password != this.authForm.value.rePassword) {
                this.presentToast("Password doesn't match");
                return;
            }
            this.spinner.show();
            this.signUpdata = {
                device_id: this.deviceId,
                device_type: 'A',
                login_type: 'N',
                country_id: '174',
                email: this.authForm.value.email,
                password: this.authForm.value.password,
                mobile_number: this.authForm.value.mobile_number,
                user_type: this.uType,
                app_version: '1.0'
            };
            this.signupService.signupApi(this.signUpdata).then(function (result) {
                _this.spinner.hide();
                console.log('resultttttttttttttttt', result);
                _this.data1 = result;
                if (_this.data1.status == 200) {
                    _this.presentToast(_this.data1.message);
                    _this.signupData = _this.data1.data;
                    _this.nativeStorage.remove('skipData');
                    _this.nativeStorage.setItem('userData', _this.signupData).then(function (result) {
                        console.log("succesfully set ", result);
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__phone_verification_phone_verification__["a" /* PhoneVerification */]);
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    Signup.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    Signup.prototype.getPrivacy = function () {
        var _this = this;
        this.sendCategorydata = {
            user_id: '0',
            login_token: '0'
        };
        this.studentservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.conditions = _this.data1.data.conditions;
            _this.privacy_policy = _this.data1.data.privacy_policy;
        }, function (err) {
            console.log(err);
        });
    };
    Signup.prototype.termAndContions = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__term_conditon_term_conditon__["a" /* TermConditonPage */], { term: this.conditions });
        profileModal.present();
        // let alert = this.alertCtrl.create({
        //   title: 'Terms and Conditions',
        //   cssClass: 'my-class',
        //   subTitle: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        //   buttons: ['Agree']
        // });
        // alert.present();
    };
    Signup.prototype.privacyPolicy = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], { privacy: this.privacy_policy });
        profileModal.present();
        // let alert = this.alertCtrl.create({
        //   title: 'Privacy policy',
        //   cssClass: 'my-class',
        //   subTitle: '  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        //   buttons: ['Ok']
        // });
        // alert.present();
    };
    Signup.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/signup/signup.html"*/'<ion-header class="transparent_header with_back">\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="bg center">\n	<p padding class="fill">Fill the information below to <br/>create a new account</p>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-item>\n		    	<ion-input type="email" [pattern]="emailValidate" placeholder="Enter Email Address" [formControl]="authForm.controls[\'email\']"></ion-input>\n		    </ion-item>\n\n		    <div style="margin-top: 6px;color: red;" class="error-box" *ngIf="authForm.controls[\'email\'].invalid && authForm.controls[\'email\'].touched || authForm.controls[\'email\'].dirty">\n				<div style="margin-top: 6px;color: red;" class="error-box" *ngIf="authForm.controls[\'email\'].hasError(\'required\')">\n					* Email is required\n				</div>\n				<div *ngIf="authForm.controls[\'email\'].hasError(\'pattern\') && authForm.controls[\'email\'].touched">\n					<div class="error" *ngIf="authForm.controls[\'email\'].hasError(\'pattern\')  && authForm.controls[\'email\'].touched ">\n						* Invalid Email Address\n					</div>\n				</div>\n			</div>\n\n			<ion-item>\n          <ion-label color="primary" style="margin-top:12px;">+974</ion-label>\n		    	<ion-input (keyup)="moveInput($event)" type="tel" limit-to="5" placeholder="Enter Phone Number" [formControl]="authForm.controls[\'mobile_number\']"></ion-input>\n        </ion-item>\n		     <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'mobile_number\'].hasError(\'required\') && authForm.controls[\'mobile_number\'].touched">* Mobile number is required!</div>\n         <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'mobile_number\'].hasError(\'pattern\')">\n          * Invalid phone number\n        </div>\n         <ion-item>\n		    	<ion-input type="password" placeholder="Enter Password" [formControl]="authForm.controls[\'password\']"></ion-input>\n		    </ion-item>\n		    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'password\'].hasError(\'required\') && authForm.controls[\'password\'].touched">* Password is required!</div>\n        <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'password\'].hasError(\'minlength\')">\n          * Minimum of 5 characters\n      </div>\n        <ion-item>\n		    	<ion-input type="password" placeholder="Re-Enter Password" [formControl]="authForm.controls[\'rePassword\']" validateEqual="password"></ion-input>\n		    </ion-item>\n		    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'rePassword\'].hasError(\'required\') && authForm.controls[\'rePassword\'].touched">* Re-password is required!</div>\n		</ion-list>\n    <p class="agree">By clicking the sign up button you agree to the <span (click)="termAndContions()" class="bold_font">Terms and Conditions</span> and <span (click)="privacyPolicy()" class="bold_font">Privacy Policy.</span></p>\n		<button class="btn btn-text" type="submit" ion-button full>Sign Up</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__providers_authservices_authservices__["a" /* AuthservicesProvider */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_contact_us__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_subscription__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_teacher_notifications_teacher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_us_about_us__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__term_conditon_term_conditon__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__faq_faq__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var Settings = /** @class */ (function () {
    function Settings(app, viewCtrl, modalCtrl, tutorservices, toastCtrl, spinner, authservices, network, alertCtrl, nativeStorage, navCtrl) {
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.tutorservices = tutorservices;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authservices = authservices;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.isToggled = false;
    }
    Settings.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getPrivacyCon();
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getProfile();
        });
    };
    Settings.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Settings.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Settings.prototype.getProfile = function () {
        var _this = this;
        this.sendProfileData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.tutorservices.getProfile(this.sendProfileData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getProfileData = _this.data1.data;
                if (_this.getProfileData.notifications == 'Y') {
                    _this.isToggled = true;
                }
                else {
                    _this.isToggled = false;
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Settings.prototype.getPrivacyCon = function () {
        var _this = this;
        this.sendCategorydata = {
            user_id: '0',
            login_token: '0'
        };
        this.tutorservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.aboutU = _this.data1.data.about_us;
            _this.conditions = _this.data1.data.conditions;
            _this.privacy_policy = _this.data1.data.privacy_policy;
        }, function (err) {
            console.log(err);
        });
    };
    Settings.prototype.aboutUs = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__about_us_about_us__["a" /* AboutUsPage */], { about: this.aboutU });
        profileModal.present();
    };
    Settings.prototype.faq = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__faq_faq__["a" /* FaqPage */]);
        profileModal.present();
    };
    Settings.prototype.termCondition = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__term_conditon_term_conditon__["a" /* TermConditonPage */], { term: this.conditions });
        profileModal.present();
    };
    Settings.prototype.notify = function () {
        var _this = this;
        if (this.isToggled == true) {
            this.toggleStatus = "Y";
        }
        else {
            this.toggleStatus = "N";
        }
        this.notiOnOffData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType,
            status: this.toggleStatus
        };
        this.spinner.show();
        this.tutorservices.notificationOnOffApi(this.notiOnOffData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Settings.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Settings.prototype.logOut = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Logout?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.spinner.show();
                        _this.logoutDataSend = {
                            user_id: _this.userId,
                            login_token: _this.token,
                        };
                        _this.authservices.logoutApi(_this.logoutDataSend).then(function (result) {
                            console.log(result);
                            _this.spinner.hide();
                            _this.data1 = result;
                            if (_this.data1.status == 200) {
                                _this.nativeStorage.remove('userData');
                                _this.nativeStorage.remove('userType');
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__signup_type_signup_type__["a" /* SignupType */]);
                                // this.navCtrl.push(SignupType);
                            }
                            else {
                                _this.presentToast(_this.data1.message);
                            }
                        }, function (err) {
                            _this.spinner.hide();
                            console.log(err);
                        });
                    }
                }
            ]
        });
        this.alert.present();
    };
    Settings.prototype.goToContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_us_contact_us__["a" /* ContactUs */]);
    };
    Settings.prototype.goToSubscription = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subscription_subscription__["a" /* Subscription */]);
    };
    Settings.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    	<ion-title>Settings</ion-title>\n    	<ion-buttons right>\n        	<button ion-button (click)="goToNotifications()">\n          		<ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n          		 <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n 			 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        	</button>\n    	</ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<div class="white_box" padding>\n		<ion-list>\n			<ion-item class="no-rightarrow">\n			  <ion-label>Notifications<span>Turn On/Off Your Push Notification</span></ion-label>\n			  <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n			</ion-item>\n			<ion-item (click)="goToContactUs();">\n			  <ion-label>Contact Us</ion-label>\n			</ion-item>\n			<ion-item (click)="aboutUs()">\n			  <ion-label>About Us</ion-label>\n			</ion-item>\n			<ion-item (click)="faq()">\n			  <ion-label>FAQ</ion-label>\n			</ion-item>\n			<ion-item (click)="termCondition()">\n			  <ion-label>Terms and Conditions</ion-label>\n			</ion-item>\n			<ion-item (click)="goToSubscription();">\n			  <ion-label>Subscription</ion-label>\n			</ion-item>\n			<ion-item *ngIf="!userIdSkip" (click)="logOut();">\n			  <ion-label>Logout</ion-label>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_10__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        this.baseUrl = 'http://142.4.10.93/~vooap/tutorry/api/v1/';
        this.appVersion = '1.0';
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorProfileview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_profile_popup_share_profile_popup__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_appointment_book_appointment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_availability_view_availability__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screenshot__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reviews_reviews__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TutorProfileview = /** @class */ (function () {
    function TutorProfileview(screenshot, socialSharing, zone, toastCtrl, spinner, geolocation, studentservices, alertCtrl, platform, network, nativeStorage, navParams, navCtrl, modalCtrl) {
        this.screenshot = screenshot;
        this.socialSharing = socialSharing;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.geolocation = geolocation;
        this.studentservices = studentservices;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.screenShot = true;
        this.unFav = false;
        this.fav = false;
        this.check = false;
    }
    TutorProfileview.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.tId = this.navParams.get('tutorId');
        this.favDataS = this.navParams.get('navTo');
        this.catId = this.navParams.get('catId');
        this.subId = this.navParams.get('subCatId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.lat = data.latitude;
            _this.long = data.longitude;
            _this.getTutorProfile();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getTutorProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getTutorProfile();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    TutorProfileview.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    TutorProfileview.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TutorProfileview.prototype.getTutorProfile = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.tutorData = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                tutor_id: this.tId
            };
        }
        else {
            this.tutorData = {
                user_id: this.userId,
                login_token: this.token,
                tutor_id: this.tId
            };
        }
        this.spinner.show();
        this.studentservices.getTutorProfileApi(this.tutorData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getTutordata = _this.data1.data;
                    _this.ratingData = _this.getTutordata.avg_rating;
                    // this.teachingLevel = this.getTutordata.teaching_levels;
                    _this.getBookAppointCategory = _this.getTutordata.book_appointment_categories;
                    if (_this.getTutordata.fav_status == 0) {
                        _this.unFav = true;
                        _this.fav = false;
                    }
                    else if (_this.getTutordata.fav_status == 'U') {
                        _this.unFav = true;
                        _this.fav = false;
                    }
                    else {
                        _this.fav = true;
                        _this.unFav = false;
                    }
                    console.log(_this.getTutordata);
                });
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TutorProfileview.prototype.heartClick = function (status) {
        var _this = this;
        if (this.userIdSkip) {
            this.presentToast("Please login your account first for favorite tutor profile");
            return;
        }
        if (status == 'F') {
            this.unFav = false;
            this.fav = true;
        }
        else {
            this.unFav = true;
            this.fav = false;
        }
        this.favData = {
            user_id: this.userId,
            tutor_id: this.tId,
            login_token: this.token,
            status: status
        };
        this.studentservices.favUnFav(this.favData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                if (_this.data1.current_status == 'U') {
                }
                else {
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__share_profile_popup_share_profile_popup__["a" /* ShareProfilePopup */], { icon: "fav" });
                    modal.onDidDismiss(function (data) {
                        if (data == 'share') {
                            _this.goToShareProfileShare();
                        }
                        else {
                            console.log("dismiss");
                        }
                    });
                    modal.present();
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TutorProfileview.prototype.goToShareProfile = function () {
        this.socialSharing.share("Check this item:  tutoryapp://items/" + this.tId, this.getTutordata.first_name)
            .then(function () {
        })
            .catch(function () {
        });
        // if(this.userIdSkip){
        //   this.presentToast("Please login your account first for share tutor profile");
        //   return;
        // }
        // this.shareProImage = Math.floor((Math.random() * 10000) + 1);
        // //  this.socialSharing.share("hi", this.getTutordata.profile_pic +'Name '+this.getTutordata.first_name+this.getTutordata.last_name, 'https://tutorry.com').then((success)=>{
        //   this.socialSharing.shareViaWhatsApp("hiiiiiiiii", 'http://18.188.55.192:8080/Located1/resources/images/group1.png', "https://tutory.com").then((success)=>{
        //   console.log(success);
        //     this.recommenddata = {
        //       user_id : this.userId,
        //       login_token:this.token,
        //       tutor_id:this.tId
        //     }
        //     this.spinner.show();
        //     this.studentservices.recommendApi(this.recommenddata).then((result) => {
        //       console.log(result);
        //       this.spinner.hide();
        //       this.data1 = result;
        //       if(this.data1.status == 200){
        //         this.presentToast("Successfully shared");
        //       }else{
        //         this.presentToast(this.data1.message);
        //       }
        //     }, (err) => {
        //       this.spinner.hide();
        //       console.log(err);
        //     })
        //   }).catch((err) => {
        //     console.log(err);
        //   });
    };
    TutorProfileview.prototype.goToShareProfileShare = function () {
        var _this = this;
        this.socialSharing.share("hiiiiiiiii", null, null).then(function (success) {
            console.log(success);
            _this.recommenddata = {
                user_id: _this.userId,
                login_token: _this.token,
                tutor_id: _this.tId
            };
            _this.spinner.show();
            _this.studentservices.recommendApi(_this.recommenddata).then(function (result) {
                console.log(result);
                _this.spinner.hide();
                _this.data1 = result;
                if (_this.data1.status == 200) {
                    // this.presentToast("Successfully shared");
                }
                else {
                    // this.presentToast(this.data1.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    TutorProfileview.prototype.goToBookAppointment = function (tId, tRate, tGroupRate) {
        if (this.userIdSkip) {
            this.presentToast("Please login your account first for Book Appointment");
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_appointment_book_appointment__["a" /* BookAppointment */], { tutorId: tId, tutorRate: tRate, tutorGroupRate: tGroupRate, catId: this.catId, subCatId: this.subId, bookCategory: this.getBookAppointCategory });
        }
    };
    TutorProfileview.prototype.checkAvail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__view_availability_view_availability__["a" /* ViewAvailability */], { tutorId: id });
    };
    TutorProfileview.prototype.review = function (tId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__reviews_reviews__["a" /* Reviews */], { tutor_id: tId, com_screen: 'tutor_profile' });
    };
    TutorProfileview.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], TutorProfileview.prototype, "content", void 0);
    TutorProfileview = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutor-profileview',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/tutor-profileview/tutor-profileview.html"*/'<ion-header *ngIf="screenShot">\n  	<ion-navbar>\n	    <ion-title>Tutor Profile</ion-title>\n	    <ion-buttons right>\n	        <button ion-button (click)="goToShareProfile()">\n	          <ion-icon><img src="img/share_icon.png" alt=""  /></ion-icon>\n	        </button>\n	        <button *ngIf="unFav" ion-button (click)="heartClick(\'F\')">\n	          <ion-icon ><img src="img/heart_icon.png" alt="" /></ion-icon>\n	        </button>\n	        <button *ngIf="fav" ion-button (click)="heartClick(\'U\')">\n	          <img src="img/heartfill_icon.png" alt="" />\n	        </button>\n	    </ion-buttons>\n  	</ion-navbar>\n</ion-header>\n<ion-content class="profile_view">\n  	<div class="big_profile_image">\n		<img class="profile_pic_big" src="{{getTutordata?.profile_pic}}">\n	</div>\n\n	<div class="name_image_area center">\n		<img src="{{getTutordata?.profile_pic}}" alt="" class="user_image" />\n		<h1>{{getTutordata?.first_name}} {{getTutordata?.last_name}}, {{getTutordata?.gender}}, {{getTutordata?.age}}</h1>\n		<!-- <span class="ratings"> -->\n        <span class="rating">\n			<rating [(ngModel)]="ratingData"\n	        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n			</rating>\n		</span>\n		<span class="underline white_text" (click)="review(getTutordata?.tutor_id)">({{getTutordata?.reviews_count}} reviews)</span>\n		<span class="underline white_text">({{getTutordata?.recommendations}} recommendations)</span>\n	</div>\n\n	<div padding>\n		<div class="white_box">\n			<p class="bio">{{getTutordata?.bio}}</p>\n			<ul>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Address</h3>\n					<p>{{getTutordata?.address}}</p>\n				</li>\n\n				<li>\n					<img src="img/service_icon.png" alt="" />\n					<h3>Services Offered</h3>\n					<ul class="skills">\n						<li *ngFor="let service of getTutordata?.categories">\n							{{service.category_name}}\n							<p *ngFor="let subService of service?.subcategories"><span>{{subService.subcategory_name}}</span> <span *ngIf="subService.level_id != 0" class="btn btn-text">{{subService.level}}</span></p>\n						</li>\n					</ul>\n				</li>\n				<li>\n					<img src="img/dollar_icon.png" alt="" />\n					<h3>Rate Per Hour</h3>\n					<p><span>{{getTutordata?.rate}} Q.R/hr</span> for individual student</p>\n					<p><span>{{getTutordata?.group_rate}} Q.R/hr</span> for group of student</p>\n				</li>\n				<li (click)="checkAvail(getTutordata?.tutor_id)">\n					<img src="img/appointments_icon_active.png" alt="" />\n					<h3>Schedule Availability</h3>\n					<!-- <span class="links">Check Availability</span> -->\n					<p><span class="bold_font underline">Check Availability</span></p>\n        </li>\n        <li>\n					<img src="img/service_icon.png" alt="" />\n					<h3>Teaching Levels</h3>\n					<p style="display: inline-block;" *ngFor="let tLevel of getTutordata?.teaching_levels; let isLast=last">{{tLevel.name}} {{isLast ? \'\' : \', \'}}</p>\n				</li>\n				<li>\n					<img src="img/globe_icon.png" alt="" />\n					<h3>Languages Spoken</h3>\n					<p style="display: inline-block;" *ngFor="let lang of getTutordata?.user_languages; let isLast=last">{{lang}} {{isLast ? \'\' : \', \'}}</p>\n				</li>\n				<li>\n					<img src="img/address_icon.png" alt="" />\n					<h3>Preferred Service Location</h3>\n          <p *ngIf="getTutordata?.location_preference == \'TL\'">Tutor Location</p>\n					<p *ngIf="getTutordata?.location_preference == \'SH\'">Student Location</p>\n					<p *ngIf="getTutordata?.location_preference == \'AO\'">Any other public location</p>\n					<p *ngIf="getTutordata?.location_preference == \'NP\'">No preference</p>\n\n				</li>\n				<li>\n					<img src="img/qualification_icon.png" alt="" />\n					<h3>Qualifications</h3>\n					<p>{{getTutordata?.qualification}}</p>\n				</li>\n				<li>\n					<img src="img/service_icon.png" alt="" />\n					<h3>University Name</h3>\n					<p>{{getTutordata?.university_name}}</p>\n				</li>\n				<li>\n					<img src="img/info_icon.png" alt="" />\n					<h3>Other Information</h3>\n					<p>{{getTutordata?.other_info}}</p>\n				</li>\n			</ul>\n		</div>\n		<button *ngIf="!favDataS" class="btn btn-text" ion-button full (click)="goToBookAppointment(getTutordata?.tutor_id,getTutordata?.rate,getTutordata?.group_rate)">Book Appointment</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/tutor-profileview/tutor-profileview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TutorProfileview);
    return TutorProfileview;
}());

//# sourceMappingURL=tutor-profileview.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_purchase__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MONTHLYLVL_TEST = 'com.located.app.subscriptiontest.account1';
var Subscription = /** @class */ (function () {
    function Subscription(iap, platform, alertCtrl, toastCtrl, nativeStorage, spinner, network, tutorservices, navCtrl, navParams) {
        this.iap = iap;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.network = network;
        this.tutorservices = tutorservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    Subscription.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.arrPush = [];
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getCurrentSubscrptions();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Subscription.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Subscription.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Subscription.prototype.getCurrentSubscrptions = function () {
        var _this = this;
        var notificationData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.spinner.show();
        this.tutorservices.currentSubscriptionApi(notificationData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getSubData = _this.data1.data;
                _this.getCurrentPlan = _this.getSubData.current_plan;
                _this.getplanList = _this.getSubData.list;
                _this.currentPlanId = _this.getCurrentPlan.id;
                _this.bestOffer = _this.data1.data.best_offer;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Subscription.prototype.purchaseSubScription = function (id, expPlan, cId) {
        this.purchaseId = id;
        console.log(this.purchaseId);
        this.expPlan = expPlan;
        console.log(this.expPlan);
        this.currentId = cId;
    };
    Subscription.prototype.subscribeNow = function () {
        var _this = this;
        console.log("this.purchaseId", this.purchaseId, "this.currentPlanId", this.currentId);
        if (this.purchaseId == this.currentId) {
            this.presentToast("You have already subscribed this plan. Please choose another plan");
            return;
        }
        if (!this.purchaseId) {
            this.presentToast("Please choose a plan");
            return;
        }
        var purchaseData = {
            user_id: this.userId,
            login_token: this.token,
            subscription_id: this.purchaseId,
            expire_after: this.expPlan
        };
        this.spinner.show();
        this.tutorservices.subscriptionsApi(purchaseData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.presentToast(_this.data1.message);
                _this.getCurrentSubscrptions();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    // purchaseSubScription(id,exAf)
    // {
    // this.iap.subscribe(data).then((data)=> {
    // 	console.log(data);
    // 	this.trnsactionId = data.transactionId;
    // })
    // }
    Subscription.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Subscription = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subscription',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/subscription/subscription.html"*/'<ion-header class="with_back">\n    <ion-navbar>\n   		<ion-title>Subscription</ion-title>\n    </ion-navbar>\n    <div class="blue_bg">\n  		<ion-row>\n  			<ion-col col-6>\n  				<p>Current Subscription</p>\n  				<h1 class="bold_font">{{getCurrentPlan?.title}}</h1>\n  			</ion-col>\n  			<ion-col col-6 class="text-right">\n  				<p>Days Left</p>\n  				<h1 class="bold_font">{{getCurrentPlan?.expire_after}}</h1>\n  			</ion-col>\n	    </ion-row>\n  	</div>\n</ion-header>\n<ion-content padding>\n	<div class="white_box center">\n		<p>Please choose one of the following plans and benefite from unlimited teaching hours using the app.</p>\n		<ion-list radio-group no-lines [(ngModel)]="currentPlanId" *ngFor="let subscriptionList of getplanList;let i = index" >\n		  	<ion-item *ngIf="subscriptionList.monthly_rate != \'0\'">\n					<ion-label>{{subscriptionList.title}} <span class="price bold_font">{{subscriptionList.total}} Riyals</span><span class="per_month">({{subscriptionList.monthly_rate}} Riyals/month)</span></ion-label>\n					<ion-radio [value]="subscriptionList.id"  (ionSelect)="purchaseSubScription(subscriptionList.id,subscriptionList.expire_after,getCurrentPlan?.id)"></ion-radio>\n					<!-- <p *ngIf="subscriptionList.id == bestOffer" class="best_offer"><span item-end class="gradient_bg">BEST OFFER</span></p> -->\n				</ion-item>\n        <p *ngIf="subscriptionList.id == bestOffer" class="best_offer"><span item-end class="gradient_bg">BEST OFFER</span></p>\n		</ion-list>\n		<button class="btn btn-text" ion-button full (click)="subscribeNow()">Subscribe Now</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/subscription/subscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], Subscription);
    return Subscription;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_appointment_detail_submited_teacher_appointment_detail_submited__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_teacher_notifications_teacher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__end_popup_end_popup__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TeacherDashboard = /** @class */ (function () {
    function TeacherDashboard(modalCtrl, alertCtrl, navParams, toastCtrl, tutorservices, platform, spinner, nativeStorage, network, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.tutorservices = tutorservices;
        this.platform = platform;
        this.spinner = spinner;
        this.nativeStorage = nativeStorage;
        this.network = network;
        this.navCtrl = navCtrl;
        this.newShow = false;
        this.toShow = false;
        this.tomShow = false;
        this.nextWShow = false;
        this.nodata = false;
        this.timezone = __WEBPACK_IMPORTED_MODULE_7_moment_timezone__["tz"].guess();
    }
    TeacherDashboard.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.getDashBoardData();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getDashBoardData();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    TeacherDashboard.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    TeacherDashboard.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TeacherDashboard.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherDashboard.prototype.getDashBoardData = function () {
        var _this = this;
        this.spinner.show();
        this.getDashData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.getDashBoardApi(this.getDashData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.myAppoint = _this.data1.data;
                _this.newAppData = _this.myAppoint.new;
                _this.todayAppData = _this.myAppoint.today;
                _this.tomorrowAppData = _this.myAppoint.tomorrow;
                _this.nextweekAppData = _this.myAppoint.next_week;
                if (_this.newAppData.length != 0) {
                    _this.newShow = true;
                }
                else {
                    _this.newShow = false;
                }
                if (_this.todayAppData.length != 0) {
                    _this.toShow = true;
                }
                else {
                    _this.toShow = false;
                }
                if (_this.tomorrowAppData.length != 0) {
                    _this.tomShow = true;
                }
                else {
                    _this.tomShow = false;
                }
                if (_this.nextweekAppData != 0) {
                    _this.nextWShow = true;
                }
                else {
                    _this.nextWShow = false;
                }
                if (_this.newAppData.length == 0 && _this.todayAppData == 0 && _this.tomorrowAppData == 0 && _this.nextweekAppData == 0) {
                    _this.nodata = true;
                }
                else {
                    _this.nodata = false;
                }
            }
            else {
                if (_this.data1.message == 'Wrong token entered!.Please try again.') {
                    _this.presentToast("Session expired Please login again");
                    _this.sessionExpired();
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TeacherDashboard.prototype.actionButton = function (appointmentId, action) {
        var _this = this;
        if (action == 'accept') {
            this.title = "accept";
            this.successMessage = 'Successfully Accepted';
            this.content = "You want to accept the appointment !";
        }
        else if (action == 'start') {
            this.title = "start";
            this.successMessage = 'Successfully Started';
            this.content = "You want to start the appointment !";
        }
        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()({
            title: 'Are you sure?',
            text: this.content,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, ' + this.title + ' it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.actionData = {
                    tutor_id: _this.userId,
                    login_token: _this.token,
                    appointment_id: appointmentId,
                    action: action
                };
                _this.tutorservices.myAppointmentActionsApi(_this.actionData).then(function (result) {
                    console.log(result);
                    _this.spinner.hide();
                    _this.data1 = result;
                    _this.myAppoint = _this.data1.data;
                    if (_this.data1.status == 200) {
                        __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()(_this.title, _this.successMessage, 'success');
                        _this.getDashBoardData();
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
            else if (result.dismiss === __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default.a.DismissReason.cancel) {
                __WEBPACK_IMPORTED_MODULE_12_sweetalert2___default()('Cancelled', 'Your dont ' + _this.title + ' the appointment :)', 'error');
            }
        });
        // this.spinner.show();
        // this.actionData = {
        //   tutor_id : this.userId,
        //   login_token:this.token,
        //   appointment_id:appointmentId,
        //   action:action
        // }
        // this.tutorservices.myAppointmentActionsApi(this.actionData).then((result) => {
        //   console.log(result);
        //   this.spinner.hide();
        //   this.data1 = result;
        //   this.myAppoint = this.data1.data;
        //   if(this.data1.status == 200){
        //     this.getDashBoardData();
        //   }else{
        //     this.presentToast(this.data1.message);
        //   }
        // }, (err) => {
        //    this.spinner.hide();
        //   console.log(err);
        // })
    };
    TeacherDashboard.prototype.rejectClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'teacher_reject' });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                console.log("reject return data", data);
                if (data) {
                    _this.userType = data.user_type;
                    _this.userId = data.id;
                    _this.token = data.login_token;
                    _this.getDashBoardData();
                }
                else {
                    console.log("cross");
                }
            });
        });
        modal.present();
    };
    TeacherDashboard.prototype.cancelClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'teacher_cancel' });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                if (data) {
                    _this.userType = data.user_type;
                    _this.userId = data.id;
                    _this.token = data.login_token;
                    _this.getDashBoardData();
                }
                else {
                    console.log("cross");
                }
            });
        });
        modal.present();
    };
    TeacherDashboard.prototype.endClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__end_popup_end_popup__["a" /* EndPopup */], { appointment_id: id, action: action });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                if (data) {
                    _this.userType = data.user_type;
                    _this.userId = data.id;
                    _this.token = data.login_token;
                    _this.getDashBoardData();
                }
                else {
                    console.log("cross");
                }
            });
        });
        modal.present();
    };
    TeacherDashboard.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherDashboard.prototype.goToDetailSubmit = function (apId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: apId });
    };
    TeacherDashboard.prototype.sessionExpired = function () {
        this.nativeStorage.remove('userType');
        this.nativeStorage.remove('userData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signup_type_signup_type__["a" /* SignupType */]);
    };
    TeacherDashboard.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-dashboard',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-dashboard/teacher-dashboard.html"*/'<!--\n  Generated template for the TeacherDashboard page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Dashboard</ion-title>\n      <ion-buttons right>\n          <button ion-button (click)="goToNotifications()">\n            <ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n             <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n          <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding class="appointments_box">\n      <!-- no appointments-->\n       <!--  <div class="no_appointment">\n            <div class="inner">\n              <img src="img/no_appointment.png" alt="" />\n              <p>You have no appointments yet. Once you have any they will appear here!</p>\n            </div>\n        </div> -->\n      <!-- no appointments-->\n      <p  style="text-align: center;margin-top: 50%;" *ngIf="nodata">You have no appointment yet. Once you have any they will appear here.</p>\n      <h3 *ngIf="newShow" class="header bold_font">New Appointment Requests</h3>\n      <ion-list *ngIf="newShow" no-lines>\n          <ion-item  *ngFor="let newApp of newAppData">\n              <ion-avatar item-start (click)="goToDetailSubmit(newApp.appointment_id)">\n                <img src="{{newApp.profile_pic}}">\n              </ion-avatar>\n              <h2 (click)="goToDetailSubmit(newApp.appointment_id)" class="bold_font">{{newApp.first_name}} {{newApp.last_name}}, {{newApp.gender}}, {{newApp.age}}</h2>\n              <p (click)="goToDetailSubmit(newApp.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{newApp.start_time}} to {{newApp.end_time}}, {{newApp.date | date:\'dd/MM/yyyy\'}}</p>\n              <p (click)="goToDetailSubmit(newApp.appointment_id)">{{newApp.category_name}} - <span>{{newApp.subcategory_name}}</span></p>\n\n              <p *ngIf=" newApp.student_status == \'R_AC_BT\' && newApp.prev_student_status == \'R_SE_BS\' && newApp.tutor_status ==  \'R_AC_BT\' && newApp.prev_tutor_status == \'R_RE_BT\'" class="blue">Appointment accepted by you.</p>\n              <p *ngIf=" newApp.student_status == \'R_RJ_BT\' && newApp.prev_student_status == \'R_SE_BS\' && newApp.tutor_status ==  \'R_RJ_BT\' && newApp.prev_tutor_status == \'R_RE_BT\'" class="green" >Appointment Rejected by you.</p>\n\n              <p *ngIf=" newApp.student_status == \'A_ST_BT\' && newApp.prev_student_status == \'R_AC_BT\' && newApp.tutor_status ==  \'A_ST_BT\' && newApp.prev_tutor_status == \'R_AC_BT\'" class="blue">Request sent to student for start appointment.</p>\n              <p *ngIf=" newApp.student_status == \'R_CA_BT\' && newApp.prev_student_status == \'R_AC_BT\' && newApp.tutor_status ==  \'R_CA_BT\' && newApp.prev_tutor_status == \'R_AC_BT\'" class="pink_color">Appointment cancelled by you.</p>\n              <p *ngIf=" newApp.student_status == \'S_CN_BS\' && newApp.prev_student_status == \'A_ST_BT\' && newApp.tutor_status ==  \'S_CN_BS\' && newApp.prev_tutor_status == \'A_ST_BT\'" class="green" >Appointment in progress.</p>\n\n              <button *ngIf=" newApp.student_status == \'R_SE_BS\' && newApp.prev_student_status == \'NONE\' && newApp.tutor_status ==  \'R_RE_BT\' && newApp.prev_tutor_status == \'NONE\'" class="btn btn-text" ion-button (click)="actionButton(newApp.appointment_id,\'accept\')">Accept</button>\n              <button  *ngIf=" newApp.student_status == \'R_SE_BS\' && newApp.prev_student_status == \'NONE\' && newApp.tutor_status ==  \'R_RE_BT\' && newApp.prev_tutor_status == \'NONE\'" class="btn btn-text blue_btn" ion-button (click)="rejectClick(newApp.appointment_id,\'reject\')">Reject</button>\n\n              <button *ngIf=" newApp.student_status == \'R_AC_BT\' && newApp.prev_student_status == \'R_SE_BS\' && newApp.tutor_status ==  \'R_AC_BT\' && newApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text" ion-button (click)="actionButton(newApp.appointment_id,\'start\')">Start</button>\n              <button *ngIf=" newApp.student_status == \'R_AC_BT\' && newApp.prev_student_status == \'R_SE_BS\' && newApp.tutor_status ==  \'R_AC_BT\' && newApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text blue_btn" ion-button (click)="cancelClick(newApp.appointment_id,\'cancel\')">Cancel</button>\n\n              <button *ngIf=" newApp.student_status == \'S_CN_BS\' && newApp.prev_student_status == \'A_ST_BT\' && newApp.tutor_status ==  \'S_CN_BS\' && newApp.prev_tutor_status == \'A_ST_BT\'" class="btn btn-text" ion-button (click)="endClick(newApp.appointment_id,\'end\')">End Appointment</button>\n\n          </ion-item>\n      </ion-list>\n\n      <h3 *ngIf="toShow" class="header bold_font">Today’s Appointments</h3>\n      <ion-list *ngIf="toShow" no-lines>\n          <ion-item  *ngFor="let todayApp of todayAppData" >\n              <ion-avatar item-start (click)="goToDetailSubmit(todayApp.appointment_id)">\n                <img src="{{todayApp.profile_pic}}">\n              </ion-avatar>\n             <h2 (click)="goToDetailSubmit(todayApp.appointment_id)" class="bold_font">{{todayApp.first_name}} {{todayApp.last_name}}, {{todayApp.gender}}, {{todayApp.age}}</h2>\n               <p (click)="goToDetailSubmit(todayApp.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{todayApp.start_time}} to {{todayApp.end_time}}, {{todayApp.date | date:\'dd/MM/yyyy\'}}</p>\n              <p (click)="goToDetailSubmit(todayApp.appointment_id)">{{todayApp.category_name}} - <span>{{todayApp.subcategory_name}}</span></p>\n\n              <p *ngIf=" todayApp.student_status == \'R_AC_BT\' && todayApp.prev_student_status == \'R_SE_BS\' && todayApp.tutor_status ==  \'R_AC_BT\' && todayApp.prev_tutor_status == \'R_RE_BT\'" class="blue">Appointment accepted by you.</p>\n              <p *ngIf=" todayApp.student_status == \'R_RJ_BT\' && todayApp.prev_student_status == \'R_SE_BS\' && todayApp.tutor_status ==  \'R_RJ_BT\' && todayApp.prev_tutor_status == \'R_RE_BT\'" class="green" >Appointment Rejected by you.</p>\n              <p *ngIf=" todayApp.student_status == \'A_ST_BT\' && todayApp.prev_student_status == \'R_AC_BT\' && todayApp.tutor_status ==  \'A_ST_BT\' && todayApp.prev_tutor_status == \'R_AC_BT\'" class="blue">Request sent to student for start appointment.</p>\n              <p *ngIf=" todayApp.student_status == \'R_CA_BT\' && todayApp.prev_student_status == \'R_AC_BT\' && todayApp.tutor_status ==  \'R_CA_BT\' && todayApp.prev_tutor_status == \'R_AC_BT\'" class="pink_color">Appointment cancelled by you.</p>\n              <p *ngIf=" todayApp.student_status == \'S_CN_BS\' && todayApp.prev_student_status == \'A_ST_BT\' && todayApp.tutor_status ==  \'S_CN_BS\' && todayApp.prev_tutor_status == \'A_ST_BT\'" class="green" >Appointment in progress.</p>\n\n             <button *ngIf=" todayApp.student_status == \'R_SE_BS\' && todayApp.prev_student_status == \'NONE\' && todayApp.tutor_status ==  \'R_RE_BT\' && todayApp.prev_tutor_status == \'NONE\'" class="btn btn-text" ion-button (click)="actionButton(todayApp.appointment_id,\'accept\')">Accept</button>\n              <button  *ngIf=" todayApp.student_status == \'R_SE_BS\' && todayApp.prev_student_status == \'NONE\' && todayApp.tutor_status ==  \'R_RE_BT\' && todayApp.prev_tutor_status == \'NONE\'" class="btn btn-text blue_btn" ion-button (click)="rejectClick(todayApp.appointment_id,\'reject\')">Reject</button>\n\n              <button *ngIf=" todayApp.student_status == \'R_AC_BT\' && todayApp.prev_student_status == \'R_SE_BS\' && todayApp.tutor_status ==  \'R_AC_BT\' && todayApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text" ion-button (click)="actionButton(todayApp.appointment_id,\'start\')">Start</button>\n              <button *ngIf=" todayApp.student_status == \'R_AC_BT\' && todayApp.prev_student_status == \'R_SE_BS\' && todayApp.tutor_status ==  \'R_AC_BT\' && todayApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text blue_btn" ion-button (click)="cancelClick(todayApp.appointment_id,\'cancel\')">Cancel</button>\n\n              <button *ngIf=" todayApp.student_status == \'S_CN_BS\' && todayApp.prev_student_status == \'A_ST_BT\' && todayApp.tutor_status ==  \'S_CN_BS\' && todayApp.prev_tutor_status == \'A_ST_BT\'" class="btn btn-text" ion-button (click)="endClick(todayApp.appointment_id,\'end\')">End Appointment</button>\n\n\n          </ion-item>\n      </ion-list>\n\n      <h3 *ngIf="tomShow" class="header bold_font">Tomorrow\'s Appointments</h3>\n      <ion-list *ngIf="tomShow" no-lines>\n          <ion-item  *ngFor="let tommApp of tomorrowAppData" >\n              <ion-avatar (click)="goToDetailSubmit(tommApp.appointment_id)" item-start>\n                <img src="{{tommApp.profile_pic}}">\n              </ion-avatar>\n             <h2 (click)="goToDetailSubmit(tommApp.appointment_id)" class="bold_font">{{tommApp.first_name}} {{tommApp.last_name}}, {{tommApp.gender}}, {{tommApp.age}}</h2>\n               <p (click)="goToDetailSubmit(tommApp.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{tommApp.start_time}} to {{tommApp.end_time}}, {{tommApp.date | date:\'dd/MM/yyyy\'}}</p>\n              <p (click)="goToDetailSubmit(tommApp.appointment_id)" >{{tommApp.category_name}} - <span>{{tommApp.subcategory_name}}</span></p>\n\n              <p *ngIf=" tommApp.student_status == \'R_AC_BT\' && tommApp.prev_student_status == \'R_SE_BS\' && tommApp.tutor_status ==  \'R_AC_BT\' && tommApp.prev_tutor_status == \'R_RE_BT\'" class="blue">Appointment accepted by you.</p>\n              <p *ngIf=" tommApp.student_status == \'R_RJ_BT\' && tommApp.prev_student_status == \'R_SE_BS\' && tommApp.tutor_status ==  \'R_RJ_BT\' && tommApp.prev_tutor_status == \'R_RE_BT\'" class="green" >Appointment Rejected by you.</p>\n              <p *ngIf=" tommApp.student_status == \'A_ST_BT\' && tommApp.prev_student_status == \'R_AC_BT\' && tommApp.tutor_status ==  \'A_ST_BT\' && tommApp.prev_tutor_status == \'R_AC_BT\'" class="blue">Request sent to student for start appointment.</p>\n              <p *ngIf=" tommApp.student_status == \'R_CA_BT\' && tommApp.prev_student_status == \'R_AC_BT\' && tommApp.tutor_status ==  \'R_CA_BT\' && tommApp.prev_tutor_status == \'R_AC_BT\'" class="pink_color">Appointment cancelled by you.</p>\n              <p *ngIf=" tommApp.student_status == \'S_CN_BS\' && tommApp.prev_student_status == \'A_ST_BT\' && tommApp.tutor_status ==  \'S_CN_BS\' && tommApp.prev_tutor_status == \'A_ST_BT\'" class="green" >Appointment in progress.</p>\n\n              <button *ngIf=" tommApp.student_status == \'R_SE_BS\' && tommApp.prev_student_status == \'NONE\' && tommApp.tutor_status ==  \'R_RE_BT\' && tommApp.prev_tutor_status == \'NONE\'" class="btn btn-text" ion-button (click)="actionButton(tommApp.appointment_id,\'accept\')">Accept</button>\n              <button  *ngIf=" tommApp.student_status == \'R_SE_BS\' && tommApp.prev_student_status == \'NONE\' && tommApp.tutor_status ==  \'R_RE_BT\' && tommApp.prev_tutor_status == \'NONE\'" class="btn btn-text blue_btn" ion-button (click)="rejectClick(tommApp.appointment_id,\'reject\')">Reject</button>\n\n              <button *ngIf=" tommApp.student_status == \'R_AC_BT\' && tommApp.prev_student_status == \'R_SE_BS\' && tommApp.tutor_status ==  \'R_AC_BT\' && tommApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text" ion-button (click)="actionButton(tommApp.appointment_id,\'start\')">Start</button>\n              <button *ngIf=" tommApp.student_status == \'R_AC_BT\' && tommApp.prev_student_status == \'R_SE_BS\' && tommApp.tutor_status ==  \'R_AC_BT\' && tommApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text blue_btn" ion-button (click)="cancelClick(tommApp.appointment_id,\'cancel\')">Cancel</button>\n\n              <button *ngIf=" tommApp.student_status == \'S_CN_BS\' && tommApp.prev_student_status == \'A_ST_BT\' && tommApp.tutor_status ==  \'S_CN_BS\' && tommApp.prev_tutor_status == \'A_ST_BT\'" class="btn btn-text" ion-button (click)="endClick(tommApp.appointment_id,\'end\')">End Appointment</button>\n\n          </ion-item>\n      </ion-list>\n\n       <h3 *ngIf="nextWShow" class="header bold_font">Next week Appointments</h3>\n      <ion-list *ngIf="nextWShow" no-lines>\n          <ion-item  *ngFor="let nextWeekApp of nextweekAppData" >\n              <ion-avatar (click)="goToDetailSubmit(nextWeekApp.appointment_id)" item-start>\n                <img src="{{nextWeekApp.profile_pic}}">\n              </ion-avatar>\n             <h2 (click)="goToDetailSubmit(nextWeekApp.appointment_id)" class="bold_font">{{nextWeekApp.first_name}} {{nextWeekApp.last_name}}, {{nextWeekApp.gender}}, {{nextWeekApp.age}}</h2>\n               <p (click)="goToDetailSubmit(nextWeekApp.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{nextWeekApp.start_time}} to {{nextWeekApp.end_time}}, {{nextWeekApp.date | date:\'dd/MM/yyyy\'}}</p>\n              <p (click)="goToDetailSubmit(nextWeekApp.appointment_id)" >{{nextWeekApp.category_name}} - <span>{{nextWeekApp.subcategory_name}}</span></p>\n\n             <p *ngIf=" nextWeekApp.student_status == \'R_AC_BT\' && nextWeekApp.prev_student_status == \'R_SE_BS\' && nextWeekApp.tutor_status ==  \'R_AC_BT\' && nextWeekApp.prev_tutor_status == \'R_RE_BT\'" class="blue">Appointment accepted by you.</p>\n              <p *ngIf=" nextWeekApp.student_status == \'R_RJ_BT\' && nextWeekApp.prev_student_status == \'R_SE_BS\' && nextWeekApp.tutor_status ==  \'R_RJ_BT\' && nextWeekApp.prev_tutor_status == \'R_RE_BT\'" class="green" >Appointment Rejected by you.</p>\n              <p *ngIf=" nextWeekApp.student_status == \'A_ST_BT\' && nextWeekApp.prev_student_status == \'R_AC_BT\' && nextWeekApp.tutor_status ==  \'A_ST_BT\' && nextWeekApp.prev_tutor_status == \'R_AC_BT\'" class="blue">Request sent to student for start appointment.</p>\n              <p *ngIf=" nextWeekApp.student_status == \'R_CA_BT\' && nextWeekApp.prev_student_status == \'R_AC_BT\' && nextWeekApp.tutor_status ==  \'R_CA_BT\' && nextWeekApp.prev_tutor_status == \'R_AC_BT\'" class="pink_color">Appointment cancelled by you.</p>\n              <p *ngIf=" nextWeekApp.student_status == \'S_CN_BS\' && nextWeekApp.prev_student_status == \'A_ST_BT\' && nextWeekApp.tutor_status ==  \'S_CN_BS\' && nextWeekApp.prev_tutor_status == \'A_ST_BT\'" class="green" >Appointment in progress.</p>\n\n              <button *ngIf=" nextWeekApp.student_status == \'R_SE_BS\' && nextWeekApp.prev_student_status == \'NONE\' && nextWeekApp.tutor_status ==  \'R_RE_BT\' && nextWeekApp.prev_tutor_status == \'NONE\'" class="btn btn-text" ion-button (click)="actionButton(nextWeekApp.appointment_id,\'accept\')">Accept</button>\n              <button  *ngIf=" nextWeekApp.student_status == \'R_SE_BS\' && nextWeekApp.prev_student_status == \'NONE\' && nextWeekApp.tutor_status ==  \'R_RE_BT\' && nextWeekApp.prev_tutor_status == \'NONE\'" class="btn btn-text blue_btn" ion-button (click)="rejectClick(nextWeekApp.appointment_id,\'reject\')">Reject</button>\n\n              <button *ngIf=" nextWeekApp.student_status == \'R_AC_BT\' && nextWeekApp.prev_student_status == \'R_SE_BS\' && nextWeekApp.tutor_status ==  \'R_AC_BT\' && nextWeekApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text" ion-button (click)="actionButton(nextWeekApp.appointment_id,\'start\')">Start</button>\n              <button *ngIf=" nextWeekApp.student_status == \'R_AC_BT\' && nextWeekApp.prev_student_status == \'R_SE_BS\' && nextWeekApp.tutor_status ==  \'R_AC_BT\' && nextWeekApp.prev_tutor_status == \'R_RE_BT\'" class="btn btn-text blue_btn" ion-button (click)="cancelClick(nextWeekApp.appointment_id,\'cancel\')">Cancel</button>\n\n              <button *ngIf=" nextWeekApp.student_status == \'S_CN_BS\' && nextWeekApp.prev_student_status == \'A_ST_BT\' && nextWeekApp.tutor_status ==  \'S_CN_BS\' && nextWeekApp.prev_tutor_status == \'A_ST_BT\'" class="btn btn-text blue_btn" ion-button (click)="endClick(nextWeekApp.appointment_id,\'end\')">End Appointment</button>\n\n          </ion-item>\n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-dashboard/teacher-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TeacherDashboard);
    return TeacherDashboard;
}());

//# sourceMappingURL=teacher-dashboard.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(loadingCtrl, navCtrl, navParams, viewCtrl, zone, menuCtrl, nativeStorage) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.nativeStorage = nativeStorage;
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutocompletePage');
        this.viewCtrl.showBackButton(true);
    };
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        // this.viewCtrl.dismiss(this.geo);
        this.geo = item;
        this.geoCode(this.geo);
    };
    AutocompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: '' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    AutocompletePage.prototype.geoCode = function (address) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.nativeStorage.setItem('latitude', _this.latitude).then(function (result) { return console.log('Stored item!', result); }, function (error) { return console.error('Error storing item', error); });
            _this.longitude = results[0].geometry.location.lng();
            _this.nativeStorage.setItem('longitude', _this.longitude).then(function (result) {
                loading.dismiss();
                _this.viewCtrl.dismiss(_this.geo);
                console.log('Stored item!', result);
            }, function (error) { return console.error('Error storing item', error); });
        });
    };
    AutocompletePage.prototype.doneClick = function (item) {
        this.viewCtrl.dismiss(item);
        this.geo = item;
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/autocomplete/autocomplete.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons right (click)="doneClick(autocomplete.query)">\n            <button ion-button icon-only>\n                <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Enter your Address</ion-title>\n\n    </ion-navbar>\n    <ion-toolbar no-border-top>\n        <!-- <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar> -->\n        <ion-searchbar [(ngModel)]="autocomplete.query" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n            {{ item }}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/autocomplete/autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeatAppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__success_popup_success_popup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_search_map_search__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RepeatAppointmentPage = /** @class */ (function () {
    function RepeatAppointmentPage(events, app, tutorservices, httpBaseUrl, fb, studentServices, modalCtrl, zone, alertCtrl, platform, network, nativeStorage, spinner, navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.events = events;
        this.app = app;
        this.tutorservices = tutorservices;
        this.httpBaseUrl = httpBaseUrl;
        this.fb = fb;
        this.studentServices = studentServices;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.show = false;
        this.minDate = new Date().toISOString();
        this.selectedDate = new Date().toISOString();
        this.slotArr = [];
        this.showSuggest = false;
        this.showiNPUT = false;
        this.showLevel = true;
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.authForm = fb.group({
            'start_time': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'end_time': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'date': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            // 'service_id': ["", Validators.compose([Validators.required])],
            'category': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'subcategory': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'levels': [""],
            'location_preference': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'no_of_students': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'special_instructions': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'other_location': [""]
        });
        events.subscribe('markData:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.suggestId = user.id;
            _this.authForm.get('other_location').setValue(user.address);
        });
    }
    RepeatAppointmentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.serviceArrPush = [];
        this.subCatArr = [];
        this.levArr = [];
        this.val = this.navParams.get("value");
        if (this.val) {
            this.va = this.val;
            this.authForm.get('other_location').setValue(this.va);
            this.show = true;
        }
        else {
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
        if (this.locationPref == "AO") {
            this.show = true;
            this.showiNPUT = true;
        }
        else {
            // this.show = false;
            this.showiNPUT = false;
        }
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getRepeatAppi();
            _this.getSuggestLocations();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getRepeatAppi();
            _this.getSuggestLocations();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    RepeatAppointmentPage.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    RepeatAppointmentPage.prototype.getRepeatAppi = function () {
        var _this = this;
        this.sendRepeatApi = {
            user_id: this.userId,
            login_token: this.token,
            tutor_id: this.tutorId
        };
        this.studentServices.repeatAppointments(this.sendRepeatApi).then(function (result) {
            console.log("getRepeatData", result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getRepeatData = _this.data1.data;
                _this.authForm.get('start_time').setValue(_this.getRepeatData.from_time);
                _this.authForm.get('end_time').setValue(_this.getRepeatData.to_time);
                _this.dateFo = __WEBPACK_IMPORTED_MODULE_9_moment_timezone__(_this.getRepeatData.date).format('YYYY-MM-DD');
                _this.authForm.get('date').setValue(_this.dateFo);
                _this.newAttri = {
                    from_time: _this.getRepeatData.from_time,
                    to_time: _this.getRepeatData.to_time
                };
                console.log('this.newAttri', _this.newAttri);
                _this.slotArr.push(_this.newAttri);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    RepeatAppointmentPage.prototype.getSuggestLocations = function () {
        var _this = this;
        this.sendSuggesteddata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentServices.suggestedLocations(this.sendSuggesteddata).then(function (result) {
            console.log("suggested location data", result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.suggestedLocations = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    RepeatAppointmentPage.prototype.eventFire = function (event) {
        console.log(event);
        this.locationF = event;
        if (event == 'AO') {
            this.show = true;
            this.showiNPUT = true;
        }
        else {
            this.show = false;
        }
    };
    RepeatAppointmentPage.prototype.suggestClick = function () {
        this.show = true;
    };
    RepeatAppointmentPage.prototype.clickSuggest = function (add, id) {
        this.suggestId = id;
        this.show = false;
        this.va = add;
        this.authForm.get('other_location').setValue(this.va);
    };
    RepeatAppointmentPage.prototype.mapGo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__map_search_map_search__["a" /* MapSearchPage */]);
    };
    RepeatAppointmentPage.prototype.fromTime = function (event) {
        console.log("eventevent", event);
        this.frTime = event.hour;
        if (this.toTimeVal) {
            console.log("this.toTimeVal", this.toTimeVal);
            if (this.toTimeVal < this.frTime) {
                this.presentToast('From time must be less than to time.');
                this.authForm.value.start_time = "";
            }
            else {
                this.frTime = this.frTime;
            }
        }
        else {
            this.frTime = this.frTime;
        }
    };
    RepeatAppointmentPage.prototype.toTime = function (event) {
        this.slotArr = [];
        this.toTimeVal = event.hour;
        if (this.frTime) {
            if (this.toTimeVal > this.frTime) {
                var from = parseInt(this.frTime);
                var to = parseInt(this.toTimeVal);
                var to_time = from;
                for (var i = from; i < to; i++) {
                    from = to_time;
                    to_time = from + 1;
                    this.newAttri = {
                        from_time: from,
                        to_time: to_time
                    };
                    console.log('this.newAttri', this.newAttri);
                    this.slotArr.push(this.newAttri);
                }
                console.log("this.slotArr", this.slotArr);
            }
            else {
                this.presentToast('Please select time greater than from time');
                this.authForm.value.end_time = "";
                return;
            }
        }
        else {
            this.presentToast('Please select from time first');
            this.authForm.value.end_time = "";
            return;
        }
    };
    RepeatAppointmentPage.prototype.selectCategory = function (id, levelPresent, catname) {
        this.subCatArr = [];
        this.levArr = [];
        this.cateName = catname;
        this.selectCateId = id;
        console.log(levelPresent);
        this.levePresent = levelPresent;
        if (this.levePresent == 0) {
            this.showLevel = false;
        }
        else {
            this.showLevel = true;
        }
        for (var i = 0; i < this.getBookCategory.length; i++) {
            if (this.getBookCategory[i].category_id == this.selectCateId) {
                this.subCat = this.getBookCategory[i].subcategories;
                this.levelData = this.getBookCategory[i].levels;
            }
            else {
                console.log("elseeeeeee", this.getBookCategory[i]);
            }
        }
    };
    RepeatAppointmentPage.prototype.categorySelectSub = function (id, name) {
        this.subCateSelectId = id;
        this.subCateSelectName = name;
    };
    RepeatAppointmentPage.prototype.levelsSelect = function (id, name) {
        this.levelSelectId = id;
        this.levelsSelectName = name;
    };
    RepeatAppointmentPage.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    RepeatAppointmentPage.prototype.submitForm = function (val, valid) {
        var _this = this;
        this.slotArr = [];
        this.serviceArrPush = [];
        if (this.levePresent == 0) {
            this.levelSelectId = 0;
        }
        this.servName = this.cateName + '-' + this.subCateSelectName + '-' + this.levelsSelectName;
        this.serviceArr = [this.selectCateId, this.subCateSelectId, this.levelSelectId];
        this.serviceArrPush.push(this.serviceArr);
        console.log('this.serviceArrPush', this.serviceArrPush);
        var s = this.authForm.value.start_time;
        this.sTime = s.substring(0, s.indexOf(':'));
        var t = this.authForm.value.end_time;
        this.endT = t.substring(0, t.indexOf(':'));
        this.newAttri = {
            from_time: this.sTime,
            to_time: this.endT
        };
        console.log('this.newAttri', this.newAttri);
        this.slotArr.push(this.newAttri);
        if (valid) {
            console.log(this.toTimeVal, this.frTime);
            if (this.toTimeVal < this.frTime) {
                this.presentToast("From time must be less than to time");
                return;
            }
            if (this.locationF == 'AO') {
                if (this.locationF == '' || this.locationF == undefined || this.locationF == null) {
                    this.presentToast("Please enter other location");
                    return;
                }
            }
            if (this.levePresent == 1) {
                if (this.levelSelectId == "" || this.levelSelectId == undefined || this.levelSelectId == null) {
                    this.presentToast("Please select level");
                    return;
                }
            }
            if (this.authForm.value.no_of_students > 10) {
                this.presentToast("Only 10 users allowed");
                return;
            }
            if (this.authForm.value.no_of_students <= 0) {
                this.presentToast("Please add atleast one student");
                return;
            }
            if (this.authForm.value.no_of_students > 1) {
                this.rateCheck = this.tGrRate;
            }
            else {
                this.rateCheck = this.trate;
            }
            var alert_1 = this.alertCtrl.create({
                title: 'Are you sure?',
                message: 'You want to repeat book appointment',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.spinner.show();
                            _this.bookAppointmentData = {
                                user_id: _this.userId,
                                login_token: _this.token,
                                tutor_id: _this.tutorId,
                                date: _this.authForm.value.date,
                                // service_id: this.authForm.value.service_id,
                                service_id: _this.serviceArr,
                                no_of_students: _this.authForm.value.no_of_students,
                                location_preference: _this.authForm.value.location_preference,
                                other_location: _this.authForm.value.other_location,
                                other_location_id: _this.suggestId,
                                tutor_rate: _this.trate,
                                service_name: _this.servName,
                                start_time: _this.authForm.value.start_time,
                                end_time: _this.authForm.value.end_time,
                                special_instructions: _this.authForm.value.special_instructions,
                                slots: JSON.stringify(_this.slotArr),
                                currency_id: '85'
                            };
                            _this.studentServices.bookAppointmentsApi(_this.bookAppointmentData).then(function (result) {
                                _this.spinner.hide();
                                _this.data1 = result;
                                if (_this.data1.status == 200) {
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__success_popup_success_popup__["a" /* SuccessPopup */]);
                                    modal.present();
                                    // this.app.getRootNav().setRoot(MyAppointments);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_student_tabs_student__["a" /* TabsStudentPage */], { opentab: 2 });
                                }
                                else {
                                    _this.presentToast(_this.data1.message);
                                }
                            }, function (err) {
                                _this.spinner.hide();
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    RepeatAppointmentPage.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    RepeatAppointmentPage.prototype.skipLogout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'login',
            message: 'You need to login first',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__["a" /* SignupType */]);
                    }
                }
            ]
        });
        this.alert.present();
    };
    // goToSuccessPopup() {
    // 	let modal = this.modalCtrl.create(SuccessPopup);
    //   modal.present();
    // }
    RepeatAppointmentPage.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RepeatAppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repeat-appointment',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/repeat-appointment/repeat-appointment.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Repeat Appointment</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n	<ion-list class="input_forms" no-lines>\n		<ion-row>\n			<ion-col col-50>\n				<ion-item class="drops">\n				  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n				  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="From Time" formControlName="start_time" (ionChange)="fromTime($event)"></ion-datetime>\n				</ion-item>\n				 <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'start_time\'].hasError(\'required\') && authForm.controls[\'start_time\'].touched">* From time is required!</div>\n			</ion-col>\n			<ion-col col-50>\n			    <ion-item class="drops">\n				  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n				  	<ion-datetime displayFormat="HH:mm" minuteValues="0"  placeholder="To Time" formControlName="end_time" (ionChange)="toTime($event)"></ion-datetime>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'end_time\'].hasError(\'required\') && authForm.controls[\'end_time\'].touched">* To time is required!</div>\n			</ion-col>\n		</ion-row>\n		<ion-item class="drops">\n		  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n		  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date" formControlName="date" [min]="minDate"></ion-datetime>\n		</ion-item>\n		<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'date\'].hasError(\'required\') && authForm.controls[\'date\'].touched">* Date is required!</div>\n\n    <ion-item class="drops">\n      <ion-label>Select Category</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="category" placeholder="Category">\n        <ion-option *ngFor="let cat of getBookCategory" [value]="cat.category_id" (ionSelect)="selectCategory(cat.category_id,cat.levels_present,cat.category_name)">{{cat.category_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n  <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'category\'].hasError(\'required\') && authForm.controls[\'category\'].touched">* Category is required!</div>\n    <ion-item class="drops">\n      <ion-label>Select sub category</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="subcategory" placeholder="Sub category">\n        <ion-option *ngFor="let subCat of subCat" [value]="subCat.subcategory_id" (ionSelect)="categorySelectSub(subCat.subcategory_id,subCat.subcategory_name)">{{subCat.subcategory_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n  <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'subcategory\'].hasError(\'required\') && authForm.controls[\'subcategory\'].touched">* Sub category is required!</div>\n  <ion-item *ngIf="showLevel" class="drops">\n      <ion-label>Level</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="levels" placeholder="Level">\n        <ion-option *ngFor="let level of levelData" [value]="level.level_id" (ionSelect)="levelsSelect(level.level_id,level.level_name)">{{level.level_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n\n    <ion-item class="drops">\n	    	<ion-label>Location Preferences</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="location_preference" placeholder="Location Preferences" (ionChange)="eventFire($event)">\n          <ion-option value="TL">Tutor Location</ion-option>\n          <ion-option value="SH">Student Location</ion-option>\n          <ion-option value="AO">Any other public location</ion-option>\n          <ion-option value="NP">No preference</ion-option>\n		    </ion-select>\n		</ion-item>\n		<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'location_preference\'].hasError(\'required\') && authForm.controls[\'location_preference\'].touched">* Location Preferences is required!</div>\n\n		<ion-item class="check_point" *ngIf="showiNPUT" (tap)="suggestClick()">\n      <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-input type="text" placeholder="Other location" value="{{va}}" formControlName="other_location" readonly></ion-input>\n  </ion-item>\n  <div class="dd" *ngIf="show">\n    <ion-list class="input_forms" no-lines style="margin-bottom: 0;">\n         <div class="droparea">\n           <h3 class="bold_font">Suggested Locations</h3>\n           <ul>\n             <li (click)="clickSuggest(sugestLocation.address,sugestLocation.id)" *ngFor="let sugestLocation of suggestedLocations">\n               <img src="img/address_icon.png" alt=""/>\n               <!-- <h4 class="bold_font">CCD</h4> -->\n               <p>{{sugestLocation.address}}</p>\n             </li>\n           </ul>\n           <h3 (click)="mapGo()" class="bold_font custom">Custom Locations <img src="img/drop_arrow.png" alt="" /></h3>\n         </div>\n    </ion-list>\n  </div>\n\n		<ion-item>\n	    	<ion-input formControlName="no_of_students" type="tel" placeholder="Number of Students"></ion-input>\n	    </ion-item>\n	    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'no_of_students\'].hasError(\'required\') && authForm.controls[\'no_of_students\'].touched">* Number of Students time is required!</div>\n	    <ion-item>\n	    	<ion-textarea formControlName="special_instructions" placeholder="Any Special Instructions" ></ion-textarea>\n	    </ion-item>\n	    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'special_instructions\'].hasError(\'required\') && authForm.controls[\'special_instructions\'].touched">* Any special instructions time is required!</div>\n	</ion-list>\n	<button class="btn btn-text" ion-button full type="submit">Done</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/repeat-appointment/repeat-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], RepeatAppointmentPage);
    return RepeatAppointmentPage;
}());

//# sourceMappingURL=repeat-appointment.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAppointments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment_detail_submited_appointment_detail_submited__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appointment_detail_rejected_appointment_detail_rejected__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_detail_progress_appointment_detail_progress__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_detail_accepted_appointment_detail_accepted__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appointment_detail_completed_appointment_detail_completed__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appointment_detail_completed_feedback_appointment_detail_completed_feedback__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rating_popup_rating_popup__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyAppointments = /** @class */ (function () {
    function MyAppointments(modalCtrl, platform, alertCtrl, network, toastCtrl, spinner, studentServices, navCtrl, navParams, nativeStorage) {
        // this.appointments="submitted";
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.studentServices = studentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.submitS = false;
        this.shedulS = false;
        this.completeS = false;
        this.appointments = 'submitted';
        this.categories = ['submitted', 'scheduled', 'completed'];
    }
    MyAppointments.prototype.onTabChanged = function (tabName) {
        this.appointments = tabName;
    };
    MyAppointments.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.getMyAppointments();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getMyAppointments();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = '';
            });
        }
    };
    MyAppointments.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyAppointments.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    MyAppointments.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentServices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyAppointments.prototype.getMyAppointments = function () {
        var _this = this;
        this.spinner.show();
        this.getAppointmentsData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.studentServices.myAppointmentsApi(this.getAppointmentsData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.myAppoint = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.myAppoint = _this.data1.data;
                _this.submittedData = _this.myAppoint.submitted;
                _this.sheduledData = _this.myAppoint.scheduled;
                _this.completeAppoint = _this.myAppoint.completed;
                if (_this.submittedData.length == 0) {
                    _this.submitS = true;
                }
                else {
                    _this.submitS = false;
                }
                if (_this.sheduledData.length == 0) {
                    _this.shedulS = true;
                }
                else {
                    _this.shedulS = false;
                }
                if (_this.completeAppoint.length == 0) {
                    _this.completeS = true;
                }
                else {
                    _this.completeS = false;
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    MyAppointments.prototype.actionClick = function (appointmentId, action) {
        var _this = this;
        this.spinner.show();
        this.actionData = {
            student_id: this.userId,
            login_token: this.token,
            appointment_id: appointmentId,
            action: action
        };
        this.studentServices.myAppointmentAction(this.actionData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getMyAppointments();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    MyAppointments.prototype.noClick = function (id, action) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'student_no' });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    MyAppointments.prototype.noClickAppStart = function (id, action) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'start_no' });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    MyAppointments.prototype.cancelAction = function (appointmentId, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: appointmentId, action: action, popup: 'student_cancel' });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                _this.userType = data.user_type;
                _this.userId = data.id;
                _this.token = data.login_token;
                _this.getMyAppointments();
            });
        });
        modal.present();
    };
    MyAppointments.prototype.giveFeedBack = function (id, tId) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__rating_popup_rating_popup__["a" /* RatingPopup */], { appointment_id: id, tutorId: tId });
        modal.onDidDismiss(function (data) {
            _this.getMyAppointments();
        });
        modal.present();
    };
    MyAppointments.prototype.goToDetailSubmit = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: id });
    };
    MyAppointments.prototype.goToDetailReject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__appointment_detail_rejected_appointment_detail_rejected__["a" /* AppointmentDetailRejected */]);
    };
    MyAppointments.prototype.goToDetailProgress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__appointment_detail_progress_appointment_detail_progress__["a" /* AppointmentDetailProgress */]);
    };
    MyAppointments.prototype.goToDetailAccepted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__appointment_detail_accepted_appointment_detail_accepted__["a" /* AppointmentDetailAccepted */]);
    };
    MyAppointments.prototype.goToDetailCompleted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__appointment_detail_completed_appointment_detail_completed__["a" /* AppointmentDetailCompleted */]);
    };
    MyAppointments.prototype.goToDetailCompletedFeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__appointment_detail_completed_feedback_appointment_detail_completed_feedback__["a" /* AppointmentDetailCompletedFeedback */]);
    };
    MyAppointments.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentServices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__notifications_notifications__["a" /* Notifications */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyAppointments.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyAppointments = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-appointments',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/my-appointments/my-appointments.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Appointments</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToNotifications()">\n            <ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n          <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n      <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="appointments" class="appointments_tab">\n    <ion-segment-button value="submitted">\n      Submitted\n    </ion-segment-button>\n    <ion-segment-button value="scheduled">\n      Scheduled\n    </ion-segment-button>\n    <ion-segment-button value="completed">\n      Completed\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content padding class="appointments_box">\n	<div [ngSwitch]="appointments" swipeSegment [tabsList]="categories" [(currentTab)]="appointments" (tabChanged)="onTabChanged($event)" class="swipe-area">\n		<div *ngSwitchCase="\'submitted\'">\n			<ion-list no-lines>\n				<ion-item *ngFor="let submittedA of submittedData" >\n			        <ion-avatar (click)="goToDetailSubmit(submittedA.appointment_id)" item-start>\n			        	<img src="{{submittedA.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goToDetailSubmit(submittedA.appointment_id)" class="bold_font">{{submittedA.first_name}} {{submittedA.last_name}},{{submittedA.gender}}, {{submittedA.age}}</h2>\n			        <p (click)="goToDetailSubmit(submittedA.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{submittedA.start_time}} to {{submittedA.end_time}}, {{submittedA.date | date:\'dd/MM/yyyy\'}} </p>\n			        <p (click)="goToDetailSubmit(submittedA.appointment_id)">{{submittedA.category_name}} - <span>{{submittedA.subcategory_name}}</span> - <span>{{submittedA.level_name}}</span></p>\n\n              <p *ngIf=" submittedA.student_status == \'R_SE_BS\'"  class="pink_color">Waiting for your tutor to respond.</p>\n              <p *ngIf=" submittedA.student_status == \'R_AC_BT\'"  class="blue">Your appointment has been accepted by your tutor.</p>\n              <p *ngIf=" submittedA.student_status == \'R_RJ_BT\'"  class="pink_color">Your appointment has been rejected by your tutor.</p>\n              <p *ngIf=" submittedA.student_status == \'R_CA_BS\'"  class="green">Appointment cancelled by you.</p>\n              <p *ngIf=" submittedA.student_status == \'R_CA_BT\'"  class="pink_color">Appointment cancelled by your tutor.</p>\n              <p *ngIf=" submittedA.student_status == \'A_ST_BT\'"  class="green">Tutor has started your appointment.</p>\n              <p *ngIf=" submittedA.student_status == \'S_NCN_BS\'"  class="green">You are not ready for this appointment</p>\n              <p *ngIf=" submittedA.student_status == \'S_CN_BS\'"  class="green">Appointment in process.</p>\n              <p *ngIf=" submittedA.student_status == \'END\'"  class="green">Your appointment has been completed</p>\n              <p *ngIf=" submittedA.student_status == \'EXP\' && submittedA.tutor_status ==  \'EXP\'" class="pink_color">Your appointment has expired</p>\n\n			        <button *ngIf=" submittedA.student_status == \'R_SE_BS\'" class="btn btn-text" ion-button (click)="cancelAction(submittedA.appointment_id,\'cancel\')">Cancel Appointment</button>\n			        <button *ngIf=" submittedA.student_status == \'R_AC_BT\'" class="btn btn-text" ion-button (click)="cancelAction(submittedA.appointment_id,\'cancel\')">Cancel Appointment</button>\n			    </ion-item>\n			    <p style="text-align: center;" *ngIf="submitS">There is no data found</p>\n			</ion-list>\n		</div>\n		<div *ngSwitchCase="\'scheduled\'">\n			<ion-list no-lines>\n				<ion-item *ngFor="let shedule of sheduledData" (click)="goToDetailSubmit(shedule.appointment_id)">\n          <ion-avatar item-start>\n            <img src="{{shedule.profile_pic}}">\n          </ion-avatar>\n          <h2 class="bold_font">{{shedule.first_name}} {{shedule.last_name}}, {{shedule.gender}}, {{shedule.age}}</h2>\n          <p class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{shedule.start_time}} to {{shedule.end_time}}, {{shedule.date | date:\'dd/MM/yyyy\'}} </p>\n          <p>{{shedule.category_name}} - <span>{{shedule.subcategory_name}}</span> - <span>{{shedule.level_name}}</span></p>\n\n					<p *ngIf="shedule.student_status == \'R_SE_BS\'"  class="pink_color">Waiting for your tutor to respond.</p>\n					<p *ngIf="shedule.student_status == \'R_AC_BT\'"  class="blue">Your appointment has been accepted by your tutor.</p>\n					<p *ngIf="shedule.student_status == \'R_RJ_BT\'"  class="pink_color">Your appointment has been rejected by your tutor.</p>\n					<p *ngIf="shedule.student_status == \'R_CA_BS\'"  class="green">Appointment cancelled by you.</p>\n					<p *ngIf="shedule.student_status == \'R_CA_BT\'"  class="pink_color">Appointment cancelled by your tutor.</p>\n					<p *ngIf="shedule.student_status == \'A_ST_BT\'"  class="green">Tutor has started your appointment.</p>\n					<p *ngIf="shedule.student_status == \'S_NCN_BS\'"  class="green">You are not ready for this appointment</p>\n					<p *ngIf="shedule.student_status == \'S_CN_BS\'"  class="green">Appointment in process.</p>\n					<p *ngIf="shedule.student_status == \'A_EN_BT\'"  class="green">Please confirm the appointment has completed or not.</p>\n					<p *ngIf="shedule.student_status == \'END\'"  class="green">Your appointment has been completed</p>\n					<p *ngIf=" shedule.student_status == \'EXP\' && shedule.tutor_status ==  \'EXP\'" class="pink_color">Your appointment has expired</p>\n\n					<button *ngIf="shedule.student_status == \'R_SE_BS\'" class="btn btn-text" ion-button (click)="cancelAction(shedule.appointment_id,\'cancel\')">Cancel Appointment</button>\n					<button *ngIf="shedule.student_status == \'R_AC_BT\'" class="btn btn-text" ion-button (click)="cancelAction(shedule.appointment_id,\'cancel\')">Cancel Appointment</button>\n\n          <button *ngIf="shedule.student_status == \'A_ST_BT\'" class="btn btn-text" ion-button (click)="actionClick(shedule.appointment_id,\'yes\')">Yes</button>\n          <button *ngIf="shedule.student_status == \'A_ST_BT\'" class="btn btn-text blue_btn" ion-button (click)="noClickAppStart(shedule.appointment_id,\'no\')">No</button>\n\n					<button *ngIf="shedule.student_status == \'A_EN_BT\'" class="btn btn-text" ion-button (click)="actionClick(shedule.appointment_id,\'end_yes\')">Yes</button>\n          <button *ngIf="shedule.student_status == \'A_EN_BT\'" class="btn btn-text blue_btn" ion-button (click)="noClick(shedule.appointment_id,\'end_no\')">No</button>\n\n			    </ion-item>\n			    <p style="text-align: center;" *ngIf="shedulS">There is no data found.</p>\n			</ion-list>\n		</div>\n\n		<div *ngSwitchCase="\'completed\'">\n			<ion-list no-lines>\n				<ion-item *ngFor="let complete of completeAppoint" (click)="goToDetailSubmit(complete.appointment_id)">\n			        <ion-avatar item-start>\n			        	<img src="{{complete.profile_pic}}">\n			        </ion-avatar>\n			        <h2 class="bold_font">{{complete.first_name}} {{complete.last_name}}, {{complete.gender}}, {{complete.age}}</h2>\n			        <p class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{complete.start_time}} to {{complete.end_time}}, {{complete.date | date:\'dd/MM/yyyy\'}} </p>\n              <p>{{complete.category_name}} - <span>{{complete.subcategory_name}}</span> - <span>{{complete.level_name}}</span></p>\n					    <p *ngIf=" complete.student_status == \'END\'"  class="green">Your appointment has been completed</p>\n\n			        <button *ngIf=" complete.student_status == \'END\' && complete.feedback_given == \'N\'"  class="btn btn-text" ion-button (click)="giveFeedBack(complete.appointment_id,complete.tutor_id)">Give Feedback</button>\n			        <div *ngIf=" complete.student_status == \'END\'  && complete.feedback_given != \'N\'" class="your_feedback">\n			        	<h3 class="bold_font">Your Feedback:</h3>\n			        	<span class="rating">\n			        		<rating *ngIf="complete.rating != null" [(ngModel)]="complete.rating"\n		        			readOnly="true" max="5" value="3" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onModelChange($event)"></rating>\n		        			<rating *ngIf="complete.rating == null"\n					        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n							</rating>\n			        	</span>\n			        	<p>{{complete.feedback}}</p>\n			        </div>\n			    </ion-item>\n			    <p style="text-align: center;" *ngIf="completeS">There is no data found</p>\n			</ion-list>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/my-appointments/my-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyAppointments);
    return MyAppointments;
}());

//# sourceMappingURL=my-appointments.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailRejected; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentDetailRejected = /** @class */ (function () {
    function AppointmentDetailRejected(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentDetailRejected.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentDetailRejected');
    };
    AppointmentDetailRejected.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]);
    };
    AppointmentDetailRejected = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-detail-rejected',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-rejected/appointment-detail-rejected.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/user4.jpg" class="user_img" (click)="goToProfile()">\n			<h2>James Thomas, M, 40\n				<span class="rating">\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-light.png" alt="" />\n	        	</span>\n			</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />San Francisco, USA</p>\n			<h3 class="bold_font">20 Q.R/hr</h3>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>16:00 to 17:00, 25/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Skill Test Preparation - <span>TOFEL</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Student Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>1</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>There are many variations.</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>20 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="pink_color">Your appointment has been rejected by your tutor.</p>\n		<h5 class="bold_font">Reason:</h5>\n		<p class="reason">Need to attend urgent meeting so i cannot accept your appointment at the moment.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-rejected/appointment-detail-rejected.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AppointmentDetailRejected);
    return AppointmentDetailRejected;
}());

//# sourceMappingURL=appointment-detail-rejected.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProfilePopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShareProfilePopup = /** @class */ (function () {
    function ShareProfilePopup(studentservices, spinner, navParams, nativeStorage, socialSharing, viewCtrl) {
        this.studentservices = studentservices;
        this.spinner = spinner;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.socialSharing = socialSharing;
        this.viewCtrl = viewCtrl;
    }
    ShareProfilePopup.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tutorId = this.navParams.get('tutorId');
        this.getImage = this.navParams.get('profilePic');
        this.tutorFirst = this.navParams.get('tutorFirst');
        this.tutorLast = this.navParams.get('tutorLast');
        this.iconSh = this.navParams.get('icon');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
        });
    };
    ShareProfilePopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss("dismiss");
    };
    ShareProfilePopup.prototype.shareProfile = function () {
        this.viewCtrl.dismiss("share");
    };
    ShareProfilePopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-share-profile-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/share-profile-popup/share-profile-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<div class="gradient_bg big_icon center">\n					<img src="img/favorited_icon.png" alt="" />\n				</div>\n				<div class="pop_content" padding>\n					<p>Tutor Profile has marked as a favorite.</p>\n					<!-- <p>Tutor Profile has been marked ad a favourite.</p> -->\n					<button class="btn btn-text" ion-button full (click)="shareProfile()">Share Tutor Profile</button>\n				</div>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/share-profile-popup/share-profile-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ShareProfilePopup);
    return ShareProfilePopup;
}());

//# sourceMappingURL=share-profile-popup.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAppointment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__success_popup_success_popup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_search_map_search__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var BookAppointment = /** @class */ (function () {
    function BookAppointment(events, app, tutorservices, httpBaseUrl, fb, studentServices, modalCtrl, zone, alertCtrl, platform, network, nativeStorage, spinner, navCtrl, navParams, toastCtrl) {
        var _this = this;
        this.events = events;
        this.app = app;
        this.tutorservices = tutorservices;
        this.httpBaseUrl = httpBaseUrl;
        this.fb = fb;
        this.studentServices = studentServices;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.show = false;
        this.minDate = new Date().toISOString();
        this.selectedDate = new Date().toISOString();
        this.slotArr = [];
        this.showSuggest = false;
        this.showiNPUT = false;
        this.showLevel = true;
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.authForm = fb.group({
            'start_time': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'end_time': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'date': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            // 'service_id': ["", Validators.compose([Validators.required])],
            'category': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'subcategory': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'levels': [""],
            'location_preference': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'no_of_students': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'special_instructions': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'other_location': [""]
        });
        this.tab = this.navCtrl.parent;
        events.subscribe('markData:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.suggestId = user.id;
            _this.authForm.get('other_location').setValue(user.address);
        });
    }
    BookAppointment.prototype.ionViewDidEnter = function () {
        var _this = this;
        var tabs = this.navCtrl.parent;
        console.log("tabsssssss", tabs);
        this.serviceArrPush = [];
        this.subCatArr = [];
        this.levArr = [];
        this.val = this.navParams.get("value");
        if (this.val) {
            this.va = this.val;
            this.authForm.get('other_location').setValue(this.va);
            this.show = true;
        }
        else {
            this.show = false;
        }
        this.getBookCategory = this.navParams.get('bookCategory');
        this.tutorId = this.navParams.get('tutorId');
        this.trate = this.navParams.get('tutorRate');
        this.tGrRate = this.navParams.get('tutorGroupRate');
        this.cateId = this.navParams.get('catId');
        this.subCatId = this.navParams.get('subCatId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getCategoriesData();
            _this.getSuggestLocations();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getCategoriesData();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getCategoriesData();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    BookAppointment.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    BookAppointment.prototype.getSuggestLocations = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.sendSuggesteddata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendSuggesteddata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.studentServices.suggestedLocations(this.sendSuggesteddata).then(function (result) {
            console.log("suggested location data", result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.suggestedLocations = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    BookAppointment.prototype.eventFire = function (event) {
        console.log(event);
        this.locationF = event;
        if (event == 'AO') {
            this.show = true;
            this.showiNPUT = true;
        }
        else {
            this.show = false;
        }
    };
    BookAppointment.prototype.suggestClick = function () {
        this.show = true;
    };
    BookAppointment.prototype.clickSuggest = function (add, id) {
        this.suggestId = id;
        this.show = false;
        this.va = add;
        this.authForm.get('other_location').setValue(this.va);
    };
    BookAppointment.prototype.mapGo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__map_search_map_search__["a" /* MapSearchPage */], { mapData: this.suggestedLocations });
    };
    BookAppointment.prototype.getCategoriesData = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip,
                tutor_id: this.tutorId
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token,
                tutor_id: this.tutorId
            };
        }
        this.tutorservices.getServices(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCategory = _this.data1.data;
                console.log("this.getCategory", _this.getCategory);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    BookAppointment.prototype.fromTime = function (event) {
        console.log("eventevent", event);
        this.frTime = event.hour;
        if (this.toTimeVal) {
            console.log("this.toTimeVal", this.toTimeVal);
            if (this.toTimeVal < this.frTime) {
                this.presentToast('From time must be less than to time.');
                this.authForm.value.start_time = "";
            }
            else {
                this.frTime = this.frTime;
            }
        }
        else {
            this.frTime = this.frTime;
        }
    };
    BookAppointment.prototype.toTime = function (event) {
        this.slotArr = [];
        this.toTimeVal = event.hour;
        if (this.frTime) {
            if (this.toTimeVal > this.frTime) {
                var from = parseInt(this.frTime);
                var to = parseInt(this.toTimeVal);
                var to_time = from;
                for (var i = from; i < to; i++) {
                    from = to_time;
                    to_time = from + 1;
                    this.newAttri = {
                        from_time: from,
                        to_time: to_time
                    };
                    console.log('this.newAttri', this.newAttri);
                    this.slotArr.push(this.newAttri);
                }
                console.log("this.slotArr", this.slotArr);
            }
            else {
                this.presentToast('Please select time greater than from time');
                this.authForm.value.end_time = "";
            }
        }
        else {
            this.presentToast('Please select from time first');
            this.authForm.value.end_time = "";
        }
    };
    BookAppointment.prototype.selectCategory = function (id, levelPresent, catname) {
        this.subCatArr = [];
        this.levArr = [];
        this.cateName = catname;
        this.selectCateId = id;
        console.log(levelPresent);
        this.levePresent = levelPresent;
        if (this.levePresent == 0) {
            this.showLevel = false;
        }
        else {
            this.showLevel = true;
        }
        for (var i = 0; i < this.getBookCategory.length; i++) {
            if (this.getBookCategory[i].category_id == this.selectCateId) {
                console.log(this.getBookCategory[i]);
                this.subCat = this.getBookCategory[i].subcategories;
                // this.subCatArr.push(this.getBookCategory[i].subcategories);
                console.log(this.subCatArr);
                this.levelData = this.getBookCategory[i].levels;
                // this.levArr.push(this.getBookCategory[i].levels);
                console.log(this.levArr);
            }
            else {
                console.log("elseeeeeee", this.getBookCategory[i]);
            }
        }
    };
    BookAppointment.prototype.categorySelectSub = function (id, name) {
        this.subCateSelectId = id;
        this.subCateSelectName = name;
    };
    BookAppointment.prototype.levelsSelect = function (id, name) {
        this.levelSelectId = id;
        this.levelsSelectName = name;
    };
    BookAppointment.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    BookAppointment.prototype.submitForm = function (val, valid) {
        var _this = this;
        this.serviceArrPush = [];
        if (this.levePresent == 0) {
            this.levelSelectId = 0;
        }
        this.servName = this.cateName + '-' + this.subCateSelectName + '-' + this.levelsSelectName;
        this.serviceArr = [this.selectCateId, this.subCateSelectId, this.levelSelectId];
        console.log('this.serviceArr', this.serviceArr);
        this.serviceArrPush.push(this.serviceArr);
        console.log('this.serviceArrPush', this.serviceArrPush);
        // var s = this.authForm.value.start_time;
        // this.sTime = s.substring(0, s.indexOf(':'));
        // var t = this.authForm.value.end_time;
        // this.endT = t.substring(0, t.indexOf(':'));
        if (valid) {
            if (this.userIdSkip) {
                this.skipLogout();
                return;
            }
            console.log(this.toTimeVal, this.frTime);
            if (this.toTimeVal < this.frTime) {
                this.presentToast("From time must be less than to time");
                return;
            }
            if (this.locationF == 'AO') {
                if (this.locationF == '' || this.locationF == undefined || this.locationF == null) {
                    this.presentToast("Please enter other location");
                    return;
                }
            }
            if (this.levePresent == 1) {
                if (this.levelSelectId == "" || this.levelSelectId == undefined || this.levelSelectId == null) {
                    this.presentToast("Please select level");
                    return;
                }
            }
            if (this.authForm.value.no_of_students > 10) {
                this.presentToast("Only 10 users allowed");
                return;
            }
            if (this.authForm.value.no_of_students <= 0) {
                this.presentToast("Please add atleast one student");
                return;
            }
            if (this.authForm.value.no_of_students > 1) {
                this.rateCheck = this.tGrRate;
            }
            else {
                this.rateCheck = this.trate;
            }
            var alert_1 = this.alertCtrl.create({
                title: 'Are you sure?',
                message: 'You want to book appointment',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.spinner.show();
                            _this.bookAppointmentData = {
                                user_id: _this.userId,
                                login_token: _this.token,
                                tutor_id: _this.tutorId,
                                date: _this.authForm.value.date,
                                //service_id: this.authForm.value.service_id,
                                service_id: _this.serviceArr,
                                no_of_students: _this.authForm.value.no_of_students,
                                location_preference: _this.authForm.value.location_preference,
                                other_location: _this.authForm.value.other_location,
                                other_location_id: _this.suggestId,
                                tutor_rate: _this.trate,
                                service_name: _this.servName,
                                start_time: _this.authForm.value.start_time,
                                end_time: _this.authForm.value.end_time,
                                special_instructions: _this.authForm.value.special_instructions,
                                slots: JSON.stringify(_this.slotArr),
                                currency_id: '85'
                            };
                            _this.studentServices.bookAppointmentsApi(_this.bookAppointmentData).then(function (result) {
                                _this.spinner.hide();
                                _this.data1 = result;
                                if (_this.data1.status == 200) {
                                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__success_popup_success_popup__["a" /* SuccessPopup */]);
                                    modal.present();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_student_tabs_student__["a" /* TabsStudentPage */], { opentab: 2 });
                                }
                                else {
                                    _this.presentToast(_this.data1.message);
                                }
                            }, function (err) {
                                _this.spinner.hide();
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    BookAppointment.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    BookAppointment.prototype.skipLogout = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'login',
            message: 'You need to login first',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__signup_type_signup_type__["a" /* SignupType */]);
                    }
                }
            ]
        });
        this.alert.present();
    };
    // goToSuccessPopup() {
    // 	let modal = this.modalCtrl.create(SuccessPopup);
    //   modal.present();
    // }
    BookAppointment.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("paymentTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Tabs"])
    ], BookAppointment.prototype, "paymentTabs", void 0);
    BookAppointment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-book-appointment',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/book-appointment/book-appointment.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Book Appointment</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n	<ion-list class="input_forms" no-lines>\n		<ion-row>\n			<ion-col col-50>\n				<ion-item class="drops">\n				  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n				  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="From Time" formControlName="start_time" (ionChange)="fromTime($event)"></ion-datetime>\n				</ion-item>\n				 <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'start_time\'].hasError(\'required\') && authForm.controls[\'start_time\'].touched">* From time is required!</div>\n			</ion-col>\n			<ion-col col-50>\n			    <ion-item class="drops">\n				  	<ion-icon item-end><img src="img/clock_icon.png" alt=""/></ion-icon>\n				  	<ion-datetime displayFormat="HH:mm" minuteValues="0" placeholder="To Time" formControlName="end_time" (ionChange)="toTime($event)"></ion-datetime>\n				</ion-item>\n				<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'end_time\'].hasError(\'required\') && authForm.controls[\'end_time\'].touched">* To time is required!</div>\n			</ion-col>\n		</ion-row>\n		<ion-item class="drops">\n		  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n		  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date" formControlName="date" [min]="minDate"></ion-datetime>\n		</ion-item>\n		<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'date\'].hasError(\'required\') && authForm.controls[\'date\'].touched">* Date is required!</div>\n		<!-- <ion-item class="drops">\n	    	<ion-label>Subject</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="service_id" placeholder="Subject">\n		    	<ion-option *ngFor="let services of getCategory" [value]="services.service_id" (ionSelect)="catAndSubcatName(services.category,services.subcategory)" >{{services.category}} - {{services.subcategory}} - {{services.level}}</ion-option>\n		    </ion-select>\n		</ion-item>\n		<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'service_id\'].hasError(\'required\') && authForm.controls[\'service_id\'].touched">* Subject is required!</div> -->\n\n\n    <ion-item class="drops">\n      <ion-label>Select Category</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="category" placeholder="Category">\n        <ion-option *ngFor="let cat of getBookCategory" [value]="cat.category_id" (ionSelect)="selectCategory(cat.category_id,cat.levels_present,cat.category_name)">{{cat.category_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n  <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'category\'].hasError(\'required\') && authForm.controls[\'category\'].touched">* Category is required!</div>\n    <ion-item class="drops">\n      <ion-label>Select sub category</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="subcategory" placeholder="Sub category">\n        <ion-option *ngFor="let subCat of subCat" [value]="subCat.subcategory_id" (ionSelect)="categorySelectSub(subCat.subcategory_id,subCat.subcategory_name)">{{subCat.subcategory_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n  <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'subcategory\'].hasError(\'required\') && authForm.controls[\'subcategory\'].touched">* Sub category is required!</div>\n  <ion-item *ngIf="showLevel" class="drops">\n      <ion-label>Level</ion-label>\n     <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-select formControlName="levels" placeholder="Level">\n        <ion-option *ngFor="let level of levelData" [value]="level.level_id" (ionSelect)="levelsSelect(level.level_id,level.level_name)">{{level.level_name}}</ion-option>\n      </ion-select>\n  </ion-item>\n\n\n\n    <ion-item class="drops">\n	    	<ion-label>Location Preferences</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="location_preference" placeholder="Location Preferences" (ionChange)="eventFire($event)">\n            <ion-option value="TL">Tutor Location</ion-option>\n            <ion-option value="SH">Student Location</ion-option>\n          <ion-option value="AO">Any other public location</ion-option>\n          <ion-option value="NP">No preference</ion-option>\n		    </ion-select>\n		</ion-item>\n		<div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'location_preference\'].hasError(\'required\') && authForm.controls[\'location_preference\'].touched">* Location Preferences is required!</div>\n\n		<ion-item class="check_point" *ngIf="showiNPUT" (tap)="suggestClick()">\n      <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n      <ion-input type="text" placeholder="Other location" value="{{va}}" formControlName="other_location" readonly></ion-input>\n  </ion-item>\n  <div class="dd" *ngIf="show">\n    <ion-list class="input_forms" no-lines style="margin-bottom: 0;">\n         <div class="droparea">\n           <h3 class="bold_font">Suggested Locations</h3>\n           <ul>\n             <li (click)="clickSuggest(sugestLocation.address,sugestLocation.id)" *ngFor="let sugestLocation of suggestedLocations">\n               <img src="img/address_icon.png" alt=""/>\n               <p>{{sugestLocation.address}}</p>\n             </li>\n           </ul>\n           <h3 (click)="mapGo()" class="bold_font custom">Custom Locations <img src="img/drop_arrow.png" alt="" /></h3>\n         </div>\n    </ion-list>\n  </div>\n\n		<ion-item>\n	    	<ion-input formControlName="no_of_students" type="tel" placeholder="Number of Students"></ion-input>\n	    </ion-item>\n	    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'no_of_students\'].hasError(\'required\') && authForm.controls[\'no_of_students\'].touched">* Number of Students time is required!</div>\n	    <ion-item>\n	    	<ion-textarea formControlName="special_instructions" placeholder="Any Special Instructions" ></ion-textarea>\n	    </ion-item>\n	    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'special_instructions\'].hasError(\'required\') && authForm.controls[\'special_instructions\'].touched">* Any special instructions time is required!</div>\n	</ion-list>\n	<button class="btn btn-text" ion-button full type="submit">Done</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/book-appointment/book-appointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"]])
    ], BookAppointment);
    return BookAppointment;
}());

//# sourceMappingURL=book-appointment.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentDetailProgress = /** @class */ (function () {
    function AppointmentDetailProgress(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentDetailProgress.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentDetailProgress');
    };
    AppointmentDetailProgress.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]);
    };
    AppointmentDetailProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-detail-progress',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-progress/appointment-detail-progress.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/user.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Alex Gregorio, M, 36\n				<span class="rating">\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-light.png" alt="" />\n	        	</span>\n			</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />San Francisco, USA</p>\n			<h3 class="bold_font">15 Q.R/hr</h3>\n			<div class="contacts">\n				<img src="img/message_icon.png" alt="" />\n				<img src="img/call_icon.png" alt="" />\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>10:00 to 12:00, 20/06/2018</p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Academic - <span>Arabic</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Student Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>2</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>30 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="green">Appointment in progress.</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-progress/appointment-detail-progress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AppointmentDetailProgress);
    return AppointmentDetailProgress;
}());

//# sourceMappingURL=appointment-detail-progress.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailAccepted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentDetailAccepted = /** @class */ (function () {
    function AppointmentDetailAccepted(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentDetailAccepted.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentDetailAccepted');
    };
    AppointmentDetailAccepted.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]);
    };
    AppointmentDetailAccepted = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-detail-accepted',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-accepted/appointment-detail-accepted.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/user3.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Ria Khan, 32\n				<span class="rating">\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-light.png" alt="" />\n	        	</span>\n			</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />1231 Best Zone, San Francisco, CA, USA</p>\n			<p class="bold_font underline view_map">View on map</p>\n			<h3 class="bold_font">15 Q.R/hr</h3>\n			<div class="contacts">\n				<img src="img/message_icon.png" alt="" />\n				<img src="img/call_icon.png" alt="" />\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>12:00 to 13:00, 22/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Music - <span>Drums</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Tutor Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>2</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>15 15 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="blue">Your appointment has been accepted by your tutor.</p>\n		<button class="btn btn-text" ion-button full>Cancel Appointment</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-accepted/appointment-detail-accepted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AppointmentDetailAccepted);
    return AppointmentDetailAccepted;
}());

//# sourceMappingURL=appointment-detail-accepted.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailCompleted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rating_popup_rating_popup__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentDetailCompleted = /** @class */ (function () {
    function AppointmentDetailCompleted(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    AppointmentDetailCompleted.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentDetailCompleted');
    };
    AppointmentDetailCompleted.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]);
    };
    AppointmentDetailCompleted.prototype.goToRatingPopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__rating_popup_rating_popup__["a" /* RatingPopup */]);
        modal.present();
    };
    AppointmentDetailCompleted = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-detail-completed',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-completed/appointment-detail-completed.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/user.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Alex Gregorio, F, 36\n				<span class="rating">\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-light.png" alt="" />\n	        	</span>\n			</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />San Francisco, USA</p>\n			<h3 class="bold_font">15 Q.R/hr</h3>\n			<div class="contacts">\n				<img src="img/message_icon.png" alt="" />\n				<img src="img/call_icon.png" alt="" />\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>10:00 to 12:00, 20/06/2018</p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Academic - <span>Arabic</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Student Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>2</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>30 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="green">Your appointment has been completed.</p>\n		<button class="btn btn-text" ion-button full (click)="goToRatingPopup()">Give Feedback</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-completed/appointment-detail-completed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], AppointmentDetailCompleted);
    return AppointmentDetailCompleted;
}());

//# sourceMappingURL=appointment-detail-completed.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetailCompletedFeedback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentDetailCompletedFeedback = /** @class */ (function () {
    function AppointmentDetailCompletedFeedback(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentDetailCompletedFeedback.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppointmentDetailCompletedFeedback');
    };
    AppointmentDetailCompletedFeedback.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]);
    };
    AppointmentDetailCompletedFeedback = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-appointment-detail-completed-feedback',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-completed-feedback/appointment-detail-completed-feedback.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/user4.jpg" class="user_img" (click)="goToProfile()">\n			<h2>James Thomas, M, 40\n				<span class="rating">\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-yellow.png" alt="" />\n	        		<img src="img/star-light.png" alt="" />\n	        	</span>\n			</h2>\n			<h3 class="bold_font">20 Q.R/hr</h3>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>16:00 to 17:00, 25/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Skill Test Preparation - <span>TOFEL</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Other</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>1</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>There are many variations.</p>\n			<hr/>\n			<h3 class="bold_font">Total Cost</h3>\n			<p>20 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="green">Your appointment has been completed.</p>\n		<h5 class="bold_font">Your Feedback:</h5>\n		<span class="rating">\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-light.png" alt="" />\n    	</span>\n		<p>Highly Recommended!!</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/appointment-detail-completed-feedback/appointment-detail-completed-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], AppointmentDetailCompletedFeedback);
    return AppointmentDetailCompletedFeedback;
}());

//# sourceMappingURL=appointment-detail-completed-feedback.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_category_sub_category__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutor_list_tutor_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, platform, viewCtrl, network, toastCtrl, spinner, StudentServices, navCtrl, navParams, nativeStorage) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.StudentServices = StudentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.getCategories();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getCategories();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getCategories();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    HomePage.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    HomePage.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.StudentServices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.spinner.show();
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.StudentServices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCategory = _this.cateD.categories;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.goToSubCategory = function (catId, name, levePresent) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sub_category_sub_category__["a" /* SubCategory */], { categoryId: catId, cateName: name, level_present: levePresent });
    };
    HomePage.prototype.goToSearch = function () {
        // this.navCtrl.push(Search);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* Search */]).then(function () {
            // const index = this.viewCtrl.index;
            // this.navCtrl.remove(index);
        });
    };
    HomePage.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.StudentServices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__notifications_notifications__["a" /* Notifications */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.skipTutorProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tutor_list_tutor_list__["a" /* TutorList */]);
    };
    HomePage.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n        <button ion-button (click)="goToSearch()">\n          <ion-icon><img src="img/search_icon.png" alt="" /></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToNotifications()">\n          <ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n          <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n        <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="blue_bg">\n  <h2 class="center">Select Category</h2>\n  <ul>\n      <li *ngFor="let cate of getCategory" (click)="goToSubCategory(cate.id,cate.name,cate.levels_present)"><img src="{{cate.image}}" alt="" />{{cate.name}}</li>\n  </ul>\n  <p style="text-decoration: underline;text-align: center;margin-top: 15px;margin-bottom: 10px;color: #fff;font-size: 17px;" (click)="skipTutorProfile()">Skip to tutors listing screen</p>\n\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_5__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_category_level_sub_category_level__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subject_detail_subject_detail__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;






var SubCategory = /** @class */ (function () {
    function SubCategory(alertCtrl, platform, StudentServices, network, toastCtrl, spinner, navCtrl, navParams, nativeStorage) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.StudentServices = StudentServices;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
    }
    SubCategory.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.subCateArr = [];
        this.catId = this.navParams.get('categoryId');
        this.catName = this.navParams.get('cateName');
        this.levelPresent = this.navParams.get('level_present');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getSubCategories();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getSubCategories();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    SubCategory.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    SubCategory.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    SubCategory.prototype.getSubCategories = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.StudentServices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getSubCategory = _this.cateD.subcategories;
                for (var i = 0; i < _this.getSubCategory.length; i++) {
                    if (_this.getSubCategory[i].category_id == _this.catId) {
                        _this.subCateArr.push({
                            name: _this.getSubCategory[i].name,
                            id: _this.getSubCategory[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubCategory.prototype.subCateSelect = function (id, name) {
        this.sendSubId = id;
        this.subName = name;
        console.log('this.catId', this.catId, 'subCateId', this.sendSubId);
        if (this.sendSubId) {
            if (this.levelPresent == 0) {
                this.levelId = 0;
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__subject_detail_subject_detail__["a" /* SubjectDetail */], { categoryId: this.catId, subCateId: this.sendSubId, subCateName: this.subName, catName: this.catName, levelId: this.levelId });
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sub_category_level_sub_category_level__["a" /* SubCategoryLevel */], { categoryId: this.catId, subCateId: this.sendSubId, subCateName: this.subName, cateName: this.catName });
            }
        }
        else {
            this.presentToast("Please select subcategory");
        }
    };
    // goToLevel(){
    //   console.log('this.catId',this.catId,'subCateId',this.sendSubId)
    //   if(this.sendSubId){
    //     if(this.levelPresent == 0){
    //       this.levelId = 0;
    //       this.navCtrl.push(SubjectDetail,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,catName:this.catName,levelId:this.levelId});
    //     }else{
    //       this.navCtrl.push(SubCategoryLevel,{categoryId: this.catId,subCateId:this.sendSubId,subCateName:this.subName,cateName:this.catName});
    //     }
    //   }else{
    //     this.presentToast("Please select subcategory");
    //   }
    // }
    SubCategory.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SubCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-category',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/sub-category/sub-category.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>{{catName}}</ion-title>\n    <!-- <ion-buttons right class="only_text">\n        <button ion-button (click)="goToLevel()">\n          <ion-label>Done</ion-label>\n        </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="white_box">\n		<ion-list radio-group class="category_listview">\n			<ion-item *ngFor="let subCat of subCateArr;let i=index">\n			    <ion-label>{{subCat.name}}</ion-label>\n			    <ion-radio [value]="i" (ionSelect)="subCateSelect(subCat.id,subCat.name)"></ion-radio>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/sub-category/sub-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SubCategory);
    return SubCategory;
}());

//# sourceMappingURL=sub-category.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutor_list_tutor_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_core__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Filters = /** @class */ (function () {
    function Filters(authServices, viewCtrl, mapsAPILoader, zone, studentservices, fb, tutorservices, toastCtrl, spinner, alertCtrl, platform, network, nativeStorage, navParams, navCtrl) {
        this.authServices = authServices;
        this.viewCtrl = viewCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.zone = zone;
        this.studentservices = studentservices;
        this.fb = fb;
        this.tutorservices = tutorservices;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.subCateArr = [];
        this.showLevel = true;
        this.authForm = fb.group({
            'price': [""],
            'rating': [""],
            'city': [""],
            'category_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'subcategory_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'levels': [""]
        });
    }
    Filters.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.levelsArr = [];
        this.catId = this.navParams.get('categoryId');
        this.subId = this.navParams.get('subCateId');
        this.levelid = this.navParams.get('levelId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.lat = data.latitude;
            _this.lng = data.longitude;
            _this.getCity();
            _this.categories();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getCity();
            _this.categories();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getCity();
            _this.categories();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Filters.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
        var index = this.viewCtrl.index;
        this.navCtrl.remove(index);
    };
    Filters.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Filters.prototype.getCity = function () {
        var _this = this;
        this.spinner.show();
        this.citiesData = {
            user_id: this.userId,
            user_token: this.token,
            country_id: '174'
        };
        this.authServices.getCities(this.citiesData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCitiesData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    Filters.prototype.categories = function () {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.spinner.show();
        this.studentservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCategory = _this.cateD.categories;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Filters.prototype.categorySelect = function (_cateId) {
        console.log(_cateId);
        this.catSelect = _cateId;
        this.subCate(this.catSelect);
        this.levelsGet(this.catSelect);
    };
    Filters.prototype.levelSend = function (level) {
        console.log("level", level);
        this.levelSel = level;
        if (this.levelSel == 0) {
            this.showLevel = false;
        }
        else {
            this.showLevel = true;
        }
    };
    Filters.prototype.subCate = function (_cateId) {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.studentservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getSubCategory = _this.cateD.subcategories;
                for (var i = 0; i < _this.getSubCategory.length; i++) {
                    if (_this.getSubCategory[i].category_id == _cateId) {
                        _this.subCateArr.push({
                            name: _this.getSubCategory[i].name,
                            id: _this.getSubCategory[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Filters.prototype.categorySelectSub = function (id) {
        this.subIdSlect = id;
    };
    Filters.prototype.levelsGet = function (_cateId) {
        var _this = this;
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.studentservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLevelsD = _this.cateD.levels;
                for (var i = 0; i < _this.getLevelsD.length; i++) {
                    if (_this.getLevelsD[i].category_id == _cateId) {
                        _this.levelsArr.push({
                            name: _this.getLevelsD[i].name,
                            id: _this.getLevelsD[i].id
                        });
                    }
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Filters.prototype.levelsSelect = function (id) {
        this.levelId = id;
    };
    Filters.prototype.submitForm = function (valid) {
        var _this = this;
        if (this.latitude == "" || this.latitude == undefined || this.latitude == null || this.longitude == "" || this.longitude == undefined || this.longitude == null) {
            this.lati = this.lat;
            this.lngi = this.lng;
        }
        else {
            this.lati = this.latitude;
            this.lngi = this.longitude;
        }
        if (valid) {
            if (this.levelSel == 0) {
                this.levelid = 0;
                this.catI = this.catSelect;
                this.subCatI = this.subIdSlect;
            }
            else {
                if (this.levelId == "" || this.levelId == undefined || this.levelId == null) {
                    this.presentToast("Please select level");
                    return;
                }
                else {
                    this.levelid = this.levelId;
                    this.catI = this.catSelect;
                    this.subCatI = this.subIdSlect;
                }
            }
            if (this.userIdSkip) {
                this.addFilterdata = {
                    user_id: this.userIdSkip,
                    login_token: this.loginTokenSkip,
                    latitude: this.lati,
                    longitude: this.lngi,
                    city: this.authForm.value.city,
                    category_id: this.catI,
                    subcategory_id: this.subCatI,
                    level_id: this.levelId,
                    price: this.authForm.value.price,
                    rating: this.authForm.value.rating
                };
            }
            else {
                this.addFilterdata = {
                    user_id: this.userId,
                    login_token: this.token,
                    latitude: this.lati,
                    longitude: this.lngi,
                    city: this.authForm.value.city,
                    category_id: this.catI,
                    subcategory_id: this.subCatI,
                    level_id: this.levelId,
                    price: this.authForm.value.price,
                    rating: this.authForm.value.rating
                };
            }
            this.studentservices.filterSaveApi(this.addFilterdata).then(function (result) {
                console.log(result);
                _this.data1 = result;
                if (_this.data1.status == 200) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tutor_list_tutor_list__["a" /* TutorList */], { categoryId: _this.catI, subCateId: _this.subCatI, levelId: _this.levelid }).then(function () {
                        var index = _this.viewCtrl.index;
                        _this.navCtrl.remove(index);
                    });
                    // this.navCtrl.push(TutorList,{categoryId:this.catI,subCateId:this.subCatI,levelId:this.levelid});
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    Filters.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    Filters.prototype.goToTutorListClose = function () {
        var _this = this;
        // this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tutor_list_tutor_list__["a" /* TutorList */], { categoryId: this.catI, subCateId: this.subCatI, levelId: this.levelid }).then(function () {
            var index = _this.viewCtrl.index;
            _this.navCtrl.remove(index);
        });
    };
    Filters.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Filters = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filters',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/filters/filters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Filters</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToTutorListClose()">\n          <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n	<ion-list class="input_forms" no-lines>\n		<ion-item class="range_slider">\n			<ion-label>Price <span>(Per hour)</span></ion-label>\n		    <ion-range min="0" max="100" pin="true" formControlName="price" color="secondary">\n		    </ion-range>\n		</ion-item>\n		<p class="range_text">0 <span>100 Q.R</span></p>\n		<ion-item class="range_slider">\n			<ion-label>Rating</ion-label>\n		    <ion-range min="0" max="5" pin="true" formControlName="rating" color="secondary">\n		    </ion-range>\n		</ion-item>\n		<p class="range_text">0 <span>5</span></p>\n\n    <p class="label bold_font">City</p>\n		<ion-item class="drops">\n			<ion-label>Select City</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="category_id" placeholder="Select City">\n          <ion-option *ngFor="let city of getCitiesData" [value]="city.id">{{city.name}}</ion-option>\n		    </ion-select>\n		</ion-item>\n\n		<p class="label bold_font">Subject</p>\n		<ion-item class="drops">\n			<ion-label>Select Subject</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="category_id" placeholder="Select Subject" (ngModelChange)="categorySelect($event)">\n		    	<ion-option *ngFor="let cat of getCategory" [value]="cat.id" (ionSelect)="levelSend(cat.levels_present)">{{cat.name}}</ion-option>\n		    </ion-select>\n    </ion-item>\n    <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'category_id\'].hasError(\'required\') && authForm.controls[\'category_id\'].touched">* Category is required!</div>\n\n		<p class="label bold_font">Subcategory</p>\n		<ion-item class="drops">\n			<ion-label>Select Subcategory</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n		  	<ion-select formControlName="subcategory_id"placeholder="Select Subcategory" (ngModelChange)="categorySelectSub($event)">\n		    	<ion-option *ngFor="let subCat of subCateArr" [value]="subCat.id">{{subCat.name}}</ion-option>\n		    </ion-select>\n    </ion-item>\n    <div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'subcategory_id\'].hasError(\'required\') && authForm.controls[\'subcategory_id\'].touched">* Subcategory is required!</div>\n\n    <p *ngIf="showLevel" class="label bold_font">Level</p>\n		<ion-item class="drops" *ngIf="showLevel">\n			<ion-label>Select Level</ion-label>\n		 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n       <ion-select formControlName="levels" placeholder="Levels" (ngModelChange)="levelsSelect($event)">\n        <ion-option *ngFor="let level of levelsArr" [value]="level.id">{{level.name}}</ion-option>\n		    </ion-select>\n    </ion-item>\n\n	</ion-list>\n	<button class="btn btn-text" type="submit" ion-button full>Apply Filters</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/filters/filters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_11__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_8__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], Filters);
    return Filters;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subject_detail_subject_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sub_category_level_sub_category_level__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










;
var Search = /** @class */ (function () {
    function Search(ref, alertCtrl, viewCtrl, platform, network, toastCtrl, spinner, studentServices, navCtrl, navParams, nativeStorage) {
        this.ref = ref;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.studentServices = studentServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.search = "academic";
    }
    Search.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subArr = [];
        this.pushSubData = [];
        this.subPush = [];
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getCategories();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getCategories();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getCategories();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
        this.ref.markForCheck();
    };
    Search.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Search.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Search.prototype.getCategories = function () {
        var _this = this;
        this.spinner.show();
        if (this.userIdSkip) {
            this.sendCategorydata = {
                user_id: this.userIdSkip,
                login_token: this.loginTokenSkip
            };
        }
        else {
            this.sendCategorydata = {
                user_id: this.userId,
                login_token: this.token
            };
        }
        this.studentServices.searchLoadApi(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCategory = _this.cateD;
                _this.search = _this.getCategory[0].id;
                _this.searchSel = _this.getCategory[0].name;
                _this.pushSubData = [];
                if (_this.getCategory[0].id) {
                    for (var j = 0; j < _this.getCategory[0].subcategories.length; j++) {
                        _this.pushSubData.push(_this.getCategory[0].subcategories[j]);
                    }
                    _this.initializeItems();
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Search.prototype.setOption = function (index, event, id, name, _isLevPresent) {
        if (this.getCategory[index] != null) {
            this.selectedSegment = this.getCategory[index];
            var segments = event.target.parentNode.children;
            var len = segments.length;
            for (var i = 0; i < len; i++) {
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
            for (var i = 0; i < this.getCategory.length; i++) {
                if (this.catSelId == this.getCategory[i].id) {
                    for (var j = 0; j < this.getCategory[i].subcategories.length; j++) {
                        this.pushSubData.push(this.getCategory[i].subcategories[j]);
                    }
                    this.initializeItems();
                }
            }
        }
    };
    Search.prototype.initializeItems = function () {
        this.cateData = this.pushSubData;
        console.log('this.cateData', this.cateData);
    };
    Search.prototype.getSeachCategory = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.cateData = this.cateData.filter(function (catD) {
                console.log("catD.subcategory_name", catD.subcategory_name);
                return (catD.subcategory_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    Search.prototype.clickSeach = function (subCatId, subCatName, _searchCount) {
        var _this = this;
        this.spinner.show();
        if (this.userIdSkip) {
            this.sendSearchCount = {
                user_id: this.userId,
                login_token: this.token,
                subcategory_id: subCatId,
                search_count: _searchCount
            };
        }
        else {
            this.sendSearchCount = {
                user_id: this.userId,
                login_token: this.token,
                subcategory_id: subCatId,
                search_count: _searchCount
            };
        }
        this.studentServices.searchCount(this.sendSearchCount).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.cateD = _this.data1.data;
            if (_this.data1.status == 200) {
                if (_this._levPresent == 0) {
                    _this.levelId = 0;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__subject_detail_subject_detail__["a" /* SubjectDetail */], { categoryId: _this.catSelId, subCateId: subCatId, subCateName: subCatName, catName: _this.catName, levelId: _this.levelId });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__sub_category_level_sub_category_level__["a" /* SubCategoryLevel */], { categoryId: _this.catSelId, subCateId: subCatId, subCateName: subCatName, cateName: _this.catName });
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Search.prototype.close = function () {
        var _this = this;
        //this.navCtrl.push(TabsStudentPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_student_tabs_student__["a" /* TabsStudentPage */]).then(function () {
            var index = _this.viewCtrl.index;
            _this.navCtrl.remove(index);
        });
    };
    Search.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Search = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/search/search.html"*/'\n<ion-header>\n    <ion-navbar>\n		<ion-searchbar placeholder="Search here" (ionInput)="getSeachCategory($event)"></ion-searchbar>\n		<ion-buttons right class="only_text">\n	        <button ion-button (click)="close()">\n	          <ion-label>Close</ion-label>\n	        </button>\n	    </ion-buttons>\n    </ion-navbar>\n    <div style="overflow: auto;">\n    <ion-segment [(ngModel)]="search">\n	    <ion-segment-button *ngFor="let cate of getCategory; let i=index;" [value]="cate.id" (tap)="setOption(i, $event,cate.id,cate.name,cate.levels_present)" >\n	    	{{cate.name}}\n	    </ion-segment-button>\n	    <!-- <ion-segment-button value="languages">\n	    	Languages\n	    </ion-segment-button>\n	    <ion-segment-button value="music">\n	    	Music\n	    </ion-segment-button>\n	    <ion-segment-button value="skill">\n	    	Skill Test Preparation\n	    </ion-segment-button>\n	    <ion-segment-button value="other">\n	    	Others\n	    </ion-segment-button> -->\n  </ion-segment>\n</div>\n	<!-- (click)="catvalAction(cate.id,cate.name,cate.levels_present)" -->\n</ion-header>\n<ion-content>\n	<p class="bold_font">MOST POPULAR SEARCH</p>\n	<div *ngFor="let cate of getCategory" [ngSwitch]="searchSel">\n		<div *ngSwitchCase="cate.name" ngSelected="search">\n			<!-- <ion-list >\n			  	<button ion-item>Arabic</button>\n			  	<button ion-item>Engineering</button>\n			  	<button ion-item>Biotechnology</button>\n			</ion-list> -->\n			<ion-list *ngFor="let searchSub of cateData"  (click)="clickSeach(searchSub.subcategory_id,searchSub.subcategory_name,searchSub.search_count)">\n				<button ion-item >{{searchSub.subcategory_name}}</button>\n		  	</ion-list>\n			<!-- <ion-row padding>\n				<ion-col col-6>\n					<button class="btn btn-text border_btn" ion-button full (click)="goToHome()">Cancel</button>\n				</ion-col>\n				<ion-col col-6>\n					<button class="btn btn-text" ion-button full (click)="goToHome()">Search</button>\n				</ion-col>\n			</ion-row> -->\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Search);
    return Search;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_popup_services_popup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutor_profileview_tutor_profileview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Favorites = /** @class */ (function () {
    function Favorites(zone, platform, alertCtrl, toastCtrl, spinner, studentservices, network, nativeStorage, navCtrl, modalCtrl) {
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.studentservices = studentservices;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.show = false;
    }
    Favorites.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.favArr = [];
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.userType = data.user_type;
            _this.getNotificationCounts();
            _this.getFavorites();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getFavorites();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Favorites.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Favorites.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Favorites.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Favorites.prototype.getFavorites = function () {
        var _this = this;
        this.favData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType,
            screen_type: 'F'
        };
        this.spinner.show();
        this.studentservices.getfavTutorApi(this.favData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.zone.run(function () {
                    _this.getFavData = _this.data1.data;
                    for (var i = 0; i < _this.getFavData.length; i++) {
                        _this.favArr.push({
                            first_name: _this.getFavData[i].first_name,
                            last_name: _this.getFavData[i].last_name,
                            age: _this.getFavData[i].age,
                            address: _this.getFavData[i].address,
                            tutor_id: _this.getFavData[i].tutor_id,
                            fav_status: _this.getFavData[i].fav_status,
                            profile_pic: _this.getFavData[i].profile_pic,
                            distance: _this.getFavData[i].distance.toFixed(0),
                            avg_rating: _this.getFavData[i].avg_rating,
                            categories: _this.getFavData[i].categories,
                            rate: _this.getFavData[i].rate,
                            gender: _this.getFavData[i].gender,
                            catLength: _this.getFavData[i].categories.length - 1
                        });
                    }
                    if (_this.getFavData.length == 0) {
                        _this.show = true;
                    }
                    else {
                        _this.show = false;
                    }
                    console.log(_this.getFavData);
                });
            }
            else {
                if (_this.data1.message == 'Wrong token entered!.Please try again.') {
                    _this.presentToast("Session expired Please login again");
                    _this.sessionExpired();
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    Favorites.prototype.goToTutorProfile = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tutor_profileview_tutor_profileview__["a" /* TutorProfileview */], { tutorId: id, navTo: 'fav' });
    };
    Favorites.prototype.goToServicesPopup = function (serv) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__services_popup_services_popup__["a" /* ServicesPopup */], { serv: serv });
        modal.present();
    };
    Favorites.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* Notifications */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Favorites.prototype.sessionExpired = function () {
        this.nativeStorage.remove('userType');
        this.nativeStorage.remove('userData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_type_signup_type__["a" /* SignupType */]);
    };
    Favorites.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Favorites = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/favorites/favorites.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Favorites</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="goToNotifications()">\n          <ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n           <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n 			 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="white_box">\n		<ion-list no-lines>\n			<ion-item *ngFor="let review of favArr" >\n		        <ion-avatar item-start (click)="goToTutorProfile(review.tutor_id)">\n		        	<img src="{{review.profile_pic}}" />\n		        	<img *ngIf="review.fav_status == \'F\'" src="img/heartfill_icon.png" alt="" class="heart" />\n						</ion-avatar>\n		        <h2 (click)="goToTutorProfile(review.tutor_id)">{{review.first_name}} {{review.last_name}}, {{review.gender}}, {{review.age}}\n		        	<span class="rating" (click)="goToTutorProfile(review.tutor_id)">\n		        		<rating *ngIf="review.avg_rating != null" [(ngModel)]="review.avg_rating" readOnly="true" max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)"></rating>\n	        			<rating *ngIf="review.avg_rating == null" readOnly="true" max="5"  emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n						    </rating>\n		        	</span>\n		        </h2>\n		        <p (click)="goToTutorProfile(review.tutor_id)" class="location"><img src="img/location_icon.png" alt="" />{{review.address}} <span>{{review.distance}} km</span></p>\n		        <h4 (click)="goToTutorProfile(review.tutor_id)" class="bold_font">{{review.rate}} Q.R/hr</h4>\n		        <div class="services bold_font" (click)="goToServicesPopup(review.categories)">\n		        	<span>{{review.categories[0].category_name}}</span> - {{review.categories[0].subcategories[0]}}\n		        	<span class="more">+{{review.catLength}} more</span>\n		        </div>\n		    </ion-item>\n    </ion-list>\n    <!-- <p *ngIf="show" style="text-align: center;margin-top: 50%;" >There is no data in your favorite list.</p> -->\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_9_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], Favorites);
    return Favorites;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_us_about_us__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__term_conditon_term_conditon__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__faq_faq__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SettingsStudentPage = /** @class */ (function () {
    function SettingsStudentPage(app, viewCtrl, modalCtrl, studentservices, toastCtrl, spinner, authservices, network, alertCtrl, nativeStorage, navCtrl) {
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.studentservices = studentservices;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.authservices = authservices;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.isToggled = false;
    }
    SettingsStudentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.getPrivacy();
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.getProfile();
        });
        this.nativeStorage.getItem('skipData').then(function (data) {
            _this.userIdSkip = data.user_id;
            _this.loginTokenSkip = data.login_token;
            _this.getProfile();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.getProfile();
        });
    };
    SettingsStudentPage.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    SettingsStudentPage.prototype.getPrivacy = function () {
        var _this = this;
        this.sendCategorydata = {
            user_id: '0',
            login_token: '0'
        };
        this.studentservices.getCategorySubCategory(this.sendCategorydata).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.aboutU = _this.data1.data.about_us;
            _this.conditions = _this.data1.data.conditions;
            _this.privacy_policy = _this.data1.data.privacy_policy;
        }, function (err) {
            console.log(err);
        });
    };
    SettingsStudentPage.prototype.aboutUs = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__about_us_about_us__["a" /* AboutUsPage */], { about: this.aboutU });
        profileModal.present();
    };
    SettingsStudentPage.prototype.faq = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__faq_faq__["a" /* FaqPage */]);
        profileModal.present();
    };
    SettingsStudentPage.prototype.termCondition = function () {
        alert(this.conditions);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__term_conditon_term_conditon__["a" /* TermConditonPage */], { term: this.conditions });
        profileModal.present();
    };
    SettingsStudentPage.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SettingsStudentPage.prototype.getProfile = function () {
        var _this = this;
        this.sendProfileData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.studentservices.getProfile(this.sendProfileData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getProfileData = _this.data1.data;
                if (_this.getProfileData.notifications == 'Y') {
                    _this.isToggled = true;
                }
                else {
                    _this.isToggled = false;
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SettingsStudentPage.prototype.notify = function () {
        var _this = this;
        console.log("Toggled: " + this.isToggled);
        if (this.isToggled == true) {
            this.toggleStatus = "Y";
        }
        else {
            this.toggleStatus = "N";
        }
        this.notiOnOffData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType,
            status: this.toggleStatus
        };
        this.spinner.show();
        this.studentservices.notificationOnOffApi(this.notiOnOffData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SettingsStudentPage.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.studentservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* Notifications */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SettingsStudentPage.prototype.logOut = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Logout?',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.spinner.show();
                        _this.logoutDataSend = {
                            user_id: _this.userId,
                            login_token: _this.token,
                        };
                        _this.authservices.logoutApi(_this.logoutDataSend).then(function (result) {
                            console.log(result);
                            _this.spinner.hide();
                            _this.data1 = result;
                            if (_this.data1.status == 200) {
                                _this.nativeStorage.remove('userData');
                                _this.nativeStorage.remove('userType');
                                // this.navCtrl.push(SignupType);
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__signup_type_signup_type__["a" /* SignupType */]);
                            }
                            else {
                                _this.presentToast(_this.data1.message);
                            }
                        }, function (err) {
                            _this.spinner.hide();
                            console.log(err);
                        });
                    }
                }
            ]
        });
        this.alert.present();
    };
    SettingsStudentPage.prototype.goToContactUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__["a" /* ContactUs */]);
    };
    SettingsStudentPage.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SettingsStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings-student',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/settings-student/settings-student.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    	<ion-title>Settings</ion-title>\n    	<ion-buttons right>\n        	<button ion-button (click)="goToNotifications()">\n          		<ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n          		 <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n 			 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        	</button>\n    	</ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="white_box" padding>\n		<ion-list>\n			<ion-item class="no-rightarrow">\n			  <ion-label>Notifications<span>Turn On/Off Your Push Notification</span></ion-label>\n			  <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n			</ion-item>\n			<ion-item (click)="goToContactUs();">\n			  <ion-label>Contact Us</ion-label>\n			</ion-item>\n			<ion-item (click)="aboutUs()">\n			  <ion-label>About Us</ion-label>\n			</ion-item>\n			<ion-item (click)="faq()">\n			  <ion-label>FAQ</ion-label>\n			</ion-item>\n			<ion-item (click)="termCondition()">\n			  <ion-label>Terms and Conditions</ion-label>\n			</ion-item>\n<!-- 			<ion-item (click)="goToSubscription();">\n			  <ion-label>Subscription</ion-label>\n			</ion-item> -->\n			<ion-item *ngIf="!userIdSkip" (click)="logOut();">\n			  <ion-label>Logout</ion-label>\n			</ion-item>\n		</ion-list>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/settings-student/settings-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_9__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_6__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], SettingsStudentPage);
    return SettingsStudentPage;
}());

//# sourceMappingURL=settings-student.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherEditProfile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offered_services_offered__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_availability_schedule_availability__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__teacher_my_profile_teacher_my_profile__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__address_map_address_map__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var TeacherEditProfile = /** @class */ (function () {
    function TeacherEditProfile(events, StudentServices, navParams, alertCtrl, ngZone, mapsAPILoader, tutorservices, fileTransfer, toastCtrl, network, nativeStorage, httpBaseUrl, authServices, spinner, fb, platform, navCtrl, camera, actionSheetCtrl) {
        var _this = this;
        this.events = events;
        this.StudentServices = StudentServices;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.mapsAPILoader = mapsAPILoader;
        this.tutorservices = tutorservices;
        this.fileTransfer = fileTransfer;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.httpBaseUrl = httpBaseUrl;
        this.authServices = authServices;
        this.spinner = spinner;
        this.fb = fb;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.show = false;
        this.showiNPUT = false;
        this.showSuggest = false;
        this.baseUrl = this.httpBaseUrl.baseUrl;
        this.appVersion = this.httpBaseUrl.appVersion;
        this.timezone = __WEBPACK_IMPORTED_MODULE_14_moment_timezone__["tz"].guess();
        this.authForm = fb.group({
            'first_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'last_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'dob': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'address': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'mobile_number': [""],
            'university_name': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'rate': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'group_rate': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'qualification': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'city_id': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'gender': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'teaching_levels': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'languages': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'bio': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'location_preference': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'other_location': [""],
            'other_info': ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
        this.langPush = [];
        this.levelPush = [];
        events.subscribe('user:created', function (user, time) {
            console.log('Welcome', user, 'at', time);
            _this.getAddLat = user.lat;
            _this.getAddLng = user.lng;
            _this.authForm.get('address').setValue(user.address);
        });
    }
    TeacherEditProfile.prototype.addressMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__address_map_address_map__["a" /* AddressMapPage */], { navigateTo: 'tutor_edit' });
    };
    TeacherEditProfile.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userData').then(function (data) {
            console.log('storage data', data);
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getProfile();
            _this.getTechLevels();
            _this.getLanguages();
            _this.getSuggestLocations();
        });
        this.nativeStorage.getItem('locationLat').then(function (data) {
            _this.getCurrentlat = data;
        });
        this.nativeStorage.getItem('locationLng').then(function (data) {
            _this.getCurrentlng = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getLanguages();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    TeacherEditProfile.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TeacherEditProfile.prototype.getProfile = function () {
        var _this = this;
        this.sendProfileData = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.tutorservices.getProfile(this.sendProfileData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.getProfileData = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getProfileData = _this.data1.data;
                _this.languagescheck = _this.getProfileData.user_languages;
                _this.levelCheck = _this.getProfileData.teaching_levels;
                _this.authForm.get('first_name').setValue(_this.getProfileData.first_name);
                _this.authForm.get('last_name').setValue(_this.getProfileData.last_name);
                _this.authForm.get('dob').setValue(_this.getProfileData.dob);
                _this.authForm.get('address').setValue(_this.getProfileData.address);
                _this.authForm.get('mobile_number').setValue(_this.getProfileData.mobile_number);
                _this.authForm.get('university_name').setValue(_this.getProfileData.university_name);
                _this.authForm.get('rate').setValue(_this.getProfileData.rate);
                _this.authForm.get('group_rate').setValue(_this.getProfileData.group_rate);
                _this.authForm.get('qualification').setValue(_this.getProfileData.qualification);
                _this.authForm.get('city_id').setValue(_this.getProfileData.city_id);
                _this.authForm.get('gender').setValue(_this.getProfileData.gender);
                _this.authForm.get('bio').setValue(_this.getProfileData.bio);
                _this.authForm.get('location_preference').setValue(_this.getProfileData.location_preference);
                _this.authForm.get('other_info').setValue(_this.getProfileData.other_info);
                for (var i = 0; i < _this.levelCheck.length; i++) {
                    _this.levelPush.push(_this.levelCheck[i].level_id);
                    _this.authForm.get('teaching_levels').setValue(_this.langPush);
                }
                for (var i = 0; i < _this.languagescheck.length; i++) {
                    _this.langPush.push(_this.languagescheck[i].language_id);
                    _this.authForm.get('languages').setValue(_this.langPush);
                }
                if (_this.getProfileData.location_preference == 'AO') {
                    _this.authForm.get('other_location').setValue(_this.getProfileData.other_location);
                    _this.showiNPUT = true;
                }
                else {
                    _this.showiNPUT = false;
                }
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherEditProfile.prototype.goToServiceOffered = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__services_offered_services_offered__["a" /* ServicesOffered */]);
    };
    TeacherEditProfile.prototype.goToScheduleAvailability = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__schedule_availability_schedule_availability__["a" /* ScheduleAvailability */]);
    };
    TeacherEditProfile.prototype.getLanguages = function () {
        var _this = this;
        this.languagesData = {
            user_id: this.userId,
            user_token: this.token
        };
        this.authServices.getLanguagesAndLocationPreference(this.languagesData).then(function (result) {
            console.log(result);
            _this.data1 = result;
            _this.langD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getLang = _this.langD.languages;
                _this.getCity();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherEditProfile.prototype.getTechLevels = function () {
        var _this = this;
        this.arrPush = [];
        this.getLevels = {
            user_id: this.userId,
            login_token: this.token
        };
        this.authServices.getCategorySubCategory(this.getLevels).then(function (result) {
            console.log("levels dataaaaa", result);
            _this.data1 = result;
            _this.getD = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.getCatLevels = _this.getD.levels;
                // for (let i = 0; i < this.getCatLevels.length; i++) {
                //   this.arrPush.push(this.getCatLevels[i]);
                // }
                var obj = {};
                for (var i = 0, len = _this.getCatLevels.length; i < len; i++)
                    obj[_this.getCatLevels[i]['name']] = _this.getCatLevels[i];
                _this.getCatLevels = new Array();
                for (var key in obj)
                    _this.getCatLevels.push(obj[key]);
                _this.arrPush = _this.getCatLevels;
                console.log('this.arrPushthis.arrPushthis.arrPush', _this.arrPush);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherEditProfile.prototype.getCity = function () {
        var _this = this;
        this.spinner.show();
        this.citiesData = {
            user_id: this.userId,
            user_token: this.token,
            country_id: '174'
        };
        this.authServices.getCities(this.citiesData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getCitiesData = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TeacherEditProfile.prototype.getSuggestLocations = function () {
        var _this = this;
        this.sendSuggesteddata = {
            user_id: this.userId,
            login_token: this.token
        };
        this.StudentServices.suggestedLocations(this.sendSuggesteddata).then(function (result) {
            console.log("suggested location data", result);
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.suggestedLocations = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherEditProfile.prototype.dismiss = function (data) {
        this.navCtrl.pop(data);
    };
    TeacherEditProfile.prototype.imagePopOver = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Add picture with',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicture();
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.gallery();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'undo',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TeacherEditProfile.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgDataR = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    TeacherEditProfile.prototype.gallery = function () {
        var _this = this;
        var options = {
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('ios'))
                _this.imgData = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            else
                _this.imgDataR = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["normalizeURL"])(imageData);
            _this.imgData = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    TeacherEditProfile.prototype.dobChange = function (event, dob) {
        var birthdate = new Date(dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.a < 18) {
            this.presentToast("Your age must be atleast 18 to register as a tutor");
        }
    };
    TeacherEditProfile.prototype.eventFire = function (event) {
        console.log(event);
        this.locationF = event;
        if (event == 'AO') {
            this.show = true;
            this.showiNPUT = true;
            this.showSuggest = true;
        }
        else {
            this.show = false;
            this.showiNPUT = false;
        }
    };
    TeacherEditProfile.prototype.suggestClick = function () {
        this.show = true;
    };
    TeacherEditProfile.prototype.clickSuggest = function (add, id) {
        this.suggestId = id;
        this.show = false;
        this.va = add;
        this.authForm.get('other_location').setValue(this.va);
    };
    TeacherEditProfile.prototype.submitForm = function (val, valid) {
        var _this = this;
        console.log(val, valid);
        var birthdate = new Date(this.authForm.value.dob);
        this.b = birthdate;
        var cur = new Date();
        this.c = cur;
        var diff = this.c - this.b;
        var age = Math.floor(diff / 31557600000);
        this.a = age;
        if (this.getAddLat == "" || this.getAddLat == undefined || this.getAddLat == null) {
            if (this.getProfileData.latitude == "" || this.getProfileData.latitude == undefined || this.getProfileData.latitude == null) {
                this.latS = this.getCurrentlat;
                this.lngS = this.getCurrentlng;
            }
            else {
                this.latS = this.getProfileData.latitude;
                this.lngS = this.getProfileData.longitude;
            }
        }
        else {
            this.latS = this.getAddLat;
            this.lngS = this.getAddLng;
        }
        if (valid) {
            if (this.a < 18) {
                this.presentToast("Your age must be At least 18 to register as a tutor");
                return;
            }
            if (this.imgData) {
                this.spinner.show();
                var url_1 = this.baseUrl + 'edit_profile';
                var fileTransfer = this.fileTransfer.create();
                var targetPath_1 = this.imgData;
                var filename = targetPath_1.split("/").pop();
                filename = filename.split('?');
                var options_1 = {
                    fileKey: "profile_pic",
                    fileName: filename[0],
                    chunkedMode: false,
                    mimeType: "image/jpg",
                    params: {
                        device_id: this.deviceId,
                        device_type: 'A',
                        user_type: this.userType,
                        timezone: this.timezone,
                        latitude: this.latS,
                        longitude: this.lngS,
                        user_id: this.userId,
                        login_token: this.token,
                        app_version: this.appVersion,
                        first_name: this.authForm.value.first_name,
                        last_name: this.authForm.value.last_name,
                        dob: this.authForm.value.dob,
                        address: this.authForm.value.address,
                        university_name: this.authForm.value.university_name,
                        city_id: this.authForm.value.city_id,
                        gender: this.authForm.value.gender,
                        teaching_levels: this.authForm.value.teaching_levels.toString(),
                        languages: this.authForm.value.languages.toString(),
                        bio: this.authForm.value.bio,
                        rate: this.authForm.value.rate,
                        group_rate: this.authForm.value.group_rate,
                        qualification: this.authForm.value.qualification,
                        location_preference: this.authForm.value.location_preference,
                        other_location: this.authForm.value.other_location,
                        other_location_id: this.suggestId,
                        other_info: this.authForm.value.other_info,
                        age: this.a,
                        currency_id: '85'
                    }
                };
                console.log("optionssss", options_1);
                fileTransfer.upload(targetPath_1, url_1, options_1).then(function (data) {
                    _this.spinner.hide();
                    console.log(targetPath_1, url_1, options_1);
                    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa gyaaa", data);
                    _this.data1 = JSON.parse(data.response);
                    console.log(_this.data1);
                    if (_this.data1.status == 200) {
                        _this.presentToast(_this.data1.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__teacher_my_profile_teacher_my_profile__["a" /* TeacherMyProfile */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                    var mesg = JSON.parse(err.body);
                    _this.presentToast(mesg.message);
                });
            }
            else {
                this.spinner.show();
                this.sendEditProfileData = {
                    device_id: this.deviceId,
                    device_type: 'A',
                    user_type: this.userType,
                    timezone: this.timezone,
                    latitude: this.latS,
                    longitude: this.lngS,
                    user_id: this.userId,
                    login_token: this.token,
                    app_version: this.appVersion,
                    first_name: this.authForm.value.first_name,
                    last_name: this.authForm.value.last_name,
                    dob: this.authForm.value.dob,
                    address: this.authForm.value.address,
                    university_name: this.authForm.value.university_name,
                    city_id: this.authForm.value.city_id,
                    gender: this.authForm.value.gender,
                    teaching_levels: this.authForm.value.teaching_levels.toString(),
                    languages: this.authForm.value.languages.toString(),
                    bio: this.authForm.value.bio,
                    rate: this.authForm.value.rate,
                    group_rate: this.authForm.value.group_rate,
                    qualification: this.authForm.value.qualification,
                    location_preference: this.authForm.value.location_preference,
                    other_location: this.authForm.value.other_location,
                    other_location_id: this.suggestId,
                    other_info: this.authForm.value.other_info,
                    age: this.a,
                    currency_id: '85'
                };
                this.tutorservices.editProfileTutor(this.sendEditProfileData).then(function (result) {
                    _this.spinner.hide();
                    _this.data1 = result;
                    if (_this.data1.status == 200) {
                        _this.presentToast(_this.data1.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__teacher_my_profile_teacher_my_profile__["a" /* TeacherMyProfile */]);
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    TeacherEditProfile.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    TeacherEditProfile.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherEditProfile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-edit-profile',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-edit-profile/teacher-edit-profile.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="upload_outer center">\n		<div class="upload_inner">\n			<!-- <img *ngIf="!getProfileData?.profile_image" (click)="imagePopOver()" src="img/camera_icon.png" alt="" class="camera_icon" /> -->\n			<img *ngIf="!imgData" src="{{getProfileData?.profile_pic}}" (click)="imagePopOver()" class="upload_inner">\n			<img *ngIf="imgData" src="{{imgData}}" (click)="imagePopOver()" class="upload_inner">\n		</div>\n		<p>Update Profile Picture</p>\n	</div>\n	<div padding>\n			<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="text" placeholder="First Name" formControlName="first_name"></ion-input>\n					</ion-item>\n					<div style="color: red" *ngIf="authForm.controls[\'first_name\'].hasError(\'required\') && authForm.controls[\'first_name\'].touched">* Firstname is required!</div>\n\n				</ion-col>\n				<ion-col col-50>\n				    <ion-item>\n				    	<ion-input type="text" placeholder="Last Name" formControlName="last_name"></ion-input>\n					</ion-item>\n					<div style="color: red" *ngIf="authForm.controls[\'last_name\'].hasError(\'required\') && authForm.controls[\'last_name\'].touched">* Lastname is required!</div>\n\n				</ion-col>\n			</ion-row>\n			<ion-item>\n				<ion-textarea placeholder="Biography" formControlName="bio"></ion-textarea>\n				<div style="color: red" *ngIf="authForm.controls[\'bio\'].hasError(\'required\') && authForm.controls[\'bio\'].touched">* Biography is required!</div>\n		    </ion-item>\n\n		    <ion-row>\n				<ion-col col-50>\n					<ion-item>\n				    	<ion-input type="tel" placeholder="Q.R/hr (Single)" formControlName="rate"></ion-input>\n				    </ion-item>\n				    <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'rate\'].hasError(\'required\') && authForm.controls[\'rate\'].touched">* Individual price is required!</div>\n				</ion-col>\n				<ion-col col-50>\n				    <ion-item>\n			    		<ion-input type="tel" placeholder="Q.R/hr (Group)" formControlName="group_rate"></ion-input>\n			    	</ion-item>\n			     <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'group_rate\'].hasError(\'required\') && authForm.controls[\'group_rate\'].touched">* Group price is required!</div>\n				</ion-col>\n			</ion-row>\n			<p style="text-align: center;">Please enter rates for teaching single students and group of students above</p>\n\n\n			<ion-item (tap)="addressMap()">\n				<ion-input id="txtHome1" type="text" placeholder="Address" formControlName="address"></ion-input>\n				<div style="color: red" *ngIf="authForm.controls[\'address\'].hasError(\'required\') && authForm.controls[\'address\'].touched">* Address is required!</div>\n\n		    </ion-item>\n		    <ion-item class="drops">\n					<ion-label>City</ion-label>\n					 <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="city_id" placeholder="City">\n						<ion-option *ngFor="let city of getCitiesData" [value]="city.id">{{city.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n				<div style="color: red" *ngIf="authForm.controls[\'city_id\'].hasError(\'required\') && authForm.controls[\'city_id\'].touched">* City is required!</div>\n\n			<ion-item>\n        <ion-input disabled="true" type="text"  placeholder="Mobile Number" formControlName="mobile_number"></ion-input>\n      </ion-item>\n			<ion-item class="drops">\n			  	<ion-icon item-end><img src="img/calendar_icon.png" alt=""/></ion-icon>\n			  	<ion-datetime displayFormat="MMM DD, YYYY" placeholder="Date of Birth"  formControlName="dob" (ionChange)="dobChange($event,dob)"></ion-datetime>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'dob\'].hasError(\'required\') && authForm.controls[\'dob\'].touched">* Date of birth is required!</div>\n\n			<ion-item>\n		    <ion-input type="text" placeholder="Qualification" formControlName="qualification"></ion-input>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'qualification\'].hasError(\'required\') && authForm.controls[\'qualification\'].touched">* Qualification is required!</div>\n\n			<ion-item>\n		    	<ion-input type="text" placeholder="University Name" formControlName="university_name"></ion-input>\n        </ion-item>\n\n        <ion-item class="drops">\n					<ion-label>Teaching levels</ion-label>\n					  <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="teaching_levels" placeholder="Teaching levels" multiple="true">\n						<ion-option *ngFor="let level of getCatLevels" [value]="level.id">{{level.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n        <div style="margin-top: 6px;color: red;" *ngIf="authForm.controls[\'teaching_levels\'].hasError(\'required\') && authForm.controls[\'teaching_levels\'].touched">* Teaching levels is required!</div>\n\n		    <ion-item class="drops">\n					<ion-label>Languages Spoken</ion-label>\n					 <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n					  <ion-select formControlName="languages" placeholder="Languages Spoken" multiple="true">\n						<ion-option *ngFor="let lang of getLang" [value]="lang.id">{{lang.name}}</ion-option>\n					</ion-select>\n				</ion-item>\n				<div style="color: red" *ngIf="authForm.controls[\'languages\'].hasError(\'required\') && authForm.controls[\'languages\'].touched">* Language  is required!</div>\n\n			<ion-item class="drops">\n		    	<ion-label>Location Preferences</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="location_preference" placeholder="Location Preferences" (ionChange)="eventFire($event)">\n              <ion-option value="TL">Tutor Location</ion-option>\n              <ion-option value="SH">Student Location</ion-option>\n            <ion-option value="AO">Any other public location</ion-option>\n			    	<ion-option value="NP">No preference</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'location_preference\'].hasError(\'required\') && authForm.controls[\'location_preference\'].touched">* Location Preference is required!</div>\n\n      <ion-item class="check_point" *ngIf="showiNPUT" (tap)="suggestClick()">\n          <ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n          <ion-input type="text" placeholder="Other location"  formControlName="other_location" readonly></ion-input>\n        </ion-item>\n        <div class="dd" *ngIf="show">\n          <ion-list class="input_forms" no-lines style="margin-bottom: 0;">\n              <div class="droparea">\n                <h3 class="bold_font">Suggested Locations</h3>\n                <ul>\n                  <li (click)="clickSuggest(sugestLocation.address,sugestLocation.id)" *ngFor="let sugestLocation of suggestedLocations">\n                    <img src="img/address_icon.png" alt=""/>\n                    <h4 class="bold_font">CCD</h4>\n                    <p>{{sugestLocation.address}}</p>\n                  </li>\n                </ul>\n              </div>\n          </ion-list>\n        </div>\n\n		    <ion-item class="drops">\n		    	<ion-label>Gender</ion-label>\n			 	<ion-icon item-end><img src="img/drop_arrow.png" alt=""/></ion-icon>\n			  	<ion-select formControlName="gender" placeholder="Gender">\n			    	<ion-option value="M">Male</ion-option>\n			    	<ion-option value="F">Female</ion-option>\n			    </ion-select>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'gender\'].hasError(\'required\') && authForm.controls[\'gender\'].touched">* Gender is required!</div>\n\n			<ion-item>\n		    	<ion-textarea placeholder="Other Information" formControlName="other_info"></ion-textarea>\n			</ion-item>\n			<div style="color: red" *ngIf="authForm.controls[\'other_info\'].hasError(\'required\') && authForm.controls[\'other_info\'].touched">* Other Information is required!</div>\n\n		</ion-list>\n		<button class="btn btn-text" ion-button full type="submit" >Update profile</button>\n		</form>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-edit-profile/teacher-edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_8__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_16__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_7__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_10_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], TeacherEditProfile);
    return TeacherEditProfile;
}());

//# sourceMappingURL=teacher-edit-profile.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherMyAppointments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_appointment_detail_submited_teacher_appointment_detail_submited__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_appointment_detail_progress_teacher_appointment_detail_progress__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_appointment_detail_accepted_teacher_appointment_detail_accepted__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacher_appointment_detail_completed_teacher_appointment_detail_completed__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_teacher_notifications_teacher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__end_popup_end_popup__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TeacherMyAppointments = /** @class */ (function () {
    function TeacherMyAppointments(modalCtrl, alertCtrl, platform, network, nativeStorage, spinner, tutorservices, navCtrl, navParams, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.tutorservices = tutorservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        //appointments: any;
        this.check = false;
        this.anArray = [];
        this.newAttribute = {};
        this.currentEvents = [];
        this.slotArr = [];
        this.sheduleSh = false;
        this.comSh = false;
        this.appointments = 'scheduled';
        this.categories = ['scheduled', 'completed'];
    }
    TeacherMyAppointments.prototype.onTabChanged = function (tabName) {
        this.appointments = tabName;
    };
    TeacherMyAppointments.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.appointments="scheduled";
        this.tutorId = this.navParams.get('tutorId');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotificationCounts();
            _this.myAppointMents();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotificationCounts();
            _this.myAppointMents();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    TeacherMyAppointments.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TeacherMyAppointments.prototype.getNotificationCounts = function () {
        var _this = this;
        var countData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCount(countData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.getBadgeCount = _this.data1;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyAppointments.prototype.myAppointMents = function () {
        var _this = this;
        this.getMyAppointments = {
            user_id: this.userId,
            login_token: this.token,
            user_type: this.userType
        };
        this.spinner.show();
        this.tutorservices.myAppointments(this.getMyAppointments).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.myAppoint = _this.data1.data;
                _this.sheduledData = _this.myAppoint.scheduled;
                _this.completeAppoint = _this.myAppoint.completed;
                if (_this.sheduledData.length == 0) {
                    _this.sheduleSh = true;
                }
                else {
                    _this.sheduleSh = false;
                }
                if (_this.completeAppoint.length == 0) {
                    _this.comSh = true;
                }
                else {
                    _this.comSh = false;
                }
            }
            else {
                if (_this.data1.message == 'Wrong token entered!.Please try again.') {
                    _this.presentToast("Session expired Please login again");
                    _this.sessionExpired();
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyAppointments.prototype.actionClick = function (appointmentId, action) {
        var _this = this;
        this.spinner.show();
        this.actionData = {
            tutor_id: this.userId,
            login_token: this.token,
            appointment_id: appointmentId,
            action: action
        };
        this.tutorservices.myAppointmentActionsApi(this.actionData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.myAppoint = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.myAppointMents();
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TeacherMyAppointments.prototype.goToEnd = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__end_popup_end_popup__["a" /* EndPopup */], { appointment_id: id, action: action });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                _this.userType = data.user_type;
                _this.userId = data.id;
                _this.token = data.login_token;
                _this.myAppointMents();
            });
        });
        modal.present();
    };
    TeacherMyAppointments.prototype.cancelClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'teacher_cancel' });
        modal.onDidDismiss(function (data) {
            _this.nativeStorage.getItem('userData').then(function (data) {
                _this.userType = data.user_type;
                _this.userId = data.id;
                _this.token = data.login_token;
                _this.myAppointMents();
            });
        });
        modal.present();
    };
    TeacherMyAppointments.prototype.sessionExpired = function () {
        this.nativeStorage.remove('userType');
        this.nativeStorage.remove('userData');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__signup_type_signup_type__["a" /* SignupType */]);
    };
    TeacherMyAppointments.prototype.goToDetail = function (appointmentId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: appointmentId });
    };
    TeacherMyAppointments.prototype.goToDetailprogress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacher_appointment_detail_progress_teacher_appointment_detail_progress__["a" /* TeacherAppointmentDetailProgress */]);
    };
    TeacherMyAppointments.prototype.goToDetailAccepted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__teacher_appointment_detail_accepted_teacher_appointment_detail_accepted__["a" /* TeacherAppointmentDetailAccepted */]);
    };
    TeacherMyAppointments.prototype.goToDetailCompleted = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__teacher_appointment_detail_completed_teacher_appointment_detail_completed__["a" /* TeacherAppointmentDetailCompleted */]);
    };
    TeacherMyAppointments.prototype.goToNotifications = function () {
        var _this = this;
        var dataSend = {
            user_id: this.userId,
            login_token: this.token
        };
        this.tutorservices.badgeCountReadStatus(dataSend).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */]);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    TeacherMyAppointments.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherMyAppointments = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-my-appointments',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-my-appointments/teacher-my-appointments.html"*/'<ion-header>\n    <ion-navbar>\n    	<ion-title>My Appointments</ion-title>\n    	<ion-buttons right>\n        	<button ion-button (click)="goToNotifications()">\n          		<ion-icon><img src="img/notification_icon.png" alt="" /></ion-icon>\n          		 <ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 0 && getBadgeCount?.count <= 10">{{getBadgeCount?.count}}</ion-badge>\n 			 	<ion-badge class="gradient_bg" *ngIf="getBadgeCount?.count > 10">10+</ion-badge>\n        	</button>\n    	</ion-buttons>\n    </ion-navbar>\n  	<ion-segment [(ngModel)]="appointments" class="appointments_tab">\n		<ion-segment-button value="scheduled">\n    		Scheduled\n    	</ion-segment-button>\n    	<ion-segment-button value="completed">\n    		Completed\n	    </ion-segment-button>\n	</ion-segment>\n</ion-header>\n<ion-content padding class="appointments_box">\n	<div [ngSwitch]="appointments" swipeSegment [tabsList]="categories" [(currentTab)]="appointments" (tabChanged)="onTabChanged($event)" class="swipe-area">\n		<div *ngSwitchCase="\'scheduled\'">\n			<ion-list no-lines>\n				<ion-item *ngFor="let sheduled of sheduledData">\n			        <ion-avatar (click)="goToDetail(sheduled.appointment_id)" item-start>\n			        	<img src="{{sheduled.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goToDetail(sheduled.appointment_id)" class="bold_font">{{sheduled.first_name}} {{sheduled.last_name}}, {{sheduled.gender}}, {{sheduled.age}}</h2>\n			        <p (click)="goToDetail(sheduled.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{sheduled.start_time}} to {{sheduled.end_time}}, {{sheduled.date | date:\'dd/MM/yyyy\'}} </p>\n			        <p (click)="goToDetail(sheduled.appointment_id)">{{sheduled.category_name}} - <span>{{sheduled.subcategory_name}}</span></p>\n\n              <p *ngIf=" sheduled.student_status == \'EXP\' && sheduled.tutor_status ==  \'EXP\'" class="pink_color">Your appointment has expired</p>\n		         	<p *ngIf=" sheduled.student_status == \'R_AC_BT\'" class="blue">Appointment accepted by you.</p>\n			        <p *ngIf=" sheduled.student_status == \'R_RJ_BT\'" class="pink_color">Appointment Rejected by you.</p>\n			        <p *ngIf=" sheduled.student_status == \'A_ST_BT\'" class="blue">Request sent to student for start appointment.</p>\n			        <p *ngIf=" sheduled.student_status == \'R_CA_BT\'" class="blue">Appointment cancelled by you.</p>\n			        <p *ngIf=" sheduled.student_status == \'S_CN_BS\'" class="green">Appointment in process.</p>\n			        <p *ngIf=" sheduled.student_status == \'R_CA_BS\'" class="blue">Appointment cancelled by Student.</p>\n              <p *ngIf=" sheduled.student_status == \'S_NCN_BS\'"  class="green">Student is not ready for this appointment</p>\n              <p *ngIf=" sheduled.student_status == \'A_EN_BT\'"  class="green">Waiting student\'s response for appointment completed or not.</p>\n              <p *ngIf=" sheduled.student_status == \'END\'" class="green">Appointment has been completed.</p>\n\n	         		<button *ngIf="sheduled.student_status == \'R_AC_BT\'" class="btn btn-text" ion-button (click)="actionClick(sheduled.appointment_id,\'start\')">Start</button>\n            		<button *ngIf="sheduled.student_status == \'R_AC_BT\'" class="btn btn-text blue_btn" ion-button (click)="cancelClick(sheduled.appointment_id,\'cancel\')">Cancel</button>\n			        <button *ngIf="sheduled.student_status == \'S_CN_BS\'" class="btn btn-text" ion-button (click)="goToEnd(sheduled.appointment_id,\'end\')">End Appointment</button>\n			    </ion-item>\n			    <p style="text-align: center;" *ngIf="sheduleSh">There is no data found.</p>\n			</ion-list>\n		</div>\n\n		<div *ngSwitchCase="\'completed\'">\n			<ion-list no-lines>\n				<ion-item *ngFor="let compApp of completeAppoint">\n			        <ion-avatar (click)="goToDetail(compApp.appointment_id)" item-start>\n			        	<img src="{{compApp.profile_pic}}">\n			        </ion-avatar>\n			        <h2 (click)="goToDetail(compApp.appointment_id)" class="bold_font">{{compApp.first_name}} {{compApp.last_name}}, {{compApp.gender}}, {{compApp.age}}</h2>\n			        <p (click)="goToDetail(compApp.appointment_id)" class="appointment_schedule"><img src="img/appointments_icon_active.png" alt="" />{{compApp.start_time}} to {{compApp.end_time}}, {{compApp.date | date:\'dd/MM/yyyy\'}} </p>\n			        <p (click)="goToDetail(compApp.appointment_id)">{{compApp.category_name}} - <span>{{compApp.subcategory_name}}</span></p>\n\n			        <p *ngIf="compApp.student_status == \'END\'" class="green">Your appointment has been completed.</p>\n\n			        <div *ngIf=" compApp.student_status == \'END\' && compApp.feedback_given != \'N\'" class="your_feedback">\n			        	<h3 class="bold_font">Student Feedback:</h3>\n			        	<span class="rating">\n                  <rating *ngIf="compApp.rating != null" [(ngModel)]="compApp.rating"\n                    readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n                  </rating>\n                  <rating *ngIf="compApp.rating == null"\n                    readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)">\n                  </rating>\n			        	</span>\n			        	<p>{{compApp.feedback}}</p>\n			        </div>\n			    </ion-item>\n			    <p style="text-align: center;" *ngIf="comSh">There is no data found.</p>\n			</ion-list>\n		</div>\n\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-my-appointments/teacher-my-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_7__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], TeacherMyAppointments);
    return TeacherMyAppointments;
}());

//# sourceMappingURL=teacher-my-appointments.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAppointmentDetailProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__end_popup_end_popup__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherAppointmentDetailProgress = /** @class */ (function () {
    function TeacherAppointmentDetailProgress(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    TeacherAppointmentDetailProgress.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherAppointmentDetailProgress');
    };
    TeacherAppointmentDetailProgress.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__["a" /* StudentProfileview */]);
    };
    TeacherAppointmentDetailProgress.prototype.goToEnd = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__end_popup_end_popup__["a" /* EndPopup */]);
        modal.present();
    };
    TeacherAppointmentDetailProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-appointment-detail-progress',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-progress/teacher-appointment-detail-progress.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/ash.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Ashlynn Fayth, F, 28</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />1231 Best Zone, San Francisco, CA, USA</p>\n			<p class="bold_font underline view_map">View on map</p>\n			<h3 class="bold_font">School Student</h3>\n			<div class="contacts">\n				<img src="img/message_icon.png" alt="" />\n				<img src="img/call_icon.png" alt="" />\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>10:00 to 12:00, 20/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Academic - <span>Arabic</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Student Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>2</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Price</h3>\n			<p>30 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="green">Appointment in progress.</p>\n		<button class="btn btn-text" ion-button full (click)="goToEnd();">End Appointment</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-progress/teacher-appointment-detail-progress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TeacherAppointmentDetailProgress);
    return TeacherAppointmentDetailProgress;
}());

//# sourceMappingURL=teacher-appointment-detail-progress.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAppointmentDetailAccepted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherAppointmentDetailAccepted = /** @class */ (function () {
    function TeacherAppointmentDetailAccepted(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TeacherAppointmentDetailAccepted.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherAppointmentDetailAccepted');
    };
    TeacherAppointmentDetailAccepted.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__["a" /* StudentProfileview */]);
    };
    TeacherAppointmentDetailAccepted = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-appointment-detail-accepted',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-accepted/teacher-appointment-detail-accepted.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/jack.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Jack Smith, M, 24</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />San Francisco, USA</p>\n			<h3 class="bold_font">School Student</h3>\n			<div class="contacts">\n				<img src="img/message_icon.png" alt="" />\n				<img src="img/call_icon.png" alt="" />\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>12:00 to 13:00, 22/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Music - <span>Drums</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Tutor Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>1</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Price</h3>\n			<p>15 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="blue">Appointment accepted by you.</p>\n		<button class="btn btn-text" ion-button full>Start Appointment</button>\n		<button class="btn btn-text blue_btn" ion-button full>Cancel Appointment</button>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-accepted/teacher-appointment-detail-accepted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TeacherAppointmentDetailAccepted);
    return TeacherAppointmentDetailAccepted;
}());

//# sourceMappingURL=teacher-appointment-detail-accepted.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAppointmentDetailCompleted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherAppointmentDetailCompleted = /** @class */ (function () {
    function TeacherAppointmentDetailCompleted(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TeacherAppointmentDetailCompleted.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeacherAppointmentDetailCompleted');
    };
    TeacherAppointmentDetailCompleted = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-appointment-detail-completed',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-completed/teacher-appointment-detail-completed.html"*/'\n<ion-header class="with_back">\n\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="img/ash.jpg" class="user_img" (click)="goToProfile()">\n			<h2>Ashlynn Fayth, F, 28</h2>\n			<p class="location"><img src="img/location_icon.png" alt="" />1231 Best Zone, San Francisco, CA, USA</p>\n			<p class="bold_font underline view_map">View on map</p>\n			<h3 class="bold_font">School Student</h3>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>10:00 to 12:00, 20/06/2018 </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>Academic - <span>Arabic</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p>Student Home</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>2</p>\n				</ion-col>\n			</ion-row>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>Generate Lorem Ipsum placeholder text for use in your graphic.</p>\n			<hr/>\n			<h3 class="bold_font">Price</h3>\n			<p>30 Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<p class="green">Your appointment has been completed.</p>\n		<h5 class="bold_font">Your Feedback:</h5>\n		<span class="rating">\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-yellow.png" alt="" />\n    		<img src="img/star-light.png" alt="" />\n    	</span>\n		<p>Highly Recommended!!</p>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-completed/teacher-appointment-detail-completed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TeacherAppointmentDetailCompleted);
    return TeacherAppointmentDetailCompleted;
}());

//# sourceMappingURL=teacher-appointment-detail-completed.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(viewCtrl, platform, studentservices, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.studentservices = studentservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    PrivacyPolicyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getPri = this.navParams.get('privacy');
        this.show = true;
        console.log('ionViewDidLoad PrivacyPolicyPage');
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    PrivacyPolicyPage.prototype.dismissCan = function () {
        this.viewCtrl.dismiss();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/privacy-policy/privacy-policy.html"*/'<!--\n  Generated template for the PrivacyPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Privacy and policy</ion-title>\n    <ion-buttons right>\n        <button ion-button (click)="dismissCan()">\n             <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="white_box" padding *ngIf="show">\n        <div class="content-detail" [innerHTML]="getPri | keepHtml"></div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/privacy-policy/privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_appointments_my_appointments__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorites_favorites__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_student_settings_student__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsStudentPage = /** @class */ (function () {
    function TabsStudentPage(np) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__["a" /* MyProfile */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__my_appointments_my_appointments__["a" /* MyAppointments */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__favorites_favorites__["a" /* Favorites */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__settings_student_settings_student__["a" /* SettingsStudentPage */];
        this.seltabix = np.get('opentab');
    }
    TabsStudentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsStudentPage');
    };
    TabsStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs-student',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/tabs-student/tabs-student.html"*/'<ion-tabs #paymentTabs [selectedIndex]="seltabix">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="profile" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Appointments" tabIcon="appointments" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Favorites" tabIcon="favorites" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/tabs-student/tabs-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TabsStudentPage);
    return TabsStudentPage;
}());

//# sourceMappingURL=tabs-student.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(596);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_popup_forgot_password_popup__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_phone_verification_phone_verification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_profile_create_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sub_category_sub_category__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sub_category_level_sub_category_level__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_subject_detail_subject_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tutor_list_tutor_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_services_popup_services_popup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_filters_filters__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tutor_profileview_tutor_profileview__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_share_profile_popup_share_profile_popup__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_book_appointment_book_appointment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_success_popup_success_popup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_my_profile_my_profile__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_my_appointments_my_appointments__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_appointment_detail_submited_appointment_detail_submited__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_appointment_detail_rejected_appointment_detail_rejected__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_appointment_detail_progress_appointment_detail_progress__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_appointment_detail_accepted_appointment_detail_accepted__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_appointment_detail_completed_appointment_detail_completed__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_appointment_detail_completed_feedback_appointment_detail_completed_feedback__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_rating_popup_rating_popup__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_favorites_favorites__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_notifications_notifications__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_notifications_teacher_notifications_teacher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_reject_popup_reject_popup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_start_popup_start_popup__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_settings_student_settings_student__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_contact_us_contact_us__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_teacher_create_profile_teacher_create_profile__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_services_offered_services_offered__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_teacher_dashboard_teacher_dashboard__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_student_profileview_student_profileview__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_teacher_my_profile_teacher_my_profile__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_teacher_edit_profile_teacher_edit_profile__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_reviews_reviews__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_teacher_my_appointments_teacher_my_appointments__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_teacher_appointment_detail_progress_teacher_appointment_detail_progress__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_teacher_appointment_detail_accepted_teacher_appointment_detail_accepted__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_teacher_appointment_detail_completed_teacher_appointment_detail_completed__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_end_popup_end_popup__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_subscription_subscription__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_schedule_availability_schedule_availability__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_view_availability_view_availability__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_tutorial_tutorial__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_teacher_tutorial_teacher_tutorial__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__directives_swipe_segment_swipe_segment__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__directives_limit_to_limit_to__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_repeat_appointment_repeat_appointment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_address_map_address_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_map_search_map_search__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_privacy_policy_privacy_policy__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_about_us_about_us__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_term_conditon_term_conditon__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pipes_keep_html_keep_html__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_faq_faq__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_status_bar__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_splash_screen__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__providers_config_config__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_79_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ionic_native_device__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ionic_native_push__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ionic_native_diagnostic__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ionic_native_in_app_purchase__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ionic_native_camera__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__ionic_native_file_transfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ngx_google_places_autocomplete__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89_ngx_google_places_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_89_ngx_google_places_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_autocomplete_autocomplete__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__ionic_native_file__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__ionic_native_calendar__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__ionic_native_call_number__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__ionic_native_sms__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__ionic_native_social_sharing__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__ionic_native_screenshot__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__ionic_native_launch_navigator__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101_ionic2_rating__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102_time_ago_pipe__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__ionic_native_google_maps__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__ionic_native_native_geocoder__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__ionic_native_deeplinks__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { CalendarModule } from 'ionic3-calendar-en';




































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_student_tabs_student__["a" /* TabsStudentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_type_signup_type__["a" /* SignupType */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* Signin */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__["a" /* ForgotPassword */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_popup_forgot_password_popup__["a" /* ForgotPasswordPopup */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_15__pages_phone_verification_phone_verification__["a" /* PhoneVerification */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_profile_create_profile__["a" /* CreateProfile */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sub_category_sub_category__["a" /* SubCategory */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sub_category_level_sub_category_level__["a" /* SubCategoryLevel */],
                __WEBPACK_IMPORTED_MODULE_19__pages_subject_detail_subject_detail__["a" /* SubjectDetail */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* Search */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutor_list_tutor_list__["a" /* TutorList */],
                __WEBPACK_IMPORTED_MODULE_22__pages_services_popup_services_popup__["a" /* ServicesPopup */],
                __WEBPACK_IMPORTED_MODULE_23__pages_filters_filters__["a" /* Filters */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutor_profileview_tutor_profileview__["a" /* TutorProfileview */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_profile_popup_share_profile_popup__["a" /* ShareProfilePopup */],
                __WEBPACK_IMPORTED_MODULE_26__pages_book_appointment_book_appointment__["a" /* BookAppointment */],
                __WEBPACK_IMPORTED_MODULE_27__pages_success_popup_success_popup__["a" /* SuccessPopup */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_profile_my_profile__["a" /* MyProfile */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__["a" /* EditProfile */],
                __WEBPACK_IMPORTED_MODULE_30__pages_my_appointments_my_appointments__["a" /* MyAppointments */],
                __WEBPACK_IMPORTED_MODULE_31__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */],
                __WEBPACK_IMPORTED_MODULE_32__pages_appointment_detail_rejected_appointment_detail_rejected__["a" /* AppointmentDetailRejected */],
                __WEBPACK_IMPORTED_MODULE_33__pages_appointment_detail_progress_appointment_detail_progress__["a" /* AppointmentDetailProgress */],
                __WEBPACK_IMPORTED_MODULE_34__pages_appointment_detail_accepted_appointment_detail_accepted__["a" /* AppointmentDetailAccepted */],
                __WEBPACK_IMPORTED_MODULE_35__pages_appointment_detail_completed_appointment_detail_completed__["a" /* AppointmentDetailCompleted */],
                __WEBPACK_IMPORTED_MODULE_36__pages_appointment_detail_completed_feedback_appointment_detail_completed_feedback__["a" /* AppointmentDetailCompletedFeedback */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rating_popup_rating_popup__["a" /* RatingPopup */],
                __WEBPACK_IMPORTED_MODULE_38__pages_favorites_favorites__["a" /* Favorites */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notifications_notifications__["a" /* Notifications */],
                __WEBPACK_IMPORTED_MODULE_40__pages_notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_reject_popup_reject_popup__["a" /* RejectPopup */],
                __WEBPACK_IMPORTED_MODULE_42__pages_start_popup_start_popup__["a" /* StartPopup */],
                __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__["a" /* Settings */],
                __WEBPACK_IMPORTED_MODULE_44__pages_settings_student_settings_student__["a" /* SettingsStudentPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_contact_us_contact_us__["a" /* ContactUs */],
                __WEBPACK_IMPORTED_MODULE_46__pages_teacher_create_profile_teacher_create_profile__["a" /* TeacherCreateProfile */],
                __WEBPACK_IMPORTED_MODULE_47__pages_services_offered_services_offered__["a" /* ServicesOffered */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teacher_dashboard_teacher_dashboard__["a" /* TeacherDashboard */],
                __WEBPACK_IMPORTED_MODULE_49__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */],
                __WEBPACK_IMPORTED_MODULE_50__pages_student_profileview_student_profileview__["a" /* StudentProfileview */],
                __WEBPACK_IMPORTED_MODULE_51__pages_reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */],
                __WEBPACK_IMPORTED_MODULE_52__pages_teacher_my_profile_teacher_my_profile__["a" /* TeacherMyProfile */],
                __WEBPACK_IMPORTED_MODULE_53__pages_teacher_edit_profile_teacher_edit_profile__["a" /* TeacherEditProfile */],
                __WEBPACK_IMPORTED_MODULE_54__pages_reviews_reviews__["a" /* Reviews */],
                __WEBPACK_IMPORTED_MODULE_55__pages_teacher_my_appointments_teacher_my_appointments__["a" /* TeacherMyAppointments */],
                __WEBPACK_IMPORTED_MODULE_56__pages_teacher_appointment_detail_progress_teacher_appointment_detail_progress__["a" /* TeacherAppointmentDetailProgress */],
                __WEBPACK_IMPORTED_MODULE_59__pages_end_popup_end_popup__["a" /* EndPopup */],
                __WEBPACK_IMPORTED_MODULE_57__pages_teacher_appointment_detail_accepted_teacher_appointment_detail_accepted__["a" /* TeacherAppointmentDetailAccepted */],
                __WEBPACK_IMPORTED_MODULE_58__pages_teacher_appointment_detail_completed_teacher_appointment_detail_completed__["a" /* TeacherAppointmentDetailCompleted */],
                __WEBPACK_IMPORTED_MODULE_60__pages_subscription_subscription__["a" /* Subscription */],
                __WEBPACK_IMPORTED_MODULE_61__pages_schedule_availability_schedule_availability__["a" /* ScheduleAvailability */],
                __WEBPACK_IMPORTED_MODULE_62__pages_view_availability_view_availability__["a" /* ViewAvailability */],
                __WEBPACK_IMPORTED_MODULE_90__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_teacher_tutorial_teacher_tutorial__["a" /* TeacherTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_65__directives_swipe_segment_swipe_segment__["a" /* SwipeSegmentDirective */],
                __WEBPACK_IMPORTED_MODULE_66__directives_limit_to_limit_to__["a" /* LimitToDirective */],
                __WEBPACK_IMPORTED_MODULE_102_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_67__pages_repeat_appointment_repeat_appointment__["a" /* RepeatAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_map_search_map_search__["a" /* MapSearchPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_address_map_address_map__["a" /* AddressMapPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_term_conditon_term_conditon__["a" /* TermConditonPage */],
                __WEBPACK_IMPORTED_MODULE_73__pipes_keep_html_keep_html__["a" /* KeepHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_74__pages_faq_faq__["a" /* FaqPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_101_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_95__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyB8R-5nAEyhXLuOySRIdBb_RXubo6C5EQ8",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_79_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_89_ngx_google_places_autocomplete__["GooglePlaceModule"],
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/teacher-tutorial/teacher-tutorial.module#TeacherTutorialPageModule', name: 'TeacherTutorialPage', segment: 'teacher-tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_student_tabs_student__["a" /* TabsStudentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_type_signup_type__["a" /* SignupType */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* Signin */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_password_forgot_password__["a" /* ForgotPassword */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgot_password_popup_forgot_password_popup__["a" /* ForgotPasswordPopup */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_15__pages_phone_verification_phone_verification__["a" /* PhoneVerification */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_profile_create_profile__["a" /* CreateProfile */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sub_category_sub_category__["a" /* SubCategory */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sub_category_level_sub_category_level__["a" /* SubCategoryLevel */],
                __WEBPACK_IMPORTED_MODULE_19__pages_subject_detail_subject_detail__["a" /* SubjectDetail */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* Search */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutor_list_tutor_list__["a" /* TutorList */],
                __WEBPACK_IMPORTED_MODULE_22__pages_services_popup_services_popup__["a" /* ServicesPopup */],
                __WEBPACK_IMPORTED_MODULE_23__pages_filters_filters__["a" /* Filters */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutor_profileview_tutor_profileview__["a" /* TutorProfileview */],
                __WEBPACK_IMPORTED_MODULE_25__pages_share_profile_popup_share_profile_popup__["a" /* ShareProfilePopup */],
                __WEBPACK_IMPORTED_MODULE_26__pages_book_appointment_book_appointment__["a" /* BookAppointment */],
                __WEBPACK_IMPORTED_MODULE_27__pages_success_popup_success_popup__["a" /* SuccessPopup */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_profile_my_profile__["a" /* MyProfile */],
                __WEBPACK_IMPORTED_MODULE_29__pages_edit_profile_edit_profile__["a" /* EditProfile */],
                __WEBPACK_IMPORTED_MODULE_30__pages_my_appointments_my_appointments__["a" /* MyAppointments */],
                __WEBPACK_IMPORTED_MODULE_31__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */],
                __WEBPACK_IMPORTED_MODULE_32__pages_appointment_detail_rejected_appointment_detail_rejected__["a" /* AppointmentDetailRejected */],
                __WEBPACK_IMPORTED_MODULE_33__pages_appointment_detail_progress_appointment_detail_progress__["a" /* AppointmentDetailProgress */],
                __WEBPACK_IMPORTED_MODULE_34__pages_appointment_detail_accepted_appointment_detail_accepted__["a" /* AppointmentDetailAccepted */],
                __WEBPACK_IMPORTED_MODULE_35__pages_appointment_detail_completed_appointment_detail_completed__["a" /* AppointmentDetailCompleted */],
                __WEBPACK_IMPORTED_MODULE_36__pages_appointment_detail_completed_feedback_appointment_detail_completed_feedback__["a" /* AppointmentDetailCompletedFeedback */],
                __WEBPACK_IMPORTED_MODULE_37__pages_rating_popup_rating_popup__["a" /* RatingPopup */],
                __WEBPACK_IMPORTED_MODULE_38__pages_favorites_favorites__["a" /* Favorites */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notifications_notifications__["a" /* Notifications */],
                __WEBPACK_IMPORTED_MODULE_40__pages_notifications_teacher_notifications_teacher__["a" /* NotificationsTeacherPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_reject_popup_reject_popup__["a" /* RejectPopup */],
                __WEBPACK_IMPORTED_MODULE_42__pages_start_popup_start_popup__["a" /* StartPopup */],
                __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings__["a" /* Settings */],
                __WEBPACK_IMPORTED_MODULE_44__pages_settings_student_settings_student__["a" /* SettingsStudentPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_contact_us_contact_us__["a" /* ContactUs */],
                __WEBPACK_IMPORTED_MODULE_46__pages_teacher_create_profile_teacher_create_profile__["a" /* TeacherCreateProfile */],
                __WEBPACK_IMPORTED_MODULE_47__pages_services_offered_services_offered__["a" /* ServicesOffered */],
                __WEBPACK_IMPORTED_MODULE_48__pages_teacher_dashboard_teacher_dashboard__["a" /* TeacherDashboard */],
                __WEBPACK_IMPORTED_MODULE_49__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */],
                __WEBPACK_IMPORTED_MODULE_50__pages_student_profileview_student_profileview__["a" /* StudentProfileview */],
                __WEBPACK_IMPORTED_MODULE_51__pages_reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */],
                __WEBPACK_IMPORTED_MODULE_52__pages_teacher_my_profile_teacher_my_profile__["a" /* TeacherMyProfile */],
                __WEBPACK_IMPORTED_MODULE_53__pages_teacher_edit_profile_teacher_edit_profile__["a" /* TeacherEditProfile */],
                __WEBPACK_IMPORTED_MODULE_54__pages_reviews_reviews__["a" /* Reviews */],
                __WEBPACK_IMPORTED_MODULE_55__pages_teacher_my_appointments_teacher_my_appointments__["a" /* TeacherMyAppointments */],
                __WEBPACK_IMPORTED_MODULE_56__pages_teacher_appointment_detail_progress_teacher_appointment_detail_progress__["a" /* TeacherAppointmentDetailProgress */],
                __WEBPACK_IMPORTED_MODULE_59__pages_end_popup_end_popup__["a" /* EndPopup */],
                __WEBPACK_IMPORTED_MODULE_57__pages_teacher_appointment_detail_accepted_teacher_appointment_detail_accepted__["a" /* TeacherAppointmentDetailAccepted */],
                __WEBPACK_IMPORTED_MODULE_58__pages_teacher_appointment_detail_completed_teacher_appointment_detail_completed__["a" /* TeacherAppointmentDetailCompleted */],
                __WEBPACK_IMPORTED_MODULE_60__pages_subscription_subscription__["a" /* Subscription */],
                __WEBPACK_IMPORTED_MODULE_61__pages_schedule_availability_schedule_availability__["a" /* ScheduleAvailability */],
                __WEBPACK_IMPORTED_MODULE_62__pages_view_availability_view_availability__["a" /* ViewAvailability */],
                __WEBPACK_IMPORTED_MODULE_90__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_teacher_tutorial_teacher_tutorial__["a" /* TeacherTutorialPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_repeat_appointment_repeat_appointment__["a" /* RepeatAppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_map_search_map_search__["a" /* MapSearchPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_address_map_address_map__["a" /* AddressMapPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_term_conditon_term_conditon__["a" /* TermConditonPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_faq_faq__["a" /* FaqPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_77__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_78__providers_authservices_authservices__["a" /* AuthservicesProvider */],
                __WEBPACK_IMPORTED_MODULE_80__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_81__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_82__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_83__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_84__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_85__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_86__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                __WEBPACK_IMPORTED_MODULE_87__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_88__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_90__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_91__providers_studentservices_studentservices__["a" /* StudentservicesProvider */],
                __WEBPACK_IMPORTED_MODULE_92__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_93__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_94__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */],
                __WEBPACK_IMPORTED_MODULE_96__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_97__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_98__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_99__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_100__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_103__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_104__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_105__ionic_native_deeplinks__["a" /* Deeplinks */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectReasonPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RejectReasonPopup = /** @class */ (function () {
    function RejectReasonPopup(studentservices, navParams, toastCtrl, nativeStorage, tutorservices, spinner, network, viewCtrl) {
        this.studentservices = studentservices;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.tutorservices = tutorservices;
        this.spinner = spinner;
        this.network = network;
        this.viewCtrl = viewCtrl;
    }
    RejectReasonPopup.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.poupText = this.navParams.get('popup');
        this.apId = this.navParams.get('appointment_id');
        this.action = this.navParams.get('action');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
        });
        console.log('ionViewDidLoad EndPopup');
    };
    RejectReasonPopup.prototype.clickAction = function (reson) {
        if (this.userType == 'T') {
            this.actionClickTutor(reson);
        }
        else {
            this.actionClickStudent(reson);
        }
    };
    RejectReasonPopup.prototype.actionClickTutor = function (reason) {
        var _this = this;
        if (reason == "" || reason == undefined || reason == null) {
            this.presentToast("Please add reason");
            return;
        }
        this.spinner.show();
        this.actionDataTutor = {
            tutor_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            reason: reason,
            action: this.action
        };
        this.tutorservices.myAppointmentActionsApi(this.actionDataTutor).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.viewCtrl.dismiss(_this.apId);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    RejectReasonPopup.prototype.actionClickStudent = function (reason) {
        var _this = this;
        if (reason == "" || reason == undefined || reason == null) {
            this.presentToast("Please add reason");
            return;
        }
        this.spinner.show();
        this.actionDataStudent = {
            student_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            reason: reason,
            action: this.action
        };
        this.studentservices.myAppointmentAction(this.actionDataStudent).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.viewCtrl.dismiss(_this.apId);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    RejectReasonPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    RejectReasonPopup.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RejectReasonPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reject-reason-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/reject-reason-popup/reject-reason-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<p *ngIf="poupText == \'teacher_reject\'">Are you sure you want to reject this appointment?</p>\n				<p *ngIf="poupText == \'teacher_cancel\'">Are you sure you want to cancel this appointment?</p>\n				<p *ngIf="poupText == \'student_no\'">Are you sure you dont\'t want to start this appointment?</p>\n        <p *ngIf="poupText == \'student_cancel\'">Are you sure you want to cancel this appointment?</p>\n        <p *ngIf="poupText == \'end_no\'">Are you sure you dont\'t want to end this appointment?</p>\n        <p *ngIf="poupText == \'start_no\'">Are you sure you dont\'t want to start this appointment?</p>\n				<h3 class="bold_font">Please specify reason</h3>\n				<ion-list class="input_forms" no-lines>\n					<ion-item>\n				    	<ion-textarea [(ngModel)]="reason" placeholder="Reason Description"></ion-textarea>\n				    </ion-item>\n				</ion-list>\n				<button class="btn btn-text" ion-button full (click)="clickAction(reason)">Submit</button>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/reject-reason-popup/reject-reason-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], RejectReasonPopup);
    return RejectReasonPopup;
}());

//# sourceMappingURL=reject-reason-popup.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject_popup_reject_popup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_popup_start_popup__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appointment_detail_submited_appointment_detail_submited__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Notifications = /** @class */ (function () {
    function Notifications(alertCtrl, platform, toastCtrl, nativeStorage, spinner, network, studentservices, modalCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.network = network;
        this.studentservices = studentservices;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Notifications.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotification();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotification();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Notifications.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Notifications.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Notifications.prototype.getNotification = function () {
        var _this = this;
        var notificationData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.spinner.show();
        this.studentservices.getNotificationsApi(notificationData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.notificationD = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    Notifications.prototype.goApointmentDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: id });
    };
    Notifications.prototype.goToRejectPopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reject_popup_reject_popup__["a" /* RejectPopup */]);
        modal.present();
    };
    Notifications.prototype.goToStartPopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__start_popup_start_popup__["a" /* StartPopup */]);
        modal.present();
    };
    Notifications.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Notifications = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/notifications/notifications.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="white_box">\n		<ul>\n			<li *ngFor="let notification of notificationD" (click)="goApointmentDetail(notification.appointment_id)">\n				<h3 *ngIf="notification.label == \'accept\'"><span class="bold_font">{{notification.tutor_name}}</span> has accepted your appointment for <span class="bold_font">“{{notification.service_name}}”.</span></h3>\n				<h3 *ngIf="notification.label == \'end\'">Your appointment is completed by <span class="bold_font">{{notification.tutor_name}}</span> for  <span class="bold_font">“{{notification.service_name}}”.</span></h3>\n				<h3 *ngIf="notification.label == \'reject\'">Your appointment is rejected by <span class="bold_font">{{notification.tutor_name}}</span> for  <span class="bold_font">“{{notification.service_name}}”.</span></h3>\n				<h3 *ngIf="notification.label == \'start\'"><span class="bold_font">{{notification.tutor_name}}</span> has started your appointment for <span class="bold_font">“{{notification.service_name}}”.</span></h3>\n\n        <h3 *ngIf="notification.label == \'tutor cancelled\'"><span class="bold_font">{{notification.tutor_name}}</span> has cancelled your appointment for <span class="bold_font">“{{notification.service_name}}”.</span></h3>\n\n        <p>{{notification.created_at | timeAgo}}</p>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__providers_studentservices_studentservices__["a" /* StudentservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], Notifications);
    return Notifications;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__phone_verification_phone_verification__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_profile_create_profile__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__teacher_create_profile_teacher_create_profile__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tutorial_tutorial__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__teacher_tutorial_teacher_tutorial__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var Signin = /** @class */ (function () {
    function Signin(app, alertCtrl, platform, network, toastCtrl, spinner, loginService, fb, navCtrl, navParams, nativeStorage) {
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.loginService = loginService;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeStorage = nativeStorage;
        this.movnt = __WEBPACK_IMPORTED_MODULE_10_moment_timezone__();
        this.timezone = __WEBPACK_IMPORTED_MODULE_10_moment_timezone__["tz"].guess();
        this.authForm = fb.group({
            'user_identity': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required])]
        });
    }
    Signin.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.nativeStorage.getItem('userType').then(function (data) {
            _this.uType = data;
        });
        this.nativeStorage.getItem('locationLat').then(function (data) {
            _this.lat = data;
        });
        this.nativeStorage.getItem('locationLng').then(function (data) {
            _this.long = data;
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    Signin.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    Signin.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    Signin.prototype.submitForm = function (val, valid) {
        var _this = this;
        if (valid) {
            this.spinner.show();
            this.loginDataSend = {
                device_id: this.deviceId,
                device_type: 'A',
                user_identity: this.authForm.value.user_identity,
                password: this.authForm.value.password,
                timezone: this.timezone,
                app_version: '1.0'
            };
            this.loginService.loginApi(this.loginDataSend).then(function (result) {
                _this.spinner.hide();
                _this.data1 = result;
                _this.loginData = _this.data1.data;
                if (_this.data1.status == 200) {
                    _this.nativeStorage.remove('skipData');
                    _this.nativeStorage.setItem('userData', _this.loginData).then(function (result) {
                    });
                    _this.nativeStorage.setItem('userType', _this.loginData.user_type).then(function (result) {
                    });
                    _this.presentToast(_this.data1.message);
                    if (_this.loginData.user_type == 'S') {
                        if (_this.loginData.otp_verified == 'N') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__phone_verification_phone_verification__["a" /* PhoneVerification */]);
                        }
                        else if (_this.loginData.profile_status == 0) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__create_profile_create_profile__["a" /* CreateProfile */]);
                        }
                        else {
                            // this.navCtrl.setRoot(TabsStudentPage);
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_student_tabs_student__["a" /* TabsStudentPage */]);
                        }
                    }
                    else {
                        if (_this.loginData.otp_verified == 'N') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__phone_verification_phone_verification__["a" /* PhoneVerification */]);
                        }
                        else if (_this.loginData.admin_verify == '0') {
                            _this.presentToast(_this.data1.message);
                        }
                        else if (_this.loginData.profile_status == 0) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__teacher_create_profile_teacher_create_profile__["a" /* TeacherCreateProfile */]);
                        }
                        else {
                            // this.navCtrl.setRoot(TabsPage);
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                }
                else if (_this.data1.status == 204) {
                    _this.presentToast(_this.data1.message);
                }
                else {
                    _this.presentToast(_this.data1.message);
                }
            }, function (err) {
                _this.spinner.hide();
                console.log(err);
            });
        }
        else {
            this.validateAllFormFields(this.authForm);
        }
    };
    Signin.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    Signin.prototype.goToForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPassword */]).then(function () {
        });
    };
    Signin.prototype.goToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */]);
    };
    Signin.prototype.viewTutorial = function () {
        if (this.uType == 'T') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__teacher_tutorial_teacher_tutorial__["a" /* TeacherTutorialPage */]);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__tutorial_tutorial__["a" /* TutorialPage */]);
    };
    Signin.prototype.skip = function () {
        var _this = this;
        this.skipData = {
            user_id: "0",
            login_token: "0",
            app_version: '1.0'
        };
        this.nativeStorage.remove('userData');
        this.nativeStorage.setItem('skipData', this.skipData).then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_student_tabs_student__["a" /* TabsStudentPage */]);
        });
    };
    Signin.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Signin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/signin/signin.html"*/'<ion-header class="transparent_header with_back">\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="bg center">\n	<img src="img/logo.png" alt="" class="logo" />\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,authForm.valid)">\n		<ion-list class="input_forms" no-lines>\n			<ion-item>\n				<ion-input type="text" placeholder="Enter Email Address or Phone Number" [formControl]="authForm.controls[\'user_identity\']"></ion-input>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;"   *ngIf="authForm.controls[\'user_identity\'].hasError(\'required\') && authForm.controls[\'user_identity\'].touched">* Email or Phone is required!</div>\n			<ion-item>\n				<ion-input type="password" placeholder="Enter Password"  [formControl]="authForm.controls[\'password\']"></ion-input>\n			</ion-item>\n			<div style="margin-top: 6px;color: red;"  *ngIf="authForm.controls[\'password\'].hasError(\'required\') && authForm.controls[\'password\'].touched">* Password is required!</div>\n		</ion-list>\n		<button class="btn btn-text" type="submit" ion-button full>Login</button>\n	</form>\n	<p><span (click)="goToForgotPassword()">Forgot Password?</span></p>\n	<p class="skip" style="display: inline-block;"><span (click)="viewTutorial()">View Tutorial</span>\n	<p *ngIf="uType == \'S\'" class="skip" style="display: inline-block;margin-left: 10px;"><span (click)="skip()">Skip</span></p>\n</ion-content>\n<ion-footer class="transparent_footer">\n	<ion-toolbar>\n		<ion-row>\n			<ion-col col-7><p>Don’t have an account?</p></ion-col>\n			<ion-col col-5><button class="btn btn-text" ion-button full (click)="goToSignUp()">Sign Up</button></ion-col>\n		</ion-row>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_8_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_7__providers_authservices_authservices__["a" /* AuthservicesProvider */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Signin);
    return Signin;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_dashboard_teacher_dashboard__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher_my_profile_teacher_my_profile__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teacher_my_appointments_teacher_my_appointments__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_2__teacher_dashboard_teacher_dashboard__["a" /* TeacherDashboard */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_3__teacher_my_profile_teacher_my_profile__["a" /* TeacherMyProfile */];
        this.tab8Root = __WEBPACK_IMPORTED_MODULE_4__teacher_my_appointments_teacher_my_appointments__["a" /* TeacherMyAppointments */];
        this.tab9Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* Settings */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Profile" tabIcon="profile" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Appointments" tabIcon="appointments" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Favorites" tabIcon="favorites" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Settings" tabIcon="settings" tabsHideOnSubPages="true"></ion-tab> -->\n\n  <ion-tab [root]="tab6Root" tabTitle="Dashboard" tabIcon="dashboard" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab7Root" tabTitle="TeacherProfile" tabIcon="teacherprofile" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab8Root" tabTitle="TeacherAppointment" tabIcon="teacherappointment" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab9Root" tabTitle="Settings" tabIcon="settings" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reject_popup_reject_popup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_popup_start_popup__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teacher_appointment_detail_submited_teacher_appointment_detail_submited__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NotificationsTeacherPage = /** @class */ (function () {
    function NotificationsTeacherPage(alertCtrl, platform, toastCtrl, nativeStorage, spinner, network, tutorservices, modalCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.spinner = spinner;
        this.network = network;
        this.tutorservices = tutorservices;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsTeacherPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getNotification();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getNotification();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    NotificationsTeacherPage.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    NotificationsTeacherPage.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    NotificationsTeacherPage.prototype.getNotification = function () {
        var _this = this;
        var notificationData = {
            user_id: this.userId,
            login_token: this.token
        };
        this.spinner.show();
        this.tutorservices.getNotificationsApi(notificationData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.notificationD = _this.data1.data;
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            console.log(err);
        });
    };
    NotificationsTeacherPage.prototype.goAppoitmentDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: id });
    };
    NotificationsTeacherPage.prototype.goToRejectPopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reject_popup_reject_popup__["a" /* RejectPopup */]);
        modal.present();
    };
    NotificationsTeacherPage.prototype.goToStartPopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__start_popup_start_popup__["a" /* StartPopup */]);
        modal.present();
    };
    NotificationsTeacherPage.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NotificationsTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications-teacher',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/notifications-teacher/notifications-teacher.html"*/'<ion-header class="with_back">\n  	<ion-navbar>\n   	 	<ion-title>Notifications</ion-title>\n  	</ion-navbar>\n</ion-header>\n<ion-content padding>\n	<div class="white_box">\n		<ul>\n			<li *ngFor="let notifications of notificationD" (click)="goAppoitmentDetails(notifications.appointment_id)">\n				<h3 *ngIf="notifications.label == \'new request\'">You have received a new appointment request from <span class="bold_font">"{{notifications.student_name}}" </span> for <span class="bold_font">“{{notifications.service_name}}“. </span></h3>\n        <h3 *ngIf="notifications.label == \'feedback\'"><span class="bold_font">{{notifications.student_name}}</span>Gives you a feedback on appointment of <span class="bold_font">“{{notifications.service_name}}“</span></h3>\n\n\n        <h3 *ngIf="notifications.label == \'yes\'"><span class="bold_font">{{notifications.student_name}}</span>has confirmed yes for the appointment of <span class="bold_font">“{{notifications.service_name}}”.</span></h3>\n        <h3 *ngIf="notifications.label == \'no\'"><span class="bold_font">{{notifications.student_name}}</span>has confirmed no for the appointment of <span class="bold_font">“{{notifications.service_name}}”.</span></h3>\n        <h3 *ngIf="notifications.label == \'end no\'"><span class="bold_font">{{notifications.student_name}}</span>has not ended the appointment of <span class="bold_font">“{{notifications.service_name}}”.</span></h3>\n        <h3 *ngIf="notifications.label == \'end yes\'"><span class="bold_font">{{notifications.student_name}}</span>has ended the appointment of <span class="bold_font">“{{notifications.service_name}}”.</span></h3>\n\n        <h3 *ngIf="notifications.label == \'student cancelled\'"><span class="bold_font">{{notifications.student_name}}</span>is not ready for the appointment of <span class="bold_font">“{{notifications.service_name}}“</span></h3>\n\n        <p>{{notifications.created_at | timeAgo}}</p>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/notifications-teacher/notifications-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_4__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NotificationsTeacherPage);
    return NotificationsTeacherPage;
}());

//# sourceMappingURL=notifications-teacher.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAppointmentDetailSubmited; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reject_reason_popup_reject_reason_popup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__end_popup_end_popup__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_sweetalert2__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TeacherAppointmentDetailSubmited = /** @class */ (function () {
    function TeacherAppointmentDetailSubmited(launchNavigator, sms, call, alertCtrl, network, nativeStorage, navParams, platform, toastCtrl, spinner, tutorservices, navCtrl, modalCtrl) {
        this.launchNavigator = launchNavigator;
        this.sms = sms;
        this.call = call;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.tutorservices = tutorservices;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        this.localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    }
    TeacherAppointmentDetailSubmited.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apId = this.navParams.get('appointment_id');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
            _this.getAppointmentDetail();
        });
        this.connectSubscription = this.network.onConnect().subscribe(function () {
            _this.getAppointmentDetail();
        });
        this.platform.registerBackButtonAction(function () {
            if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    _this.showAlert();
                }
            }
        });
    };
    TeacherAppointmentDetailSubmited.prototype.ionViewDidLeave = function () {
        this.connectSubscription.unsubscribe();
    };
    TeacherAppointmentDetailSubmited.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    TeacherAppointmentDetailSubmited.prototype.getAppointmentDetail = function () {
        var _this = this;
        this.spinner.show();
        this.getDetailD = {
            user_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            user_type: this.userType
        };
        this.tutorservices.myAppointmentsDetailApi(this.getDetailD).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            _this.myAppoint = _this.data1.data;
            if (_this.data1.status == 200) {
                _this.detailData = _this.data1.data;
                _this.appDate = _this.detailData.date;
                _this.appTime = _this.detailData.start_time;
                _this.rating = _this.detailData.rating;
            }
            else {
                // this.presentToast(this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    TeacherAppointmentDetailSubmited.prototype.actionClick = function (appointmentId, action) {
        var _this = this;
        if (action == 'accept') {
            this.title = "accept";
            this.successMessage = 'Successfully Accepted';
            this.content = "You want to accept the appointment ?";
        }
        else if (action == 'start') {
            this.title = "start";
            this.successMessage = 'Successfully Started';
            this.content = "You want to start the appointment";
            this.dateF = __WEBPACK_IMPORTED_MODULE_8_moment_timezone__(this.localISOTime).format("YYYY-MM-DD");
        }
        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()({
            title: 'Are you sure?',
            text: this.content,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, ' + this.title + ' it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.actionData = {
                    tutor_id: _this.userId,
                    login_token: _this.token,
                    appointment_id: appointmentId,
                    action: action
                };
                _this.tutorservices.myAppointmentActionsApi(_this.actionData).then(function (result) {
                    console.log(result);
                    _this.spinner.hide();
                    _this.data1 = result;
                    _this.myAppoint = _this.data1.data;
                    if (_this.data1.status == 200) {
                        __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()(_this.title, _this.successMessage, 'success');
                        _this.getAppointmentDetail();
                    }
                    else {
                        _this.presentToast(_this.data1.message);
                    }
                }, function (err) {
                    _this.spinner.hide();
                    console.log(err);
                });
            }
            else if (result.dismiss === __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default.a.DismissReason.cancel) {
                __WEBPACK_IMPORTED_MODULE_13_sweetalert2___default()('Cancelled', 'Your dont ' + _this.title + ' the appointment :)', 'error');
            }
        });
    };
    TeacherAppointmentDetailSubmited.prototype.messageClick = function (num) {
        this.sms.send(num, 'Hello!');
    };
    TeacherAppointmentDetailSubmited.prototype.callClick = function (num) {
        this.call.callNumber(num, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    TeacherAppointmentDetailSubmited.prototype.goToProfile = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__student_profileview_student_profileview__["a" /* StudentProfileview */], { studentId: id });
    };
    TeacherAppointmentDetailSubmited.prototype.goToEnd = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__end_popup_end_popup__["a" /* EndPopup */], { appointment_id: id, action: action });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getAppointmentDetail();
        });
        modal.present();
    };
    TeacherAppointmentDetailSubmited.prototype.goToReject = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'teacher_reject' });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getAppointmentDetail();
        });
        modal.present();
    };
    TeacherAppointmentDetailSubmited.prototype.cancelClick = function (id, action) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__reject_reason_popup_reject_reason_popup__["a" /* RejectReasonPopup */], { appointment_id: id, action: action, popup: 'teacher_cancel' });
        modal.onDidDismiss(function (data) {
            _this.apId = data;
            _this.getAppointmentDetail();
        });
        modal.present();
    };
    TeacherAppointmentDetailSubmited.prototype.viewMap = function (lat, lng) {
        this.latLng = lat.concat(',' + lng);
        var options = {};
        this.launchNavigator.navigate(this.latLng, options).then(function () {
            console.log("launched successfully");
        }).catch(function () {
            console.log("launch failed");
        });
    };
    TeacherAppointmentDetailSubmited.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TeacherAppointmentDetailSubmited = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teacher-appointment-detail-submited',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-submited/teacher-appointment-detail-submited.html"*/'\n<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Appointment Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="appointment_details">\n	<div class="white_box">\n		<div class="user_detail">\n			<img src="{{detailData?.profile_pic}}" class="user_img" (click)="goToProfile(detailData?.student_id)">\n			<h2 (click)="goToProfile(detailData?.student_id)" >{{detailData?.first_name}} {{detailData?.last_name}}, {{detailData?.gender}}, {{detailData?.age}}</h2>\n			<p (click)="goToProfile(detailData?.student_id)" class="location"><img src="img/location_icon.png" alt="" />{{detailData?.address}}</p>\n			<p class="bold_font underline view_map" (click)="viewMap(detailData?.latitude,detailData?.longitude)" >View on map</p>\n			<h3 *ngIf="detailData?.student_type == \'US\'" class="bold_font">University Student</h3>\n			<h3 *ngIf="detailData?.student_type == \'SS\'" class="bold_font">School Student</h3>\n			<h3 *ngIf="detailData?.student_type == \'WP\'" class="bold_font">Working Professional</h3>\n			<h3 *ngIf="detailData?.student_type == \'GR\'" class="bold_font">Graduate</h3>\n			<div class="contacts">\n				<img *ngIf=" detailData?.student_status == \'R_AC_BT\'" src="img/message_icon.png" alt="" (click)="messageClick(detailData?.mobile_number)" />\n				<img *ngIf=" detailData?.student_status == \'R_AC_BT\'" src="img/call_icon.png" alt="" (click)="callClick(detailData?.mobile_number)"/>\n\n				<img *ngIf=" detailData?.student_status == \'A_ST_BT\'" src="img/message_icon.png" alt="" (click)="messageClick(detailData?.mobile_number)" />\n				<img *ngIf=" detailData?.student_status == \'A_ST_BT\'" src="img/call_icon.png" alt="" (click)="callClick(detailData?.mobile_number)"/>\n\n				<img *ngIf=" detailData?.student_status == \'S_CN_BS\'" src="img/message_icon.png" alt="" (click)="messageClick(detailData?.mobile_number)" />\n				<img *ngIf=" detailData?.student_status == \'S_CN_BS\'" src="img/call_icon.png" alt="" (click)="callClick(detailData?.mobile_number)"/>\n\n			</div>\n		</div>\n\n		<div class="appointment_info">\n			<h3 class="bold_font">Time & Date</h3>\n			<p>{{detailData?.start_time}} to {{detailData?.end_time}}, {{detailData?.date | date:\'dd/MM/yyyy\'}} </p>\n			<hr/>\n			<h3 class="bold_font">Subject</h3>\n			<p>{{detailData?.category_name}} - <span>{{detailData?.subcategory_name}}</span> - <span>{{detailData?.level_name}}</span></p>\n			<hr/>\n			<ion-row>\n				<ion-col col-5>\n					<h3 class="bold_font">Location</h3>\n					<p *ngIf="detailData?.location_preference == \'TL\'">Tutor\'s Location</p>\n					<p *ngIf="detailData?.location_preference == \'SH\'">Student\'s Home</p>\n					<p *ngIf="detailData?.location_preference == \'AO\'">Any other public location</p>\n					<p *ngIf="detailData?.location_preference == \'NP\'">No preference</p>\n				</ion-col>\n				<ion-col col-7>\n					<h3 class="bold_font">Number of Students</h3>\n					<p>{{detailData?.no_of_students}}</p>\n				</ion-col>\n      </ion-row>\n      <h3 *ngIf="detailData?.location_preference == \'AO\'" class="bold_font">Other Location</h3>\n			<p *ngIf="detailData?.location_preference == \'AO\'">{{detailData?.other_location}}</p>\n			<hr/>\n			<h3 class="bold_font">Special Instructions</h3>\n			<p>{{detailData?.special_instructions}}</p>\n			<hr/>\n			<h3 class="bold_font">Price</h3>\n			<p>{{detailData?.total_cost}} Q.R</p>\n		</div>\n\n	</div>\n	<div class="center status_area">\n		<!-- <button class="btn btn-text" ion-button full (click)="acceptRequest(detailData?.appointment_id)">Accept Appointment</button>\n		<button class="btn btn-text blue_btn" ion-button full (click)="goToReject(detailData?.appointment_id);">Reject Appointment</button> -->\n\n\n		<p *ngIf=" detailData?.student_status == \'EXP\' && detailData?.tutor_status ==  \'EXP\'" class="pink_color">Your appointment has expired</p>\n		<p *ngIf=" detailData?.student_status == \'R_AC_BT\'" class="blue">Appointment accepted by you.</p>\n    <p *ngIf=" detailData?.student_status == \'R_RJ_BT\'" class="pink_color">Appointment Rejected by you.</p>\n    <p *ngIf=" detailData?.student_status == \'A_ST_BT\'" class="blue">Request sent to student for start appointment.</p>\n    <p *ngIf=" detailData?.student_status == \'R_CA_BT\'" class="blue">Appointment cancelled by you.</p>\n    <p *ngIf=" detailData?.student_status == \'S_CN_BS\'" class="green">Appointment in process.</p>\n    <p *ngIf=" detailData?.student_status == \'R_CA_BS\'" class="blue">Appointment cancelled by Student.</p>\n    <p *ngIf=" detailData?.student_status == \'S_NCN_BS\'"  class="green">Student is not ready for this appointment</p>\n    <p *ngIf=" detailData?.student_status == \'A_EN_BT\'"  class="green">Waiting student\'s response for appointment complete or not.</p>\n\n    <p *ngIf=" detailData?.student_status == \'E_NCN_BS\'"  class="green">Student is not ready to and this appointment .</p>\n\n    <p *ngIf=" detailData?.student_status == \'END\'" class="green">Your appointment has been completed.</p>\n\n\n    <h5 *ngIf=" detailData?.student_status == \'R_CA_BS\'"   class="bold_font">Reason:</h5>\n    <p *ngIf=" detailData?.student_status == \'R_CA_BS\'"   class="reason">{{detailData?.reason}}</p>\n\n    <h5 *ngIf=" detailData?.student_status == \'R_RJ_BT\'"  class="bold_font">Reason:</h5>\n		 <p *ngIf=" detailData?.student_status == \'R_RJ_BT\'"  class="reason">{{detailData?.reason}}</p>\n\n     <h5 *ngIf=" detailData?.student_status == \'R_CA_BT\'"  class="bold_font">Reason:</h5>\n		 <p *ngIf=" detailData?.student_status == \'R_CA_BT\'"  class="reason">{{detailData?.reason}}</p>\n\n      <h5 *ngIf=" detailData?.student_status == \'S_NCN_BS\'"  class="bold_font">Reason:</h5>\n		  <p *ngIf=" detailData?.student_status == \'S_NCN_BS\'"  class="reason">{{detailData?.reason}}</p>\n\n      <h5 *ngIf=" detailData?.student_status == \'E_NCN_BS\'"  class="bold_font">Reason:</h5>\n      <p *ngIf=" detailData?.student_status == \'E_NCN_BS\'"  class="reason">{{detailData?.reason}}</p>\n\n\n\n		<button *ngIf=" detailData?.student_status == \'R_SE_BS\'" class="btn btn-text" ion-button full (click)="actionClick(detailData?.appointment_id,\'accept\')">Accept</button>\n        <button  *ngIf=" detailData?.student_status == \'R_SE_BS\'" class="btn btn-text blue_btn" ion-button full (click)="goToReject(detailData?.appointment_id,\'reject\');">Reject</button>\n\n        <button *ngIf=" detailData?.student_status == \'R_AC_BT\'" class="btn btn-text" ion-button full (click)="actionClick(detailData?.appointment_id,\'start\')" >Start</button>\n		<button *ngIf=" detailData?.student_status == \'R_AC_BT\'" class="btn btn-text blue_btn" ion-button full (click)="cancelClick(detailData?.appointment_id,\'cancel\')">Cancel</button>\n\n\n        <button *ngIf=" detailData?.student_status == \'S_CN_BS\'" class="btn btn-text blue_btn" ion-button full (click)="goToEnd(detailData?.appointment_id,\'end\')">End Appointment</button>\n\n\n		<div *ngIf=" detailData?.student_status == \'END\' && detailData?.feedback_given != \'N\' " class="center status_area">\n			<h5 class="bold_font">Your Feedback:</h5>\n			<span class="rating">\n	    		<rating *ngIf="detailData?.rating != null"  [(ngModel)]="rating"\n		        readOnly="true" max="5" value="3" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"(ngModelChange)="onModelChange($event)"></rating>\n	        	<rating *ngIf="detailData?.rating == null"\n		        readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false">\n				</rating>\n	    	</span>\n			<p>{{detailData?.feedback}}</p>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/teacher-appointment-detail-submited/teacher-appointment-detail-submited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__ionic_native_launch_navigator__["a" /* LaunchNavigator */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_5__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TeacherAppointmentDetailSubmited);
    return TeacherAppointmentDetailSubmited;
}());

//# sourceMappingURL=teacher-appointment-detail-submited.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EndPopup = /** @class */ (function () {
    function EndPopup(navParams, toastCtrl, nativeStorage, tutorservices, spinner, network, viewCtrl) {
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.tutorservices = tutorservices;
        this.spinner = spinner;
        this.network = network;
        this.viewCtrl = viewCtrl;
    }
    EndPopup.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.apId = this.navParams.get('appointment_id');
        this.action = this.navParams.get('action');
        this.nativeStorage.getItem('userData').then(function (data) {
            _this.userType = data.user_type;
            _this.userId = data.id;
            _this.token = data.login_token;
        });
        console.log('ionViewDidLoad EndPopup');
    };
    EndPopup.prototype.yes = function () {
        var _this = this;
        this.spinner.show();
        this.actionData = {
            tutor_id: this.userId,
            login_token: this.token,
            appointment_id: this.apId,
            action: this.action
        };
        this.tutorservices.myAppointmentActionsApi(this.actionData).then(function (result) {
            console.log(result);
            _this.spinner.hide();
            _this.data1 = result;
            if (_this.data1.status == 200) {
                _this.viewCtrl.dismiss(_this.apId);
            }
            else {
                _this.presentToast(_this.data1.message);
            }
        }, function (err) {
            _this.spinner.hide();
            console.log(err);
        });
    };
    EndPopup.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    EndPopup.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EndPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-end-popup',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/end-popup/end-popup.html"*/'<ion-content padding>\n	<div class="table_box">\n		<div class="table_box_inner">\n			<div class="pop_outer center">\n				<div class="pop_content" padding>\n					<p>Are you sure you want to end this appointment?</p>\n					<button class="btn btn-text" ion-button full (click)="yes()">Yes</button>\n				</div>\n			</div>\n			<div class="close_icon"><ion-icon name="close-circle" (click)="dismiss()"></ion-icon></div>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/end-popup/end-popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__providers_tutorservices_tutorservices__["a" /* TutorservicesProvider */], __WEBPACK_IMPORTED_MODULE_3_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], EndPopup);
    return EndPopup;
}());

//# sourceMappingURL=end-popup.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressMapPage = /** @class */ (function () {
    function AddressMapPage(events, nativeGeocoder, nativeStorage, mapsAPILoader, loadingCtrl, navCtrl, navParams, viewCtrl, zone, menuCtrl) {
        var _this = this;
        this.events = events;
        this.nativeGeocoder = nativeGeocoder;
        this.nativeStorage = nativeStorage;
        this.mapsAPILoader = mapsAPILoader;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.latitude = 0;
        this.longitude = 0;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.events.subscribe('latLng:created', function (event, time) {
            console.log('Welcome', event, 'at', time);
            _this.lat = event.lat;
            _this.lng = event.lng;
        });
        this.events.subscribe('hello', function (data) {
            alert('subscribed to hello with data');
        });
    }
    AddressMapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.navTo = this.navParams.get('navigateTo');
        this.nativeStorage.getItem('locationLat').then(function (result) {
            _this.lat = result;
        });
        this.nativeStorage.getItem('locationLng').then(function (result) {
            _this.lng = result;
        });
        setTimeout(function () {
            _this.loadMap();
        }, 1000);
    };
    AddressMapPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* GoogleMaps */].create('map', mapOptions);
        var markers = this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            // animation: 'DROP',
            position: {
                lat: this.lat,
                lng: this.lng
            }
        })
            .then(function (marker) {
            _this.map.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_DRAG).subscribe(function () {
                var pos = _this.map.getCameraTarget();
                console.log(pos);
                marker.setPosition(pos);
            });
            marker.on(__WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            });
        });
    };
    AddressMapPage.prototype.geocodeCheck = function (lat, lng) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lat, lng, options)
            .then(function (result) {
            console.log(JSON.stringify(result[0]));
            _this.address = JSON.stringify(result[0]);
        })
            .catch(function (error) { return console.log(error); });
    };
    AddressMapPage.prototype.updateSearch = function () {
        console.log("chla");
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: '' } }, function (predictions, status) {
            console.log(status);
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    AddressMapPage.prototype.chooseItem = function (item) {
        // this.viewCtrl.dismiss(this.geo);
        this.geo = item;
        this.geoCode(this.geo);
    };
    AddressMapPage.prototype.geoCode = function (address) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            var obj = {
                address: address,
                lat: _this.latitude,
                lng: _this.longitude
            };
            _this.events.publish('user:created', obj, Date.now());
            _this.navCtrl.pop();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddressMapPage.prototype, "mapElement", void 0);
    AddressMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-address-map',template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/pages/address-map/address-map.html"*/'<ion-header class="with_back">\n  <ion-navbar>\n    <ion-title>Address</ion-title>\n    <!--<ion-buttons right>\n	    <button ion-button (click)="dismissCan()">\n	         <ion-icon><img src="img/close_icon.png" alt="" /></ion-icon>\n	    </button>\n	  </ion-buttons> -->\n  </ion-navbar>\n  <ion-searchbar id="txtHome1" [(ngModel)]="autocomplete.query" (keyup)="updateSearch()" placeholder="Search here" ></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-header>\n<ion-content>\n	<div id="map" style="height: 100%;width: 100%;"></div>\n</ion-content>\n'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/pages/address-map/address-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], AddressMapPage);
    return AddressMapPage;
}());

//# sourceMappingURL=address-map.js.map

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 381,
	"./af.js": 381,
	"./ar": 382,
	"./ar-dz": 383,
	"./ar-dz.js": 383,
	"./ar-kw": 384,
	"./ar-kw.js": 384,
	"./ar-ly": 385,
	"./ar-ly.js": 385,
	"./ar-ma": 386,
	"./ar-ma.js": 386,
	"./ar-sa": 387,
	"./ar-sa.js": 387,
	"./ar-tn": 388,
	"./ar-tn.js": 388,
	"./ar.js": 382,
	"./az": 389,
	"./az.js": 389,
	"./be": 390,
	"./be.js": 390,
	"./bg": 391,
	"./bg.js": 391,
	"./bm": 392,
	"./bm.js": 392,
	"./bn": 393,
	"./bn.js": 393,
	"./bo": 394,
	"./bo.js": 394,
	"./br": 395,
	"./br.js": 395,
	"./bs": 396,
	"./bs.js": 396,
	"./ca": 397,
	"./ca.js": 397,
	"./cs": 398,
	"./cs.js": 398,
	"./cv": 399,
	"./cv.js": 399,
	"./cy": 400,
	"./cy.js": 400,
	"./da": 401,
	"./da.js": 401,
	"./de": 402,
	"./de-at": 403,
	"./de-at.js": 403,
	"./de-ch": 404,
	"./de-ch.js": 404,
	"./de.js": 402,
	"./dv": 405,
	"./dv.js": 405,
	"./el": 406,
	"./el.js": 406,
	"./en-au": 407,
	"./en-au.js": 407,
	"./en-ca": 408,
	"./en-ca.js": 408,
	"./en-gb": 409,
	"./en-gb.js": 409,
	"./en-ie": 410,
	"./en-ie.js": 410,
	"./en-il": 411,
	"./en-il.js": 411,
	"./en-nz": 412,
	"./en-nz.js": 412,
	"./eo": 413,
	"./eo.js": 413,
	"./es": 414,
	"./es-do": 415,
	"./es-do.js": 415,
	"./es-us": 416,
	"./es-us.js": 416,
	"./es.js": 414,
	"./et": 417,
	"./et.js": 417,
	"./eu": 418,
	"./eu.js": 418,
	"./fa": 419,
	"./fa.js": 419,
	"./fi": 420,
	"./fi.js": 420,
	"./fo": 421,
	"./fo.js": 421,
	"./fr": 422,
	"./fr-ca": 423,
	"./fr-ca.js": 423,
	"./fr-ch": 424,
	"./fr-ch.js": 424,
	"./fr.js": 422,
	"./fy": 425,
	"./fy.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./gom-latn": 428,
	"./gom-latn.js": 428,
	"./gu": 429,
	"./gu.js": 429,
	"./he": 430,
	"./he.js": 430,
	"./hi": 431,
	"./hi.js": 431,
	"./hr": 432,
	"./hr.js": 432,
	"./hu": 433,
	"./hu.js": 433,
	"./hy-am": 434,
	"./hy-am.js": 434,
	"./id": 435,
	"./id.js": 435,
	"./is": 436,
	"./is.js": 436,
	"./it": 437,
	"./it.js": 437,
	"./ja": 438,
	"./ja.js": 438,
	"./jv": 439,
	"./jv.js": 439,
	"./ka": 440,
	"./ka.js": 440,
	"./kk": 441,
	"./kk.js": 441,
	"./km": 442,
	"./km.js": 442,
	"./kn": 443,
	"./kn.js": 443,
	"./ko": 444,
	"./ko.js": 444,
	"./ky": 445,
	"./ky.js": 445,
	"./lb": 446,
	"./lb.js": 446,
	"./lo": 447,
	"./lo.js": 447,
	"./lt": 448,
	"./lt.js": 448,
	"./lv": 449,
	"./lv.js": 449,
	"./me": 450,
	"./me.js": 450,
	"./mi": 451,
	"./mi.js": 451,
	"./mk": 452,
	"./mk.js": 452,
	"./ml": 453,
	"./ml.js": 453,
	"./mn": 454,
	"./mn.js": 454,
	"./mr": 455,
	"./mr.js": 455,
	"./ms": 456,
	"./ms-my": 457,
	"./ms-my.js": 457,
	"./ms.js": 456,
	"./mt": 458,
	"./mt.js": 458,
	"./my": 459,
	"./my.js": 459,
	"./nb": 460,
	"./nb.js": 460,
	"./ne": 461,
	"./ne.js": 461,
	"./nl": 462,
	"./nl-be": 463,
	"./nl-be.js": 463,
	"./nl.js": 462,
	"./nn": 464,
	"./nn.js": 464,
	"./pa-in": 465,
	"./pa-in.js": 465,
	"./pl": 466,
	"./pl.js": 466,
	"./pt": 467,
	"./pt-br": 468,
	"./pt-br.js": 468,
	"./pt.js": 467,
	"./ro": 469,
	"./ro.js": 469,
	"./ru": 470,
	"./ru.js": 470,
	"./sd": 471,
	"./sd.js": 471,
	"./se": 472,
	"./se.js": 472,
	"./si": 473,
	"./si.js": 473,
	"./sk": 474,
	"./sk.js": 474,
	"./sl": 475,
	"./sl.js": 475,
	"./sq": 476,
	"./sq.js": 476,
	"./sr": 477,
	"./sr-cyrl": 478,
	"./sr-cyrl.js": 478,
	"./sr.js": 477,
	"./ss": 479,
	"./ss.js": 479,
	"./sv": 480,
	"./sv.js": 480,
	"./sw": 481,
	"./sw.js": 481,
	"./ta": 482,
	"./ta.js": 482,
	"./te": 483,
	"./te.js": 483,
	"./tet": 484,
	"./tet.js": 484,
	"./tg": 485,
	"./tg.js": 485,
	"./th": 486,
	"./th.js": 486,
	"./tl-ph": 487,
	"./tl-ph.js": 487,
	"./tlh": 488,
	"./tlh.js": 488,
	"./tr": 489,
	"./tr.js": 489,
	"./tzl": 490,
	"./tzl.js": 490,
	"./tzm": 491,
	"./tzm-latn": 492,
	"./tzm-latn.js": 492,
	"./tzm.js": 491,
	"./ug-cn": 493,
	"./ug-cn.js": 493,
	"./uk": 494,
	"./uk.js": 494,
	"./ur": 495,
	"./ur.js": 495,
	"./uz": 496,
	"./uz-latn": 497,
	"./uz-latn.js": 497,
	"./uz.js": 496,
	"./vi": 498,
	"./vi.js": 498,
	"./x-pseudo": 499,
	"./x-pseudo.js": 499,
	"./yo": 500,
	"./yo.js": 500,
	"./zh-cn": 501,
	"./zh-cn.js": 501,
	"./zh-hk": 502,
	"./zh-hk.js": 502,
	"./zh-tw": 503,
	"./zh-tw.js": 503
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 901;

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_student_tabs_student__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_spinner__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appointment_detail_submited_appointment_detail_submited__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_deeplinks__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutor_profileview_tutor_profileview__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(deeplinks, events, toastCtrl, network, alertCtrl, spinner, diagnostic, geolocation, nativeStorage, push, platform, statusBar, splashScreen) {
        var _this = this;
        this.deeplinks = deeplinks;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.spinner = spinner;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.nativeStorage = nativeStorage;
        this.push = push;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
        this.initializeApp();
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.presentToast("Network was disconnected (:-");
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nativeStorage.remove('skipData');
            _this.statusBar.styleDefault();
            // this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#0f4d79');
            if (_this.splashScreen) {
                setTimeout(function () {
                    _this.splashScreen.hide();
                }, 500);
            }
            _this.deeplinks.routeWithNavController(_this.nav, {
                '/items': __WEBPACK_IMPORTED_MODULE_16__pages_tutor_profileview_tutor_profileview__["a" /* TutorProfileview */]
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.log('Unmatched Route', nomatch);
            });
            _this.ionViewDidLoadCom();
            _this.pushNoti();
            _this.diagnostic.isLocationEnabled().then(function (isAvailable) {
                console.log('Is available? ' + isAvailable);
                if (isAvailable == true) {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.nativeStorage.setItem('locationLat', _this.lat).then(function (result) { return console.log('Stored item lat !', result); }, function (error) { return console.error('Error storing item', error); });
                        _this.long = resp.coords.longitude;
                        _this.nativeStorage.setItem('locationLng', _this.long).then(function (result) {
                            _this.eventsFire = {
                                lat: _this.lat,
                                lng: _this.long
                            };
                            _this.events.publish('latLng:created', _this.eventsFire, Date.now());
                            console.log('this.events', _this.events);
                            _this.ionViewDidLoadCom();
                        });
                    }).catch(function (error) {
                        console.log('Error getting location' + JSON.stringify(error));
                    });
                }
                else {
                    var confirmAlert = _this.alertCtrl.create({
                        title: 'Location',
                        message: 'Please turn on your location',
                        enableBackdropDismiss: false,
                        buttons: [{
                                role: 'Ok',
                            }, {
                                text: 'Ok',
                                handler: function () {
                                    _this.diagnostic.switchToLocationSettings();
                                    _this.getLat();
                                }
                            }]
                    });
                    confirmAlert.present();
                }
            }).catch(function (e) {
                console.log(e);
            });
            _this.platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    if (_this.alert) {
                        _this.alert.dismiss();
                        _this.alert = null;
                    }
                    else {
                        _this.showAlert();
                    }
                }
            });
        });
    };
    MyApp.prototype.showAlert = function () {
        var _this = this;
        this.alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.alert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.nativeStorage.remove('skipData');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.alert.present();
    };
    MyApp.prototype.getLat = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.nativeStorage.setItem('locationLat', _this.lat).then(function (result) { return console.log('Stored item lat long!', result); }, function (error) { return console.error('Error storing item', error); });
            _this.long = resp.coords.longitude;
            _this.nativeStorage.setItem('locationLng', _this.long).then(function (result) {
                _this.ionViewDidLoadCom();
            });
        }).catch(function (error) {
            console.log('Error getting location' + JSON.stringify(error));
        });
    };
    MyApp.prototype.ionViewDidLoadCom = function () {
        var _this = this;
        this.nativeStorage.getItem('userData').then(function (isLoggedIn) {
            console.log('Is Logged in : ', isLoggedIn);
            _this.loggedIn = isLoggedIn;
            if (!_this.loggedIn) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
            }
            else {
                if (_this.loggedIn.user_type == 'S') {
                    if (_this.loggedIn.otp_verified == 'N') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
                    }
                    else if (_this.loggedIn.profile_status == 0) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
                        // this.rootPage = CreateProfile;
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_student_tabs_student__["a" /* TabsStudentPage */];
                    }
                }
                else {
                    if (_this.loggedIn.otp_verified == 'N') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
                    }
                    else if (_this.loggedIn.admin_verify == 'N/A') {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
                        // this.rootPage = TeacherCreateProfile;
                    }
                    else if (_this.loggedIn.profile_status == 0) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signup_type_signup_type__["a" /* SignupType */];
                        // this.rootPage = TeacherCreateProfile;
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.pushNoti = function () {
        var _this = this;
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications(Tutorry)');
            }
            else {
                console.log('We do not have permission to send push notifications(Tutorry)');
            }
        });
        var options = {
            android: {
                senderID: '313049827281',
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        // pushObject.on('Accept').subscribe((data: any) =>{
        //   console.log('accept',data);
        // });
        // pushObject.on('Reject').subscribe((data: any) =>{
        //   console.log('reject',data);
        // });
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification);
            if (notification.additionalData.label == 'new request') {
                if (notification.additionalData.foreground) {
                    _this.alert = _this.alertCtrl.create({
                        title: notification.title,
                        message: notification.additionalData.text,
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            },
                            {
                                text: 'View',
                                handler: function () {
                                    console.log('view');
                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                                }
                            }
                        ]
                    });
                    _this.alert.present();
                }
                else {
                    if (notification.additionalData.coldstart) {
                        console.log("Push notification clicked app closed");
                    }
                    else {
                        console.log("Push notification clicked app background");
                        _this.alert = _this.alertCtrl.create({
                            title: notification.title,
                            message: notification.additionalData.text,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'View',
                                    handler: function () {
                                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                                    }
                                }
                            ]
                        });
                        _this.alert.present();
                    }
                }
            }
            else if (notification.additionalData.label == 'accept') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'reject') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'cancel') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                console.log('view');
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'end') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'yes') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'no') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'cancel') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                console.log('view');
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'feedback') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'end no') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'end yes') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'tutor cancelled') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_appointment_detail_submited_appointment_detail_submited__["a" /* AppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else if (notification.additionalData.label == 'student cancelled') {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_teacher_appointment_detail_submited_teacher_appointment_detail_submited__["a" /* TeacherAppointmentDetailSubmited */], { appointment_id: notification.additionalData.appointment_id });
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
            else {
                _this.alert = _this.alertCtrl.create({
                    title: notification.title,
                    message: notification.additionalData.text,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'View',
                            handler: function () {
                            }
                        }
                    ]
                });
                _this.alert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            _this.nativeStorage.setItem('deviceId', registration.registrationId).then(function (result) { return console.log('Stored device id!', result); }, function (error) { return console.error('Error storing device id', error); });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    MyApp.prototype.presentToast = function (message) {
        console.log(message);
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/netset/milap_projects/Tutorry/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n	<ngx-spinner\n		bdColor = "rgba(51, 51, 51, 0.8)"\n		size = "medium"\n		color = "#fff"\n		type = "line-scale-pulse-out-rapid"\n		></ngx-spinner>'/*ion-inline-end:"/home/netset/milap_projects/Tutorry/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_11_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSegmentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeSegmentDirective = /** @class */ (function () {
    function SwipeSegmentDirective(_el) {
        this._el = _el;
        this.tabsList = [];
        this.currentTab = '';
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.el = _el.nativeElement;
    }
    SwipeSegmentDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el);
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', function (event) {
            _this.swipeHandler(event);
        });
    };
    SwipeSegmentDirective.prototype.swipeHandler = function (event) {
        if (event.direction == '2') {
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex + 1;
            if (nextIndex < this.tabsList.length) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
        else if (event.direction == '4') {
            // move backward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex - 1;
            if (nextIndex >= 0) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SwipeSegmentDirective.prototype, "tabsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SwipeSegmentDirective.prototype, "currentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SwipeSegmentDirective.prototype, "tabChanged", void 0);
    SwipeSegmentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[swipeSegment]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SwipeSegmentDirective);
    return SwipeSegmentDirective;
}());

//# sourceMappingURL=swipe-segment.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the LimitToDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var LimitToDirective = /** @class */ (function () {
    function LimitToDirective() {
    }
    LimitToDirective.prototype._onKeypress = function (e) {
        var limit = +this.limitTo;
        if (e.target.value.length === limit)
            e.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('limit-to'),
        __metadata("design:type", Object)
    ], LimitToDirective.prototype, "limitTo", void 0);
    LimitToDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[limit-to]',
            host: {
                '(keypress)': '_onKeypress($event)',
            }
        })
    ], LimitToDirective);
    return LimitToDirective;
}());

//# sourceMappingURL=limit-to.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepHtmlPipe = /** @class */ (function () {
    function KeepHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    KeepHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keepHtml', pure: false }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keepHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], KeepHtmlPipe);
    return KeepHtmlPipe;
}());

//# sourceMappingURL=keep-html.js.map

/***/ })

},[591]);
//# sourceMappingURL=main.js.map