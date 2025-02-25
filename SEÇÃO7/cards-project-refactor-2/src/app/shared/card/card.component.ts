import { Component, Input } from '@angular/core';
import { CardContent } from '../../interfaces/cardContent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() value = '';
  @Input() backGroundColor = '';
  @Input() cardAmount!: CardContent[];
  @Input({ required: true }) icon = '';
  @Input({ required: true }) title = '';
  @Input() cardContent: CardContent[] = [];
  @Input({ required: true }) hasCard = false;
}
