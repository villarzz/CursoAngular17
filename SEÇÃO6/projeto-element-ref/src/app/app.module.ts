import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusSecondInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
