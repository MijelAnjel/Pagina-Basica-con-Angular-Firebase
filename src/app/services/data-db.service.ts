import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageI } from '../models/mensajes';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  productDoc: AngularFirestoreDocument<MessageI>;
  productsCollection: AngularFirestoreCollection <MessageI>;

  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('contacts');
  }

  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);
  }

  public getAllPosts(): Observable<MessageI[]> {
    return this.afs.collection('contacts')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as MessageI;
          const id = a.payload.doc.id;
          return { id, ...data};
        })
      )
    );
  }

  deleteProduct(product: MessageI) {
    this.productDoc = this.afs.doc(`contacts/${product.id}`);
    this.productDoc.delete();
  }
}
