import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoryPage } from '../../pages/category/category';
import { ItemApi } from '../../services/service';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
 items: any;
  constructor(
    public navCtrl: NavController,
    public params:NavParams,
    private itemApi: ItemApi,
    public popoverCtrl: PopoverController
  )
  {}
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }
  CategoryTapped($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Fantasticness'
    });
  }
  CategoryTapped_2($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Short'
    });
  }
  CategoryTapped_3($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'Booperness'
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
