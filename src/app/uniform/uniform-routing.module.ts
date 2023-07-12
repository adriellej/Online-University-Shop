import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniformPage } from './uniform.page';

const routes: Routes = [
  {
    path: '',
    component: UniformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniformPageRoutingModule {}
