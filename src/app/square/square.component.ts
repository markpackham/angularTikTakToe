import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{rando}}
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  rando = 0;

  constructor() {
    setInterval(() =>this.rando = Math.random(), 1000);
   }

  ngOnInit(): void {
  }

}
