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
    var generos =  serieDetalle.genres[0]
    var generos2 = serieDetalle.genres[1]
    var creadopor = serieDetalle.created_by[0]
    var contenedorSeries = document.querySelector(".contenedorDetalle")
    for (var i = 0; i < 1; i++){
      contenedorSeries.innerHTML +=`
      <div class="Title">
        <div class="container">
          <div class="Title-big">
            <h1>${serieDetalle.name}</h1>
          </div>
      </div>

      <div class="serie">
        <div class="serie-info">
          <div class="serie-info-container">
            <div class="serie-info-box serie-info-box--genre">
              <div class="serie-info-box-title">Genero</div>
              <div class="serie-info-box-content">${generos.name}</div>
            </div>
            <div class="serie-info-box serie-info-box--director">
              <div class="serie-info-box-title">Director</div>
              <div class="serie-info-box-content">${creadopor.name}</div>
            </div>
            <div class="serie-info-box serie-info-box--stars">
              <div class="serie-info-box-title">Sinopsis</div>
              <div class="serie-info-box-content">${serieDetalle.overview}</div>
            </div>
          </div>
          <div class="serie-info-watch">
            <span>Agregar a favoritos</span>
          </div>
        </div>
        <div class="serie-image"><img src="https://image.tmdb.org/t/p/original/${serieDetalle.poster_path}" alt=""> </div>
      </div>
      </div>
      `;
    }
  })
  .catch(function(errores){
   console.log(errores)
 });

/*// TRAILER

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
  })*/

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
