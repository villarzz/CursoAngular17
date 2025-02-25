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
    },
    {
      title: 'Conta Corrente Saldo Vinculados',
      value: 'R$ 300,00',
    },
    {
      title: 'Conta Poupança Saldo Vinculados',
      value: 'R$ 400,00',
    },
    {
      title: 'Investimentos com Baixa Automática',
      value: 'R$ 500,00',
    },
    {
      title: 'Investimentos sem Baixa Automática',
      value: 'R$ 500,00',
    },
  ];

  firstCardAmount: CardContent[] = [
    {
      title: 'Saldo Total',
      value: 'R$ 1000,00',
    },
    {
      title: 'Livre para movimentação',
      value: 'R$ 1000,00',
    },
  ];
}
