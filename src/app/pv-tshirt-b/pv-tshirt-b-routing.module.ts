import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvTshirtBPage } from './pv-tshirt-b.page';

const routes: Routes = [
  {
    path: '',
    component: PvTshirtBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvTshirtBPageRoutingModule {}
