function addSandwichItem(...items: string[]): void 
{
    if (items.length === 0)
    {
        console.log("Please enter some items!");
    }
    else
    {
        items.forEach((item) => {
            console.log(`The sandwich comprises of: ${item}`);
        })
    }
}

addSandwichItem();
addSandwichItem("Turkey", "Cheese", "Lettuce", "Tomato");
addSandwichItem("Ham", "Swiss Cheese", "Mustard");