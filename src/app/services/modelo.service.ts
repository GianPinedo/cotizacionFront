import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL} from '../utils/constants';
import { Modelo } from '../models/modelo.model';

@Injectable({
  providedIn: 'root',
})
export class ModeloService {

  private apiUrl = `${API_BASE_URL}/modelos`;  

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de modelos de la API.
   * @returns Observable con la lista de modelos.
   */
  obtenerModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.apiUrl);
  }

  /**
   * Crea un nuevo modelo y lo guarda en la base de datos.
   * @param modelo El modelo a crear.
   * @returns Observable con el modelo creado.
   */
  crearModelo(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(this.apiUrl, modelo);
  }
}
