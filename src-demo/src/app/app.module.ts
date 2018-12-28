import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

// Http import
import { HttpModule } from '@angular/http';

// Page imports http://www.harayanagyan.com/api/v1/services/getMainHeading
import { CategoryPage } from '../pages/category/category';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { SingleItem } from '../pages/single-item/single-item';
import { PopoverPage } from '../pages/popover/popover';

// Service imports
import { ItemApi } from '../services/item-api.service';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/apiservices/apiservices';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    ListPage,
    HomePage,
    SingleItem,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdMobFree,
    AuthServiceProvider
  ]
})
export class AppModule {}
