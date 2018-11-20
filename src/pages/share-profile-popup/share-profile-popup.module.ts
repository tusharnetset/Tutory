import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareProfilePopup } from './share-profile-popup';

@NgModule({
  declarations: [
    ShareProfilePopup,
  ],
  imports: [
    IonicPageModule.forChild(ShareProfilePopup),
  ],
})
export class ShareProfilePopupModule {}
