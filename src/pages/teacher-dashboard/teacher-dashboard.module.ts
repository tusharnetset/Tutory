import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherDashboard } from './teacher-dashboard';

@NgModule({
  // declarations: [
  //   TeacherDashboard,
  // ],
  imports: [
    IonicPageModule.forChild(TeacherDashboard),
  ],
})
export class TeacherDashboardModule {}
