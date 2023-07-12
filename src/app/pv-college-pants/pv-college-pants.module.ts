import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvCollegePantsPageRoutingModule } from './pv-college-pants-routing.module';

import { PvCollegePantsPage } from './pv-college-pants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvCollegePantsPageRoutingModule
  ],
  declarations: [PvCollegePantsPage]
})
export class PvCollegePantsPageModule {}
