import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DresscodePage } from './dresscode.page';

const routes: Routes = [
  {
    path: '',
    component: DresscodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DresscodePageRoutingModule {}
