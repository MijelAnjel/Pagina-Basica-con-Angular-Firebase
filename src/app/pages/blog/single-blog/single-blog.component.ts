import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  public posts$: Observable<BlogI>;

  constructor(private blog: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    const idPost = this.route.snapshot.params.id;
    this.posts$ = this.blog.getOnePost(idPost);
  }

}
