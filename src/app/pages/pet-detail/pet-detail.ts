import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-pet-detail',
  templateUrl: 'pet-detail.html',
})
export class PetDetailPage {

  // item: ProdutoDTO;

  // constructor(
  //   public navCtrl: NavController, 
  //   public navParams: NavParams,
  //   public DashboardService: DashboardService) {
  // }

  // ionViewDidLoad() {
  //   let produto_id = this.navParams.get('produtoId');
    
  //   this.DashboardService.findById(produto_id)
  //     .subscribe(response => {
  //       this.item = response;
  //       this.getImageUrlIfExists();
  //     },
  //     error => {});
  // }

  // getImageUrlIfExists() {
  //   this.DashboardService.getImageFromBucket(this.item.id)
  //     .subscribe(response => {
  //       this.item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
  //     },
  //     error => {});
  // }

  // addToCart(produto: ProdutoDTO) {
  //   //this.cartService.addProduto(produto);
  //   this.navCtrl.setRoot('CartPage');
  // }
}
