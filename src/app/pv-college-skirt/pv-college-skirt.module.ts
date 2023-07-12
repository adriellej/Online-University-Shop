import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvCollegeSkirtPageRoutingModule } from './pv-college-skirt-routing.module';

import { PvCollegeSkirtPage } from './pv-college-skirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvCollegeSkirtPageRoutingModule
  ],
  declarations: [PvCollegeSkirtPage]
})
export class PvCollegeSkirtPageModule {}
