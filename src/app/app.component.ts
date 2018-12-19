import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav,NavController,NavParams ,ToastController,AlertController, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsStudentPage } from '../pages/tabs-student/tabs-student';
import { SignupType } from '../pages/signup-type/signup-type';
import { Signin } from '../pages/signin/signin';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ForgotPasswordPopup } from '../pages/forgot-password-popup/forgot-password-popup';
import { Signup } from '../pages/signup/signup';
import { PhoneVerification } from '../pages/phone-verification/phone-verification';
import { CreateProfile } from '../pages/create-profile/create-profile';
import { SubCategory } from '../pages/sub-category/sub-category';
import { SubCategoryLevel } from '../pages/sub-category-level/sub-category-level';
import { SubjectDetail } from '../pages/subject-detail/subject-detail';
import { Search } from '../pages/search/search';
import { TutorList } from '../pages/tutor-list/tutor-list';
import { ServicesPopup } from '../pages/services-popup/services-popup';
import { Filters } from '../pages/filters/filters';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NgxSpinnerService } from 'ngx-spinner';
import { Network } from '@ionic-native/network';
import { AppointmentDetailSubmited } from '../pages/appointment-detail-submited/appointment-detail-submited';
import { TeacherAppointmentDetailSubmited } from '../pages/teacher-appointment-detail-submited/teacher-appointment-detail-submited';
import { Subscription } from '../pages/subscription/subscription';
import { TeacherCreateProfile } from '../pages/teacher-create-profile/teacher-create-profile';
import { Deeplinks } from '@ionic-native/deeplinks';
import { TutorProfileview } from '../pages/tutor-profileview/tutor-profileview';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  latLongPush: any;
  nData: any;
  deviceID: any;
  long: number;
  lat: number;
  loggedIn: any;
  userId: any;
  data1: any;
  alert: any;
  rootPage:any = SignupType;
  eventsFire: { lat: number; lng: number; };

  constructor(public deeplinks: Deeplinks, public events:Events,public toastCtrl:ToastController,public network:Network,public alertCtrl:AlertController,public spinner :NgxSpinnerService,public diagnostic:Diagnostic,public geolocation:Geolocation,public nativeStorage:NativeStorage,public push:Push,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast("Network was disconnected (:-");
    });
  }

  initializeApp()
  {
    this.platform.ready().then(() => {
      this.nativeStorage.remove('skipData');
      this.statusBar.styleDefault();
      // this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#0f4d79');
      if (this.splashScreen) {
        setTimeout(() => {
          this.splashScreen.hide();
        }, 500);
      }

      this.deeplinks.routeWithNavController(this.nav, {
        '/items': TutorProfileview
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });


      this.ionViewDidLoadCom();
      this.pushNoti();
        this.diagnostic.isLocationEnabled().then(
        (isAvailable) => {
        console.log('Is available? ' + isAvailable);
          if(isAvailable == true){
            this.geolocation.getCurrentPosition().then((resp) => {
              this.lat = resp.coords.latitude;
              this.nativeStorage.setItem('locationLat', this.lat).then(
                (result) => console.log('Stored item lat !',result),
                error => console.error('Error storing item', error)
              );
              this.long = resp.coords.longitude;
              this.nativeStorage.setItem('locationLng', this.long).then(
                (result) => {
                  this.eventsFire = {
                    lat:this.lat,
                    lng:this.long
                  }
                  this.events.publish('latLng:created', this.eventsFire, Date.now());
                  console.log('this.events',this.events);
                  this.ionViewDidLoadCom();
                }
              );
            }).catch((error) => {
              console.log('Error getting location'+JSON.stringify(error));
            });
          } else {
            let confirmAlert = this.alertCtrl.create({
              title: 'Location',
              message:'Please turn on your location',
              enableBackdropDismiss: false,
              buttons: [{
                role: 'Ok',
              }, {
                text: 'Ok',
                handler: () => {
                  this.diagnostic.switchToLocationSettings();
                  this.getLat();
                }
              }]
            });
            confirmAlert.present();
          }
        }).catch( (e) => {
          console.log(e);
        });
        this.platform.registerBackButtonAction(() => {
        if(this.nav.canGoBack()){
          this.nav.pop();
        }else{
          if(this.alert){
            this.alert.dismiss();
            this.alert = null;
          }else{
            this.showAlert();
          }
        }
      })
    });
  }

  showAlert()
  {
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
            this.nativeStorage.remove('skipData');
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }


  getLat()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.nativeStorage.setItem('locationLat', this.lat).then(
        (result) => console.log('Stored item lat long!',result),
        error => console.error('Error storing item', error)
      );
      this.long = resp.coords.longitude;
      this.nativeStorage.setItem('locationLng', this.long).then(
        (result) => {
          this.ionViewDidLoadCom();
        }
      );
    }).catch((error) => {
      console.log('Error getting location'+JSON.stringify(error));
    });
  }

  ionViewDidLoadCom()
  {
    this.nativeStorage.getItem('userData').then((isLoggedIn) => {
      console.log('Is Logged in : ', isLoggedIn);
      this.loggedIn = isLoggedIn;
      if(!this.loggedIn){
        this.rootPage = SignupType;
      }else{
        if(this.loggedIn.user_type == 'S'){
          if(this.loggedIn.otp_verified == 'N'){
            this.rootPage = SignupType;
          }else if(this.loggedIn.profile_status == 0){
            this.rootPage = SignupType;
            // this.rootPage = CreateProfile;
          }else{
            this.rootPage = TabsStudentPage;
          }
        }else{
          if(this.loggedIn.otp_verified == 'N'){
            this.rootPage = SignupType;
          }else if(this.loggedIn.admin_verify == 'N/A'){
            this.rootPage = SignupType;
            // this.rootPage = TeacherCreateProfile;
          }else if(this.loggedIn.profile_status == 0){
            this.rootPage = SignupType;
            // this.rootPage = TeacherCreateProfile;
          }else{
            this.rootPage = TabsPage;
          }
        }
      }
    },err =>{
      console.log(err);
    })
  }

  pushNoti(){
    this.push.hasPermission()
    .then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications(Tutorry)');
      } else {
        console.log('We do not have permission to send push notifications(Tutorry)');
      }

    });
    const options: PushOptions = {
      android: {
        senderID: '987410780081',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: true
      },
      windows: {},
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    };
    const pushObject: PushObject = this.push.init(options);
    // pushObject.on('Accept').subscribe((data: any) =>{
    //   console.log('accept',data);
    // });
    // pushObject.on('Reject').subscribe((data: any) =>{
    //   console.log('reject',data);
    // });
    pushObject.on('notification').subscribe((notification: any) =>{
      console.log('Received a notification', notification);

      if(notification.additionalData.label == 'new request'){
        if(notification.additionalData.foreground){
          this.alert = this.alertCtrl.create({
            title: notification.title,
            message: notification.additionalData.text,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'View',
                handler: () => {
                  console.log('view');
                  this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
                }
              }
            ]
          });
          this.alert.present();
        }else{
          if (notification.additionalData.coldstart){
            console.log("Push notification clicked app closed");
          }else{
            console.log("Push notification clicked app background");
              this.alert = this.alertCtrl.create({
              title: notification.title,
              message: notification.additionalData.text,
              buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'View',
                handler: () => {
                  this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
                }
              }
            ]
            });
            this.alert.present();
          }
        }
      }else if(notification.additionalData.label == 'accept'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(AppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'reject'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(AppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'cancel'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                console.log('view');
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'end'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(AppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'yes'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'no'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'cancel'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                console.log('view');
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'feedback'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
               this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'end no'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'end yes'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'tutor cancelled'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(AppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      }else if(notification.additionalData.label == 'student cancelled'){
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
                this.nav.push(TeacherAppointmentDetailSubmited,{appointment_id:notification.additionalData.appointment_id})
              }
            }
          ]
        });
        this.alert.present();
      } else {
        this.alert = this.alertCtrl.create({
          title: notification.title,
          message: notification.additionalData.text,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'View',
              handler: () => {
              }
            }
          ]
        });
        this.alert.present();
      }
  })

  pushObject.on('registration').subscribe((registration: any) =>{
    this.nativeStorage.setItem('deviceId', registration.registrationId).then(
      (result) => console.log('Stored device id!',result),
      error => console.error('Error storing device id', error)
    );
  });
  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

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
