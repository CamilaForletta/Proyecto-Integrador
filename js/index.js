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
      if(i==0) {
        
      }
    }
})
 .catch(function(errores){
  console.log(errores)
});


// INDEX Series

var contenedorPopulares = document.querySelector(".movie-list1");

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 6; i++){
     contenedorPopulares.innerHTML += `
       <article class="movie-item">
         <a href="detalledeserie.html">
         <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt=""></a>
       </article>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});
