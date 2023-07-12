import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvJoggingPantsPageRoutingModule } from './pv-jogging-pants-routing.module';

import { PvJoggingPantsPage } from './pv-jogging-pants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvJoggingPantsPageRoutingModule
  ],
  declarations: [PvJoggingPantsPage]
})
export class PvJoggingPantsPageModule {}
