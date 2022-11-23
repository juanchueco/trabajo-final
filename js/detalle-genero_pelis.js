// buscador con sus condiciones
let buscador = document.querySelector(".buscador")
let rtabuscador = document.querySelector(".rta")
let mensaje = document.querySelector(".mensaje")
buscador.addEventListener('submit', function (hola) {
  hola.preventDefault()

  if (rtabuscador.value == '') {
    mensaje.innerHTML = "No escribio nada"

  }
  else if (rtabuscador.value.length < 3) {
    mensaje.innerHTML = " introduzca como minimo 3 caracteres"
  }

  else {
    this.submit()
    mensaje.innerHTML = ""
  }
})

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id);


let url = `https://api.themoviedb.org/3/discover/movie?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&sort_by=original_title.asc&include_adult=false&include_video=false&with_genres=${id}&with_watch_monetization_types=flatrate
`

fetch(url)
        .then(function(response) {
          return response.json()
        })

        .then(function(data) {
            console.log(data);
            let generoApi = data.results
            let genero = document.querySelector('#bloqueGenero') 
            let generoVacio = ''
            
            for (let i = 0; i < 5; i++) {
                
              generoVacio +=
                 `<article class="myArticles">
                <a href="detalle-peliculas.html?id=${generoApi[i].id}">
                <div class="bloque-item-lista">
                    <h1 id="tituloGenero" class="titulopelis">${generoApi[i].original_title}</h1>
                    <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoApi[i].poster_path}" alt="foto1">
                    <p id="textoPelicula" class="texto"> ${generoApi[i].overview}</p>

                    <p class="estreno">${generoApi[i].release_date} </p>
                </div>
                 </a>
                </article>`
                
            }
            console.log(genero);
            console.log(generoVacio);
            genero.innerHTML = generoVacio
        
        })
       

        .catch(function(error) {
          console.log("Error: " + error);
        })
       


















