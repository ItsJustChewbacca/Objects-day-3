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
             },
  printPlaylists: function() {
    var target = this.playlists;
    for(var playlist in target) {
    console.log(target[playlist].id + ": " + target[playlist]['name'] + " - "
      + target[playlist]['tracks'].length + " tracks");
    }
  },
  printTracks: function() {
    var target = this.tracks;
    for( var track in target){
    console.log( target[track].id + ": " + target[track]['name']
     + " by " + target[track]['artist'] + " (" + target[track]['album']
     + ')')
    }
  },
  printPlaylist: function(playlistId) {
  var id = this.playlists[playlistId]['id'];
  var name = this.playlists[playlistId]['name'];
  var tracks = this.playlists[playlistId]['tracks'].length;
  console.log(id + ": " + name + " - " + tracks + " tracks");
  var target = this.tracks;
  for( var x in target){
    if( target[x]['id'] === 't03'){
      return "";
    }
    console.log(target[x]['id'] + ': ' + target[x]['name'] + ' by '
    + target[x]['artist'] + ' (' + target[x]['album'] + ')'  )
  }
},
  addTrackToPlaylist: function(trackId, playlistId) {

  this.playlists[playlistId].tracks.push(trackId);
},
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
  addTrack: function (name, artist, album) {
  var newId = this.uid()
  var newTrack = {
    'id': newId,
    'name': name,
    'artist': artist,
    'album': album
  }
  this.tracks[newId] = newTrack;
},
addPlaylist: function (name) {
  var newId = this.uid()
  var newPlaylist = {
    "id": newId,
    "name": name,
    "tracks": []
  }
  this.playlists[newId] = newPlaylist
}


};


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


  // vafunction printPlaylists() {r target = this.playlists;
  // for(var playlist in target) {
  //   console.log(target[playlist].id + ": " + this[playlist]['name'] + " - "
  //     + this[playlist]['tracks'].length + " tracks");

library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// printTracks: function() {
//   var target = this.tracks;
//   for( var track in target){
//     console.log( target[track].id + ": " + target[track]['name']
//      + " by " + target[track]['artist'] + " (" + target[track]['album']
//      + ')')
//   }
// };
library.printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// function printPlaylist (playlistId) {
//   var id = library.playlists[playlistId]['id'];
//   var name = library.playlists[playlistId]['name'];
//   var tracks = library.playlists[playlistId]['tracks'].length;
//   console.log(id + ": " + name + " - " + tracks + " tracks");
//   var target = library.tracks;
//   for( var x in target){
//     if( target[x]['id'] === 't03'){
//       return "";
//     }
//     console.log(target[x]['id'] + ': ' + target[x]['name'] + ' by '
//     + target[x]['artist'] + ' (' + target[x]['album'] + ')'  )
//   }
// };

//library.printPlaylist("p01");
// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {

//   library.playlists[playlistId].tracks.push(trackId);
// },
library.addTrackToPlaylist('t01', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {
//   var newId = uid()
//   var newTrack = {
//     'id': newId,
//     'name': name,
//     'artist': artist,
//     'album': album
//   }
//   library.tracks[newId] = newTrack;
// },
//library.addTrack("luke is the best ", "luke", "whattachump" );
library.printTracks();

// adds a playlist to the library

// var addPlaylist = function (name) {
//   var newId = this.uid()
//   var newPlaylist = {
//     "id": newId,
//     "name": name,
//     "tracks": []
//   }
//   library.playlists[newId] = newPlaylist
// }
library.addPlaylist("bob");
library.printPlaylists();