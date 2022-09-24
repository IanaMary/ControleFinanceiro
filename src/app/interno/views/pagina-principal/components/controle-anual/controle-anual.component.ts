import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-anual',
  templateUrl: './controle-anual.component.html',
  styleUrls: ['./controle-anual.component.scss']
})
export class ControleAnualComponent {
  title = 'controleFinanceiro';


  controleMensal = [
    {
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 1000,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
  ]


}
