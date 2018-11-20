import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPopup } from './start-popup';

@NgModule({
  declarations: [
    StartPopup,
  ],
  imports: [
    IonicPageModule.forChild(StartPopup),
  ],
})
export class StartPopupModule {}
