import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss',
})
export class PersonComponent {
  @Input({ required: true }) personAge: number = 0;
  @Input({ required: true }) isOdd: boolean = false;
  @Input({ required: true }) personIndex: number = 0;
  @Input({ required: true }) personName: string = '';
  @Input({ required: true }) isSelected: boolean = false;
  @Output() personSelected = new EventEmitter<number>();

  selectPerson() {
    this.personSelected.emit(this.personIndex);
  }
}
