import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardTitleTextDirective } from './components/card/directives/texts/card-title-text.directive';
import { CardLargeIconDirective } from './components/card/directives/icons/card-large-icon.directive';
import { CardMediumIconDirective } from './components/card/directives/icons/card-medium-icon.directive';
import { CardDescriptionTextDirective } from './components/card/directives/texts/card-description-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLineComponent,
    CardItemComponent,
    DebitCardComponent,
    CardTitleComponent,
    CreditCardComponent,
    ClientCardComponent,
    CardHeaderDirective,
    CardContentDirective,
    BalanceCardComponent,
    CardLargeIconDirective,
    CardTitleTextDirective,
    CardMediumIconDirective,
    CardDescriptionTextDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
