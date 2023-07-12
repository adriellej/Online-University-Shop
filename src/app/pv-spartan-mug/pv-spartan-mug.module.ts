import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvSpartanMugPageRoutingModule } from './pv-spartan-mug-routing.module';

import { PvSpartanMugPage } from './pv-spartan-mug.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvSpartanMugPageRoutingModule
  ],
  declarations: [PvSpartanMugPage]
})
export class PvSpartanMugPageModule {}
