import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SingleItem } from '../../pages/single-item/single-item';
import { ItemApi } from '../../services/service';
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers: [Http]
})

export class CategoryPage {
  items: any;
  passedCategory: any;
  constructor(
    public navCtrl: NavController,
    private navParams:NavParams,
    private itemApi: ItemApi,
    public loadingController: LoadingController
  )
  {
    this.passedCategory = this.navParams.get('category');
  }
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();
    this.itemApi.getItems().then(data => {
      loader.dismiss();
      this.items = data;
      this.items = this.items.filter(item => item.category == this.passedCategory);
    });

  }
  itemTapped($event, item) {
    this.navCtrl.push(SingleItem, item);
  }


}
