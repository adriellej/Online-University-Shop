import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasualPage } from './casual.page';

const routes: Routes = [
  {
    path: '',
    component: CasualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasualPageRoutingModule {}
