import { Component } from '@angular/core';
import { CardTextTitleDirective } from './components/card/directives/card-text-title.directive';
import { CardTextSubtitleDirective } from './components/card/directives/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './components/card/directives/card-text-description.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardTextTitleDirective,
    CardTextSubtitleDirective,
    CardTextDescriptionDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'diretiva-com-seletor-elemento';
}
