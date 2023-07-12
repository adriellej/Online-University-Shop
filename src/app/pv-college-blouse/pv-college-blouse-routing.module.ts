import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvCollegeBlousePage } from './pv-college-blouse.page';

const routes: Routes = [
  {
    path: '',
    component: PvCollegeBlousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvCollegeBlousePageRoutingModule {}
