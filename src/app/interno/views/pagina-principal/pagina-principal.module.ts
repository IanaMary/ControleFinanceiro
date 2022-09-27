import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './components/controle-anual/controle-anual.component';
import { ControleMensalComponent } from './components/controle-mensal/controle-mensal.component';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { ControleDiarioComponent } from './components/controle-diario/controle-diario.component';
import { NovoValorComponent } from './components/modals/novo-valor/novo-valor.component';
import { ModalGenericoComponent } from '../../../shared/components/modals/modal-generico/modal-generico.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ControleMensalComponent,
    ControleAnualComponent,
    ControleDiarioComponent,
    NovoValorComponent,
    ModalGenericoComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    SharedModule
  ],
  entryComponents: [NovoValorComponent, ModalGenericoComponent],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

