/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.scss']
})
export class EquipoListComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }

  getAllEquipos(): void {
    this.equipoService.getAllEquipos().subscribe(
      data => {
        this.equipos = data;
      },
      error => console.error('Error al obtener equipos: ', error)
    );
  }
  goToUpdate(id: number): void {
    this.router.navigate([`/equipo-update, ${id}`]);  // Asume que tienes una ruta '/equipo-update/:id' en tu archivo de rutas
  }
  deleteEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(
      response => {
        console.log('Equipo eliminado exitosamente: ', response);
        this.getAllEquipos();  // Refrescar la lista
      },
      error => console.error('Error al eliminar equipo: ', error)
    );
  }

}
