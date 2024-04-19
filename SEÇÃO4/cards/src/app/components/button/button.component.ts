import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('disabled') isDisabled = false;
  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();
  @Input({ required: true, alias: 'text' }) buttonText: string = '';
  @Input({ required: true, alias: 'style' }) buttonStyle: 'white' | 'orange' = 'white';

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
