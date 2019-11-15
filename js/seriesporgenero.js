window.addEventListener('load', function(){
var queryStringObject = new URLSearchParams(window.location.search)
var id = queryStringObject.get('id')
console.log(id);
var name = queryStringObject.get('name')
console.log(name);
 var url_seriesPorGenero = "https://api.themoviedb.org/3/discover/tv?api_key=c062382504198a6a2cc69f4b0fcd9319&sort_by=popularity.desc&page=1&with_genres="+id

 fetch(url_seriesPorGenero)
 .then(function (respuesta){
   return respuesta.json();
 })
 .then(function(information) {
   console.log(information);
  var seriesGenero = document.querySelector(".seriesgenero")
   var series = information.results
   for(var i = 0; i < 15; i++){
     seriesGenero.innerHTML += `
   <ul>
     <li><a href="detalledeserie.html"><img src="https://image.tmdb.org/t/p/original/${series[i].poster_path}" alt=""></a> </li>
   </ul>
   `;
   }
})
})
