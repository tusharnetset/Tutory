import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesPopup } from './services-popup';

@NgModule({
  declarations: [
    ServicesPopup,
  ],
  imports: [
    IonicPageModule.forChild(ServicesPopup),
  ],
})
export class ServicesPopupModule {}
