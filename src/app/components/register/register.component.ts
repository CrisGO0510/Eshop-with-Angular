import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/modules/Form';
// Servicio para realizar los metodos http
import { SingUpService } from '../../services/sing-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  // Instanciamos el objeto que le mandaremos a la api
  user : Register = {
    Username: '',
    Password: '',
    Phone: '',
    Email: '',
    Address: '',
    root: false,
}
  
  // Inyectamos el servicio 'SingUpService' para acceder a sus metodos
  // Especificamente el metodo registerClient

  constructor(private singUpService: SingUpService) { }

  ngOnInit(): void {
    
  }

  /* ---------------------------------------------- VALIDACIONES ---------------------------------------------- */

  
  
  /* ----------------------------------------- FIN DE LAS VALIDACIONES ---------------------------------------- */
  // Creamos una función que será llamada por el boton enviar y lo que hace es enviar
  // la información del formulario al backend

  saveForm(){
    this.singUpService.registerClient(this.user).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })
  
    console.log(this.user);

  }
}
