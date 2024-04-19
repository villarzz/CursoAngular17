import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngif';
  minhaProp = true;

  toogleProp(){
    this.minhaProp = !this.minhaProp
  }

  isTruthy(){
    // tudo isso retorna true
    // return {};
    // return [];
    // return true;
    // return 1;
    // return "teste";
    // return "0";
    // return "false";
  }
}
