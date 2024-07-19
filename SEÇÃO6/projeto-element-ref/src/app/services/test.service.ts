import { ElementRef, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TestService{

  constructor(){}

  create(elRef: ElementRef){
    const newDiv = document.createElement('div');
    newDiv.textContent = 'I am a new div';
    newDiv.classList.add('bg-red');
    elRef.nativeElement.appendChild(newDiv);
  }
}
