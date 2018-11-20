import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectReasonPopup } from './reject-reason-popup';

@NgModule({
  declarations: [
    RejectReasonPopup,
  ],
  imports: [
    IonicPageModule.forChild(RejectReasonPopup),
  ],
})
export class RejectReasonPopupModule {}
