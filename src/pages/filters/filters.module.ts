import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Filters } from './filters';

@NgModule({
  // declarations: [
  //   Filters,
  // ],
  imports: [
    IonicPageModule.forChild(Filters),
  ],
})
export class FiltersModule {}
