import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvTshirtBPageRoutingModule } from './pv-tshirt-b-routing.module';

import { PvTshirtBPage } from './pv-tshirt-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvTshirtBPageRoutingModule
  ],
  declarations: [PvTshirtBPage]
})
export class PvTshirtBPageModule {}
