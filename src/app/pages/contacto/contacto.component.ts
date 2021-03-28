import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { DataDbService } from 'src/app/services/data-db.service';
import { InicioService } from 'src/app/services/inicio.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  inicio$: Observable<BlogI[]>;

  constructor(
    private inicio: InicioService, private dbData: DataDbService
  ) {
    this.contactForm = this.createFormGroup();
   }


  // PATRONES FORMULARIO
  // tslint:disable-next-line: max-line-length
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  contactForm: FormGroup;


  ngOnInit() {
    this.inicio$ = this.inicio.getAllPosts();
  }




  createFormGroup() {
    return new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)]),
      asunto: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  onResetForm() {
    this.contactForm.reset();
    console.log('saved');
  }
  onSaveForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.contactForm.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por tu mensaje, te responderemos a la brevedad',
        showConfirmButton: false,
        timer: 5500
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor, rellena bien los campos para enviar el mensaje',
        showConfirmButton: false,
        timer: 3500
      });
    }
    const newContact = {
      name: '',
      email: '',
      mensaje: '',
      asunto: '',
    };

  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get mensaje() { return this.contactForm.get('mensaje'); }


  // Alerta
  enviar() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Muchas gracias, te responderemos a la brevedad',
      showConfirmButton: false,
      timer: 2500
    });
  }



}
