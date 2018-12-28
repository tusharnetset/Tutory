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
  getCateId: number;
  data1:any;
  cateDetailData: any;
  catLength: any;
  prevShow :boolean = true;
  nextShow: boolean = true;
  index: number;
  cateId: number;
  arrPush: any[];
  constructor(
    public authService:AuthServiceProvider,
    public navCtrl: NavController,
    private navParams:NavParams,
    private itemApi: ItemApi
  )
  {}

  ionViewDidEnter(){
    this.getCateId = this.navParams.get('id');
    console.log('this.getCateId',this.getCateId);
    this.catLength = this.navParams.get('cateLength');
    console.log('this.catLength',this.catLength );
    this.index = this.navParams.get('index');
    this.getCategoryDetail();
  }

  getCategoryDetail(){
    this.arrPush = [];
    if(this.catLength == 1 && this.index == 1){
      this.nextShow = false;
      this.prevShow = false;
    }else if(this.index == 1){
      this.nextShow = true;
      this.prevShow = false;
    }else if(this.index == this.catLength){
      this.nextShow = false;
      this.prevShow = true;
    }else if(this.index < this.catLength){
      this.nextShow = true;
      this.prevShow = true;
    }
    this.authService.getCategoryDatailApi(this.getCateId).then((data) => {
      console.log('responseeeeee', data);
      this.data1 = data;
      this.cateDetailData = this.data1.result;
      for (let i = 0; i < this.cateDetailData.length; i++) {
        this.arrPush.push({
          question:this.cateDetailData[i].question,
          answer:this.cateDetailData[i].answer,
          comments:this.cateDetailData[i].comments,
          num:i+1
        })
      }
    }, err => {
      console.log('Error', err);
    })
  }

  previousAction(){
    if(this.index == this.getCateId){
      this.nextShow = true;
      this.prevShow = false;
    }
    this.index = this.index--;
    this.getCateId = this.getCateId--;
    console.log('this.getCateIdthis.getCateIdthis.getCateId',this.getCateId);
    this.authService.getCategoryDatailApi(this.getCateId).then((data) => {
      console.log('responseeeeee', data);
      this.data1 = data;
      this.cateDetailData = this.data1.result;
      for (let i = 0; i < this.cateDetailData.length; i++) {
        this.arrPush.push({
          question:this.cateDetailData[i].question,
          answer:this.cateDetailData[i].answer,
          comments:this.cateDetailData[i].comments,
          num:i+1
        })
      }
    }, err => {
      console.log('Error', err);
    })
  }

  nextAction(){
    if(this.index == this.getCateId){
      this.nextShow = false;
      this.prevShow = true;
    }
    this.index = this.index++;
    this.getCateId = this.getCateId++;
    console.log('this.getCateIdthis.getCateIdthis.getCateId',this.getCateId);
    this.authService.getCategoryDatailApi(this.getCateId).then((data) => {
      console.log('responseeeeee', data);
      this.data1 = data;
      this.cateDetailData = this.data1.result;
      for (let i = 0; i < this.cateDetailData.length; i++) {
        this.arrPush.push({
          question:this.cateDetailData[i].question,
          answer:this.cateDetailData[i].answer,
          comments:this.cateDetailData[i].comments,
          num:i+1
        })
      }
    }, err => {
      console.log('Error', err);
    })
  }

}
