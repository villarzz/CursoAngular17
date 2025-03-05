import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large',
  host: { class: 'ca-u-card-avatar-large' },
  standalone: true,
})
export class CardAvatarLargeDirective {}
