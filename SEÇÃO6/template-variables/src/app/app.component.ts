import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{
  buttonsList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ];

  @ViewChildren('meuButton') buttons!: QueryList<ElementRef<HTMLButtonElement>>;
  ngAfterViewInit(){
    console.log(this.buttons.toArray());
  }

  changeColor(event: Event){
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons(event: Event){
    this.buttons.forEach(button => {
      button.nativeElement.style.backgroundColor = '';
      button.nativeElement.style.color = 'black';
    })
  }
}
