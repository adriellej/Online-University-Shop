import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rgoprod',
  templateUrl: './rgoprod.page.html',
  styleUrls: ['./rgoprod.page.scss'],
})
export class RgoprodPage implements OnInit {
  
  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  Home(){
    this.router.navigate(['/home'])
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
  PR1(){
    this.router.navigate(['/pv-college-barong'])
  }
  PR2(){
    this.router.navigate(['/pv-college-pants'])
  }
  PR3(){
    this.router.navigate(['/pv-college-blouse'])
  }
  PR4(){
    this.router.navigate(['/pv-college-skirt'])
  }
  PR5(){
    this.router.navigate(['/pv-college-shirt'])
  }
  PR6(){
    this.router.navigate(['/pv-jogging-pants'])
  }
  PR7(){
    this.router.navigate(['/pv-pin'])
  }
  PR8(){
    this.router.navigate(['/pv-id-lace'])
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
