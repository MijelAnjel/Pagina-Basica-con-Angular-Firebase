import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule, NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from 'src/app/services/blog.service';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { InicioService } from 'src/app/services/inicio.service';
import { TestimoniosService } from '../../services/testimonios.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {

  posts$: Observable<BlogI[]>;
  inicio$: Observable<BlogI[]>;
  testimonio$: Observable<BlogI[]>;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blog: BlogService,
    private inicio: InicioService,
    private testi: TestimoniosService
  ) {

   }

  ngOnInit() {
    this.posts$ = this.blog.getAllPosts();
    this.inicio$ = this.inicio.getAllPosts();
    this.testimonio$ = this.testi.getAllPosts();
  }

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent.source);
    console.log(NgbSlideEventSource.ARROW_LEFT);
    console.log(slideEvent.paused);
    console.log(NgbSlideEventSource.INDICATOR);
    console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  startCarousel() {
    this.carousel.cycle();
  }

  pauseCarousel() {
    this.carousel.pause();
  }

  moveNext() {
    this.carousel.next();
  }

  getPrev() {
    this.carousel.prev();
  }

  goToSlide(slide) {
    this.carousel.select(slide);
  }

}



