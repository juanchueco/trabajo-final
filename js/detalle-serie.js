  // buscador con sus condiciones
  let buscador= document.querySelector(".buscador")
  let rtabuscador=document.querySelector(".rta")
  let mensaje=document.querySelector(".mensaje")
  buscador.addEventListener('submit', function(hola){
    hola.preventDefault()
    
    if (rtabuscador.value == '') {
      mensaje.innerHTML = "No escribio nada"
      
    }
    else if (rtabuscador.value.length <= 3){
      mensaje.innerHTML=" introduzca como minimo 3 caracteres"
    }

    else{
      this.submit()
      mensaje.innerHTML=""
    }
  })

  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);
 let id = queryStringObj.get('id');
  console.log(id);
 
 let url = `https://api.themoviedb.org/3/tv/${id}?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US`
 
  fetch(url)
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      console.log(data);
 
      let poster = document.querySelector('#poster1');
      let titulo = document.querySelector('#titulo1');
      let descripcion = document.querySelector('#descripcion1');
      let rating = document.querySelector('#rating1');
      let estreno = document.querySelector('#estreno1');
      let director = document.querySelector('#directoresNombre1');
      let genero = document.querySelector('#generoNombre1');
 

      poster.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`

      titulo.innerText = data.original_name;

      descripcion.innerText = data.overview;

      rating.innerText += data.vote_average;

      estreno.innerText += data.first_air_date;

      director.innerText += data.episode_run_time;
      for (let i = 0; i < data.genres.length; i++) {
        genero.innerText += data.genres[i].name;
      }
  
 
     
 
   })
   .catch(function(e){
     console.log(e);
   })


   



   let url32 =`https://api.themoviedb.org/3/tv/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1`

        fetch(url32)
        .then(function(response) {
          return response.json()
        })

        .then(function(data) {
            console.log(data);
            let seriesApi = data.results
            let series = document.querySelector('#bloqueSeries') 
            let seriesVacio = ''

        for (let i = 0; i < 5; i++) {

            seriesVacio +=
                 `<article class="myArticles">
                <a href="detalle-serie.html?id=${seriesApi[i].id}">
                <div class="bloque-item-lista">
                    <h1 id="tituloPeliculas" class="titulopelis">${seriesApi[i].original_name
                    }</h1>
                    <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${seriesApi[i].poster_path}" alt="foto1">
                    <p id="textoPelicula" class="texto"> ${seriesApi[i].overview}</p>

                    <p class="estreno">${seriesApi[i].first_air_date} </p>
                </div>
                 </a>
                </article>`
                
            }
            console.log(series);
            
            series.innerHTML = seriesVacio
        
        })
       

        .catch(function(error) {
          console.log("Error: " + error);
        })
        let url3 = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=6b8e258b66583b977b648fcc8df4f960`
        fetch(url3)
         .then(function(res){
            return res.json();
         })
         .then(function(data){
           let plataforma = document.querySelector('#plataformas');
            console.log(data);
            if(data.results == undefined){
             plataforma.innerText+="No se encontro plataforma"
   
   
            }
            else if(data.results.AR == undefined){
             plataforma.innerText+="No se encontro plataforma"
   
   
            }
           else{
            let info = data.results.AR.flatrate
            for (let i = 0; i < info.length; i++) {
             plataforma.innerText+=info[i].provider_name
   
             console.log(info);
            
   
           }}
         
   
       
           
       
         })
         .catch(function(e){
           console.log(e);
         })


// Favoritos
let favoritos = []

//si ya hay datos de favoritos
let recuperaStorage = localStorage.getItem("seriesFavoritos")

//puede o no tener 
if(recuperaStorage !== null){
  favoritos = JSON.parse(recuperaStorage)
}


let boton = document.querySelector(".boton");

//preguntemos si el id esta en el array cambiamos el texto del botón
if(favoritos.includes(id)){
  boton.innerText = "Quitar de favoritos"
}

boton.addEventListener("click", function(){

  // aca checkeo si el id ya esta en la lista y cambiar el texto del boton.
  if (favoritos.includes(id)){
      //sacar de favoritos
      let indiceDelaSerie = favoritos.indexOf(id);
      favoritos.splice(indiceDelaSerie, 1)
      boton.innerText = "Agregar a favoritos";

  } else {
    //Guardar el id de la serie en el array
    favoritos.push(id)
    boton.innerText = "Quitar de favoritos";
    
  }


  // aca guardo datos en localStorage
  let seriesfavsToString = JSON.stringify(favoritos)
  localStorage.setItem("seriesFavoritos", seriesfavsToString)
  
  console.log(localStorage);

}) 
