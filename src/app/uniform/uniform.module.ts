import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniformPageRoutingModule } from './uniform-routing.module';

import { UniformPage } from './uniform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniformPageRoutingModule
  ],
  declarations: [UniformPage]
})
export class UniformPageModule {}
