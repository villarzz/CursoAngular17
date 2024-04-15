import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-biding',
  templateUrl: './attribute-biding.component.html',
  styleUrl: './attribute-biding.component.scss',
})
export class AttributeBidingComponent {
  buttonTitle = 'Titulo do botão';
  buttonDisabled = true;

  onButtonClick() {
    this.buttonTitle = 'Titulo Alterado';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
