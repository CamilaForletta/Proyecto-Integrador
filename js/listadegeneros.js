window.addEventListener('load', function(){
  var generos = document.querySelector("#main-listadegeneros");

  fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=c062382504198a6a2cc69f4b0fcd9319')
    .then(function(response) {
      return response.json();
      console.log(response);
   })
   .then(function(information) {
     console.log(information)
     var arrayGeneros = information.genres

     for(var i = 0; i < arrayGeneros.length; i++){
      generos.innerHTML += `
      <li><a href=seriesporgenero.html?id=${arrayGeneros[i].id}&name=><h2>${arrayGeneros[i].name}</h2></a></li>
       `;
     }

   })
    .catch(function(errores){
     console.log(errores)
   });
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
