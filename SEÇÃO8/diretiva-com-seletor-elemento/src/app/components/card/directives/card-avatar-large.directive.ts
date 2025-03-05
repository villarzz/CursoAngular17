import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large, [appCardAvatarLarge]',
  host: { class: 'ca-u-card-avatar-large' },
  standalone: true,
})
export class CardAvatarLargeDirective {}
