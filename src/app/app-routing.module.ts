import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'chaves',
    loadChildren: () => import('./chaves/chaves.module').then(m => m.ChavesPageModule)
  },
  {
    path: 'estatistica',
    loadChildren: () => import('./estatistica/estatistica.module').then(m => m.EstatisticaPageModule)
  },
  {
    path: 'gerenciamento',
    loadChildren: () => import('./gerenciamento/gerenciamento.module').then(m => m.GerenciamentoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
