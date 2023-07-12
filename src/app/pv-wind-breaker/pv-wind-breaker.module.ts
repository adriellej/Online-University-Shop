import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvWindBreakerPageRoutingModule } from './pv-wind-breaker-routing.module';

import { PvWindBreakerPage } from './pv-wind-breaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvWindBreakerPageRoutingModule
  ],
  declarations: [PvWindBreakerPage]
})
export class PvWindBreakerPageModule {}
