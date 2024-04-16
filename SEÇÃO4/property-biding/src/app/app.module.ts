import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeBidingComponent } from './attribute-biding/attribute-biding.component';
import { StyleBidingComponent } from './style-biding/style-biding.component';
import { ClassBidingComponent } from './class-biding/class-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeBidingComponent,
    StyleBidingComponent,
    ClassBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
