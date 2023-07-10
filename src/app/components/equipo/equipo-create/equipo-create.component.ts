import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoService } from 'src/app/services/equipo/equipo.service';

@Component({
  selector: 'app-equipo-create',
  templateUrl: './equipo-create.component.html',
  styleUrls: ['./equipo-create.component.scss']
})
export class EquipoCreateComponent implements OnInit {
  equipoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipoService: EquipoService,
    private router: Router
  ) {
    this.equipoForm = this.fb.group({
      name: ['', Validators.required],
      region: ['', Validators.required],
      puntosClasificacion: ['', Validators.required],

    });
  }

  ngOnInit(): void { }

  createEquipo(): void {
    this.equipoService.createEquipo(this.equipoForm.value).subscribe(
      response => {
        console.log('Equipo creado exitosamente: ', response);
        this.router.navigate(['/equipo']);
      },
      error => console.error('Error al crear equipo: ', error)
    );
  }
}


