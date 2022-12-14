    // buscador con sus condiciones
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


let url = "https://api.themoviedb.org/3/movie/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"

        fetch(url)
        .then(function(response) {
          return response.json()
        })

        .then(function(data) {
            
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
           
            
            peliculas.innerHTML = peliculasVacio
        
        })
       

        .catch(function(error) {
          console.log("Error: " + error);
        })
       

        let url2 ="https://api.themoviedb.org/3/tv/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"

        fetch(url2)
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
       

        

        let url3 = "https://api.themoviedb.org/3/movie/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"

        fetch(url3)
        .then(function(response) {
          return response.json()
        })

        .then(function(data) {
            console.log(data);
            let pelisApi = data.results
            let peliculas = document.querySelector('#bloqueFavs') 
            console.log(peliculas);
            let peliculasVacio = ''
            
            for (let i = 7; i < 12; i++) {
                
            peliculasVacio +=
                 `<article class="myArticles">
                <a href="./detalle-peliculas.html?id=${pelisApi[i].id}">
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

        let url4 ="https://api.themoviedb.org/3/tv/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"

        fetch(url4)
        .then(function(response) {
          return response.json()
        })

        .then(function(data) {
           
            let seriesApi = data.results
            let series = document.querySelector('#bloqueSeries2') 
            let seriesVacio = ''

        for (let i = 6; i < 11; i++) {

            seriesVacio +=
                 `<article class="myArticles">
                <a href="./detalle-serie.html/?id=1">
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
           
            
            series.innerHTML = seriesVacio
        
        })
       

        .catch(function(error) {
          console.log("Error: " + error);
        })
       