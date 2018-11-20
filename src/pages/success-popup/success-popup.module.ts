import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessPopup } from './success-popup';

@NgModule({
  declarations: [
    SuccessPopup,
  ],
  imports: [
    IonicPageModule.forChild(SuccessPopup),
  ],
})
export class SuccessPopupModule {}
