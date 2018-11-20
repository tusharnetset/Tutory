import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsTeacherPage } from './notifications-teacher';

@NgModule({
  declarations: [
    NotificationsTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsTeacherPage),
  ],
})
export class NotificationsTeacherPageModule {}
