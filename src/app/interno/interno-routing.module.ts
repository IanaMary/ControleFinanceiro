import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterGuardService } from '../services/router-guard/router-guard.service';
import { InternoComponent } from './interno.component';

const routes: Routes = [
  {
    path: '',
    component: InternoComponent,
    children: [
      {
        path: 'pagina-principal',
        canLoad: [RouterGuardService],
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
