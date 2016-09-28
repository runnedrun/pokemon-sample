function getPokemon() {
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/",
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
      console.log("got it")
      console.log(res)
    }
  })
}