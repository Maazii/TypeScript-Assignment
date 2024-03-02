function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var magiciannNames = ["David Copperfield", "Harry Houdini", "Teller"];
var greatOnes = make_great(magiciannNames);
show_magicians(greatOnes);
