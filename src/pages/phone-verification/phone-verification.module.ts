import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneVerification } from './phone-verification';

@NgModule({
  // declarations: [
  //   PhoneVerification,
  // ],
  imports: [
    IonicPageModule.forChild(PhoneVerification),
  ],
})
export class PhoneVerificationModule {}
