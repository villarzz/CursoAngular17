import { Component } from '@angular/core';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BalanceCardComponent, CreditCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cards-project-refactor';
}
