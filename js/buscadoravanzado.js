window.addEventListener('load', function(){
//generos
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
     //buscador avanzado
     var urlListaGeneros = "https://api.themoviedb.org/3/genre/tv/list?api_key=c062382504198a6a2cc69f4b0fcd9319"


     fetch(urlListaGeneros)
       .then(function(response) {
         return response.json()
       })
       .then(function (datos) {
        console.log(datos)
        var generoHtml = document.querySelector('#selectGenre')
        var id = datos.id

        for (var genero of datos.genres) {
          generoHtml.innerHTML += `
                <option value=` + genero.id + `> ` + genero.name +  `</option>`;
        }
       })
       .catch(function(errores) {
           console.log("Error: " + errores);
       })

     })
