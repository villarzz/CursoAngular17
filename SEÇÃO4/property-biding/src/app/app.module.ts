import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBidingComponent } from './attribute-biding/attribute-biding.component';
import { StyleBidingComponent } from './style-biding/style-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBidingComponent,
    StyleBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
