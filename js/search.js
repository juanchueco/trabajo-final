// Buscador con condiciones
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

let querystring=location.search
let queryStringObj = new URLSearchParams(querystring);
let busqueda = queryStringObj.get('busqueda');	
console.log(busqueda);
let url=`https:api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1&include_adult=false`
fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {

  console.log(data);

let section=document.querySelector(".primeraLinea");

// if(data.genres.length==0){
//   rtabuscador.innerText = `No se a encontrado resultado de busqueda para: ${busqueda}`
// }
// else{
//   rtabuscador.innerText = `Resultado de busqueda para: ${busqueda}`
// }

for (let i=0; i<6; i++){
   section.innerHTML += `<article class="myArticles">
   <a href="./detalle-peliculas.html">
       <div>
           <h1 class="titulopelis">${data.results[i].title}</h1>
           <img class="imagenes"
              src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"
               alt="foto1">
           <p class="texto">
           </p>
           <p class="estreno"> ${data.results[i].overview} </p>
       </div>
   </a>
</article>`
}

})
.catch(function(error) {
  console.log("Error: " + error);
})

