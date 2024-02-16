function make_album(artistname: string, albumtitle: string, numTracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist: artistname, title: albumtitle };

    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }

    return album;
}

console.log(make_album("A.R. Rahman", "Slumdog Millionaire (Soundtrack from the Motion Picture)", 12));
console.log(make_album("Arijit Singh", "Tum Hi Ho - The Love Anthem"));
console.log(make_album("Lata Mangeshkar", "Lata - A Musical Journey", 10));