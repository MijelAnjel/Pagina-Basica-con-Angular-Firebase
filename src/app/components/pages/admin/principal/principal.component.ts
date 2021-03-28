import { Component, OnInit } from '@angular/core';
import { BlogI } from '../../../../models/blog';
import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InicioService } from '../../../../services/inicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {


  banner$: Observable<BlogI[]>;

  editing: boolean = false;
  editingProduct: BlogI;
  productsCollection: AngularFirestoreCollection;
  productDoc: AngularFirestoreDocument<BlogI>;
  product = {} as BlogI;

  constructor(public banner: InicioService) { }

  ngOnInit() {
    this.banner$ = this.banner.getAllPosts();
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
