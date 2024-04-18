import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Input() btnDisabled: boolean = false;
  @Output() buttonClickerEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onbuttonclick');

    this.buttonClickerEmitter.emit(true);
  }
}
