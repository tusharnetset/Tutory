import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/apiservices/apiservices';

// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html'
})
export class SingleItem {
  getCateId: any;
  data1:any;
  cateDetailData: any;

  constructor(
    public authService:AuthServiceProvider,
    public navCtrl: NavController,
    private navParams:NavParams,
    private itemApi: ItemApi
  )
  {
  }

  ionViewDidEnter(){
    this.getCateId = this.navParams.get('id');
    this.getCategoryDetail();
  }

  getCategoryDetail(){
    this.authService.getCategoryDatailApi(this.getCateId).then((data) => {
      console.log('responseeeeee', data);
      this.data1 = data;
      this.cateDetailData = this.data1.result;
    }, err => {
      console.log('Error', err);
    })
  }

}
