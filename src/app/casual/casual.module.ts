import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasualPageRoutingModule } from './casual-routing.module';

import { CasualPage } from './casual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasualPageRoutingModule
  ],
  declarations: [CasualPage]
})
export class CasualPageModule {}
