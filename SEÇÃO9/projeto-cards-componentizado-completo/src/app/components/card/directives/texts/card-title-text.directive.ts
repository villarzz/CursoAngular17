import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title-text',
  host: { class: 'ca-c-card__title-text' }
})
export class CardTitleTextDirective {}
