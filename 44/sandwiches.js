function addSandwichItem() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("Please enter some items!");
    }
    else {
        items.forEach(function (item) {
            console.log("The sandwich comprises of: ".concat(item));
        });
    }
}
addSandwichItem();
addSandwichItem("Turkey", "Cheese", "Lettuce", "Tomato");
addSandwichItem("Ham", "Swiss Cheese", "Mustard");
