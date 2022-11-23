  // // buscador con sus condiciones
  let buscador= document.querySelector(".buscador")
  let rtabuscador=document.querySelector(".rta")
  let mensaje=document.querySelector(".mensaje")
  buscador.addEventListener('submit', function(hola){
    hola.preventDefault()
    
    if (rtabuscador.value == '') {
      mensaje.innerHTML = "No escribio nada"
      
    }
    else if (rtabuscador.value.length < 3){
      mensaje.innerHTML=" introduzca como minimo 3 caracteres"
    }

    else{
      this.submit()
      mensaje.innerHTML=""
    }
  })


// Generos
let generos="https://api.themoviedb.org/3/genre/tv/list?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US"
fetch(generos)
    .then(function(response) {
  return response.json()
})
    .then(function(data) {
        console.log(data);
        let generoS= document.querySelector(".primeraLinea")
        let generoSvacio=""
        for (let i=0; i<data.genres.length; i++){
             generoSvacio+=`<article class="myArticles">
                            <a href="detalle-genero_serie.html?id=${data.genres[i].id}">
                              <div class="bloque-item-lista">
                                <h1 class="titulopelis">${ data.genres[i].name}</h1>
                              </div>
                            </a>
                          </article> `
             console.log(generoSvacio)
         }
         generoS.innerHTML = generoSvacio

})
    .catch(function(error) {
  console.log("Error: " + error);
})

