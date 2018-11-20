import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { StudentProfileview } from '../student-profileview/student-profileview';
import { EndPopup } from '../end-popup/end-popup';
@Component({
  selector: 'page-teacher-appointment-detail-progress',
  templateUrl: 'teacher-appointment-detail-progress.html',
})
export class TeacherAppointmentDetailProgress {

  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherAppointmentDetailProgress');
  }

  goToProfile(){
  this.navCtrl.push(StudentProfileview);
  }
  goToEnd(){
    let modal = this.modalCtrl.create(EndPopup);
   modal.present();
  }

}
