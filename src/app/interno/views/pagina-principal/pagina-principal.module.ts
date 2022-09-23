import { NgModule } from '@angular/core';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';


@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

