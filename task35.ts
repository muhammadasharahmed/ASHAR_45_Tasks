const animals: string[] = ["Lion", "Tiger", "Leopard"];

for (let animal of animals) {
    console.log(animal);
    if (animal === "Lion") {
        console.log(`${animal} is a majestic pride-dwelling predator.`);
    } else if (animal === "Tiger") {
        console.log(`${animal} is a powerful solitary hunter with striped fur.`);
    } else if (animal === "Leopard") {
        console.log(`${animal} is an agile spotted cat thriving in diverse habitats.`);
    }
}

console.log("These animals belong to the cat family and are apex predators in their respective ecosystems.");