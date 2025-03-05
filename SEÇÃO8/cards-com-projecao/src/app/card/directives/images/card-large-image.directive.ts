import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeImage]',
  host: {class: 'ca-c-card__large-image' },
  standalone: true
})
export class CardLargeImageDirective {}
