import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
// import { CalendarModule } from 'ionic3-calendar-en';
import { CalendarModule } from "ion2-calendar";
import { HomePage } from '../pages/home/home';
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
import { TutorProfileview } from '../pages/tutor-profileview/tutor-profileview';
import { ShareProfilePopup } from '../pages/share-profile-popup/share-profile-popup';
import { BookAppointment } from '../pages/book-appointment/book-appointment';
import { SuccessPopup } from '../pages/success-popup/success-popup';
import { MyProfile } from '../pages/my-profile/my-profile';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { MyAppointments } from '../pages/my-appointments/my-appointments';
import { AppointmentDetailSubmited } from '../pages/appointment-detail-submited/appointment-detail-submited';
import { AppointmentDetailRejected } from '../pages/appointment-detail-rejected/appointment-detail-rejected';
import { AppointmentDetailProgress } from '../pages/appointment-detail-progress/appointment-detail-progress';
import { AppointmentDetailAccepted } from '../pages/appointment-detail-accepted/appointment-detail-accepted';
import { AppointmentDetailCompleted } from '../pages/appointment-detail-completed/appointment-detail-completed';
import { AppointmentDetailCompletedFeedback } from '../pages/appointment-detail-completed-feedback/appointment-detail-completed-feedback';
import { RatingPopup } from '../pages/rating-popup/rating-popup';
import { Favorites } from '../pages/favorites/favorites';
import { Notifications } from '../pages/notifications/notifications';
import { NotificationsTeacherPage } from '../pages/notifications-teacher/notifications-teacher';
import { RejectPopup } from '../pages/reject-popup/reject-popup';
import { StartPopup } from '../pages/start-popup/start-popup';
import { Settings } from '../pages/settings/settings';
import { SettingsStudentPage } from '../pages/settings-student/settings-student';
import { ContactUs } from '../pages/contact-us/contact-us';
import { TeacherCreateProfile } from '../pages/teacher-create-profile/teacher-create-profile';
import { ServicesOffered } from '../pages/services-offered/services-offered';
import { TeacherDashboard } from '../pages/teacher-dashboard/teacher-dashboard';
import { TeacherAppointmentDetailSubmited } from '../pages/teacher-appointment-detail-submited/teacher-appointment-detail-submited';
import { StudentProfileview } from '../pages/student-profileview/student-profileview';
import { RejectReasonPopup } from '../pages/reject-reason-popup/reject-reason-popup';
import { TeacherMyProfile } from '../pages/teacher-my-profile/teacher-my-profile';
import { TeacherEditProfile } from '../pages/teacher-edit-profile/teacher-edit-profile';
import { Reviews } from '../pages/reviews/reviews';
import { TeacherMyAppointments } from '../pages/teacher-my-appointments/teacher-my-appointments';
import { TeacherAppointmentDetailProgress } from '../pages/teacher-appointment-detail-progress/teacher-appointment-detail-progress';
import { TeacherAppointmentDetailAccepted } from '../pages/teacher-appointment-detail-accepted/teacher-appointment-detail-accepted';
import { TeacherAppointmentDetailCompleted } from '../pages/teacher-appointment-detail-completed/teacher-appointment-detail-completed';
import { EndPopup } from '../pages/end-popup/end-popup';
import { Subscription } from '../pages/subscription/subscription';
import { ScheduleAvailability } from '../pages/schedule-availability/schedule-availability';
import { ViewAvailability } from '../pages/view-availability/view-availability';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TeacherTutorialPage } from '../pages/teacher-tutorial/teacher-tutorial';
import { SwipeSegmentDirective } from '../directives/swipe-segment/swipe-segment';
import { LimitToDirective } from '../directives/limit-to/limit-to';
import { RepeatAppointmentPage } from '../pages/repeat-appointment/repeat-appointment';
import { AddressMapPage } from '../pages/address-map/address-map';
import { MapSearchPage } from '../pages/map-search/map-search';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { AboutUsPage } from '../pages/about-us/about-us';
import { TermConditonPage } from '../pages/term-conditon/term-conditon';
import { KeepHtmlPipe } from '../pipes/keep-html/keep-html';
import { FaqPage } from '../pages/faq/faq';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { AuthservicesProvider } from '../providers/authservices/authservices';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import { Device } from '@ionic-native/device';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { StudentservicesProvider } from '../providers/studentservices/studentservices';
import { File } from '@ionic-native/file';
import { Calendar } from '@ionic-native/calendar';
import { TutorservicesProvider } from '../providers/tutorservices/tutorservices';
import { AgmCoreModule } from '@agm/core';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Ionic2RatingModule } from 'ionic2-rating';
import { TimeAgoPipe} from 'time-ago-pipe';
import { GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker,Environment } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Deeplinks } from '@ionic-native/deeplinks';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TabsStudentPage,
    SignupType,
    Signin,
    ForgotPassword,
    ForgotPasswordPopup,
    Signup,
    PhoneVerification,
    CreateProfile,
    SubCategory,
    SubCategoryLevel,
    SubjectDetail,
    Search,
    TutorList,
    ServicesPopup,
    Filters,
    TutorProfileview,
    ShareProfilePopup,
    BookAppointment,
    SuccessPopup,
    MyProfile,
    EditProfile,
    MyAppointments,
    AppointmentDetailSubmited,
    AppointmentDetailRejected,
    AppointmentDetailProgress,
    AppointmentDetailAccepted,
    AppointmentDetailCompleted,
    AppointmentDetailCompletedFeedback,
    RatingPopup,
    Favorites,
    Notifications,
    NotificationsTeacherPage,
    RejectPopup,
    StartPopup,
    Settings,
    SettingsStudentPage,
    ContactUs,
    TeacherCreateProfile,
    ServicesOffered,
    TeacherDashboard,
    TeacherAppointmentDetailSubmited,
    StudentProfileview,
    RejectReasonPopup,
    TeacherMyProfile,
    TeacherEditProfile,
    Reviews,
    TeacherMyAppointments,
    TeacherAppointmentDetailProgress,
    EndPopup,
    TeacherAppointmentDetailAccepted,
    TeacherAppointmentDetailCompleted,
    Subscription,
    ScheduleAvailability,
    ViewAvailability,
    AutocompletePage,
    TutorialPage,
    TeacherTutorialPage,
    SwipeSegmentDirective,
    LimitToDirective,
    TimeAgoPipe,
    RepeatAppointmentPage,
    MapSearchPage,
    AddressMapPage,
    PrivacyPolicyPage,
    AboutUsPage,
    TermConditonPage,
    KeepHtmlPipe,
    FaqPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB8R-5nAEyhXLuOySRIdBb_RXubo6C5EQ8",
      libraries: ["places"]
    }),
    HttpClientModule,
    NgxSpinnerModule,
    GooglePlaceModule,
    CalendarModule,
    IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: true,
      }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TabsStudentPage,
    SignupType,
    Signin,
    ForgotPassword,
    ForgotPasswordPopup,
    Signup,
    PhoneVerification,
    CreateProfile,
    SubCategory,
    SubCategoryLevel,
    SubjectDetail,
    Search,
    TutorList,
    ServicesPopup,
    Filters,
    TutorProfileview,
    ShareProfilePopup,
    BookAppointment,
    SuccessPopup,
    MyProfile,
    EditProfile,
    MyAppointments,
    AppointmentDetailSubmited,
    AppointmentDetailRejected,
    AppointmentDetailProgress,
    AppointmentDetailAccepted,
    AppointmentDetailCompleted,
    AppointmentDetailCompletedFeedback,
    RatingPopup,
    Favorites,
    Notifications,
    NotificationsTeacherPage,
    RejectPopup,
    StartPopup,
    Settings,
    SettingsStudentPage,
    ContactUs,
    TeacherCreateProfile,
    ServicesOffered,
    TeacherDashboard,
    TeacherAppointmentDetailSubmited,
    StudentProfileview,
    RejectReasonPopup,
    TeacherMyProfile,
    TeacherEditProfile,
    Reviews,
    TeacherMyAppointments,
    TeacherAppointmentDetailProgress,
    EndPopup,
    TeacherAppointmentDetailAccepted,
    TeacherAppointmentDetailCompleted,
    Subscription,
    ScheduleAvailability,
    ViewAvailability,
    AutocompletePage,
    TutorialPage,
    TeacherTutorialPage,
    RepeatAppointmentPage,
    MapSearchPage,
    AddressMapPage,
    PrivacyPolicyPage,
    AboutUsPage,
    TermConditonPage,
    FaqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    AuthservicesProvider,
    NativeStorage,
    Device,
    Push,
    Geolocation,
    Diagnostic,
    Network,
    InAppPurchase,
    Camera,
    FileTransfer,
    AutocompletePage,
    StudentservicesProvider,
    File,
    Calendar,
    TutorservicesProvider,
    CallNumber,
    SMS,
    SocialSharing,
    Screenshot,
    LaunchNavigator,
    GoogleMaps,
    NativeGeocoder,
    Deeplinks
  ]
})
export class AppModule {}
