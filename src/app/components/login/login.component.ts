import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, FormControl, Validator} from '@angular/forms';
import { Login } from 'src/app/modules/Form';
import { SingUpService } from 'src/app/services/sing-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* --------------------------------------- VALIDACIONES --------------------------------------- */

  form: FormGroup | undefined;

  /* ------------------------------------FIN DE LAS VALIDACIONES -------------------------------- */


  // Instanciamos el objeto que le pediremos a la api
  user: Login = {
    username: '',
    password: ''
  }

  // Inyectamos el servicio 'SingUpService' para acceder a sus metodos
  // Especificamente el metodo loginClient

  constructor(private singUpService: SingUpService) { }

  ngOnInit(): void {

  }

  // Creamos una función que será llamada por el boton enviar y lo que hace es enviar
  // la información del formulario al backend

  saveForm() {
    this.singUpService.loginClient(this.user).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    })

  }
}