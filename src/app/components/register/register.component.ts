import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
// Servicio para realizar los metodos http
import { SingUpService } from '../../services/sing-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  // Instanciamos el objeto que le mandaremos a la api
  user = {
    username: '',
    password: '',
    phone: '',
    email: '',
    root: false,
    address: '',
}
  
  // Inyectamos el servicio 'SingUpService' para acceder a sus metodos
  // Especificamente el metodo registerClient

  constructor(
    private singUpService: SingUpService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  /* ---------------------------------------------- VALIDACIONES ---------------------------------------------- */

    // Definimos de que tipo y que contendrá la variable form
  // y esta contendrá todos los datos y validaciones del formulario

  form: FormGroup = new FormGroup({})

  // Definimos el contenido del formulario y sus validators

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]]
    })

    // Este observable me imprimirá en la consola los cambios hechos por el usuario
    this.form.valueChanges
    // El debouceTime añade un delay de 0.5s para que solo se manden las peticiones luego de ese tiempo de inactividad,
    // En este caso cuando deje de escribir
    .pipe (
      debounceTime(500)
    )
    // Nos suscribimos para analizar los cambios del formulario y los imprimimos en pantalla
    .subscribe(value => {
      console.log(value);
    });
   }

   // Función para evitar la recarga automatica y enviar los datos a la consola
   saveForm(event:Event){
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
   }
  
  /* ----------------------------------------- FIN DE LAS VALIDACIONES ---------------------------------------- */
  // Creamos una función que será llamada por el boton enviar y lo que hace es enviar
  // la información del formulario al backend

  // saveForm(){
  //   this.singUpService.registerClient(this.user).subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => console.log(e),
  //     complete: () => console.log('complete')
  //   })

  // }
}
