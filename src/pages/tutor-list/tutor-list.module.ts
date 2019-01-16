import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorList } from './tutor-list';

@NgModule({
  // declarations: [
  //   TutorList,
  // ],
  imports: [
    IonicPageModule.forChild(TutorList),
  ],
})
export class TutorListModule {}
