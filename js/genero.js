// buscador con sus condiciones
let rta_buscador= document.querySelector(".buscador")
submit.addEventListener('click', function(hola){
  if (busq.value == '') {
      alert('No buscó nada.')
  }
  else if (busq.value.length <= 3){

      alert('Introduzca como minimo 3 caracteres')
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
        let geneross= document.querySelector(".titulopelis")
        let generos1= document.querySelector(".titulopelis1")
        let generos2= document.querySelector(".titulopelis2")
        let generos3= document.querySelector(".titulopelis3")
        let generos4= document.querySelector(".titulopelis4")
        let generovacio=""
        // for (let i=0; i<=3; i++){
        //     generovacio+=data.genres[i].name + ", "
        //     console.log(generovacio)



        // }
        // geneross.innerText+=generovacio[0]
        geneross.innerText+= data.genres[0].name
        generos1.innerText+=data.genres[1].name
        generos2.innerText+=data.genres[2].name
        generos3.innerText+=data.genres[3].name
        generos4.innerText+=data.genres[4].name

})
    .catch(function(error) {
  console.log("Error: " + error);
})

