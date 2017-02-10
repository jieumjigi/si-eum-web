$(function() {
  console.log("Welcome to SIEUM");

  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  var sample_data = db[0];

  _.each($poem, function(elem, key) {
    var string = sample_data[key];
    if (string.match('  ')) {
      string = string.replace(/(\s{2})+/g, '<br/>')
    } 
    elem.html(string);
  });
})