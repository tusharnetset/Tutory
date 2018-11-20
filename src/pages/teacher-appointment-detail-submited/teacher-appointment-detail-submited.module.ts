import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAppointmentDetailSubmited } from './teacher-appointment-detail-submited';

@NgModule({
  declarations: [
    TeacherAppointmentDetailSubmited,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAppointmentDetailSubmited),
  ],
})
export class TeacherAppointmentDetailSubmitedModule {}
