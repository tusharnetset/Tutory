import { Component } from '@angular/core';
import { NavController,ToastController,NavParams, AlertController, Platform} from 'ionic-angular';
import { SignupType } from '../signup-type/signup-type';
import { TutorservicesProvider } from './../../providers/tutorservices/tutorservices';
import { NgxSpinnerService } from 'ngx-spinner';
import { NativeStorage } from '@ionic-native/native-storage';
import 'moment-timezone';
import { Network } from '@ionic-native/network';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

const MONTHLYLVL_TEST = 'com.located.app.subscriptiontest.account1';
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class Subscription {
	show:boolean = false;
	userType:any;
	userId:any;
	token:any;
	connectSubscription:any;
	alert:any;
	data1:any;
	getSubData:any;
	trnsactionId: string;
	getCurrentPlan: any;
	getplanList: any;
	purchaseId: any;
	expPlan: any;
	arrPush:any[];
	currentPlanId: any;
	currentId:any;
	bestOffer:any;
	constructor(public iap:InAppPurchase,public platform:Platform,public alertCtrl:AlertController,public toastCtrl:ToastController,public nativeStorage:NativeStorage,public spinner:NgxSpinnerService,public network:Network,public tutorservices:TutorservicesProvider,public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidEnter()
	{
		this.arrPush = [];
		this.nativeStorage.getItem('userData').then((data) => {
			this.userType = data.user_type;
			this.userId = data.id;
			this.token = data.login_token;
			this.getCurrentSubscrptions();
		})
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
	}

	
	ionViewDidLeave()
	{
		this.connectSubscription.unsubscribe();
	}

	showAlert()
	{
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

	getCurrentSubscrptions()
	{
		let notificationData = {
			user_id : this.userId,
			login_token:this.token
		}
		this.spinner.show();
		this.tutorservices.currentSubscriptionApi(notificationData).then((result) => {
			console.log(result);
			this.spinner.hide();
			this.data1 = result;
			if(this.data1.status == 200){
				this.getSubData = this.data1.data;
				this.getCurrentPlan = this.getSubData.current_plan;
				this.getplanList = this.getSubData.list;
				this.currentPlanId = this.getCurrentPlan.id;
				this.bestOffer = this.data1.data.best_offer;
			}else{
				this.presentToast(this.data1.message);
			}
		}, (err) => {
			console.log(err);
		})
	}

	purchaseSubScription(id,expPlan,cId)
	{
		this.purchaseId = id;
		console.log(this.purchaseId);
		this.expPlan = expPlan;
		console.log(this.expPlan);
		this.currentId = cId;
	}

	subscribeNow()
	{
		console.log("this.purchaseId",this.purchaseId,"this.currentPlanId",this.currentId)
		if(this.purchaseId == this.currentId){
			this.presentToast("You have already subscribed this plan. Please choose another plan");
			return;
		}
		if(!this.purchaseId){
			this.presentToast("Please choose a plan");
			return;
		}
		let purchaseData = {
			user_id : this.userId,
			login_token:this.token,
			subscription_id:this.purchaseId,
			expire_after:this.expPlan
		}
		this.spinner.show();
		this.tutorservices.subscriptionsApi(purchaseData).then((result) => {
			console.log(result);
			this.spinner.hide();
			this.data1 = result;
			if(this.data1.status == 200){
				this.presentToast(this.data1.message);
				this.getCurrentSubscrptions();
			}else{
				this.presentToast(this.data1.message);
			}
		}, (err) => {
			console.log(err);
		})
	}
	

	// purchaseSubScription(id,exAf)
	// {
	 	// this.iap.subscribe(data).then((data)=> {
	 	// 	console.log(data);
	 	// 	this.trnsactionId = data.transactionId;
	 	// })
	// }


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