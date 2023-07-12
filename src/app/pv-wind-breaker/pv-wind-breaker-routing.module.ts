import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvWindBreakerPage } from './pv-wind-breaker.page';

const routes: Routes = [
  {
    path: '',
    component: PvWindBreakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvWindBreakerPageRoutingModule {}
