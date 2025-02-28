import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  host: { class: 'ca-u-card-text-description' },
  standalone: true,
})
export class CardTextDescriptionDirective {}
