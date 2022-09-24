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
      mes: 'JAN',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 1000,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'FEV',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 10000,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'MAR',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'ABR',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'MAI',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'JUN',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'JUL',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'AGO',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'SET',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'OUT',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'NOV',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 100,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    },
    {
      mes: 'DEZ',
      ano: '2022',
      receber: [1000, 0],
      totalReceber: 1000,
      caixa: 0,
      pagar: [50, 50, 50],
      totalPagar: 150,
    }

  ]


}
