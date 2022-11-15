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

  // let queryString = location.search;
  // let queryStringObj = new URLSearchParams(queryString);
  // let id = queryStringObj.get('id');
  // console.log(id);
  
  // let url = `https://api.themoviedb.org/3/movie/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1${id}`
  
  // fetch(url)
  //  .then(function(res){
  //     return res.json();
  //  })
  //  .then(function(data){
  //     console.log(data);
  
  //     let poster = document.querySelector('#poster');
  //     let titulo = document.querySelector('#titulo');
  //     let descripcion = document.querySelector('#descripcion');
  //     let rating = document.querySelector('#rating');
  //     let estreno = document.querySelector('#estreno');
  //     let directores = document.querySelector('#directoresNombre');
  //     let elenco = document.querySelector('#elenco');
  //     let genero = document.querySelector('#generoNombre');
  
  //     img.src=data.poster_path;
  //     titulo.innerText = data.poster_path;
  //     descripcion.innerText = data.overview;
  //     rating.innerText += data.vote_average;
  //     estreno.innerText += data.release_date;
  //     director.innerText += data.species;
  //     elenco.innerText += data.species;
  //     genero.innerText += data.species;
  
      
  
  //  })
  //  .catch(function(e){
  //     console.log(e);
  //  })