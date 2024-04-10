import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
