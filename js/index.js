window.addEventListener('load', function(){})

// APIKey : c062382504198a6a2cc69f4b0fcd9319
var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);

// CARRUSEL

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
  .then(function(information) {
    var peliculas = information.results
    for(var i = 0;i < 5; i++){
      if(i==0)
    }
})
 .catch(function(errores){
  console.log(errores)
});


// INDEX Series

var arraySeries= document.querySelector()

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var peliculas = information.results
   for(var i = 0;i < 5; i++){
     
   }
})
 .catch(function(errores){
  console.log(errores)
});
