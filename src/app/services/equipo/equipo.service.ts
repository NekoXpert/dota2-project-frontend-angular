/* Author: Felipe reyes  => { Nekosor } Github*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
;
import { environment } from 'src/environments/env';
import { Equipo } from 'src/app/models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = `${environment.API_URL}`;
  constructor(private http: HttpClient) { }

  getAllEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.apiUrl}/equipo`);
  }

  getEquipoById(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/equipo/${id}`);
  }

  createEquipo(equipo: Equipo):Observable<Equipo> {
    return this.http.post<Equipo>(`${this.apiUrl}/equipo/create`, equipo);
  }

  updateEquipo(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/equipo/update/${id}`, equipo);
  }

  deleteEquipo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/equipo/${id}`);
  }


}
