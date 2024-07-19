import { TestService } from './services/test.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('myDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testService: TestService
  ) {}

  createElement(): void {
    this._testService.create(this._elRef);
  }
}
