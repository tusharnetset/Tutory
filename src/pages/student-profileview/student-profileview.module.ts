import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentProfileview } from './student-profileview';

@NgModule({
  // declarations: [
  //   StudentProfileview,
  // ],
  imports: [
    IonicPageModule.forChild(StudentProfileview),
  ],
})
export class StudentProfileviewModule {}
