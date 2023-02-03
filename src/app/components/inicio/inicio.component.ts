import { Component, OnInit } from '@angular/core';
import { SingUpService } from 'src/app/services/sing-up.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor(private services: SingUpService) { }

  ngOnInit(): void {
    // Ejecutamos la función apenas cargue la pagina para que renderice todos los productos
    this.getProducts()
  }

  // Array que contendrá toda la información de los productos en forma de objetos
  products: any = []

  // Funcion par traer el producto con la id y retornarlo en la varible product
  getProducts() {
    this.services.getProducts().subscribe({
      next: (v) => this.products = v,
      error: (e) => console.log(e),
      complete: () => console.log(this.products)
    })
  }
}
