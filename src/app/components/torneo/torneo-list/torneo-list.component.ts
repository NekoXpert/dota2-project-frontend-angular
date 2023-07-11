/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Torneo } from 'src/app/models/torneo.model';
import { TorneoService } from 'src/app/services/torneo/torneo.service';

@Component({
  selector: 'app-torneo-list',
  templateUrl: './torneo-list.component.html',
  styleUrls: ['./torneo-list.component.scss']
})
export class TorneoListComponent implements OnInit {
  torneos: Torneo[] = [];

  constructor(private torneoService: TorneoService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTorneos();
  }

  getAllTorneos(): void {
    this.torneoService.getAllTorneos().subscribe(
      data => {
        this.torneos = data;
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }

  goToUpdate(id: number): void {
    this.router.navigate([`/torneo-update/${id}`]);
  }

  deleteTorneo(id: number): void {
    this.torneoService.deleteTorneo(id).subscribe(
      response => {
        console.log('Torneo eliminado exitosamente: ', response);
        this.getAllTorneos();  // Refrescar la lista
      },
      error => console.error('Error al eliminar torneo: ', error)
    );
  }
}

