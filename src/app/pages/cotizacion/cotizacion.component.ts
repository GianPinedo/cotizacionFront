import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CotizacionService } from '../../services/cotizacion.service';
import { CotizacionResponse } from '../../models/cotizacion-response.model';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CotizacionComponent implements OnInit {
  form!: FormGroup;
  resultado!: CotizacionResponse | null;

  marcas: string[] = [];
  usos: string[] = [];

  constructor(
    private fb: FormBuilder,
    private cotizacionService: CotizacionService,
    private catalogoService: CatalogoService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [null, [Validators.required, Validators.min(1900)]],
      uso: ['', Validators.required],
      edadConductor: [null, [Validators.required, Validators.min(18)]],
    });
    this.catalogoService.obtenerMarcas().subscribe({
      next: (res) => (this.marcas = res.map((m) => m.nombre)),
      error: (err) => console.error('Error cargando marcas:', err),
    });

    this.catalogoService.obtenerUsos().subscribe({
      next: (res) => (this.usos = res.map((u) => u.codigo)),
      error: (err) => console.error('Error cargando usos:', err),
    });
  }

  cotizar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cotizacionService.cotizar(this.form.value).subscribe({
      next: (res) => (this.resultado = res),
      error: (err) => {
        console.error('Error al cotizar:', err);
        this.resultado = null;
      },
    });
  }
}
