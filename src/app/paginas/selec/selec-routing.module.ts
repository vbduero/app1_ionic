import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecPage } from './selec.page';

const routes: Routes = [
  {
    path: '',
    component: SelecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecPageRoutingModule {}
