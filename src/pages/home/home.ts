import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  
  	this.showAlert();
  }

showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Bluetooth is off!',
      subTitle: 'Turn bluetooth on by swiping down from the top of your phone, and pressing the bluetooth icon!',
      buttons: ['OK']
    });
    alert.present();
  }

}
