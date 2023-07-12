import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.page.html',
  styleUrls: ['./classic.page.scss'],
})
export class ClassicPage implements OnInit {

  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  Home(){
    this.router.navigate(['/welcome'])
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
  PR9(){
    this.router.navigate(['/pv-spartan-pin'])
  }
  PR11(){
    this.router.navigate(['/pv-spartan-mug'])
  }
  PR12(){
    this.router.navigate(['/pv-tshirt-a'])
  }
  PR13(){
    this.router.navigate(['/pv-tshirt-b'])
  }
  gotocart() {
    this.router.navigate(["/cart"]);
  }

  gotosizechart() {
    this.router.navigate(["/sizechart"]);
  }

  gotofaqs() {
    this.router.navigate(["/faqs"]);
  }
  gotocontacts() {
    this.router.navigate(["/contacts"]);
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