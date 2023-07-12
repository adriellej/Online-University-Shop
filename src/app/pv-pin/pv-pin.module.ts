import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvPinPageRoutingModule } from './pv-pin-routing.module';

import { PvPinPage } from './pv-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvPinPageRoutingModule
  ],
  declarations: [PvPinPage]
})
export class PvPinPageModule {}
