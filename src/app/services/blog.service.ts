import { Injectable } from '@angular/core';
import { BlogI } from '../models/blog';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  products: Observable<BlogI[]>;
  productDoc: AngularFirestoreDocument<BlogI>;
  productsCollection: AngularFirestoreCollection <BlogI>;


  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('blog');
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as BlogI;
          data.id = a.payload.doc.id;
          return data;
        })
      ));
  }


  public getAllPosts(): Observable<BlogI[]> {
    return this.afs.collection('blog')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as BlogI;
          const id = a.payload.doc.id;
          return { id, ...data};
        })
      )
    );
  }



  public getOnePost(id: BlogI): Observable<BlogI> {
    return this.afs.doc<BlogI>(`blog/${id}`).valueChanges();
  }

  updateProduct(product: BlogI) {
    this.productDoc = this.afs.doc(`blog/${product.id}`);
    this.productDoc.set(product);
  }

  deleteProduct(product: BlogI) {
    this.productDoc = this.afs.doc(`blog/${product.id}`);
    this.productDoc.delete();
  }

  addProduct(product: BlogI) {
    this.productsCollection.add(product);
  }

  addId(id: BlogI) {
    this.productsCollection.add(id);
  }

}

