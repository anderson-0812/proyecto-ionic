import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresPage
  },
  {
    path: 'lugar-detalle',
    loadChildren: () => import('./lugar-detalle/lugar-detalle.module').then( m => m.LugarDetallePageModule)
  },
  {
    path: 'lugar-add',
    loadChildren: () => import('./lugar-add/lugar-add.module').then( m => m.LugarAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}
