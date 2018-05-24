import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SigninPage } from './signin';


@NgModule({
    declarations: [SigninPage],
    imports: [IonicPageModule.forChild(SigninPage)]
})
export class SigninModule {

}