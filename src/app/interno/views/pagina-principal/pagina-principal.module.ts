import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControleAnualComponent } from './components/controle-anual/controle-anual.component';
import { ControleMensalComponent } from './components/controle-mensal/controle-mensal.component';
import { PaginaPrincipalComponent } from './containers/pagina-principal.component';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ControleDiarioComponent } from './components/controle-diario/controle-diario.component';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { NovoValorComponent } from './components/modals/novo-valor/novo-valor.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ControleMensalComponent,
    ControleAnualComponent,
    ControleDiarioComponent,
    NovoValorComponent
  ],
  imports: [
    PaginaPrincipalRoutingModule,
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    CurrencyMaskModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  entryComponents: [NovoValorComponent ],
  providers: [],
  bootstrap: []
})
export class PaginaPrincipalModule { }

