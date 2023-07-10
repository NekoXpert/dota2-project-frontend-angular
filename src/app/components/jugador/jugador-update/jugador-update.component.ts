import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo.model';

import { Jugador } from 'src/app/models/jugador.model';
import { Torneo } from 'src/app/models/torneo.model';
import { EquipoService } from 'src/app/services/equipo/equipo.service';

import { JugadorService } from 'src/app/services/jugador/jugador.service';
import { TorneoService } from 'src/app/services/torneo/torneo.service';

@Component({
  selector: 'app-jugador-update',
  templateUrl: './jugador-update.component.html',
  styleUrls: ['./jugador-update.component.scss']
})
export class JugadorUpdateComponent implements OnInit {
  jugadorForm: FormGroup;
  equipos: Equipo[] = [];
  torneos: Torneo[] = [];

  id!: number;

  constructor(
    private fb: FormBuilder,
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
    private torneoService: TorneoService,
 
    private router: Router
  ) {
    this.jugadorForm = this.fb.group({
      firstName: ['', Validators.required],
      dniDotero: ['', Validators.required],
      medallaRank: ['', Validators.required],
      mmr: ['', Validators.required],
      edad: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      equipo: ['', Validators.required],
      torneo: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe(
      response => {
        this.equipos = response;
      },
      error => console.error('Error al obtener equipos: ', error)
    );

    this.torneoService.getAllTorneos().subscribe(
      response => {
        this.torneos = response;
      },
      error => console.error('Error al obtener torneos: ', error)
    );


  }

  updateJugador(): void {
    this.jugadorService.updateJugador(this.id, this.jugadorForm.value).subscribe(
      response => {
        console.log('Jugador actualizado exitosamente: ', response);
        this.router.navigate(['/jugador']);
      },
      error => console.error('Error al actualizar jugador: ', error)
    );
  }
}
