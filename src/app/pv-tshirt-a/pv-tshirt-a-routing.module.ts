import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvTshirtAPage } from './pv-tshirt-a.page';

const routes: Routes = [
  {
    path: '',
    component: PvTshirtAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvTshirtAPageRoutingModule {}
