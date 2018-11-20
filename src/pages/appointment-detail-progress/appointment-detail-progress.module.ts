import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailProgress } from './appointment-detail-progress';

@NgModule({
  declarations: [
    AppointmentDetailProgress,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailProgress),
  ],
})
export class AppointmentDetailProgressModule {}
