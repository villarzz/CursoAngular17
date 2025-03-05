import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  color: string = 'blue';

  ngOnInit() {
    setTimeout(() => {
      this.color = 'red';
      console.log('entrou entrou no pai');
    }, 3000);
  }
}
