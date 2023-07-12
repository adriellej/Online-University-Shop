import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvCollegeShirtPageRoutingModule } from './pv-college-shirt-routing.module';

import { PvCollegeShirtPage } from './pv-college-shirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvCollegeShirtPageRoutingModule
  ],
  declarations: [PvCollegeShirtPage]
})
export class PvCollegeShirtPageModule {}
