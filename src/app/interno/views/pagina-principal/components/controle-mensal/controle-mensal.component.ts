import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalService } from '../../services/pagina-principal.service';

@Component({
  selector: 'app-controle-mensal',
  templateUrl: './controle-mensal.component.html',
  styleUrls: ['./controle-mensal.component.scss']
})
export class ControleMensalComponent implements OnInit {
  title = 'controleFinanceiro';

  anoAtual = new Date().getFullYear();
  anos = Array(10)
    .fill(0)
    .map((e, i) => this.anoAtual + i);

  controleMensal: any;

  constructor(
    private readonly paginaPrincipalService: PaginaPrincipalService
  ) { }

  ngOnInit() {
    this.atualizar();
  }

  atualizar() {
    this.paginaPrincipalService.totalResumoMensal(this.anoAtual).subscribe(
      (res: any) => {
        this.controleMensal = res;
        console.log('res tt => ', res);
      },
      (error: any) => {
        console.log('erro => ', error);
      }
    );
  }

}
