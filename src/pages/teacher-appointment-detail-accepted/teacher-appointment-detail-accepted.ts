import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentProfileview } from '../student-profileview/student-profileview';
@Component({
  selector: 'page-teacher-appointment-detail-accepted',
  templateUrl: 'teacher-appointment-detail-accepted.html',
})
export class TeacherAppointmentDetailAccepted {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherAppointmentDetailAccepted');
  }
  goToProfile(){
  this.navCtrl.push(StudentProfileview);
  }

}
