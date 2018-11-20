import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailCompleted } from './appointment-detail-completed';

@NgModule({
  declarations: [
    AppointmentDetailCompleted,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailCompleted),
  ],
})
export class AppointmentDetailCompletedModule {}
