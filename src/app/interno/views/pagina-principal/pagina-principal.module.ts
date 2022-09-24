import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './components/controle-anual/controle-anual.component';
import { ControleMensalComponent } from './components/controle-mensal/controle-mensal.component';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ControleMensalComponent,
    ControleAnualComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    CommonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

