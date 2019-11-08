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
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                <img src="https://image.tmdb.org/t/p/original/${arraySeries[i].backdrop_path}" alt="">
            </div>
            <div class="info-serie-carrusel">
              <h2>Hola</h2>
              <h4>Valoracion</h4>
              <p>Sinopsis Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h4><a href="">Trailer</a></h4>
          </div>
        </li>
    </ul>
    `;
    }
})
 .catch(function(errores){
  console.log(errores)
});


// INDEX Series

var contenedorPopulares = document.querySelector(".movie-list1");

fetch('https://api.themoviedb.org/3/tv/popular?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&page=1')
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

var contenedorValoradas = document.querySelector(".movie-list2");

fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=c062382504198a6a2cc69f4b0fcd9319&language=en-US&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 6; i++){
     contenedorValoradas.innerHTML += `
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

var contenedorHoy = document.querySelector(".movie-list3");

fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=c062382504198a6a2cc69f4b0fcd9319&language=es-AR&page=1')
  .then(function(response) {
    return response.json();
    console.log(response);
 })
 .then(function(information) {
   var series = information.results
   for(var i = 0; i < 6; i++){
     contenedorHoy.innerHTML += `
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
