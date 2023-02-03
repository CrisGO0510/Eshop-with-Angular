import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/modules/Form';
import { SingUpService } from 'src/app/services/sing-up.service';


@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit{

  constructor(
    // Inyectamos ActivatedRoute para poder tomar el parametro de la url y asignarlo a una variable (id)
    private route : ActivatedRoute,
    // Inyectamos SingUpService para usar los metodos http (getOneProduct) y así traer los datos de
    // los productos desde la base de datos
    private services : SingUpService
    ){}

    // Variable que será usada para identificar que producto traer
    id:any = '';
    // Variable que alojará toda la información de un producto

    // TODO: Cambiar el modules/Form, y la variable API de services/sing-up 
    product:product = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    }

  ngOnInit(): void {
    // Función para que la variable id tenga el parametro de la url
    this.id = this.route.snapshot.paramMap.get('id');
    // Función que llamará el producto con la id
    this.getOneProduct(this.id);
  }

  // Funcion par traer el producto con la id y retornarlo en la varible product
  getOneProduct(gId:string) {
    this.services.getOneProduct(gId).subscribe({
      next: (v: any) => this.product = v[0],
      error: (e) => console.log(e),
      complete: () => console.log(this.product)
    })
  }

}
