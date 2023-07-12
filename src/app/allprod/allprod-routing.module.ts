import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllprodPage } from './allprod.page';

const routes: Routes = [
  {
    path: '',
    component: AllprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllprodPageRoutingModule {}
