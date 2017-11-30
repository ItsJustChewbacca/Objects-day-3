var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

function printPlaylists() {
  var target = library.playlists;
  for(var playlist in target) {
    console.log(target[playlist].id + ": " + target[playlist]['name'] + " - "
      + target[playlist]['tracks'].length + " tracks");
  }
};
printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

function printTracks () {
  var target = library.tracks;
  for( var track in target){
    console.log( target[track].id + ": " + target[track]['name']
     + " by " + target[track]['artist'] + " (" + target[track]['album']
     + ')')
  }

};
printTracks();
    console.log('---------')



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

function printPlaylist (playlistId) {
  var id = library.playlists[playlistId]['id'];
  var name = library.playlists[playlistId]['name'];
  var tracks = library.playlists[playlistId]['tracks'].length;
  console.log(id + ": " + name + " - " + tracks + " tracks");
  var target = library.tracks;
  for( var x in target){
    if( target[x]['id'] === 't03'){
      return "";
    }
    console.log(target[x]['id'] + ': ' + target[x]['name'] + ' by '
    + target[x]['artist'] + ' (' + target[x]['album'] + ')'  )
  }
};

printPlaylist("p01");
console.log('---------')
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  library.playlists[playlistId].tracks.push(trackId);
}
addTrackToPlaylist('t01', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid()
  var newTrack = {
    'id': newId,
    'name': name,
    'artist': artist,
    'album': album
  }
  library.tracks[newId] = newTrack;

}
addTrack("luke is the best ", "luke", "whattachump" );
printTracks();

// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid()
  var newPlaylist = {
    "id": newId,
    "name": name,
    "tracks": []
  }
  library.playlists[newId] = newPlaylist
}
addPlaylist("bob");
printPlaylists();




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}