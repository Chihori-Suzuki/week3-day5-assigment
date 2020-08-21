let library = {

  songs: { s01: { id: "s01",
                   name: "Money",
                   artist: "Pink Floyd",
                   album: "Dark Side of the Moon" },
            s02: { id: "s02",
                   name: "Blessings",
                   artist: "Chance, The Rapper",
                   album: "Colouring Book"},
            s03: { id: "s03",
                   name: "Purple Haze",
                   artist: "Jimi Hendrix",
                   album: "Are You Experienced"}
          },


  playlists: { p01: { id: "p01",
                      name: "Coding Jamz",
                      tracks: ["s01", "s03"]
                    },
               p02: { id: "p02",
                      name: "Music to cry to",
                      tracks: ["s02"]
                    }
             },


  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  printAllSongNames: function() {
    //No1. print the names of all the songs to the console
    Object.keys(library.songs).forEach(function(elm){
      console.log(library.songs[elm].name);
    });
  },

  printSongName: function(songID) {
    //No2. print the name of a song when given its ID
    Object.keys(library.songs).forEach(function(elm){
      if(library.songs[elm].id === songID){
        console.log(library.songs[elm].name);
      }
    });
  },

  printPlaylistName: function(playlistID) {
    //No3. Print the name of a playlist when given its ID 
    Object.keys(library.playlists).forEach(function(elm){
      if(library.playlists[elm].id === playlistID){
        console.log(library.playlists[elm].name);
      }
    });

  },

  printAllPlaylistNames: function() {
    //No4, Print the nmaes of all the playlists 
    Object.keys(library.playlists).forEach(function(elm){
        console.log(library.playlists[elm].name);
      
    });
  },

  /* No.5 */
  printPlaylistSongs: function(playlistID) {
   
    //Print the names of all the songs in whatever playlist id was given

    Object.keys(library.playlists).forEach(function(elm){     // playlists loop
      if(library.playlists[elm].id === playlistID){           // playlist.id = playlistID
        // console.log(library.playlists[elm].tracks);

        const arr = library.playlists[elm].tracks;            // add playlist.tracks to array
        arr.forEach(function(val){                            // array loop (tracks)
          Object.keys(library.songs).forEach(function(elm){   // songs loop
            if(library.songs[elm].id === val){                // playlist.track = songs.id
              console.log(library.songs[elm].name);
            }
          });
        });

      }
    });

  },

  /* No.6 */
  addSong: function(name, artist, album) {
    let songId = "";
    let newSongId = "";
    // add a new song to the songs object. The song should be its own object, 
    // containing a randomly generated id, a name, an artist, and an album 
    // console.log to confirm that the song has been added.

    for(let keys in library.songs){
      // console.log(library.songs[keys]);

      songId = library.songs[keys].id;
      songId = songId.substr(1, songId.length-1);
      newSongId = Number(songId) + 1;
      newSongId = "s"+ ("00" + newSongId).slice(-2).toString();
    }
    
    library.songs[newSongId] = {
      id:  newSongId,
      name: name,
      artist: artist,
      album: album
    }

    console.log(library.songs);

  },

  /* No.7 */
  addSongToPlaylist: function(songID, playlistID) {
    // given a songID, add that song to the playlist for the given playlistID
    // console.log the playlist to make sure the song was added.

    Object.keys(library.songs).forEach(function(song){
      if(library.songs[song].id === songID){

        Object.keys(library.playlists).forEach(function(list){
          if(library.playlists[list].id === playlistID){
            library.playlists[list].tracks.push(songID);
            library.playlists[list].tracks.sort();
          }
        });
      }
    });

    console.log(library.playlists);

  },

  addPlaylist: function(name, arrOfSongs) {
    // add a new playlist to the playlist object. it will be
    // containing a randomly generated id, a name, and an array of songs to be added to the playlist 
    // console.log to confirm that the playlist has been added.
    
    let playID = "";
    for(let keys in library.playlists){
      // console.log(library.songs[keys]);

      playID = library.playlists[keys].id;
      playID = playID.substr(1, playID.length-1);
      newplayID = Number(playID) + 1;
      newplayID = "p"+ ("00" + newplayID).slice(-2).toString();
    }

    library.playlists[newplayID] = {
      id: newplayID,
      name: name,
      tracks: arrOfSongs
    }

    console.log(library.playlists);

  },





}

// console.log(library.generateUid());
// console.log(Object.keys(library.songs))

// library.addSongToPlaylist('s02', 'p02');

// console.log(library.songs);


/**************** Start  ********************/ 
// library.printAllSongNames();

// library.printSongName("s02");

// library.printPlaylistName("p02");

// library.printAllPlaylistNames();

/* No.5 */
// library.printPlaylistSongs("p01");

/* No.6 */
// library.addSong("Colour", "Hikaru Utada", "FinalAlbum");

/* No.7 */
// library.addSongToPlaylist("s01","p02");

/* No.8 */
library.addPlaylist("New Track", ["s01", "s02"]);

