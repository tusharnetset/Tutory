import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAvailability } from './view-availability';

@NgModule({
  declarations: [
    ViewAvailability,
  ],
  imports: [
    IonicPageModule.forChild(ViewAvailability),
  ],
})
export class ViewAvailabilityModule {}
