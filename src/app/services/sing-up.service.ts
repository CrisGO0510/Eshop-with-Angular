import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Importa la interfaz "Form" para tipar los parametros
import { Register, Login } from '../modules/Form';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  // Variable que contendrá la dirección de la api

  API_URI = "https://jsonplaceholder.typicode.com/posts"

  // Generamos una variable llamada 'http' con el clase de 'httpClient' para poder usar sus metodos
  constructor(private http: HttpClient) { }

  // Metodos http

  // ------------------------------REGISTRO E INICIO DE SESION------------------------------

  // Metodo para enviar al servidor los datos de registro del usuario
  // El parametro person contiene un objeto de tipo"Form", (Ver en modules)

  registerClient(person: Register){
    return this.http.post(this.API_URI, person);
  }


  // Metodo para enviar al servidor un objeto con la informacion que el cliente/admin ingrese en el login

  loginClient(person: Login){
    return this.http.post(this.API_URI, person);
  }

  // Metodo para que el admin pueda cambiar los datos de infomación de su cuenta (password, direccion correo, telefono, email)
  // TODO: Tenemos que corregir la ruta de la apiuri

  updateAdmin(id: string, admin: Register){
    return this.http.put(`${this.API_URI}/rutanodeterminada/${id}`, admin);
  }
  
  // ------------------------------FIN DE REGISTRO E INCIO DE SESIÓN------------------------------

  // -----------------------------------------PRODUCTOS-------------------------------------------

    // Metodo para tener la información de todos los productos (Para renderizarlos en pantalla)

    getProducts(){
      return this.http.get(this.API_URI);
    }

    // Metodo para tener la información de un unico producto y mostrar caracteristicas mas especificas

    getOneProduct(id: string){
      return this.http.get(`${this.API_URI}/rutanodeterminada/${id}`);
    }

    // Metodos admin
    
    // Función para editar los valores del stock de un producto

    updateProduct(id: string, stock: string){
      return this.http.put(`${this.API_URI}/rutanodeterminada/${id}`, stock);
    }
  



  // --------------------------------------FIN DE PRODUCTOS--------------------------------------


}
