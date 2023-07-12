import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvSpartanMugPage } from './pv-spartan-mug.page';

const routes: Routes = [
  {
    path: '',
    component: PvSpartanMugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvSpartanMugPageRoutingModule {}
