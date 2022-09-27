import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'autenticacao',
    loadChildren: () => import('./externo/externo.module').then(mod => mod.ExternoModule)
  },
  {
    path: '',
    loadChildren: () => import('./interno/interno.module').then(mod => mod.InternoModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
