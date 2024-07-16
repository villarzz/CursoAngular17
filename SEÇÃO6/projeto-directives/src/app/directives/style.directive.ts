import { Directive, Host, HostBinding } from "@angular/core";

@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {
  // @HostBinding("attr.style") attrStyle: string = 'background-color: orange; color: white;';
  @HostBinding("style") propStyle: string = 'background-color: orange; color: white;';
}
