import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NocartPageRoutingModule } from './nocart-routing.module';

import { NocartPage } from './nocart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NocartPageRoutingModule
  ],
  declarations: [NocartPage]
})
export class NocartPageModule {}
