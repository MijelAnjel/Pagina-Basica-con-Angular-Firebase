import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogI } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts$: Observable<BlogI[]>;

  editing: boolean = false;
  editingProduct: BlogI;
  productsCollection: AngularFirestoreCollection<BlogI>;
  productDoc: AngularFirestoreDocument<BlogI>;

  constructor(private blog: BlogService) { }

  ngOnInit() {
    this.posts$ = this.blog.getAllPosts();
  }

    // METODO FINAL PARA BORRAR ID O TIENDA
    deleteProduct(id: any): void {
      const confirmacion = confirm('¿Estás seguro que quieres borrar tu tienda?');
      if (confirmacion) {
        this.blog.deleteProduct(id);
      }
    }
    editProduct(event, product) {
        this.editingProduct = product;
        this.editing = !this.editing;
      }

       // METODO PARA MODIFICAR ITEM
   updateProduct(product: BlogI) {
     this.blog.updateProduct(this.editingProduct);
     this.editingProduct = {} as BlogI;
     this.editing = false;
   }

}
