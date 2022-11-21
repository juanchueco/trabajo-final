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
    let recuperoStorage = localStorage.getItem("seriesFavoritos")
    let series = JSON.parse(recuperoStorage);
    console.log(series)


  //recorrer y preguntar por los datos de cada pelicula y serie 
    for(let i=0; i<series.length; i++){
      
      // recuperar los datos de cada serie fav
      buscarYMostrarFavoritos()
    }

    function buscarYMostrarFavoritos(){
      //buscar una serie en favorito
      let url = `https://api.themoviedb.org/3/tv/${id}?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US`

      fetch(url)
        .then(function(res){
          return res.json()
        })
        .then(function(data){


        })
        .catch(function(error){
            console.log(error);
        })
    }

    //pruebo meter el coso adentro del la funcion
    
    //Mostrar en la pantalla cada personaje que voy recuperando


    //tengo que hacer un fetch con el id del api 