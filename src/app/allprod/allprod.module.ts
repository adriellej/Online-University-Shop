import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllprodPageRoutingModule } from './allprod-routing.module';

import { AllprodPage } from './allprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllprodPageRoutingModule
  ],
  declarations: [AllprodPage]
})
export class AllprodPageModule {}
