import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  host: { class: 'ca-u-card-text-description' },
  standalone: true,
})
export class CardTextDescriptionDirective {
  @Input() @HostBinding('style.color') color: string = '';
}
