import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvPinPage } from './pv-pin.page';

const routes: Routes = [
  {
    path: '',
    component: PvPinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvPinPageRoutingModule {}
