import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProfile } from './create-profile';

@NgModule({
  declarations: [
    CreateProfile,
  ],
  imports: [
    IonicPageModule.forChild(CreateProfile),
  ],
})
export class CreateProfileModule {}
