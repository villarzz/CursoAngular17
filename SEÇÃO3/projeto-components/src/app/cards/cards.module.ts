import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { MatSliderModule } from '@angular/material/slider';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
  ],
})
export class CardsModule {}
