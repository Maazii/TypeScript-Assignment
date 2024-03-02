type anAlbum = {
    artist: string,
    title: string,
    numberOfTracks?: number
}

function make_album(artist: string, title: string, numberOfTracks?: number): anAlbum
{
    let sAlbum = {
        artist: `${artist}`,
        title: `${title}`,
        numberOfTracks: numberOfTracks
    }

    return sAlbum;
}

let record1 = make_album("DJSomething", "Homer", 5);
let record2 = make_album("AdHominem", "MyWorld");
let record3 = make_album("Pearl", "The Transcendent Suffering", 18);

console.log(`Artist name: ${record1.artist}, album title: ${record1.title}, number of tracks: ${record1.numberOfTracks}`);
console.log(`Artist name: ${record2.artist}, album title: ${record2.title}`);
console.log(`Artist name: ${record3.artist}, album title: ${record3.title}, number of tracks: ${record3.numberOfTracks}`);