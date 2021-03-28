import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SingleBlogComponent } from './pages/blog/single-blog/single-blog.component';
import { MensajesComponent } from './components/pages/admin/mensajes/mensajes.component';



const routes: Routes = [
  {path: 'IndexComponent', component: IndexComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'acerca-de-mi', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'contratar-servicios', component: PlanesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'single-blog/:id', component: SingleBlogComponent},

  { path: 'adminmacamodulekey', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule) },
  {path: 'mensajesadminmacamodulekey', component: MensajesComponent},


  { path: '', component: IndexComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
