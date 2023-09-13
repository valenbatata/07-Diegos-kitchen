import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  mostrar1 = false
  mostrar2 = false
  mostrar3 = false
  mostrar4 = false
  mostrar5 = false

  /*Productos (servicios)*/
  productoss = [1, 2, 3, 4]
  titulo = [
    "Catering Empresarial",
    "Catering a Domicilio",
    "Catering Móvil",
    "Catering Gourmet"
  ]
  info = [
    "Este servicio tiene un precio entre 5.639 y 18.797 pesos por persona, dependiendo del número de personas, el tipo de comida y la duración del evento. Algunos ejemplos de platos que puedes ofrecer son: ensaladas, bocadillos, canapés, empanadas, quiches, tartas, fruta, café y refrescos.",
    "Este servicio tiene un precio entre 3.759 y 11.278 pesos por persona, dependiendo del menú elegido y del número de comensales. Algunos ejemplos de platos que puedes ofrecer son: paella, lasaña, pollo al horno, ensaladilla rusa, croquetas, tortilla de patatas, flan, arroz con leche y vino.",
    "Este servicio tiene un precio entre 1.128 y 3.759 pesos por persona, dependiendo del tipo de comida y de la demanda. Algunos ejemplos de platos que puedes ofrecer son: hamburguesas, perritos calientes, pizzas, tacos, crepes, helados y bebidas.",
    "Este servicio tiene un precio superior a los 37.595 pesos por persona, dependiendo del menú seleccionado y del nivel de exigencia del cliente. Algunos ejemplos de platos que puedes ofrecer son: foie gras, caviar, langosta, solomillo, risotto, trufa, chocolate y champagne."
  ]

  /*Entradas*/
  entradass = [1, 2, 3, 4]
  tituloEntrada = [
    "Brochetas de pollo frito",
    "Bocaditos de jamón, rúcula y tomates secos sobre pan tostado",
    "Vacitos en brochetas",
    "Albóndigas"
  ]
  infoEntrada=[
    "Con un crujiente rebozado dorado, bañadas en una salsa blanca y espolvoreadas con cebollas verdes. Un plato sencillo pero delicioso, ideal para compartir o disfrutar solo. ¿Te apetece probarlo? 😋",
    "Deliciosos bocaditos de pan con hojas verdes, carne curada y tomate seco. Una opción ideal para compartir en una reunión o celebración. Colores vivos y sabores intensos en un solo bocado.",
    "Aperitivos originales y variados en vasitos con brochetas. Frutas, quesos, carnes y más en pequeñas porciones. Un toque de elegancia y sabor para cualquier ocasión. Ambiente acogedor y distendido en el fondo.",
    "Albóndigas jugosas y tiernas en salsa amarilla sobre una bandeja de pizarra negra. Un aperitivo sencillo y delicioso que combina con los brownies del fondo. Un toque de verde con la planta que adorna la mesa."
  ]

  /*Plato Principal */
platoPrinci=[1, 2, 3, 4]

}

