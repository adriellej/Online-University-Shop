import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SizechartPage } from './sizechart.page';

const routes: Routes = [
  {
    path: '',
    component: SizechartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizechartPageRoutingModule {}
