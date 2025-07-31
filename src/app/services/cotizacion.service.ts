import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CotizacionRequest } from '../models/cotizacion-request.model';
import { CotizacionResponse } from '../models/cotizacion-response.model';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CotizacionService {
  private readonly apiUrl = `${API_BASE_URL}/cotizaciones/cotizar`;

  constructor(private http: HttpClient) {}

  cotizar(request: CotizacionRequest): Observable<CotizacionResponse> {
    return this.http.post<CotizacionResponse>(this.apiUrl, request);
  }
}
