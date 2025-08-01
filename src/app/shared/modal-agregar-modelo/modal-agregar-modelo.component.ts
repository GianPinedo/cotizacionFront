import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ModeloService } from '../../services/modelo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-agregar-modelo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-agregar-modelo.component.html',
  styleUrls: ['./modal-agregar-modelo.component.scss']
})
export class ModalAgregarModeloComponent {
  nuevoModelo: string = '';
  mensajeExito: string = ''; 
  mostrarMensajeExito: boolean = false;
  @Output() modeloAgregado = new EventEmitter<void>();
  @ViewChild('addModelModal') modalRef!: ElementRef;

  constructor( private modeloService: ModeloService) {}

  
  agregarModelo(): void {
    if (this.nuevoModelo.trim()) {
      this.modeloService.crearModelo({ nombre: this.nuevoModelo }).subscribe({
        next: (res) => {
          this.modeloAgregado.emit(); 
          this.nuevoModelo = ''; 
          this.mensajeExito = 'Modelo agregado exitosamente'; // Mensaje de éxito
          this.mostrarMensajeExito = true;
          const modal = new (window as any).bootstrap.Modal(this.modalRef.nativeElement);
          modal.hide();  
        },
        error: (err) => console.error('Error al agregar modelo:', err),
      });
    }
  }
}
