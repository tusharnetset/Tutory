import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAppointmentDetailAccepted } from './teacher-appointment-detail-accepted';

@NgModule({
  declarations: [
    TeacherAppointmentDetailAccepted,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAppointmentDetailAccepted),
  ],
})
export class TeacherAppointmentDetailAcceptedModule {}
