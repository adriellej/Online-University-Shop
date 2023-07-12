import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvTshirtAPageRoutingModule } from './pv-tshirt-a-routing.module';

import { PvTshirtAPage } from './pv-tshirt-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvTshirtAPageRoutingModule
  ],
  declarations: [PvTshirtAPage]
})
export class PvTshirtAPageModule {}
