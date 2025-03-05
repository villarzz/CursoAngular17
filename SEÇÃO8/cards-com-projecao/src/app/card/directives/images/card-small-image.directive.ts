import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardSmallImage]',
  host: {class: 'ca-c-card__small-image' },
  standalone: true
})
export class CardSmallImageDirective {}
