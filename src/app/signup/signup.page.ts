import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router ) { }

  ngOnInit() {
  }
  async openPopup() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'You successfully made an account.',
      buttons: [
        {
          text: 'OK',
          handler: () => {

            this.router.navigate(['/signin']);
          }
        }
      ]
    });

    await alert.present();
  }
  

}
