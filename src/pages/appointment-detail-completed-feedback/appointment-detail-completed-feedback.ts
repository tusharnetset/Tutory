import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
@Component({
  selector: 'page-appointment-detail-completed-feedback',
  templateUrl: 'appointment-detail-completed-feedback.html',
})
export class AppointmentDetailCompletedFeedback {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailCompletedFeedback');
  }

  goToProfile(){
  this.navCtrl.push(TutorProfileview);
  }

}
