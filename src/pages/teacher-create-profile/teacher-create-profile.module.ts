import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherCreateProfile } from './teacher-create-profile';

@NgModule({
  declarations: [
    TeacherCreateProfile,
  ],
  imports: [
    IonicPageModule.forChild(TeacherCreateProfile),
  ],
})
export class TeacherCreateProfileModule {}
