import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Decorators';
  cardPlanType = 'Simples';
  cardPlanPrice = 100;

  handlePlanType(planType: string) {
    this.cardPlanType = planType;
  }
}
