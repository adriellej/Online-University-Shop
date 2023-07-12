import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PVCollegeBarongPage } from './pv-college-barong.page';

const routes: Routes = [
  {
    path: '',
    component: PVCollegeBarongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PVCollegeBarongPageRoutingModule {}
