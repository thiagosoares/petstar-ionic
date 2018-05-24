import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dashboard } from './dashboard.model';
import { DashboardService } from './dashboard.service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  dashboard: Dashboard;

  constructor(public DashboardService: DashboardService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

    this.DashboardService.findDashboardItens()
        .subscribe(response => {
          this.dashboard = response;
        },
        error => {});
  }

  showDetail(produtoId: string) {
    this.navCtrl.push('ProdutoDetailPage', {produtoId: produtoId});
  }

}
