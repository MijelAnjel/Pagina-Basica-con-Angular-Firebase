import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogI } from 'src/app/models/blog';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  blog$: Observable<BlogI[]>;

  editing: boolean = false;
  editingProduct: BlogI;
  productsCollection: AngularFirestoreCollection;
  productDoc: AngularFirestoreDocument<BlogI>;
  product = {} as BlogI;

  constructor(public banner: TestimoniosService) { }

  ngOnInit() {
    this.blog$ = this.banner.getAllPosts();
  }

  // METODO FINAL PARA BORRAR ID O TIENDA
  deleteProduct(event, product): void {
    const confirmacion = confirm('¿Estás seguro que quieres borrar esto?');
    if (confirmacion) {
      this.banner.deleteProduct(product);
    }
  }
  editProduct(event, product) {
      this.editingProduct = product;
      this.editing = !this.editing;
    }

     // METODO PARA MODIFICAR ITEM
 updateProduct(product: BlogI) {
   this.banner.updateProduct(this.editingProduct);
   this.editingProduct = {} as BlogI;
   this.editing = false;
 }

 addProduct() {
    this.banner.addProduct(this.product);
    this.product = {} as BlogI;
}

}
