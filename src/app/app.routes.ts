// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cotizacion',
    loadComponent: () =>
      import('./pages/cotizacion/cotizacion.component').then(m => m.CotizacionComponent),
  },
  {
    path: 'modelos',
    loadComponent: () =>
      import('./pages/modelos/modelos.component').then(m => m.ModelosComponent),
  },
  {
    path: '',
    redirectTo: 'cotizacion',
    pathMatch: 'full',
  },
];
