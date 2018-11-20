import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAppointmentDetailProgress } from './teacher-appointment-detail-progress';

@NgModule({
  declarations: [
    TeacherAppointmentDetailProgress,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAppointmentDetailProgress),
  ],
})
export class TeacherAppointmentDetailProgressModule {}
