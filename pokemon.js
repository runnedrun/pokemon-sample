function getPokemon() {
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/",    
    success: function(res) {
      console.log("got it")
      console.log(res)
    }
  })
}