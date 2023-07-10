import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/env';
import { Jugador } from 'src/app/models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private apiUrl = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}/jugador/`);
  }

  getJugadorById(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/jugador/${id}`);
  }

  createJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.apiUrl}/jugador/create`, jugador);
  }

  updateJugador(id: number, jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.apiUrl}/jugador/update/${id}`, jugador);
  }

  deleteJugador(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jugador/${id}`);
  }


}
