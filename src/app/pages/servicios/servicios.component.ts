import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  inicio$: Observable<BlogI[]>;

  constructor(
    private inicio: InicioService,
  ) {}

  ngOnInit() {
    this.inicio$ = this.inicio.getAllPosts();
  }


}
