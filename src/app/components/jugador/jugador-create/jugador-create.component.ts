/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo.model';
import { Torneo } from 'src/app/models/torneo.model';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JugadorService } from 'src/app/services/jugador/jugador.service';
import { TorneoService } from 'src/app/services/torneo/torneo.service';

@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.scss']
})
export class JugadorCreateComponent implements OnInit {
  jugadorForm: FormGroup;
  equipos: Equipo[] = [];
  torneos: Torneo[] = [];
 

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

  createJugador(): void {
    this.jugadorService.createJugador(this.jugadorForm.value).subscribe(
      response => {
        console.log('Jugador creado exitosamente: ', response);
        this.router.navigate(['/jugador']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al crear jugador: ', error);
      }
    );
  }}