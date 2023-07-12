import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvSpartanPinPage } from './pv-spartan-pin.page';

const routes: Routes = [
  {
    path: '',
    component: PvSpartanPinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvSpartanPinPageRoutingModule {}
