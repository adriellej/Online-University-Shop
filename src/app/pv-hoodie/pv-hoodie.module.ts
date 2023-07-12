import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvHoodiePageRoutingModule } from './pv-hoodie-routing.module';

import { PvHoodiePage } from './pv-hoodie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvHoodiePageRoutingModule
  ],
  declarations: [PvHoodiePage]
})
export class PvHoodiePageModule {}
