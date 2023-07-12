import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NocartPage } from './nocart.page';

const routes: Routes = [
  {
    path: '',
    component: NocartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NocartPageRoutingModule {}
