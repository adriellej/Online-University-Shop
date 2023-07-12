import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgoprodPage } from './rgoprod.page';

const routes: Routes = [
  {
    path: '',
    component: RgoprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgoprodPageRoutingModule {}
