import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalGenericoComponent } from '../../../../../shared/components/modals/modal-generico/modal-generico.component';
import { PaginaPrincipalService } from '../../services/pagina-principal.service';
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

  contasSaida: any = [];

  contasEntrada: any = [];

  contasResumo = {
    pagar: 0,
    pago: 0,
    entrada: 0,
    caixa: 0,
  };

  novoValorForm: FormGroup;

  pagContasSaidas = 1;
  pagContasEntradas = 1;
  pagOpcoes: number[] = [5, 10, 15, 20];
  limite = 5;

  constructor(
    public dialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly paginaPrincipalService: PaginaPrincipalService
  ) {
    this.novoValorForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      valor: [0, [Validators.required]],
      pago: [true, []],
    });
  }

  ngOnInit() {
    this.atualizarContasEntradas();
    this.atualizarContasSaidas();
  }

  adicionarNovoValor(bool: boolean): void {
    const dialogRef = this.dialog.open(NovoValorComponent, {
      data: { editar: false, novoValorForm: this.novoValorForm, tipo: bool },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.fechar) {
        if (bool) {
          const obj = {
            valor: result.data.valor,
            nome: result.data.nome,
            ano: this.anoAtual,
            mes: this.mesAtual
          };
          this.paginaPrincipalService.salvarContaEntrada(obj).subscribe(
            (res: any) => {
              this.atualizarContasEntradas();
            },
            (error: any) => {
              console.log('erro => ', error);
            }
          );
        } else {
          let obj = {
            valor: result.data.valor,
            nome: result.data.nome,
            pago: result.data.pago,
            ano: this.anoAtual,
            mes: this.mesAtual
          };
          this.paginaPrincipalService.salvarContaSaida(obj).subscribe(
            (res: any) => {
              this.atualizarContasSaidas();
            },
            (error: any) => {
              console.log('erro => ', error);
            }
          );
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

  atualizarContasEntradas() {
    this.contasEntrada = [];
    this.paginaPrincipalService.listarContaEntrada(this.pagContasEntradas, this.limite, this.mesAtual, this.anoAtual).subscribe(
      (res: any) => {
        this.contasEntrada = res;
      },
      (error: any) => {
        console.log('erro => ', error);
      }
    );
  }

  atualizarContasSaidas() {
    this.paginaPrincipalService.listarContaSaida(this.pagContasSaidas, this.limite, this.mesAtual, this.anoAtual).subscribe(
      (res: any) => {
        this.contasSaida = res;
      },
      (error: any) => {
        console.log('erro => ', error);
      }
    );
  }


  atualizar() {
    this.atualizarContasSaidas();
    this.atualizarContasEntradas();
  }


  paginacao(p: any, bool: boolean) {
    if(bool) {
      this.pagContasEntradas = p.pageIndex+1;
      this.atualizarContasEntradas();
    }else{
      this.pagContasSaidas = p.pageIndex+1;
      this.atualizarContasSaidas();
    }


  }
}
