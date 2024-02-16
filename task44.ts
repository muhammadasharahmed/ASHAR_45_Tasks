function Sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        console.log("Your sandwich contains:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log(); 
}


Sandwich("Turkey", "Swiss cheese", "Lettuce", "Tomato");
Sandwich("Ham", "Cheddar cheese", "Mustard");
Sandwich(); 