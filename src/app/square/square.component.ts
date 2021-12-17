import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
