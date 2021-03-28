import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  inicio$: Observable<BlogI[]>;

  constructor(    private inicio: InicioService,) { }

  ngOnInit() {
    this.inicio$ = this.inicio.getAllPosts();
  }



}
