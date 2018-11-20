import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherTutorialPage } from './teacher-tutorial';

@NgModule({
  declarations: [
    TeacherTutorialPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherTutorialPage),
  ],
})
export class TeacherTutorialPageModule {}
