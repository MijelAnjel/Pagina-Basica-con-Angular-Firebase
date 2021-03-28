import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageI } from 'src/app/models/mensajes';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  mensaje$: Observable<MessageI[]>;

  constructor(private mensajes: DataDbService) { }

  ngOnInit() {
    this.mensaje$ = this.mensajes.getAllPosts();
  }

  deleteProduct(event, mensajeborrar): void {
    const confirmacion = confirm('¿Estás seguro que quieres borrar esto?');
    if (confirmacion) {
      this.mensajes.deleteProduct(mensajeborrar);
    }
  }
}
