let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Dynamo", "Criss Angel"];

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

magicians = make_great(magicians);
show_magicians(magicians);