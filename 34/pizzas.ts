let favoritePizzas = ['Margherita', 'Pepperoni', 'Vegetarian'];

console.log("List of favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}

console.log("Statements about favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");
