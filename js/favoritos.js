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


    //recuperar array de favoritos
    let recuperoStorage = localStorage.getItem("seriesFavoritos");
    let seriesFavoritos = JSON.parse(recuperoStorage);

    let section = document.querySelector("#listaSeries");
    let seriesfavs = "";

    console.log(seriesFavoritos);

    if (seriesFavoritos==null || seriesFavoritos.length==0){
      section.innerHTML="<p> No hay favoritos </p>"
    }else{
      for (let i = 0; i < seriesFavoritos.length; i++) {
        
        let url = `https://api.themoviedb.org/3/tv/popular${seriesFavoritos[i]}?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1`
        //seriesFavoritos[i]
        fetch(url)
        .then(function (response) {
          return response.JSON();
        }).then(function (data) {
          console.log(data);
          seriesFavoritos += `<article class="myArticles">
                                <a href="./detalle-serie.html/?id=1">
                                  <div class="bloque-item-lista">
                                    <h1 id="tituloPeliculas" class="titulopelis">${seriesApi[i].original_name
                                    }</h1>
                                    <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${seriesApi[i].poster_path}" alt="foto1">
                                    <p id="textoPelicula" class="texto"> ${seriesApi[i].overview}</p>
                                    <p class="estreno">${seriesApi[i].first_air_date} </p>
                                  </div>
                                </a>
                              </article>`;

          return data;
        }).catch(function (error) {
          return error;
        });

        
      }
    } 