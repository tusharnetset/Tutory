import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoryPage } from '../../pages/category/category';
import { ItemApi } from '../../services/service';
import { PopoverPage } from '../popover/popover';
import { AuthServiceProvider } from '../../providers/apiservices/apiservices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
 items: any;
 data1:any;
  fistData: any;
  constructor(
    public authService : AuthServiceProvider,
    public navCtrl: NavController,
    public params:NavParams,
    private itemApi: ItemApi,
    public popoverCtrl: PopoverController
  )
  {}
  ionViewDidLoad() {
    this.getFirstApi();
    this.itemApi.getItems().then(data => this.items = data);
  }
  // CategoryTapped($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Fantasticness'
  //   });
  // }
  // CategoryTapped_2($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Short'
  //   });
  // }
  // CategoryTapped_3($event, category) {
  //   this.navCtrl.push(CategoryPage, {
  //       category: 'Booperness'
  //   });
  // }

  CategoryTapped(id){
    this.navCtrl.push(CategoryPage, {
      id: id
    });
  }

  getFirstApi(){
      this.authService.firstPageApi().then((data) => {
        console.log('responseeeeee', data);
        this.data1 = data;
        this.fistData = this.data1.result;
      }, err => {
        console.log('Error', err);
      })
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
