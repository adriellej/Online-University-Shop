import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JacketsPageRoutingModule } from './jackets-routing.module';

import { JacketsPage } from './jackets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JacketsPageRoutingModule
  ],
  declarations: [JacketsPage]
})
export class JacketsPageModule {}
