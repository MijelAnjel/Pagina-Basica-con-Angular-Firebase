import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent {

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public URLlogo = '';
  public porcentaje = 0;
  public finalizado = false;

  constructor(private storage: AngularFireStorage) { }

  ///////////////////////// IMAGENES //////////

    // Tarea para subir archivo
    public tareaCloudStorage(nombreArchivo: string, datos: any) {
      return this.storage.upload(nombreArchivo, datos);
    }

    // Referencia del archivo
    public referenciaCloudStorage(nombreArchivo: string) {
      return this.storage.ref(nombreArchivo);
    }

  // Evento que se gatilla cuando el input de tipo archivo cambia SUBIR FOTO
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  // Sube el archivo IMAGEN DE PRODUCTO a Cloud Storage
  public subirArchivo() {
    const archivo = this.datosFormulario.get('archivo');
    const referencia = this.referenciaCloudStorage(this.nombreArchivo);
    const tarea = this.tareaCloudStorage(this.nombreArchivo, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      // tslint:disable-next-line: triple-equals
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
  }

   // Sube el LOGO archivo a Cloud Storage
   public subirLogo() {
    const archivo = this.datosFormulario.get('archivo');
    const referencia = this.referenciaCloudStorage(this.nombreArchivo);
    const tarea = this.tareaCloudStorage(this.nombreArchivo, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      // tslint:disable-next-line: triple-equals
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLlogo = URL;
    });
  }

/* To copy Text from Textbox */
copyInputMessage(inputElement) {
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

}
