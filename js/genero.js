  // // buscador con sus condiciones
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


// Generos
let generos="https://api.themoviedb.org/3/genre/movie/list?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US"
fetch(generos)
    .then(function(response) {
  return response.json()
})
    .then(function(data) {
        console.log(data);
        let generos= document.querySelector(".primeraLinea")
        let generovacio=""
        for (let i=0; i<data.genres.length; i++){
             generovacio+=`<article class="myArticles">
                            <a href="./detalle-genero.html">
                              <div class="bloque-item-lista">
                                <h1 class="titulopelis">${ data.genres[i].name}</h1>
                              </div>
                            </a>
                          </article> `
             console.log(generovacio)
         }
         generos.innerHTML = generovacio

})
    .catch(function(error) {
  console.log("Error: " + error);
})

