import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
// This is a Smart component whilst Square is a dumb component
export class BoardComponent implements OnInit {
  squares: any[];
  // determine current player
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  // player's name is a stream so either team X or O
  get player(){
    return this.xIsNext ? 'O' : 'X';
  }

}
