function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

let magiciannNames = ["David Copperfield", "Harry Houdini", "Teller"];

let greatOnes = make_great(magiciannNames)

show_magicians(greatOnes);
