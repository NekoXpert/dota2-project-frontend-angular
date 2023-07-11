/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  loading: boolean = true;
  ;

  constructor(private router: Router) {
    // función simula la carga de tu portafolio Nekosor
    this.loadPortfolio();
  }

  loadPortfolio() {
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/auth/login']); // redirecciona al login después de la introducción
    }, 2000); // Puedes ajustar este tiempo a tu gusto Nekosor
  }

}
