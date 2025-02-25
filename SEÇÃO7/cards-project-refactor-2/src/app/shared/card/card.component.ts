import { Component, Input } from '@angular/core';
import { CardContent } from '../../interfaces/cardContent';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() value = '';
  @Input() hasCard = false;
  @Input() cardAmount!: CardContent[];
  @Input() cardContent: CardContent[] = [];
}
