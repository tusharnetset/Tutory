import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-teacher-appointment-detail-completed',
  templateUrl: 'teacher-appointment-detail-completed.html',
})
export class TeacherAppointmentDetailCompleted {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherAppointmentDetailCompleted');
  }

}
