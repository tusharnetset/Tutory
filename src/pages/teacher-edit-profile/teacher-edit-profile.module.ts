import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherEditProfile } from './teacher-edit-profile';

@NgModule({
  declarations: [
    TeacherEditProfile,
  ],
  imports: [
    IonicPageModule.forChild(TeacherEditProfile),
  ],
})
export class TeacherEditProfileModule {}
