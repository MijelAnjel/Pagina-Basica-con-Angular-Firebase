import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { InicioService } from 'src/app/services/inicio.service';
import { TestimoniosService } from 'src/app/services/testimonios.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  inicio$: Observable<BlogI[]>;
  texto22: Array <any> = [];

  constructor(
    private inicio: InicioService,
    private sanitizer: DomSanitizer
  ) {

   }

  ngOnInit() {
    this.inicio$ = this.inicio.getAllPosts();
  }

  getEmbedUrl(texto22) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + texto22 + '?ecver=2')
  }


}
