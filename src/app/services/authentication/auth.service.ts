// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Aquí es donde normalmente se haría la solicitud al servidor para autenticar al usuario.
    // Para esta demostración, simplemente vamos a "autenticar" al usuario si su nombre de usuario y contraseña son iguales.
    if (username === password) {
      localStorage.setItem('username', username); // Guardamos el nombre de usuario en el almacenamiento local para simular una sesión de usuario
      console.log("esta auhtenticando");
      return true;

    } else {
      console.log("esta auhtenticand2");
      return false;
    
    }
  }

  logout() {
    // Aquí es donde normalmente se cerraría la sesión del usuario en el servidor.
    // Para esta demostración, simplemente vamos a eliminar el nombre de usuario del almacenamiento local.
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    // Aquí es donde normalmente se verificaría si el usuario está autenticado.
    // Para esta demostración, simplemente vamos a comprobar si hay un nombre de usuario en el almacenamiento local.
    console.log("esta auhtenticandlocal");
    return localStorage.getItem('username') !== null;
    
  }
}