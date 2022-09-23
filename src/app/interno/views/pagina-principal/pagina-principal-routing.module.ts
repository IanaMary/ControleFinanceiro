import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent,
    data: {
      breadcrumb: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }
