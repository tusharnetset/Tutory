import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAppointments } from './my-appointments';

@NgModule({
  declarations: [
    MyAppointments,
  ],
  imports: [
    IonicPageModule.forChild(MyAppointments),
  ],
})
export class MyAppointmentsModule {}
