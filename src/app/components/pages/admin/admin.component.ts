import { Component, OnInit } from '@angular/core';
import { BlogI } from '../../../models/blog';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  posts$: Observable<BlogI[]>;

  editing: boolean = false;
  editingProduct: BlogI;
  productsCollection: AngularFirestoreCollection;
  productDoc: AngularFirestoreDocument<BlogI>;
  product = {} as BlogI;

  constructor(private blog: BlogService) { }

  ngOnInit() {
    this.posts$ = this.blog.getAllPosts();
  }


  // METODO FINAL PARA BORRAR ID O TIENDA
  deleteProduct(event, product): void {
    const confirmacion = confirm('¿Estás seguro que quieres borrar esto?');
    if (confirmacion) {
      this.blog.deleteProduct(product);
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

  addProduct() {
 //   if (this.product.tituloPost !== '' && this.product.parr1 != '' && this.product.parr2 != '') {
      this.blog.addProduct(this.product);
      this.product = {} as BlogI;
    }


}
