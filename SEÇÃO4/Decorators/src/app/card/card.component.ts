import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() planType: string = '';
  @Input({ required: true }) planPrice: number = 0;

  buttonClicked(evento: boolean) {
    console.log(evento);
    console.log('clicaram no meu filho');
  }
}
