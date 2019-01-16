import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookAppointment } from './book-appointment';

@NgModule({
  // declarations: [
  //   BookAppointment,
  // ],
  imports: [
    IonicPageModule.forChild(BookAppointment),
  ],
})
export class BookAppointmentModule {}
