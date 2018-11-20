import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TutorProfileview } from '../tutor-profileview/tutor-profileview';
import { RatingPopup } from '../rating-popup/rating-popup';
@Component({
  selector: 'page-appointment-detail-completed',
  templateUrl: 'appointment-detail-completed.html',
})
export class AppointmentDetailCompleted {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad AppointmentDetailCompleted');
  }

  goToProfile(){
    this.navCtrl.push(TutorProfileview);
  }

  goToRatingPopup(){
    let modal = this.modalCtrl.create(RatingPopup);
    modal.present();
  }

}
