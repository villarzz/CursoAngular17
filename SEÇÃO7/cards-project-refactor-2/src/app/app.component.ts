import { Component } from '@angular/core';
import { CardComponent } from './shared/card/card.component';
import { CardContent } from './interfaces/cardContent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cards-project-refactor';

  firstCardContent: CardContent[] = [
    {
      title: 'Conta Corrente',
      value: 'R$ 200,00',
      showLine: true,
    },
    {
      title: 'Conta Corrente Saldo Vinculados',
      value: 'R$ 300,00',
      showLine: true,
    },
    {
      title: 'Conta Poupança Saldo Vinculados',
      value: 'R$ 400,00',
      showLine: true,
    },
    {
      title: 'Investimentos com Baixa Automática',
      value: 'R$ 500,00',
      showLine: true,
    },
    {
      title: 'Investimentos sem Baixa Automática',
      value: 'R$ 500,00',
      showLine: true,
    },
  ];

  firstCardAmount: CardContent[] = [
    {
      title: 'Saldo Total',
      value: 'R$ 1000,00',
      showLine: false,
    },
    {
      title: 'Livre para movimentação',
      value: 'R$ 1000,00',
      showLine: false,
    },
  ];

  secondCardContent: CardContent[] = [
    {
      title: '1234567891011',
      value: '',
      showLine: false,
    },
    {
      title: 'FELIPE DA SILVA FREITAS',
      value: 'MASTERCARD CARD',
      showLine: false,
    },
    {
      title: 'Limite de Compra',
      value: 'R$ 1000,00',
      showLine: true,
    },
    {
      title: 'Disponível',
      value: 'R$ 1200,00',
      showLine: false,
    },
    {
      title: 'Limite de Saque',
      value: 'R$ 2000,00',
      showLine: true,
    },
    {
      title: 'Disponível',
      value: 'R$ 1300,00',
      showLine: false,
    },
    {
      title: 'Limite TotalUtilizado',
      value: 'R$ 3000,00',
      showLine: false,
    },
  ];

  lastCardContent: CardContent[] = [
    {
      title: 'Nome',
      value: 'Hugo Vilar de Oliveira',
      showLine: true,
    },
    {
      title: 'Idade',
      value: '26 anos',
      showLine: true,
    },
    {
      title: 'Renda Mensal',
      value: 'R$ -1000,00',
      showLine: true,
    },
    {
      title: 'Nacionalidade',
      value: 'Brasileiro',
      showLine: false,
    },
  ]
}
