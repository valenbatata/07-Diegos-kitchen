import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos1 = [1, 2, 3, 4];
  titulo = [
    "Catering Empresarial",
    "Catering a Domicilio",
    "Catering Móvil",
    "Catering Gourmet"
  ];
  info = [
    "Este servicio tiene un precio entre 5.639 y 18.797 pesos por persona, dependiendo del número de personas, el tipo de comida y la duración del evento. Algunos ejemplos de platos que puedes ofrecer son: ensaladas, bocadillos, canapés, empanadas, quiches, tartas, fruta, café y refrescos.",
    "Este servicio tiene un precio entre 3.759 y 11.278 pesos por persona, dependiendo del menú elegido y del número de comensales. Algunos ejemplos de platos que puedes ofrecer son: paella, lasaña, pollo al horno, ensaladilla rusa, croquetas, tortilla de patatas, flan, arroz con leche y vino.",
    "Este servicio tiene un precio entre 1.128 y 3.759 pesos por persona, dependiendo del tipo de comida y de la demanda. Algunos ejemplos de platos que puedes ofrecer son: hamburguesas, perritos calientes, pizzas, tacos, crepes, helados y bebidas.",
    "Este servicio tiene un precio superior a los 37.595 pesos por persona, dependiendo del menú seleccionado y del nivel de exigencia del cliente. Algunos ejemplos de platos que puedes ofrecer son: foie gras, caviar, langosta, solomillo, risotto, trufa, chocolate y champagne."
  ];
}
