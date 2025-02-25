import { Component } from '@angular/core';
import { BalanceCardComponent } from './balance-card/balance-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BalanceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cards-project-refactor';
}
