import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  qtynumber = 1;
  quantity: number = 1;
  isClicked = false;

  constructor(private _location: Location, private toastController: ToastController, private router:Router, private alertController: AlertController) 
  {}

  backClicked() {
    this.router.navigate(['/allprod']);
  }

  ngOnInit() {
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      }
    }
    
  increaseQuantity() {
        this.quantity++;
      }
  addqty() {
      this.qtynumber++;
    }

  reduceqty() {
    this.qtynumber--;
  }
  async Toast() {
    const toast = await this.toastController.create({
      message: 'All items has been removed to your cart.',
      duration: 2000, 
      position: 'top' 
    });

    toast.present();
  }
  none(){
    this.router.navigate(['/nocart'])
  }
  async RemoveFromCart() {
      const alert = await this.alertController.create({
        header: 'Confirmation',
        message: 'Are you sure you want to remove all the items from your cart?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Confirmation canceled.');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log('Confirmation accepted.');
              this.navigateToNewPage();
              this.presentToast();
            }
          }
        ]
      });
  
      await alert.present();
    }
  
    navigateToNewPage() {
      this.router.navigate(['/nocart']);
    }
  
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'All items has been removed successfully!',
        duration: 2000,
        position: 'top'
      });
  
      toast.present();
    }
  }