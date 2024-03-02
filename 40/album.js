function make_album(artist, title, numberOfTracks) {
    var sAlbum = {
        artist: "".concat(artist),
        title: "".concat(title),
        numberOfTracks: numberOfTracks
    };
    return sAlbum;
}
var record1 = make_album("DJSomething", "Homer", 5);
var record2 = make_album("AdHominem", "MyWorld");
var record3 = make_album("Pearl", "The Transcendent Suffering", 18);
console.log("Artist name: ".concat(record1.artist, ", album title: ").concat(record1.title, ", number of tracks: ").concat(record1.numberOfTracks));
console.log("Artist name: ".concat(record2.artist, ", album title: ").concat(record2.title));
console.log("Artist name: ".concat(record3.artist, ", album title: ").concat(record3.title, ", number of tracks: ").concat(record3.numberOfTracks));
