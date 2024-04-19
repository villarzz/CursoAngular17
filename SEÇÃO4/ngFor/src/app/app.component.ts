import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  personSelectedIndex: number | undefined;

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index
  }

  listPessoas = [
    { name: 'Hugo Vilar', idade: 19 },
    { name: 'Jorge Freitas', idade: 20 },
    { name: 'Felipe Freitas', idade: 21 },
    { name: 'João do taligado', idade: 22 },
  ];
}
