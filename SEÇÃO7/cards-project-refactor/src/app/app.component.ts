import { Component } from '@angular/core';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cards-project-refactor';
}
