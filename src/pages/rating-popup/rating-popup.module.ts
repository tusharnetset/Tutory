import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPopup } from './rating-popup';

@NgModule({
  declarations: [
    RatingPopup,
  ],
  imports: [
    IonicPageModule.forChild(RatingPopup),
  ],
})
export class RatingPopupModule {}
