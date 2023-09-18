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

tituloPrinci=[
"Solomillo glaseado con romero y arándanos",
"Bife a la parrilla con ensalada de repollo y tomates",
"Carne en salsa de cebolla verde",
"Carne a la parrilla con verduras frescas"
]

infoPrinci=[
  "Una delicia gourmet que combina la ternura del solomillo con el sabor intenso del glaseado de vino tinto y el toque fresco de los arándanos. Se sirve sobre un cremoso puré de papas.",
  "Un plato clásico y sencillo que consiste en un jugoso bife de ternera cocinado al punto, acompañado de una ensalada fresca y crujiente de repollo y tomates cherry. Ideal para disfrutar al aire libre.",
  "Un plato sabroso y tierno que consiste en un trozo de carne de res bañado en una salsa espesa y brillante de cebolla verde. La carne está cocinada a punto medio y tiene un centro rosado. Se puede acompañar con arroz o verduras.",
  "Un plato sencillo pero delicioso, que combina una jugosa pieza de carne asada con unas rodajas de vegetales verdes, crujientes y saludables. Un toque de tomate le da color y sabor al conjunto."

]

/*Postres */
postress=[1,2,3,4]

tituloPostre=[
  "Pastel de chocolate con cereza y crema batida",
  " Mini cheesecakes con frambuesa y menta",
  "Cupcakes de terciopelo rojo y vainilla con cerezas y chispas",
  "Cheesecake con compota de frutos rojos y menta"


]
 infoPostre=[
   " Un delicioso postre de chocolate oscuro con una cereza roja en el centro. El pastel está servido en un plato blanco con un diseño de chocolate y cuatro montones de crema batida.",

   "Unos pequeños y deliciosos pasteles de queso con una base de galleta. Los pasteles están decorados con crema batida, una frambuesa y una hoja de menta. Los pasteles están dispuestos en una bandeja dorada con un borde de encaje.",
   "Unos ricos y esponjosos cupcakes de dos sabores diferentes. Los de terciopelo rojo tienen un glaseado blanco y una cereza roja. Los de vainilla tienen un glaseado blanco y una chispa dorada. Los cupcakes están en una bandeja blanca sobre una mesa con una planta y un cartel que dice ¨ile¨.",
   "Un cremoso y suave pastel de queso con una capa de frutos rojos encima. El pastel tiene una base de galleta y está acompañado de una hoja de menta. El pastel está en un plato blanco con un fondo borroso."
  ]

/*Guarnicion */

guarniss=[1,2,3,4]

tituloGuarnis=[
  "Bocaditos de queso y pan tostado",
  "Cucharitas de guacamole y nachos",
  "Albóndiga de queso con salsa de hierbas",
  "Mini quiches de queso y verduras"
]

infoGuarnis=[
  "Estos deliciosos bocaditos son ideales para acompañar una bebida o como entrada. Están hechos con pan de molde, queso crema y queso rallado, y se hornean hasta que estén dorados y crujientes. Se sirven con palillos y una ramita de perejil para darles un toque de color.",

  "Estas cucharitas son una forma original y divertida de servir el guacamole, una salsa típica de México hecha con aguacate, cebolla, tomate, limón y cilantro. Cada cucharita lleva una porción de guacamole y un nacho crujiente y sabroso. Son perfectas para compartir en una fiesta o reunión.",

  "Esta albóndiga de queso es un plato suave y esponjoso que se deshace en la boca. Está hecha con queso crema, huevo y harina, y se cocina al vapor. Se sirve con una salsa de hierbas aromáticas y caldo de pollo, que le da un sabor delicioso y fresco. Es una receta fácil y rápida de preparar.",

  "Estas mini quiches son una opción deliciosa y nutritiva para el desayuno o el brunch. Están hechas con masa de hojaldre, huevos, queso, leche y verduras picadas, como cebolla, pimiento, zanahoria y espinaca. Se hornean en moldes individuales hasta que estén doradas y firmes. Se pueden comer calientes o frías, y son ideales para llevar."
]
}

