import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvCollegePantsPage } from './pv-college-pants.page';

const routes: Routes = [
  {
    path: '',
    component: PvCollegePantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvCollegePantsPageRoutingModule {}
