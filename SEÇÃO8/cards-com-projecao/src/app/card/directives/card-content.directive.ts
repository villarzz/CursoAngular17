import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content',
  host: {class: 'ca-c-card__content' },
  standalone: true
})
export class CardContentDirective { }
