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
  .then(function(objetoRespuesta) {
    console.log(objetoRespuesta);
    var arraySeries = objetoRespuesta.results
    var contenedorCarrousel = document.querySelector("#carrusel")
    for(var i = 0;i < 5; i++){

    contenedorCarrousel.innerHTML +=`
        <li>
            <div class="uk-position-cover uk-animation-kenburns uk-transform-origin-center-left">
                <img src="https://image.tmdb.org/t/p/original/${arraySeries[i].backdrop_path}" alt="" uk-cover>
            </div>
            <div class="info-serie-carrusel">
              <h1>${arraySeries[i].name}</h1>
              <h4>${arraySeries[i].vote_average} / 10&nbsp;&nbsp;<i class="fas fa-star"></i></h4>
              <p>${arraySeries[i].overview}</p>
              <h4><a href="">Trailer</a></h4>
          </div>
        </li>
    `;
    }
})
 .catch(function(errores){
  console.log(errores)
});


// INDEX Series

var contenedorPopulares = document.querySelector("#movie-list1");

fetch('https://api.themoviedb.org/3/tv/popular?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorPopulares.innerHTML += `
     <li>
         <div class="uk-panel">
             <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});

var contenedorValoradas = document.querySelector("#movie-list2");

fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorValoradas.innerHTML += `
     <li>
         <div class="uk-panel">
             <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});

var contenedorHoy = document.querySelector("#movie-list3");

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 15; i++){
     contenedorHoy.innerHTML += `
     <li>
         <div class="uk-panel">
             <img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt="">
         </div>
     </li>
     `;
   }
})
 .catch(function(errores){
  console.log(errores)
});
