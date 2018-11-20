import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectDetail } from './subject-detail';

@NgModule({
  declarations: [
    SubjectDetail,
  ],
  imports: [
    IonicPageModule.forChild(SubjectDetail),
  ],
})
export class SubjectDetailModule {}
