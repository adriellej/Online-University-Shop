import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvIdLacePage } from './pv-id-lace.page';

const routes: Routes = [
  {
    path: '',
    component: PvIdLacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvIdLacePageRoutingModule {}
