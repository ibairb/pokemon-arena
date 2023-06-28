import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { NumeroJugadoresService } from 'src/app/services/numero-jugadores.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  playerName:string;
  playerName2:string;
  numeroJugadores:any;

  constructor(
    private numeroJugadoresService: NumeroJugadoresService,
    private router: Router,
    private playerService: PlayerService
  ){}

  ngOnInit(): void {
    this.numeroJugadores = this.numeroJugadoresService.numeroJugadores
  }
  

  handleSubmit(): void {
    this.playerService.player = new Player(this.playerName);
    console.log(this.playerName);
  
    if (this.playerName2) {
      this.playerService.player2 = new Player(this.playerName2);
    }
  }  
  
  handleClick(){
    this.router.navigate(['form'])
  }
}
