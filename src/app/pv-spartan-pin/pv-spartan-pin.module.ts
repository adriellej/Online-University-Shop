import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvSpartanPinPageRoutingModule } from './pv-spartan-pin-routing.module';

import { PvSpartanPinPage } from './pv-spartan-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvSpartanPinPageRoutingModule
  ],
  declarations: [PvSpartanPinPage]
})
export class PvSpartanPinPageModule {}
