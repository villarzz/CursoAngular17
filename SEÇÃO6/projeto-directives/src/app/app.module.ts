import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StyleDirective } from './directives/style.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { NoDirectiveComponent } from './no-directive/no-directive.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { ClassDirective } from './directives/class.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ClassDirective,
    DisabledDirective,
    HighlightDirective,
    NoDirectiveComponent,
    WithDirectiveComponent
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
