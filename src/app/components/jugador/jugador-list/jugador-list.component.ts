import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from 'src/app/services/jugador/jugador.service';
import { Jugador } from 'src/app/models/jugador.model';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.scss']
})
export class JugadorListComponent implements OnInit {
  jugadores!: Jugador[];

  constructor(
    private jugadorService: JugadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllJugadores();
  }

  getAllJugadores(): void {
    this.jugadorService.getAllJugadores().subscribe(
      response => this.jugadores = response,
      error => console.error('Error al obtener los jugadores: ', error)
    );
  }

  goToUpdate(id: number): void {
    this.router.navigate([`/jugador-update/${id}`]);
  }

  deleteJugador(id: number): void {
    this.jugadorService.deleteJugador(id).subscribe(
      response => {
        console.log('Jugador eliminado exitosamente: ', response);
        this.getAllJugadores();  // Refrescar la lista
      },
      error => console.error('Error al eliminar jugador: ', error)
    );
  }
}

