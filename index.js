const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//A) Las Pizzas que tengan un id impar:

pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0){
    console.log(`La pizza ${pizza.nombre} tiene un id impar (${pizza.id}).`);
  }
});

//B) ¿Hay alguna pizza que valga menos de $600?

const pizzaMenorA600 = pizzas.some((pizza) => pizza.precio < 600);

if (pizzaMenorA600){
  console.log("Si, hay al menos una pizza que cuesta menos de $600.");

} else{
  console.log("No, no hay ninguna pizza que cueste menos de $600.")
}

//C) El nombre de cada pizza con su respectivo precio:

pizzas.forEach((pizza) => {
  console.log(` La ${pizza.nombre} tiene un precio de $${pizza.precio}.`)
});

//D) Todos los ingredientes de cada pizza:

pizzas.forEach((pizza) => {
  console.log(`Los ingredientes de la ${pizza.nombre} son: `);
  
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(` - ${ingrediente}`);
  });
});