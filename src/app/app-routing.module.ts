import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importando los componentes para el router
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/inicio/inicio.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'shoppingcart',
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }