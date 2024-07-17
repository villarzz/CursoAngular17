import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector:'[appClass]'
})
export class ClassDirective{
  // @HostBinding('attr.class') attrClass = 'my-text my-size';
  // @HostBinding('className') className = 'my-text my-size';
  @HostBinding('class') classObj = { 'my-text': true,'my-size': true };
}
