import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvLaptopBagPage } from './pv-laptop-bag.page';

const routes: Routes = [
  {
    path: '',
    component: PvLaptopBagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvLaptopBagPageRoutingModule {}
