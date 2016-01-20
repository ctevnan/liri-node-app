//2: make it so you grab the data from keys.js and 
//store it into a variable to use

//3: make it so liri.js can take in the following argument: spotify-this-song
// so if you succeed, running the following commands in your terminal (aka node.js command prompt)
// will do the following things:

//node liri.js spotify-this-song '<song name here>'

//shows the following info about the chosen song in terminal:
// -artist(s)
// -song name
// -preview link of the song from spotify
// -album
// -song name

//if no song is provided then your program will default to:
// 'whats my age again' by blink 182

//module.exports is the object that is actually returned as the result of a require call
//the exports variable is initially set to that same object. so in the module code, you would usually write something like this:

//var myFunc1 = function() {...};
//var myFunc2 = function() {...};
//exports.myFunc1 = myFunc1;
//exports.myFunc2 = myFunc2;

//this exports or exposes the internally scoped functions myFunc1 and myFunc2
//in the calling code you would use:

//var m = require('keys.js');
//m.myFunc1();

//the last line shows how the result of require is usually just a plain object whose properties may be accessed

//if you wish to assign a new object (or a function reference) to exports then you should also assign that new object to module.exports
//note: the name added to the exports object does not have to be the same as the module's internally scoped name for the  value youre adding, so you could have

//var myVeryLongInternalName = function(){...};
//exports.shortName = myVeryLongInternalName;
//add other objects, functions, as required

//followed by

//var m = require('mymodule');
//m.shortName(); 
//invokes module.myVeryLongInternalName

//var keysData?

//request spotify?

//goal: make it so you grab the data from keys.js and 
//store it into a variable to use (var secretKeys)

var secretKeys = require("./keys.js");
// secretKeys.twitterKeys.consumer_key,
//after exporting it on the twitter keys page 
//console.log(secretKeys.twitterKeys.consumer_key);


//3: make it so liri.js can take in the following argument: spotify-this-song
// so if you succeed, running the following commands in your terminal (aka node.js command prompt)
// will do the following things:
var spotify = require("spotify");

// console.log(spotify);
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);
//node liri.js spotify-this-song '<song name here>'

//shows the following info about the chosen song in terminal:
// -artist(s)
// -song name
// -preview link of the song from spotify
// -album

//if no song is provided then your program will default to:
// 'whats my age again' by blink 182

// liri.js require("spotify-this-song");
// "spotify-this-song" = ["songName", "artist", "previewLink", "album"];
// node liri.js spotify-this-song '<hello>';
// spotify-this-song.show("artist", "songName", "previewLink", "album");
/////////////////////////////////////////////////////////////////////////////////////
//starting next problem: movie-this
//if you enter node liri.js movie-this '<movie name here>'
//this would output the following into terminal:
// title, year, IMDB rating, country, language, plot, actors, Rotten Tomatoes Rating, Rotten Tomatoes Url,
//if no movie is provided, then the program will output info for the movie 'Mr. Nobody'
var request = require('request');

process.argv[3];
var queryMovie = process.argv[3];
var actionSearch = process.argv[2];
switch(actionSearch){
  case "movie-this":
    request('http://www.omdbapi.com/?t=' + queryMovie, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) //show the HTML for the Google homepage
      }
    });
  break;
  case "spotify-this":
  spotify.search({ type: 'track', query: process.argv[3] }, function(err, data){
  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }
        //do something with 'data'
        // console.log(data.tracks.items[0].preview_url);
        // console.log(data.tracks.items[0].name);
        // console.log(data.tracks.items[0].artists[0].name);
        // console.log(data.tracks.items[0].album.name);
        // if there is no song inputted then default to whats my age again by artist blink 182
     if (data.tracks.items[0].artists[0].name === undefined){
       console.log('No name entered')
    }  else { console.log(data.tracks.items[0].preview_url)
            console.log(data.tracks.items[0].name)
            console.log(data.tracks.items[0].artists[0].name)
            console.log(data.tracks.items[0].album.name) 
            }           
    });
  break;
  default: console.log('invalid selection');
}