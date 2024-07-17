import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('myDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _elRef: ElementRef){}

  ngOnInit(){
    const lastDivEl = this._elRef.nativeElement.querySelector('#other-div') as HTMLDivElement;
    lastDivEl.textContent = 'I am the last div element';
    lastDivEl.style.backgroundColor = 'lightblue';
    lastDivEl.style.color = 'white';
    lastDivEl.addEventListener('click', () => {
      lastDivEl.textContent = 'I was clicked';
    })
    console.log(lastDivEl);
  }

  ngAfterViewInit(){
    this.divEl.nativeElement.classList.add('my-class');
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'I am a div element';
  }

  createElement(){
    const newDiv = document.createElement('div');
    newDiv.textContent = 'I am a new div';
    newDiv.classList.add('bg-red');
    this._elRef.nativeElement.appendChild(newDiv);
  }
}
