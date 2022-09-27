import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalGenericoComponent } from '../modals/modal-generico/modal-generico.component';
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

  contasSaida: any = [
    {
      valor: 10,
      nome: 'teste1',
      pago: true,
      id: 1,
    },
    {
      valor: 10,
      nome: 'teste2',
      pago: false,
      id: 2,
    },
  ];

  contasEntrada: any = [
    {
      valor: 10,
      nome: 'teste3',
      id: 1,
    },
  ];

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
      pago: [true, []],
    });
  }

  ngOnInit() {}

  adicionarNovoValor(bool: boolean): void {
    const dialogRef = this.dialog.open(NovoValorComponent, {
      data: { editar: false, novoValorForm: this.novoValorForm, tipo: bool },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        if (bool) {
          let obj = {
            valor: result.data.valor,
            nome: result.data.nome,
          };
          this.contasEntrada.push(obj);
          this.contasResumo.entrada =
            this.contasResumo.entrada + result.data.valor;
        } else {
          let obj = {
            valor: result.data.valor,
            nome: result.data.nome,
            pago: result.data.pago,
          };
          if (result.data.pago) {
            this.contasResumo.pago = this.contasResumo.pago + result.data.valor;
          } else {
            this.contasResumo.pagar =
              this.contasResumo.pagar + result.data.valor;
          }
          this.contasSaida.push(obj);
        }
        this.contasResumo.caixa =
          this.contasResumo.entrada -
          (this.contasResumo.pagar + this.contasResumo.pago);
      }

      this.novoValorForm.reset();
      this.novoValorForm.get('valor')?.setValue(0);
      this.novoValorForm.get('pago')?.setValue(true);
    });
  }

  editarValor(bool: boolean, conta: any): void {
    this.novoValorForm.reset();
    this.novoValorForm.get('valor')?.setValue(conta.valor);
    this.novoValorForm.get('pago')?.setValue(conta.pago);
    this.novoValorForm.get('nome')?.setValue(conta.nome);

    const dialogRef = this.dialog.open(NovoValorComponent, {
      data: { editar: true, novoValorForm: this.novoValorForm, tipo: bool },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        if (bool) {
          const pos = this.contasEntrada.findIndex((c: any) => {
            return c.id === conta.id;
          });

          if (pos != -1) {
            this.contasEntrada[pos].valor = result.data.valor;
            this.contasEntrada[pos].nome = result.data.nome;

            const total = this.contasEntrada.reduce(function (
              total: number,
              el: { valor: number }
            ) {
              return el.valor + total;
            },
            0);

            this.contasResumo.entrada = total;
          }
        } else {
          const pos = this.contasSaida.findIndex((c: any) => {
            return c.id === conta.id;
          });

          if (pos != -1) {
            this.contasSaida[pos].valor = result.data.valor;
            this.contasSaida[pos].nome = result.data.nome;
            this.contasSaida[pos].pago = result.data.pago;

            if (result.data.pago) {
              const total = this.contasEntrada.reduce(function (
                total: number,
                el: any
              ) {
                if (el.pago) {
                  return el.valor + total;
                }
                return total;
              },
              0);
              this.contasResumo.pago = total;
            } else {
              const total = this.contasEntrada.reduce(function (
                total: number,
                el: any
              ) {
                if (!el.pago) {
                  return el.valor + total;
                }
                return total;
              },
              0);
              this.contasResumo.pagar = total;
            }
          }
        }
        this.contasResumo.caixa =
          this.contasResumo.entrada -
          (this.contasResumo.pagar + this.contasResumo.pago);
      }

      this.novoValorForm.reset();
      this.novoValorForm.get('valor')?.setValue(0);
      this.novoValorForm.get('pago')?.setValue(true);
    });
  }

  excluirValor(bool: boolean, conta: any): void {
    const dialogRef = this.dialog.open(ModalGenericoComponent, {
      data: {
        titulo: 'Excluir valor',
        texto: 'Deseja excluir esse valor?',
        botao: 'EXCLUIR',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (bool) {
          const pos = this.contasEntrada.findIndex((c: any) => {
            return c.id === conta.id;
          });
          if (pos != -1) {
            this.contasEntrada.splice(pos, 1);
            const total = this.contasEntrada.reduce(function (
              total: number,
              el: { valor: number }
            ) {
              return el.valor + total;
            },
            0);

            this.contasResumo.entrada = total;
          }
        } else {
          const pos = this.contasSaida.findIndex((c: any) => {
            return c.id === conta.id;
          });

          if (pos != -1) {
            this.contasSaida.splice(pos, 1);

            if (conta.pago) {
              const total = this.contasEntrada.reduce(function (
                total: number,
                el: any
              ) {
                if (el.pago) {
                  return el.valor + total;
                }
                return total;
              },
              0);
              this.contasResumo.pago = total;
            } else {
              const total = this.contasEntrada.reduce(function (
                total: number,
                el: any
              ) {
                if (!el.pago) {
                  return el.valor + total;
                }
                return total;
              },
              0);
              this.contasResumo.pagar = total;
            }
          }
        }
        this.contasResumo.caixa =
          this.contasResumo.entrada -
          (this.contasResumo.pagar + this.contasResumo.pago);
      }

      this.novoValorForm.reset();
      this.novoValorForm.get('valor')?.setValue(0);
      this.novoValorForm.get('tipo')?.setValue(true);
    });
  }
}
