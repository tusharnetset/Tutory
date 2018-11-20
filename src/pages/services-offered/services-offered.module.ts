import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesOffered } from './services-offered';

@NgModule({
  declarations: [
    ServicesOffered,
  ],
  imports: [
    IonicPageModule.forChild(ServicesOffered),
  ],
})
export class ServicesOfferedModule {}
