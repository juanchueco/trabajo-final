let url="https://api.themoviedb.org/3/movie/popular?api_key=6b8e258b66583b977b648fcc8df4f960&language=en-US&page=1"
fetch(url)
    .then(function(response) {
  return response.json()
})
    .then(function(data) {
        console.log(data);
       

        }

        
)
    .catch(function(error) {
  console.log("Error: " + error);
})

