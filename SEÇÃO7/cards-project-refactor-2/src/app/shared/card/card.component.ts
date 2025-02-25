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
  @Input() icon = '';
  @Input() title = '';
  @Input() value = '';
  @Input() hasCard = false;
  @Input() backGroundColor = '';
  @Input() cardAmount!: CardContent[];
  @Input() cardContent: CardContent[] = [];
}
