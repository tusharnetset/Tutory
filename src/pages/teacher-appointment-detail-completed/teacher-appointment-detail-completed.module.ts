import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherAppointmentDetailCompleted } from './teacher-appointment-detail-completed';

@NgModule({
  declarations: [
    TeacherAppointmentDetailCompleted,
  ],
  imports: [
    IonicPageModule.forChild(TeacherAppointmentDetailCompleted),
  ],
})
export class TeacherAppointmentDetailCompletedModule {}
