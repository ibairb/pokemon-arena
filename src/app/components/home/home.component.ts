import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NumeroJugadoresService } from 'src/app/services/numero-jugadores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  players = ['One Player', 'Two Players'];
  selectedIndex = 0;

  constructor(
    private router: Router,
    private numeroJugadores: NumeroJugadoresService
    ) {}

  onKeyDown(event: any) {
    const lastIndex = this.players.length - 1;

    switch (event.key) {
      case 'ArrowDown':
        this.selectedIndex = Math.min(this.selectedIndex + 1, lastIndex);
        break;
      case 'ArrowUp':
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        break;
      default:
        break;
    }
  }

  handleClick(i:any) {
    this.numeroJugadores.numeroJugadores = i
    this.router.navigate(['create-player'])
  }
}
