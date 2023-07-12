
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {

  constructor(private router:Router, private alertController: AlertController){ }

  ngOnInit() {
  }
  gotocart() {
    this.router.navigate(["/cart"]);
  }
  gotosizechart() {
    this.router.navigate(["/sizechart"]);
  }
  welcome(){
    this.router.navigate(["/welcome"]);
  }
  gotofaqs() {
    this.router.navigate(["/faqs"]);
  }
  gotocontacts() {
    this.router.navigate(["/contacts"]);
  }
  signOut(){
    this.router.navigate(["/home"]);
  }
  gotohome() {
    this.router.navigate(["/home"]);
  }
  AllProd() {
    this.router.navigate(["/allprod"]);
  }
  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.router.navigate(['/welcome']);
          }
        }, {
          text: 'Logout',
          handler: () => {
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
