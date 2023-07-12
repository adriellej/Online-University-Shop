import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationformPageRoutingModule } from './reservationform-routing.module';

import { ReservationformPage } from './reservationform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationformPageRoutingModule
  ],
  declarations: [ReservationformPage]
})
export class ReservationformPageModule {}
