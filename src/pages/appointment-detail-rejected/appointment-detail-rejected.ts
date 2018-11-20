import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
@Component({
  selector: 'page-appointment-detail-rejected',
  templateUrl: 'appointment-detail-rejected.html',
})
export class AppointmentDetailRejected {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailRejected');
  }
   goToProfile(){
  this.navCtrl.push(TutorProfileview);
  }

}
