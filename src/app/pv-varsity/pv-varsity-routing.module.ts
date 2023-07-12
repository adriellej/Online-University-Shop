import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvVarsityPage } from './pv-varsity.page';

const routes: Routes = [
  {
    path: '',
    component: PvVarsityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvVarsityPageRoutingModule {}
