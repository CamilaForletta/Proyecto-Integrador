window.addEventListener('load', function(){})

// APIKey : c062382504198a6a2cc69f4b0fcd9319
var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);

// CARRUSEL

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 }
)
  .then(function(information) {
    var peliculas = information.results
    for(var i = 0;i < 5; i++){
      if
    }
  }
)

// INDEX Series
