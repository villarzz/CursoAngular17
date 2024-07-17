import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassDirective } from './directives/class.directive';
import { StyleDirective } from './directives/style.directive';
import { ListenerDirective } from './directives/listener.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { NoDirectiveComponent } from './no-directive/no-directive.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { InputBackgroundDirective } from './directives/input-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    DisabledDirective,
    HighlightDirective,
    NoDirectiveComponent,
    WithDirectiveComponent,
    InputBackgroundDirective,
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
