import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtsPageRoutingModule } from './shirts-routing.module';

import { ShirtsPage } from './shirts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtsPageRoutingModule
  ],
  declarations: [ShirtsPage]
})
export class ShirtsPageModule {}
