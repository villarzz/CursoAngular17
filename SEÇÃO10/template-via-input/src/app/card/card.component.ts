import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() bodyTemplate!: TemplateRef<any>;
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() footerTemplate!: TemplateRef<any>;
}
