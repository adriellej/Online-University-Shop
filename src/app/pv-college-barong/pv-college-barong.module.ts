import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PVCollegeBarongPageRoutingModule } from './pv-college-barong-routing.module';

import { PVCollegeBarongPage } from './pv-college-barong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PVCollegeBarongPageRoutingModule
  ],
  declarations: [PVCollegeBarongPage]
})
export class PVCollegeBarongPageModule {}
