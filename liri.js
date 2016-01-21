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

var secretKeys = require("./keys.js");
// secretKeys.twitterKeys.consumer_key,
//after exporting it on the twitter keys page 
console.log(secretKeys.twitterKeys.consumer_key);


//3: make it so liri.js can take in the following argument: spotify-this-song
var spotify = require("spotify");

console.log(spotify);
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

//liri.js require("spotify-this-song");
// "spotify-this-song" = ["songName", "artist", "previewLink", "album"];
// node liri.js spotify-this-song '<hello>';
// spotify-this-song.show("artist", "songName", "previewLink", "album");
/////////////////////////////////////////////////////////////////////////////////////
//starting next problem: movie-this
//if you enter node liri.js movie-this '<movie name here>'
//this would output the following into terminal:
// title, year, IMDB rating, country, language, plot, actors, Rotten Tomatoes Rating, Rotten Tomatoes Url,
//if no movie is provided, then the program will output info for the movie 'Mr. Nobody'
//adding a line above what I originally started with (var request = ...etc)
exports.moviesOMDB = function() {

var request = require("request")
var apiURL = "";
var movieTitle = process.argv[3]
var resultStringMovies = "";
process.argv[3];
var queryMovie = process.argv[3];
var actionSearch = process.argv[2];
//switch statement: a selection control mechanism used to allow
//the value of a variable ot expression to change the control flow
//of program execution via a multiway branch
switch(actionSearch){
  case "movie-this":
    request('http://www.omdbapi.com/?t=' + queryMovie, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) //show the HTML for the Google homepage
      }
    });

var apiURL= "http://www.omdbapi.com/?t=" + queryMovie + "&y=&plot=Short&Tomatoes=True&r=json"
//&y is year, &plot=short returns short plot desc., &tomatoes=true returns rotten tomato data, r=json will return
//data as JSON
  request(apiURL, function (err, response, body) {
    var actionSearch = JSON.parse(body);
    if (actionSearch.Response == "false") {
      console.log('Not found')
    } else {
        resultShow(actionSearch); 
    }
  });
  //The resultShow refers to another function that console logs the json response
  //write a resultShow function that will print the result
  function resultShow(movieObject){
    //this function takes in the value of the resultShow variable and 
    //returns the value of the variable movieObject
    console.log("Title: " + movieObject.Title);
    //this returns the title of the movie in console
    console.log("Year: " + movieObject.Year);
    //this outputs the year the movie came out
    console.log("Plot: " + movieObject.Plot);
    //this shows the plot in console
    console.log("Actors " + movieObject.Actors);
    //same as before, but it shows the Actors
    console.log("Country " + movieObject.Country);
    //shows the Country
    console.log("Language " + movieObject.Language);
    //shows the language the film is in, in console
    console.log("IMDB Rating " + movieObject.imdbRating);
    //shows the imdb rating
    console.log("Rotten Tomatoes " + movieObject.tomatoRating);
    //now you can find the tomato rating in console
    console.log("Rotten Tomatoes Link " + movieObject.tomatoURL);
  }
}
//if there is no movie inputted then default to Mr. Nobody ****this needs work
//  if (data.movie.items[0].movie[0].name === undefined){
//      console.log('No movie name entered')
//    }  else { console.log(movieObject.Title)
//            console.log()
//            console.log()
//            console.log() 
            }           
    });
  break;
  case "spotify-this":
  spotify.search({ type: 'track', query: process.argv[3] }, function(err, data){
  if (err) {
    console.log('Error occurred: ' + err);
    return;
  }
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