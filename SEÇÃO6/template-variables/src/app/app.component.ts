import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('meuInput') meuInput!: ElementRef<HTMLInputElement>;

  updateInputText(){
    this.meuInput.nativeElement.value = 'Texto atualizado!';
  }
}
