import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: 'Super Mario 64',
    },
    {
      id: 2,
      name: 'Zelda Ocarina of Time',
    },
    {
      id: 3,
      name: 'Mario Kart',
    },
    {
      id: 4,
      name: 'Goldeneye',
    },
    {
      id: 5,
      name: 'Perfect Dark',
    }
  ]

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
}
