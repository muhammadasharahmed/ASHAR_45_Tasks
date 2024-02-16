let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Dynamo", "Criss Angel"];

function make_great(magicians: string[]): string[] {
    
    let modifiedMagicians: string[] = []; 
    
    for (let magician of magicians) {
        modifiedMagicians.push("The Great " + magician);
        }
    return modifiedMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let originalMagicians: string[] = [...magicians];
let greatMagicians: string[] = make_great(originalMagicians);
 

console.log("Original Magicians:");
show_magicians(originalMagicians); 

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);