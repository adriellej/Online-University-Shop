import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvCollegeShirtPage } from './pv-college-shirt.page';

const routes: Routes = [
  {
    path: '',
    component: PvCollegeShirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvCollegeShirtPageRoutingModule {}
