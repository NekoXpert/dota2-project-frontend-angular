/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneoService } from 'src/app/services/torneo/torneo.service';

@Component({
  selector: 'app-torneo-create',
  templateUrl: './torneo-create.component.html',
  styleUrls: ['./torneo-create.component.scss']
})
export class TorneoCreateComponent implements OnInit {
  torneoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private torneoService: TorneoService,
    private router: Router
  ) {
    this.torneoForm = this.fb.group({
      name: ['', Validators.required],
      premio: ['', [Validators.required, Validators.min(0)]],
   
    });
  }

  ngOnInit(): void { }

  createTorneo(): void {
    this.torneoService.createTorneo(this.torneoForm.value).subscribe(
      response => {
        console.log('Torneo creado exitosamente: ', response);
        this.router.navigate(['/torneo']);  // Redirecciona a la lista de torneos
      },
      error => console.error('Error al crear torneo: ', error)
    );
  }
}
