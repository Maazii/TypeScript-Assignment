function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var originals = ["David Copperfield", "Harry Houdini", "Teller"];
var changed = make_great(originals);
show_magicians(originals);
show_magicians(changed);
