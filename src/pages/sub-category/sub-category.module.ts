import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubCategory } from './sub-category';

@NgModule({
  declarations: [
    SubCategory,
  ],
  imports: [
    IonicPageModule.forChild(SubCategory),
  ],
})
export class SubCategoryModule {}
