import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  @HostListener('click') onClick() {
    console.log('Element clicked');
  }

  @HostListener('keyup', ['$event', '"Meu Argumento"']) onKeyUp(event: Event) {
    // console.log('Key up', event);
    const fullText = (event.target as HTMLInputElement).value;
    console.log(fullText);
  }
}
