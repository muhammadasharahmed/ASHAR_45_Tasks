function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
    const car: any = { manufacturer, model };

    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;
}

const myCar = createCar("Toyota", "Corolla", ["color", "red"], ["year", 2022]);

console.log(myCar);