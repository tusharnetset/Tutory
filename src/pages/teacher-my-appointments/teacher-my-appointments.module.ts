import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherMyAppointments } from './teacher-my-appointments';

@NgModule({
  declarations: [
    TeacherMyAppointments,
  ],
  imports: [
    IonicPageModule.forChild(TeacherMyAppointments),
  ],
})
export class TeacherMyAppointmentsModule {}
