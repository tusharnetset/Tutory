import { Component ,NgZone} from '@angular/core';
import { TeacherCreateProfile } from '../teacher-create-profile/teacher-create-profile';
import { NavController,NavParams,ToastController ,Platform,AlertController} from 'ionic-angular';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import * as moment from 'moment-timezone';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { Calendar } from '@ionic-native/calendar';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'page-schedule-availability',
  templateUrl: 'schedule-availability.html',
})
export class ScheduleAvailability {
  calShow:boolean = false;
  newAttri:any;
  frTime:any;
  toTimeVal : any;
  show:boolean = true;
  hide:boolean = false;
  check:boolean = false;
  userType:any;
  userId:any;
  token:any;
  data1:any;
  connectSubscription:any;
  getSlotsData:any;
  tutorId:any;
  getViewAvailbilityData:any;
  alert:any;
  dateSend:any;
  getdates:any;
  getSlotsdata:{user_id:any;login_token:any;tutor_id:any;}
  getSpecificdata:{user_id:any;login_token:any;tutor_id:any;date:any;}
  submitSlotData:{user_id:any;login_token:any;slots:any}
  deleteData:{user_id : any;login_token:any;type:string;slot_id:any;slot_date:any;}
  currentEvents=[];
  slotArr = [];
  public anArray:any=[];
  private newAttribute: any = {};
  monthPlus:any;
  slotData = [];
  slotArr2 = [];
  currentDate:any;
  newAttri2:any;
  events:any;
  eventsDouble:any;
  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  dateArr: any[];
  fromTimeSend: any;
  constructor(public zone:NgZone,public alertCtrl:AlertController,public platform:Platform,public network:Network,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public tutorservices:TutorservicesProvider,public navCtrl:NavController,public navParams:NavParams,public toastCtrl:ToastController) {

  }

  ionViewDidEnter() {
    this.dateArr = [];
    this.tutorId = this.navParams.get('tutorId');
    this.nativeStorage.getItem('userData').then((data) => {
      this.userType = data.user_type;
      this.userId = data.id;
      this.token = data.login_token;
      this.getViewAvailability();
      this.addMore();
    })
    this.connectSubscription = this.network.onConnect().subscribe(() => {
    });
     this.platform.registerBackButtonAction(() => {
      if(this.navCtrl.canGoBack()){
        this.navCtrl.pop();
      }else{
        if(this.alert){
          this.alert.dismiss();
          this.alert = null;
        }else{
          this.showAlert();
         }
      }
    })
    this.currentEvents = [];
  }

  showAlert() {
    this.alert = this.alertCtrl.create({
      title: 'Exit?',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alert = null;
          }
        },
        {
          text: 'Exit',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.alert.present();
  }

  ionViewDidLeave(){
    this.connectSubscription.unsubscribe();
  }

  getViewAvailability(){
    this.calShow = false;
      this.getSlotsdata = {
        user_id : this.userId,
        login_token:this.token,
        tutor_id:this.tutorId
      }
      this.spinner.show();
      this.tutorservices.checkViewAvailability(this.getSlotsdata).then((result) => {
        console.log(result);
        this.spinner.hide();
        this.data1 = result;
        console.log("this.currentEvents ",this.currentEvents);
        if(this.data1.status == 200){
          this.getdates = this.data1.dates;

          let firstItem = this.getdates[0];
          let lastItem = this.getdates[this.getdates.length-1];
          let first = moment(firstItem).format('YYYY-MM-DD').toString();
          var last = moment(lastItem).format('YYYY-MM-DD').toString();
          this.dateRange = {
            'from' : first,
            'to' : last
          };
          console.log(this.dateRange);

          this.zone.run(() => {
            // for (let i = 0; i < this.getdates.length; i++) {
            //   let dat = this.getdates[i].split('-');
            //   let check = moment(this.getdates[i], 'YYYY/MM/DD');
            //   console.log(check);
            //   this.events = {
            //     year: check.format('YYYY'),
            //     month: check.format('M'),
            //     date: check.format('D')
            //   }

            //   this.eventsDouble = {
            //     year:this.events.year,
            //     month:this.events.month-1,
            //     date:this.events.date
            //   }
            //   this.currentEvents.push(this.eventsDouble);
            // }
            this.calShow = true;
            this.getViewAvailbilityData = this.data1.data;
            for (var i = 0; i < this.getViewAvailbilityData.length; i++) {
              this.slotData.push({
                from_time:this.getViewAvailbilityData[i].from_time,
                to_time:this.getViewAvailbilityData[i].to_time,
                slot_id:this.getViewAvailbilityData[i].slot_id,
                date:this.getViewAvailbilityData[i].date
              })
            }
            if(this.getViewAvailbilityData.length == 0){
              this.check = true;
            }else{
              this.check = false;
            }
          })
        }else{
          this.presentToast(this.data1.message);
        }
      }, (err) => {
        this.spinner.hide();
          console.log(err);
      })
    }

    deleteSlot(_id,date){
      this.deleteData = {
        user_id : this.userId,
        login_token:this.token,
        type:'SL',//slot
        slot_date:date,
        slot_id:_id
      }
      this.spinner.show();
      this.tutorservices.deleteServices(this.deleteData).then((result) => {
          console.log(result);
          this.spinner.hide();
          this.data1 = result;
          if(this.data1.status == 200){
            this.zone.run(() => {
              this.getViewAvailbilityData = this.data1.data;
              for (var i = 0; i < this.getViewAvailbilityData.length; i++) {
                this.slotData.push({
                  from_time:this.getViewAvailbilityData[i].from_time,
                  to_time:this.getViewAvailbilityData[i].to_time,
                  slot_id:this.getViewAvailbilityData[i].slot_id,
                  date:this.getViewAvailbilityData[i].date
                })
              }
              if(this.getViewAvailbilityData.length == 0){
                this.check = true;
              }else{
                this.check = false;
              }
            })
          }else{
            this.presentToast(this.data1.message);
          }
      }, (err) => {
        this.spinner.hide();
          console.log(err);
      })
    }

    addMore(){
  	  this.anArray.push(this.newAttribute);
      this.newAttribute = {};
    }

    remove(_index){
      this.anArray.splice(_index, 1);
      this.slotArr.splice(_index, 1);
    }

    onDaySelect(event){
      console.log(event);
      this.anArray = [];
      this.slotArr = [];
      this.monthPlus = event.month + 1;
      this.dateSend = event.year+'-'+this.monthPlus+'-'+event.date;
      console.log(this.dateSend);
      this.slotData = [];
      this.getSpecificApi(this.dateSend);
    }
    // fromTime(event){
    //  console.log(event);
    //  this.fromarry.push{from:event}
    // }

    getSpecificApi(date){
      console.log(date);
      this.dateArr = [];
      this.getSpecificdata = {
        user_id : this.userId,
        login_token:this.token,
        date:date,
        tutor_id:this.tutorId
      }
      this.tutorservices.getSpecificSlots(this.getSpecificdata).then((result) => {
        console.log('result',result);
        this.data1 = result;
        if(this.data1.status == 200){
          this.show = true;
          this.hide = false;
          this.zone.run(() => {
            this.getViewAvailbilityData = this.data1.data;
            for (var i = 0; i < this.getViewAvailbilityData.length; i++) {
              this.slotData.push({
                from_time:this.getViewAvailbilityData[i].from_time,
                to_time:this.getViewAvailbilityData[i].to_time,
                slot_id:this.getViewAvailbilityData[i].slot_id,
                date:this.getViewAvailbilityData[i].date
              })
            }
            // this.addMore();
            if(this.getViewAvailbilityData.length == 0){
              this.check = true;
            }else{
              this.check = false;
          }
          })
        }else{
          this.presentToast(this.data1.message);
        }
    }, (err) => {
      console.log(err);
    })
  }

  fromTime(event,i){
    this.fromTimeSend = event.hour;
    console.log("eventevent",event,i);
    if(i != 0) {
      console.log("this.slotArr.length", this.slotArr.length);
      var lastTotime = this.slotArr[i-1].to_time;
      console.log("hii lastTotime ",lastTotime, this.slotArr[i-1].to_time)
      if(lastTotime <= event.hour) {
        console.log("if lastTotime <= event.hour");
        this.frTime = event.hour;
      }else {
        this.presentToast('From time must be greater than previous to time.');
      }
    }else {
      console.log("array empty");
      this.frTime = event.hour;
    }
  }

  toTime(event,idi){
    this.toTimeVal = event.hour;
    if(this.toTimeVal > this.frTime) {
      this.newAttri = {
        from_time: this.frTime,
        to_time:this.toTimeVal
      };
      console.log('this.newAttri',this.newAttri)
      this.slotArr[idi]=this.newAttri;
      console.log("this.slotArr",this.slotArr)
    }else{
      this.presentToast('Please select time greater than from time');
    }

  }

  onSelectStart(event){
    console.log(event);
    var selectD = moment(event.time).format('YYYY-MM-DD');
    console.log(selectD);
    this.getSpecificApi(selectD);
  }
  onDateSelected(event){
    console.log(event);
  }

  onChange(event){
    console.log('on change',event);
    var checkFrom = moment(event.from).format('YYYY-MM-DD');
    console.log(checkFrom);
    var checkTo = moment(event.to).format('YYYY-MM-DD');
    console.log(checkTo);
    var startDate = new Date(checkFrom); //YYYY-MM-DD
    var endDate = new Date(checkTo); //YYYY-MM-DD
    var getDateArray = function(start, end) {
      var arr = new Array();
      var dt = new Date(start);
      while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    }
    var dateArr = getDateArray(startDate, endDate);
    var check = moment(dateArr).format('YYYY-MM-DD');
    this.dateArr = dateArr;
    console.log("this.dateArrthis.dateArrthis.dateArrthis.dateArrthis.dateArr",this.dateArr);
  }

  submitSlot()
  {
    console.log("this.dateArrthis.dateArrthis.dateArr",this.dateArr);
    if(this.dateArr.length == 0){
      this.presentToast('Please select start and end date in range');
      return;
    }

    if(this.fromTimeSend == "" || this.fromTimeSend == undefined || this.fromTimeSend == null && this.toTimeVal == "" || this.toTimeVal == undefined || this.toTimeVal == null){
      this.presentToast('Please add from time and to time');
      return;
    }

    for (let k = 0; k < this.dateArr.length; k++) {
      for(var j in this.slotArr) {
        var from = parseInt(this.slotArr[j].from_time);
        var to = parseInt(this.slotArr[j].to_time);
        var to_time = from;
        for(var i=from; i < to; i++) {
          from = to_time;
          to_time = from + 1;
          this.newAttri2 = {
            from_time: from,
            to_time:to_time,
            date:moment(this.dateArr[k]).format('YYYY-MM-DD')
          };
          if(this.slotArr[j].from_time == "" || this.slotArr[j].from_time == undefined || this.slotArr[j].from_time == null){
            this.presentToast('Please select from time');
            return;
          }
          if(this.slotArr[j].to_time == undefined || this.slotArr[j].to_time == "" || this.slotArr[j].to_time == null){
            this.presentToast('Please select to time');
            return;
          }
          if(this.newAttri2.from_time > this.newAttri2.to_time){
            this.presentToast('Please select time greater than from time');
            return;
          }
          console.log('this.newAttri2',this.newAttri2)
          this.slotArr2.push(this.newAttri2);
        }
      }
    }

    if(this.slotArr2.length == 0){
      this.presentToast('Please add time slot');
      return;
    }

    if(!this.dateSend){
      this.currentDate = new Date();
      var check = moment(this.currentDate, 'YYYY/MM/DD');
      console.log(check);
      var month = check.format('M');
      var day   = check.format('D');
      var year  = check.format('YYYY');
      this.dateSend = year+'-'+month+'-'+day;
    }else{
      this.dateSend = this.dateSend;
    }

    this.submitSlotData = {
      user_id : this.userId,
      login_token:this.token,
      // date:this.dateSend,
      slots:JSON.stringify(this.slotArr2)
    }
    this.spinner.show();
    this.tutorservices.addSlotsApi(this.submitSlotData).then((result) => {
      console.log(result);
      this.spinner.hide();
      this.anArray = [];
      this.show = true;
      this.hide = false;
      this.data1 = result;
      if(this.data1.status == 200){
        this.zone.run(() => {
          this.slotArr2 = []
          this.anArray = [];
          this.slotArr = [];
          this.getViewAvailbilityData = this.data1.data;
          for (var i = 0; i < this.getViewAvailbilityData.length; i++) {
            this.slotData.push({
              from_time:this.getViewAvailbilityData[i].from_time,
              to_time:this.getViewAvailbilityData[i].to_time,
              slot_id:this.getViewAvailbilityData[i].slot_id,
              date:this.getViewAvailbilityData[i].date
            })
          }
          this.addMore();
          if(this.getViewAvailbilityData.length == 0){
            this.check = true;
          }else{
            this.check = false;
          }
        })
      }else if(this.data1.status == 204){
        this.slotArr2 = []
        this.anArray = [];
        this.slotArr = [];
        this.zone.run(() => {
          this.getViewAvailbilityData = this.data1.data;
          for (var i = 0; i < this.getViewAvailbilityData.length; i++) {
            this.slotData.push({
              from_time:this.getViewAvailbilityData[i].from_time,
              to_time:this.getViewAvailbilityData[i].to_time,
              slot_id:this.getViewAvailbilityData[i].slot_id,
              date:this.getViewAvailbilityData[i].date
            })
          }
          this.addMore();
          if(this.getViewAvailbilityData.length == 0){
            this.check = true;
          }else{
            this.check = false;
          }
        })
      }else{
        this.presentToast(this.data1.message);
      }
    }, (err) => {
      this.spinner.hide();
      console.log(err);
    })
  }

  presentToast(message)
  {
    console.log(message);
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
