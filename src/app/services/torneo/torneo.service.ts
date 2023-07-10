import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/env';
import { Torneo } from 'src/app/models/torneo.model';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  private apiUrl = `${environment.API_URL}`;
  constructor(private http: HttpClient) { }

  getAllTorneos(): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(`${this.apiUrl}/torneo`);
  }

  getTorneoById(id: number): Observable<Torneo> {
    return this.http.get<Torneo>(`${this.apiUrl}/torneo/${id}`);
  }

  createTorneo(torneo: Torneo): Observable<Torneo> {
    return this.http.post<Torneo>(`${this.apiUrl}/torneo/create`, torneo);
  }

  updateTorneo(id: number, torneo: Torneo): Observable<Torneo> {
    return this.http.put<Torneo>(`${this.apiUrl}/torneo/update/${id}`, torneo);
  }

  deleteTorneo(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/torneo/${id}`);
  }


}
