import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {
  @Input('txtColor') textColor: string = 'black';
  @Input('bgColor') appInputBackground: string = 'white';

  @HostBinding('style.color') color: string = "";
  @HostBinding('style.backgroundColor') bgColor: string = "";

  @HostListener('focus') onFocus() {
    this.color = this.textColor;
    this.bgColor = this.appInputBackground;
  }

  @HostListener('blur') onBlur() {
    this.color = "black";
    this.bgColor = "white";
  }
}
