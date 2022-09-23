import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternoComponent } from './interno.component';

const routes: Routes = [
  {
    path: '',
    component: InternoComponent,
    children: [
      {
        path: 'pagina-principal',
        canLoad: [],
        loadChildren: () => import('./views/pagina-principal/pagina-principal.module').then(mod => mod.PaginaPrincipalModule),
        data: {
          breadcrumb: null
        },
      },
      {
        path: '',
        redirectTo: 'pagina-principal',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternoRoutingModule { }
