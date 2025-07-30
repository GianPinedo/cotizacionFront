import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CotizacionRequest } from '../models/cotizacion-request.model';
import { CotizacionResponse } from '../models/cotizacion-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CotizacionService {
  private readonly apiUrl = 'http://localhost:8081/api/cotizaciones/cotizar';

  constructor(private http: HttpClient) {}

  cotizar(request: CotizacionRequest): Observable<CotizacionResponse> {
    return this.http.post<CotizacionResponse>(this.apiUrl, request);
  }
}
