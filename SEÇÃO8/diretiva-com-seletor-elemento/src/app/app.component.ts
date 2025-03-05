import { Component } from '@angular/core';
import { CardTextTitleDirective } from './components/card/directives/card-text-title.directive';
import { CardAvatarSmallDirective } from './components/card/directives/card-avatar-small.directive';
import { CardAvatarLargeDirective } from './components/card/directives/card-avatar-large.directive';
import { CardTextSubtitleDirective } from './components/card/directives/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './components/card/directives/card-text-description.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardTextTitleDirective,
    CardAvatarLargeDirective,
    CardAvatarSmallDirective,
    CardTextSubtitleDirective,
    CardTextDescriptionDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'diretiva-com-seletor-elemento';
}
