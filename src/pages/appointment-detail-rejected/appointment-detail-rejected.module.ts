import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailRejected } from './appointment-detail-rejected';

@NgModule({
  declarations: [
    AppointmentDetailRejected,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailRejected),
  ],
})
export class AppointmentDetailRejectedModule {}
