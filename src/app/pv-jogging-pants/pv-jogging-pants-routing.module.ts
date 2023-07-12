import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvJoggingPantsPage } from './pv-jogging-pants.page';

const routes: Routes = [
  {
    path: '',
    component: PvJoggingPantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvJoggingPantsPageRoutingModule {}
