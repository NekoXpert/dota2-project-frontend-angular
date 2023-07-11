/* Author: Felipe reyes  => { Nekosor } Github*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService // Inyecta tu servicio de autenticación
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Usa el método login del servicio de autenticación para "iniciar sesión"
      if (this.authService.login(username, password)) {
        // Si las credenciales son válidas, redirige al usuario
        alert("Bienvenido " + username);
        this.router.navigateByUrl('/jugador');
      } else {
        // Si las credenciales son inválidas, puedes mostrar un mensaje de error
        alert('Las credenciales proporcionadas son inválidas.');
      }
    }
  }

  onRegister() {
    // Aquí podrías redirigir al usuario a la página de registro.
    console.log('Botón de registro presionado.');
    this.router.navigate(['/register']);
  }
}


