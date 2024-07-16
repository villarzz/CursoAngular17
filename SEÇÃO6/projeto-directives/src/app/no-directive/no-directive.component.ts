import { Component } from '@angular/core';

@Component({
  selector: 'app-no-directive',
  templateUrl: './no-directive.component.html',
  styleUrl: './no-directive.component.scss',
})
export class NoDirectiveComponent {
  addBgColor: boolean = false;
  onMouseOver() {
    this.addBgColor = true;
  }
  onMouseOut() {
    this.addBgColor = false;
  }
}
