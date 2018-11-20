import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailCompletedFeedback } from './appointment-detail-completed-feedback';

@NgModule({
  declarations: [
    AppointmentDetailCompletedFeedback,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailCompletedFeedback),
  ],
})
export class AppointmentDetailCompletedFeedbackModule {}
