import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SingleItem } from '../../pages/single-item/single-item';
import { ItemApi } from '../../services/service';
import { AuthServiceProvider } from '../../providers/apiservices/apiservices';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers: [Http]
})

export class CategoryPage {
  items: any;
  passedCategory: any;
  getId: any;
  data1:any;
  cateData: any;
  constructor(
    public authService:AuthServiceProvider,
    public navCtrl: NavController,
    private navParams:NavParams,
    private itemApi: ItemApi,
    public loadingController: LoadingController
  )
  {
    this.passedCategory = this.navParams.get('category');
  }
  ionViewDidLoad() {
    this.getId = this.navParams.get('id');
    this.getCategory();
  }

  getCategory(){
    this.authService.getCategoryApi(this.getId).then((data) => {
      console.log('responseeeeee', data);
      this.data1 = data;
      this.cateData = this.data1.result;
    }, err => {
      console.log('Error', err);
    })
}

  itemTapped(id,mainId) {
    this.navCtrl.push(SingleItem,{'id':id,'mainId':mainId});
  }


}
