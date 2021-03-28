import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

/* FIREBASE */
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';



import {MatCardModule} from '@angular/material/card';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleBlogComponent } from './pages/blog/single-blog/single-blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensajesComponent } from './components/pages/admin/mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosComponent,
    ContactoComponent,
    NosotrosComponent,
    PlanesComponent,
    BlogComponent,
    SingleBlogComponent,
    MensajesComponent
        ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule,
    BrowserAnimationsModule
  ],

  providers: [
    AngularFireAuth,
    { provide: BUCKET, useValue: 'starcoaching-95fae.appspot.com' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

