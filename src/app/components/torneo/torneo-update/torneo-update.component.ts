import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TorneoService } from 'src/app/services/torneo/torneo.service';
import { Torneo } from 'src/app/models/torneo.model';

@Component({
  selector: 'app-torneo-update',
  templateUrl: './torneo-update.component.html',
  styleUrls: ['./torneo-update.component.scss']
})
export class TorneoUpdateComponent implements OnInit {
  torneoForm: FormGroup;
  id!: number; // Identificador del torneo

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private torneoService: TorneoService
  ) {
    this.torneoForm = this.fb.group({
      name: ['', Validators.required],
      premio: ['', [Validators.required, Validators.min(0)]],

    });
  }
  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    this.getTorneo();
  }

  getTorneo(): void {
    this.torneoService.getTorneoById(this.id).subscribe(
      data => {
        this.torneoForm.setValue({
          name: data.name,
          premio: data.premio,
       
        });
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }

  updateTorneo(): void {
    this.torneoService.updateTorneo(this.id, this.torneoForm.value).subscribe(
      response => {
        console.log('Torneo actualizado exitosamente: ', response);
        this.router.navigate(['/torneo-list']);  // Redirecciona a la lista de torneos
      },
      error => console.error('Error al actualizar torneo: ', error)
    );
  }
}
