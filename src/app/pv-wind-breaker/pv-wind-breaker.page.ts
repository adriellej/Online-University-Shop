import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pv-wind-breaker',
  templateUrl: './pv-wind-breaker.page.html',
  styleUrls: ['./pv-wind-breaker.page.scss'],
})
export class PvWindBreakerPage implements OnInit {

  
  quantity: number = 1;
  isClicked = false;


  constructor(private router:Router,  private navCtrl: NavController, private toastController: ToastController) { }

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
  decreaseQuantity() {
    if (this.quantity > 1) {
       this.quantity--;
      }
    }
  
increaseQuantity() {
      this.quantity++;
    }
   
goBack() {
      this.navCtrl.navigateBack('/'); 
    }
changeBackground() {
      this.isClicked = true;
  
      setTimeout(() => {
        this.isClicked = false;
      }, 500); 
    }
async addToCart() {
      const toast = await this.toastController.create({
        message: 'Item added to cart successfully',
        duration: 2000, 
        position: 'top' 
      });
  
      toast.present();
    }
  }
  
    