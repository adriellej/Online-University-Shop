import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvCollegeBlousePageRoutingModule } from './pv-college-blouse-routing.module';

import { PvCollegeBlousePage } from './pv-college-blouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvCollegeBlousePageRoutingModule
  ],
  declarations: [PvCollegeBlousePage]
})
export class PvCollegeBlousePageModule {}
