import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CompTextoComponent } from "./comp-texto/comp-texto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CompTextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projecao-conteudo';
}
