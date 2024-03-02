type Car = {
    manufacturer: string,
    model: string,
    color?: string,
    mileage?: string
}

function carGenerator(manufacturer: string, model: string, properties?: Partial<Car>): Car
{
    let newCar = {
        manufacturer: `${manufacturer}`,
        model: `${model}`,
        ...properties,
    }

    return newCar;
}

let myCar = carGenerator("Lamborghini", "Aventador", { color: "Black", mileage: "17" });
console.log(myCar);