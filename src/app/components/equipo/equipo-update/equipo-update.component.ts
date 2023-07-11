/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo/equipo.service';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-equipo-update',
  templateUrl: './equipo-update.component.html',
  styleUrls: ['./equipo-update.component.scss']
})
export class EquipoUpdateComponent implements OnInit {
  equipoForm: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquipoService
  ) {
    this.equipoForm = this.fb.group({
      name: ['', Validators.required],
      region: ['', Validators.required],
      puntosClasificacion: ['', Validators.required],
 
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.equipoService.getEquipoById(this.id).subscribe(
      response => {
        this.equipoForm.patchValue(response);
      },
      error => console.error('Error al obtener equipo: ', error)
    );
  }

  updateEquipo(): void {
    this.equipoService.updateEquipo(this.id, this.equipoForm.value).subscribe(
      response => {
        console.log('Equipo actualizado exitosamente: ', response);
        this.router.navigate(['/equipo-list']);
      },
      error => console.error('Error al actualizar equipo: ', error)
    );
  }
}
