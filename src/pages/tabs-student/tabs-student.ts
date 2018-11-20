import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { MyProfile } from '../my-profile/my-profile';
import { MyAppointments } from '../my-appointments/my-appointments';
import { HomePage } from '../home/home';
import { Favorites } from '../favorites/favorites';
import { Settings } from '../settings/settings';
import { SettingsStudentPage } from '../settings-student/settings-student';

@Component({
  selector: 'page-tabs-student',
  templateUrl: 'tabs-student.html',
})
export class TabsStudentPage {

  	tab1Root = HomePage;
  	tab2Root = MyProfile;
  	tab3Root = MyAppointments;
  	tab4Root = Favorites;
  	tab5Root = SettingsStudentPage;
    seltabix: number;
  constructor(np: NavParams) {
     this.seltabix = np.get('opentab');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsStudentPage');
  }

}
