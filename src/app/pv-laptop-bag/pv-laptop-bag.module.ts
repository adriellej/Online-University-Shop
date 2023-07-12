import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvLaptopBagPageRoutingModule } from './pv-laptop-bag-routing.module';

import { PvLaptopBagPage } from './pv-laptop-bag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvLaptopBagPageRoutingModule
  ],
  declarations: [PvLaptopBagPage]
})
export class PvLaptopBagPageModule {}
