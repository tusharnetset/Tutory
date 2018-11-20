import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Signin } from '../signin/signin';

/**
 * Generated class for the TeacherTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher-tutorial',
  templateUrl: 'teacher-tutorial.html',
})
export class TeacherTutorialPage {

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherTutorialPage');
  }
  // ionViewWillLeave(){
  //   const index = this.viewCtrl.index;
  //   this.navCtrl.remove(index);
  // }

  doneGoToLogin(){
  	this.navCtrl.push(Signin);
  }

}
