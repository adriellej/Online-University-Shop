import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  AllProd(){
    this.router.navigate(['/allprod'])
  }
  Uniform(){
    this.router.navigate(['/uniform'])
  }
  Jackets(){
    this.router.navigate(['/jackets'])
  }
  Shirt(){
    this.router.navigate(['/shirts'])
  }
  Accessories(){
    this.router.navigate(['/accessories'])
  }
  RGO(){
    this.router.navigate(['/rgoprod'])
  }
  Classic(){
    this.router.navigate(['/classic'])
  }
  Casual(){
    this.router.navigate(['/casual'])
  }
  Addons(){
    this.router.navigate(['/addons'])
  }
  
  gotohome() {
    this.router.navigate(["/welcome"]);
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

