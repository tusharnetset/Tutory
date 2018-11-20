import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupType } from './signup-type';

@NgModule({
  declarations: [
    SignupType,
  ],
  imports: [
    IonicPageModule.forChild(SignupType),
  ],
})
export class SignupTypeModule {}
