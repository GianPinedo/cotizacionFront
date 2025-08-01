import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../utils/constants';

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
  private readonly baseUrl = API_BASE_URL;

  constructor(private http: HttpClient) {}

  obtenerMarcas(): Observable<MarcaResponse[]> {
    return this.http.get<MarcaResponse[]>(`${this.baseUrl}/marca`);
  }

  obtenerUsos(): Observable<UsoResponse[]> {
    return this.http.get<UsoResponse[]>(`${this.baseUrl}/uso`);
  }
}