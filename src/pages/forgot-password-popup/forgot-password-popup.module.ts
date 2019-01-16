import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPopup } from './forgot-password-popup';

@NgModule({
  // declarations: [
  //   ForgotPasswordPopup,
  // ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPopup),
  ],
})
export class ForgotPasswordPopupModule {}
