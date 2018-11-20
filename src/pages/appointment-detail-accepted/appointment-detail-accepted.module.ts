import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentDetailAccepted } from './appointment-detail-accepted';

@NgModule({
  declarations: [
    AppointmentDetailAccepted,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentDetailAccepted),
  ],
})
export class AppointmentDetailAcceptedModule {}
