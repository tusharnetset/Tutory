import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
@Component({
  selector: 'page-appointment-detail-accepted',
  templateUrl: 'appointment-detail-accepted.html',
})
export class AppointmentDetailAccepted {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailAccepted');
  }
  goToProfile(){
  this.navCtrl.push(TutorProfileview);
  }
}



