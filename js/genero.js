let generos="https://api.themoviedb.org/3/genre/movie/list?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US"
fetch(generos)
    .then(function(response) {
  return response.json()
})
    .then(function(data) {
        console.log(data);
        let geneross= document.querySelectorAll(".titulopelis")
        let generovacio=""
        for (let i=0; i<=3; i++){
            generovacio+=data.genres[i].name + ", "
            console.log(generovacio)

        }
        geneross.innerHTML=generovacio

        
})
    .catch(function(error) {
  console.log("Error: " + error);
})

