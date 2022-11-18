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
  
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US

`
  
   fetch(url)
    .then(function(res){
       return res.json();
    })
    .then(function(data){
       console.log(data);
  
       let poster = document.querySelector('#poster');
      let titulo = document.querySelector('#titulo');
       let descripcion = document.querySelector('#descripcion');
       let rating = document.querySelector('#rating');
       let estreno = document.querySelector('#estreno');
       let director = document.querySelector('#directoresNombre');
       let elenco = document.querySelector('#elenco');
       let genero = document.querySelector('#generoNombre');

  

       poster.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`
       titulo.innerText = data.original_title;
       descripcion.innerText = data.overview;
       rating.innerText += data.vote_average;
       estreno.innerText += data.release_date;
       director.innerText += data.runtime;
       elenco.innerText += data.budget;
       for (let i = 0; i < data.genres.length; i++) {
        genero.innerText += data.genres[i].name;



       }
       
  
      
  
    })
    .catch(function(e){
      console.log(e);
    })


let url22 = "https://api.themoviedb.org/3/movie/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"

fetch(url22)
.then(function(response) {
  return response.json()
})

.then(function(data) {
    console.log(data);
    let pelisApi = data.results
    let peliculas = document.querySelector('#bloquePeliculas') 
    let peliculasVacio = ''
    
    for (let i = 0; i < 5; i++) {
        
    peliculasVacio +=
         `<article class="myArticles">
        <a href="detalle-peliculas.html?id=${pelisApi[i].id}">
        <div class="bloque-item-lista">
            <h1 id="tituloPeliculas" class="titulopelis">${pelisApi[i].title}</h1>
            <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${pelisApi[i].poster_path}" alt="foto1">
            <p id="textoPelicula" class="texto"> ${pelisApi[i].overview}</p>

            <p class="estreno">${pelisApi[i].release_date} </p>
        </div>
         </a>
        </article>`
        
    }
    console.log(peliculas);
    console.log(peliculasVacio);
    peliculas.innerHTML = peliculasVacio

})


.catch(function(error) {
  console.log("Error: " + error);
})

let url3 = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=6b8e258b66583b977b648fcc8df4f960`
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