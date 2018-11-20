import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
@Component({
  selector: 'page-appointment-detail-progress',
  templateUrl: 'appointment-detail-progress.html',
})
export class AppointmentDetailProgress {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailProgress');
  }
  goToProfile(){
  this.navCtrl.push(TutorProfileview);
  }

}
