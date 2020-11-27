import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full'
  },
  {
    path: 'lugares',
    children: [
      {
        path: "",
        loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
      },
      {
        path:":lugarId",
        loadChildren: () => import('./lugares/lugar-detalle/lugar-detalle.module').then(m => m.LugarDetallePageModule)
      }
    ]
  },
  {
    path:"nuevo-lugar",
    loadChildren: () => import('./lugares/lugar-add/lugar-add.module').then(m => m.LugarAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
