import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvIdLacePageRoutingModule } from './pv-id-lace-routing.module';

import { PvIdLacePage } from './pv-id-lace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvIdLacePageRoutingModule
  ],
  declarations: [PvIdLacePage]
})
export class PvIdLacePageModule {}
