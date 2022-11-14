let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let id = queryStringObj.get('id');	// alien
console.log(id);



