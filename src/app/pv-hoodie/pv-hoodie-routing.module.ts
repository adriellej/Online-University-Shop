import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvHoodiePage } from './pv-hoodie.page';

const routes: Routes = [
  {
    path: '',
    component: PvHoodiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvHoodiePageRoutingModule {}
