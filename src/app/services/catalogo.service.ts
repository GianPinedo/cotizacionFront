import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MarcaResponse {
  nombre: string;
}

interface UsoResponse {
  codigo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private readonly baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  obtenerMarcas(): Observable<MarcaResponse[]> {
    return this.http.get<MarcaResponse[]>(`${this.baseUrl}/marca`);
  }

  obtenerUsos(): Observable<UsoResponse[]> {
    return this.http.get<UsoResponse[]>(`${this.baseUrl}/uso`);
  }
}
