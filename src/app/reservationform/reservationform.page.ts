import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservationform',
  templateUrl: './reservationform.page.html',
  styleUrls: ['./reservationform.page.scss'],
})
export class ReservationformPage implements OnInit {

  showCalendar = false;
  showTime = false;

  //back button
  constructor(private navCtrl: NavController, private alertController: AlertController, private router: Router) 
  {}

  goBack() {
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
  }

  //Calendar and Time
  openCalendar() {
    this.showCalendar = true;
  }
  cancelCalendar() {
    this.showCalendar = false;
  }

  openTime() {
    this.showTime = true;
  }

  cancelTime() {
    this.showTime = false;
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== 0 && utcDay !== 6;
  };
  async openPopup() {
    const alert = await this.alertController.create({
      header: 'Success!',
      message: 'You successfully made a reservation.',
      buttons: [
        {
          text: 'OK',
          handler: () => {

            this.router.navigate(['/allprod']);
          }
        }
      ]
    });

    await alert.present();
  }

}
