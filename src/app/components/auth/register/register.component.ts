/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //if (this.registerForm.invalid) {
      //return;
   // }

    // Aquí iría la lógica para registrar al usuario. Puede ser llamando a un servicio de autenticación.
    // Por ejemplo:
    // this.authService.register(this.registerForm.value).subscribe(
    //   data => {
    //     // Redirigir al inicio de sesión o página de inicio después del registro exitoso
    //     this.router.navigateByUrl('/auth/login');
    //   },
    //   error => {
    //     // Manejar errores de registro
    //   }
    // );
   // else{
    this.router.navigateByUrl('auth/login');
    //}
  }

  onLogin(): void {
    // Redirige al usuario a la página de inicio de sesión
    this.router.navigateByUrl('/auth/login');
  }
}