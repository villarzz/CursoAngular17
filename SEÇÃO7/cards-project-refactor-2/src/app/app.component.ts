import { Component } from '@angular/core';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cards-project-refactor';
}
