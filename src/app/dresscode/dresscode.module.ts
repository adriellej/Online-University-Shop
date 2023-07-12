import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DresscodePageRoutingModule } from './dresscode-routing.module';

import { DresscodePage } from './dresscode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DresscodePageRoutingModule
  ],
  declarations: [DresscodePage]
})
export class DresscodePageModule {}
