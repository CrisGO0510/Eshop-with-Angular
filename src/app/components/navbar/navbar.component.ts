import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Función para saber si existe el item token en el local storage

  userValidator:boolean = !!localStorage.getItem('token');

  logOut() {
    localStorage.removeItem('token');
    location.reload();
  }

  
  constructor(){
    console.log(this.logOut);
  }

}
