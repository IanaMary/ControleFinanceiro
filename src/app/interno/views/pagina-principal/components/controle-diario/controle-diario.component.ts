import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NovoValorComponent } from '../modals/novo-valor/novo-valor.component';

@Component({
  selector: 'app-controle-diario',
  templateUrl: './controle-diario.component.html',
  styleUrls: ['./controle-diario.component.scss'],
})
export class ControleDiarioComponent implements OnInit {
  meses = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];
  mesAtual = this.meses[new Date().getMonth()];
  anoAtual = new Date().getFullYear();
  anos = Array(10)
    .fill(0)
    .map((e, i) => this.anoAtual + i);
  controleMensal = [
    {
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 1000,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
  ];

  contasSaida: any = [];

  contasEntrada: any = [];

  contasResumo = {
    pagar: 0,
    pago: 0,
    entrada: 0,
    caixa: 0,
  };

  novoValorForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder
  ) {
    this.novoValorForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      valor: [0, [Validators.required]],
      tipo: ['receber', [Validators.required]],
    });
  }

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NovoValorComponent, {
      data: { novoValorForm: this.novoValorForm },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        if (result.data.tipo === 'receber') {
          let obj = {
            valor: result.data.valor,
            nome: result.data.nome,
          };
          this.contasEntrada.push(obj);
          this.contasResumo.entrada =
            this.contasResumo.entrada + result.data.valor;
        } else {
          const pago = result.data.tipo === 'pago' ? true : false;
          let obj = {
            valor: result.data.valor,
            nome: result.data.nome,
            pago: pago,
          };
          if (pago) {
            this.contasResumo.pago = this.contasResumo.pago + result.data.valor;
          } else {
            this.contasResumo.pagar =
              this.contasResumo.pagar + result.data.valor;
          }
          this.contasSaida.push(obj);
        }
        this.contasResumo.caixa = this.contasResumo.entrada - (this.contasResumo.pagar+this.contasResumo.pago)
      }
      this.novoValorForm.reset();
    });
  }
}
