export interface CotizacionRequest {
  marca: string;
  modelo: string;
  anio: number;
  uso: 'personal' | 'trabajo' | 'carga';
  edadConductor: number;
}
