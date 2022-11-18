// buscador con sus condiciones
let buscador = document.querySelector(".buscador")
let rtabuscador = document.querySelector(".rta")
let mensaje = document.querySelector(".mensaje")
buscador.addEventListener('submit', function (hola) {
    hola.preventDefault()

    if (rtabuscador.value == '') {
        mensaje.innerHTML = "No escribio nada"

    }
    else if (rtabuscador.value.length <= 3) {
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


let url = `https://api.themoviedb.org/3/discover/tv?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
`

fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        let generoSApi = data.results
        let generoS = document.querySelector('#bloqueGeneroS')
        let generoSVacio = ''

        for (let i = 0; i < 5; i++) {

            generoSVacio +=
                `<article class="myArticles">
                <a href="detalle-genero.html?id=${generoSApi[i].id}">
                <div class="bloque-item-lista">
                    <h1 id="tituloGenero" class="titulopelis">${generoSApi[i].original_name}</h1>
                    <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoSApi[i].poster_path}" alt="foto1">
                    <p id="textoPelicula" class="texto"> ${generoSApi[i].overview}</p>

                    <p class="estreno">${generoSApi[i].first_air_date} </p>
                </div>
                 </a>
                </article>`

        }
        console.log(generoS);
        console.log(generoSVacio);
        generoS.innerHTML = generoSVacio

    })


    .catch(function (error) {
        console.log("Error: " + error);
    })









