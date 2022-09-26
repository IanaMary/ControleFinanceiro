import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controle-diario',
  templateUrl: './controle-diario.component.html',
  styleUrls: ['./controle-diario.component.scss']
})
export class ControleDiarioComponent implements OnInit {
  title = 'controleFinanceiro';
  meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET',  'OUT', 'NOV', 'DEZ' ];
  mesAtual = this.meses[new Date().getMonth()];
  anoAtual = new Date().getFullYear()
  anos = Array(10).fill(0).map((e,i)=>this.anoAtual+i)
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


  contasEntrada = [
    {
      nome: 'brasil',
      valor: 100,
      pago: true
    },{
      nome: 'nu',
      valor: 100,
      pago: true
    },{
      nome: 'aluguel',
      valor: 100,
      pago: false
    },{
      nome: 'salario',
      valor: 100,
      tipo: 'entrada',
      pago: false
    }
  ]

  contasSaida = [
    {
      nome: 'salario',
      valor: 100,
      tipo: 'entrada',
      pago: false
    }
  ]

  contasResumo = {
    pagar: 0,
    pago: 0,
    entrada: 0,
    caixa: 0
  }

  ngOnInit() {
    console.log('mes ', this.mesAtual)
  }

}
