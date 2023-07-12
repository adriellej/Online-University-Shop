import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SizechartPageRoutingModule } from './sizechart-routing.module';

import { SizechartPage } from './sizechart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SizechartPageRoutingModule
  ],
  declarations: [SizechartPage]
})
export class SizechartPageModule {}
