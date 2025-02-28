import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title',
  host: {'class':'ca-u-card-text-title'},
  standalone: true
})
export class CardTextTitleDirective {
}
