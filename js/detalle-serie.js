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

  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);
 let id = queryStringObj.get('id');
  console.log(id);
 
 let url = `https://api.themoviedb.org/3/tv/${id}?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US
`
 
  fetch(url)
   .then(function(res){
      return res.json();
   })
   .then(function(data){
      console.log(data);
 
      let poster = document.querySelector('#poster1');
     let titulo = document.querySelector('#titulo1');
      let descripcion = document.querySelector('#descripcion1');
      let rating = document.querySelector('#rating1');
      let estreno = document.querySelector('#estreno1');
      let director = document.querySelector('#directoresNombre1');
      let genero = document.querySelector('#generoNombre1');
 

      poster.src=`https://image.tmdb.org/t/p/w500${data.poster_path}`

      titulo.innerText = data.original_name;

      descripcion.innerText = data.overview;

      rating.innerText += data.vote_average;

      estreno.innerText += data.first_air_date;

      director.innerText += data.episode_run_time;
      
      genero.innerText += data.genres;
 
     
 
   })
   .catch(function(e){
     console.log(e);
   })
