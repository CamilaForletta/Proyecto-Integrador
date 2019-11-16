window.addEventListener('load', function(){
var params = (new URL(document.location)).searchParams;
var id = params.get('id');


//API Key: c062382504198a6a2cc69f4b0fcd9319

// INFO SERIE

fetch("https://api.themoviedb.org/3/tv/"+ id +"?api_key=c062382504198a6a2cc69f4b0fcd9319")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    console.log(informacion);
    var serieDetalle = informacion
    var contenedorSeries = document.querySelector(".main-detalledeserie")
    for (var i = 0; i < 1; i++){
      contenedorSeries.innerHTML +=`
      <div class="title">
        <article class="title">
          <h1>${serieDetalle.name}</h1>
        </article>
      </div>
      <div class="generos-pertenece">
        <article class="generos-pertenece-1">
          <a href="seriesporgénero.html">Genero 1</a>
        </article>
        <article class="generos-pertenece-2">
          <a href="seriesporgénero.html">Genero 2</a>
        </article>
        <article class="generos-pertenece-3">
          <a href="seriesporgénero.html">Genero 3</a>
        </article>
      </div>
      <div class="lenguajeoriginal">
        <article class="lenguaje-original">
          <h2>Lenguaje original</h2>
        </article>
      </div>
      <div class="sinopsis">
        <article class="sinopsis">
          <h2>Sinopsis</h2>
          <h3>Esta serie trata de.....</h3>
        </article>
      </div>
      <div class="fechadeestreno">
        <article class="fecha-de-estreno">
          <h2>Fecha de estreno:</h2>
          <h3>//</h3>
        </article></div>
        <div class=posterdeserie>
        <article class="poster-de-serie">
          <img src="https://image.tmdb.org/t/p/original/${serieDetalle.poster_path}" alt="" style="width: 30%; height: 30%">
        </article>
        </div>
        <div class="button">
          <button type="button" name="button">Ver recomendaciones</button>
        </div>
      `;
    }

  })
  .catch(function(errores){
   console.log(errores)
 });

// TRAILER

fetch("https://api.themoviedb.org/3/tv/"+ id +"/videos?api_key=c062382504198a6a2cc69f4b0fcd9319")
  .then(function(respuesta) {
    return respuesta.json()
    console.log(respuesta);
  })
  .then(function(informacion) {
    var serie = informacion.results
    var nombre = serie.name
    var id = serie[0].key
    var url = 'https://www.youtube.com/embed/' + id
    contenedorTrailer = document.querySelector(".main-detalledeserie")
    contenedorTrailer.innerHTML +=`
    <div class="trailer">
    <article class="trailerserie  ">
      <iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </article>

    `;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  //lista de GENEROS
  var listaParaGeneros = document.querySelector("#genres-list");
fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=c062382504198a6a2cc69f4b0fcd9319')
  .then(function(response) {
    return response.json();
 })
 .then(function(information) {
   console.log(information)
   var arrayGeneros = information.genres

   for(var i = 0; i < arrayGeneros.length; i++){
    listaParaGeneros.innerHTML += `
      <div><a href=seriesporgenero.html?id=${arrayGeneros[i].id}&name=>${arrayGeneros[i].name}</a></div>
     `;
   }

 })
  .catch(function(errores){
   console.log(errores)
 });
})
