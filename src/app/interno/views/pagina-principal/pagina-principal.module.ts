import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './components/controle-anual/controle-anual.component';
import { ControleMensalComponent } from './components/controle-mensal/controle-mensal.component';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ControleDiarioComponent } from './components/controle-diario/controle-diario.component';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ControleMensalComponent,
    ControleAnualComponent,
    ControleDiarioComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

