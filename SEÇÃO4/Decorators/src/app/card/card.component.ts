import { Component, Input } from '@angular/core';

function handlePlanType(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;
  @Input({
    alias: 'planType',
    transform: (value: string) => handlePlanType(value),
  })
  planType: string = '';

  buttonClicked(evento: boolean) {
    console.log(evento);
    console.log('clicaram no meu filho');
  }
}
