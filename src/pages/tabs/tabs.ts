import { Component } from '@angular/core';

import { MyProfile } from '../my-profile/my-profile';
import { MyAppointments } from '../my-appointments/my-appointments';
import { HomePage } from '../home/home';
import { Favorites } from '../favorites/favorites';
import { Settings } from '../settings/settings';
import { TeacherDashboard } from '../teacher-dashboard/teacher-dashboard';
import { TeacherMyProfile } from '../teacher-my-profile/teacher-my-profile';
import { TeacherMyAppointments } from '../teacher-my-appointments/teacher-my-appointments';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab6Root = TeacherDashboard;
  tab7Root = TeacherMyProfile;
  tab8Root = TeacherMyAppointments;
  tab9Root = Settings;

  constructor() {

  }
}
