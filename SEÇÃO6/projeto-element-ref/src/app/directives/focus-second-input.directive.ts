import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appFocusSecondInput]"
})
export class FocusSecondInputDirective implements AfterViewInit{
  // @HostBinding('textContent') text = 'Blue';
  // @HostBinding('style.backgroundColor') bgColor = 'blue';

  constructor(private _elRef: ElementRef) {}
  ngAfterViewInit(): void {
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];

    if(inputList.length > 1){
      inputList[1].focus();
    }
  }
}
