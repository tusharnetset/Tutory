import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherMyProfile } from './teacher-my-profile';

@NgModule({
  declarations: [
    TeacherMyProfile,
  ],
  imports: [
    IonicPageModule.forChild(TeacherMyProfile),
  ],
})
export class TeacherMyProfileModule {}
