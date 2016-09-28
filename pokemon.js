function getPokemon() {
  $.ajax({
    method: "GET",
    url: ""
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
      var pages = res.query && res.query.pages
      if (pages) {
        var pageKeys = Object.keys(pages);
        var text = pages[pageKeys[0]].extract;          
        var processed = processor(text);
        $(".text-display").text(processed);
      }                
    }
  })
}