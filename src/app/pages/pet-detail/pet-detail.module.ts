import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetDetailPage } from './pet-detail';

@NgModule({
  declarations: [
    PetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PetDetailPage),
  ],
})
export class PetDetailPageModule {}
