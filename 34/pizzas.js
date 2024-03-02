var favoritePizzas = ['Margherita', 'Pepperoni', 'Vegetarian'];
console.log("List of favorite pizzas:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log("Statements about favorite pizzas:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
