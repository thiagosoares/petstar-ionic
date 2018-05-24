import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { EstadoService } from './estado.service';
import { CidadeService } from './cidade.service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    EstadoService, 
    CidadeService
  ]
})
export class SignupPageModule {}
