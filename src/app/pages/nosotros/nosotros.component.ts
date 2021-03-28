import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { InicioService } from 'src/app/services/inicio.service';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  inicio$: Observable<BlogI[]>;

  constructor(
    private inicio: InicioService
  ) {

   }

  ngOnInit() {
    this.inicio$ = this.inicio.getAllPosts();
  }


}
