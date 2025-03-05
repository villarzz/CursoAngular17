import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CardHeaderDirective } from './card/directives/card-header.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent,CardHeaderDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cards-com-projecao';
}
