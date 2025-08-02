import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CotizacionService } from '../../services/cotizacion.service';
import { CotizacionResponse } from '../../models/cotizacion-response.model';
import { CatalogoService } from '../../services/catalogo.service';
import { FormsModule } from '@angular/forms';
import { ModeloService } from '../../services/modelo.service'; 
import { Modelo } from '../../models/modelo.model';  
import { ModalAgregarModeloComponent } from '../../shared/modal-agregar-modelo/modal-agregar-modelo.component';

//componente para la cotización de seguros de autos
@Component({
  selector: 'app-cotizacion',
  standalone: true,
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ModalAgregarModeloComponent],
})
export class CotizacionComponent implements OnInit {
  form!: FormGroup;
  resultado!: CotizacionResponse | null;
  marcas: string[] = [];
  usos: string[] = [];
  modelos: Modelo[] = [];
  nuevoModelo: string = ''; // Variable para almacenar el modelo ingresado en el modal
  errorMessage: string = '';



  constructor(
    private fb: FormBuilder,
    private cotizacionService: CotizacionService,
    private catalogoService: CatalogoService,
    private modeloService: ModeloService,
    
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [null, [Validators.required, Validators.min(1900)]],
      uso: ['', Validators.required],
      edadConductor: [null, [Validators.required, Validators.min(18)]],
    });

    this.catalogoService.obtenerMarcas().subscribe({
      next: (res) => {
        this.marcas = res.map((m) => m.nombre);
      },
      error: (err) => {
        console.error('Error cargando marcas:', err);
        this.errorMessage = 'Error al cargar las marcas';
      },
    });

    this.catalogoService.obtenerUsos().subscribe({
      next: (res) => {
        this.usos = res.map((u) => u.codigo);
      },
      error: (err) => {
        console.error('Error cargando tipos de uso:', err);
        this.errorMessage = 'Error al cargar los tipos de uso';
      },
    });

    // Obtener los modelos
    this.obtenerModelos();
  }

  cotizar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cotizacionService.cotizar(this.form.value).subscribe({
      next: (res) => {
        this.resultado = res;
      },
      error: (err) => {
        console.error('Error al cotizar:', err);
        this.resultado = null;
        this.errorMessage = 'Hubo un error al calcular la cotización';
      },
    });
  }

  
openModal() {
  const modalElement = document.getElementById('addModelModal');
  // @ts-ignore
  const modal = new (window as any).bootstrap.Modal(modalElement);
  modal.show();
}


  // Método para obtener los modelos desde el API
  obtenerModelos(): void {
     this.modeloService.obtenerModelos().subscribe({
      next: (res) => this.modelos = res.map(m => ({ id: m.id, nombre: m.nombre })),
      error: (err) => console.error('Error cargando modelos:', err),
    }); 
  }

  actualizarListaModelos(): void {
    this.modeloService.obtenerModelos().subscribe({
      next: (res) => {
        this.modelos = res;
      },
      error: (err) => console.error('Error cargando modelos actualizados:', err),
    });
  }
}
