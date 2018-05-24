import { CredenciasDto } from './../../shared/auth/credenciais.dto';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { AuthService } from '../../shared/auth/auth.service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {


  creds: CredenciasDto = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController, public memu: MenuController, public auth: AuthService) {
  }

  login() {
    this.auth.authenticate(this.creds).subscribe(resp => {
      this.auth.succesfulLogin(resp.headers.get('Authorization'));
      this.navCtrl.setRoot('DashboardPage');
     
    }, error => {
      this.auth.logout();
    });
  }

  signup() {
    this.navCtrl.push('SignupPage')
  }

  

  ionViewWillEnter() {
    this.memu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.memu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken().subscribe(resp => {
      this.auth.succesfulLogin(resp.headers.get('Authorization'));
      this.navCtrl.setRoot('DashboardPage');
     
    }, error => {
      this.auth.logout();
    });
  }

}
