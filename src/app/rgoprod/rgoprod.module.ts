import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgoprodPageRoutingModule } from './rgoprod-routing.module';

import { RgoprodPage } from './rgoprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RgoprodPageRoutingModule
  ],
  declarations: [RgoprodPage]
})
export class RgoprodPageModule {}
