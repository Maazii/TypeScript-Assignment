function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

let magicianNames = ["David Copperfield", "Harry Houdini", "Teller"];

show_magicians(magicianNames);
