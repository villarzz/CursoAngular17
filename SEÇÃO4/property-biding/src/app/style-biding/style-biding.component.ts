import { Component } from '@angular/core';

@Component({
  selector: 'app-style-biding',
  templateUrl: './style-biding.component.html',
  styleUrl: './style-biding.component.scss',
})
export class StyleBidingComponent {
  widthButton1 = '110px';
  widthButton2 = 120;
  stylesObj = { width: '150px', backgroundColor: 'red' };

  updateStyleObj(){
    this.stylesObj = {
      width: '150px',
      backgroundColor:'red'
    }
  }

  updateStyleObjCorrect(){
    this.stylesObj = {
      width: '160px',
      backgroundColor:'grey'
    }
  }

  updateWidth(){
    this.widthButton2 = 130;
  }
}
