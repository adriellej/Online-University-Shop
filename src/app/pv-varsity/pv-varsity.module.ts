import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvVarsityPageRoutingModule } from './pv-varsity-routing.module';

import { PvVarsityPage } from './pv-varsity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvVarsityPageRoutingModule
  ],
  declarations: [PvVarsityPage]
})
export class PvVarsityPageModule {}
