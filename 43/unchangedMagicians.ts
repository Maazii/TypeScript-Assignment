function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}

let originals = ["David Copperfield", "Harry Houdini", "Teller"];

let changed = make_great(originals)

show_magicians(originals)
show_magicians(changed);
