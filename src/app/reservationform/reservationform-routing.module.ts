import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationformPage } from './reservationform.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationformPageRoutingModule {}
