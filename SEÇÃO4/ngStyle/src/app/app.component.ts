import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngStyle';
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'orange';
  buttonText: 'white' | 'orange' = 'white';
  stylesString: string = 'font-size:15px; color:orange';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    color: this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 100;
    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;
  }

  toogleFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'white';
    } else {
      this.textColor = 'white';
      this.buttonText = 'orange';
    }

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor}`;
  }
}
