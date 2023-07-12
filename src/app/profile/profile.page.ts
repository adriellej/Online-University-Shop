import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
  PR9(){
    this.router.navigate(['/pv-spartan-pin'])
  }
  PR10(){
    this.router.navigate(['/pv-laptop-bag'])
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
  PR14(){
    this.router.navigate(['/pv-hoodie'])
  }
  PR15(){
    this.router.navigate(['/pv-wind-breaker'])
  }
  PR16(){
    this.router.navigate(['/pv-varsity'])
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
