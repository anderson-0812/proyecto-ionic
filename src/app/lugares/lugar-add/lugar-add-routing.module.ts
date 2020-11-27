import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarAddPage } from './lugar-add.page';

const routes: Routes = [
  {
    path: '',
    component: LugarAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarAddPageRoutingModule {}
