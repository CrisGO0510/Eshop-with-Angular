import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Importa la interfaz "Form" para tipar los parametros
import { Form } from '../modules/Form';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  API_URI = ""

  constructor(private http: HttpClient) { }

  registerClient(person: Form){
    return this.http.post(this.API_URI, person);
  }

}
