import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'model',
    loadChildren: () => import('./paginas/model/model.module').then( m => m.ModelPageModule)
  },
  {
    path: 'selec',
    loadChildren: () => import('./paginas/selec/selec.module').then( m => m.SelecPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./paginas/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'segmento',
    loadChildren: () => import('./paginas/segmento/segmento.module').then( m => m.SegmentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
