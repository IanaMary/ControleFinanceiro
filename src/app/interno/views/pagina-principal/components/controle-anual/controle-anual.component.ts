import { Component } from '@angular/core';
import { PaginaPrincipalService } from '../../services/pagina-principal.service';

@Component({
  selector: 'app-controle-anual',
  templateUrl: './controle-anual.component.html',
  styleUrls: ['./controle-anual.component.scss']
})
export class ControleAnualComponent {
  title = 'controleFinanceiro';


  controleMensal: any
  limite = 5;
  pagOpcoes: number[] = [5, 10, 15, 20];
  pagina = 1
  constructor(
    private readonly paginaPrincipalService: PaginaPrincipalService
  ) {}

  ngOnInit() {
    this.contaResumo();
  }

  contaResumo(){
    this.paginaPrincipalService.totalResumoAnual(this.pagina, this.limite).subscribe(
      (res: any) => {
        this.controleMensal = res;
      },
      (error: any) => { }
    );
  }

  paginacao(p: any) {
    if(p.pageSize != this.limite) {
      this.limite = p.pageSize;
      this.pagina = 1;
    }else{
      this.pagina = p.pageIndex+1;
    }
    this.contaResumo();
  }

}
