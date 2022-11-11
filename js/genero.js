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
        alert('Introduzca como minimo 3 caracteres')
    }

    else{
      this.submit()
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
        // geneross.innerText+=generovacio[0]
        // geneross.innerText+= data.genres[0].name
        // generos1.innerText+=data.genres[1].name
        // generos2.innerText+=data.genres[2].name
        // generos3.innerText+=data.genres[3].name
        // generos4.innerText+=data.genres[4].name

})
    .catch(function(error) {
  console.log("Error: " + error);
})

