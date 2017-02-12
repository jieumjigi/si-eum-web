console.log("Welcome to SIEUM");
var $mobile = $('.mobile');
var container = `\
    <div class="container">\
      <div class="wrapper">\
        <div class="poem title"></div>\
        <div class="poem content"></div>\
        <div class="deco"><div class="dash"></div></div>\
        <div class="poem author"></div>\
      </div>\
    </div>`;
       
var data = _.map(db, function(obj, idx) {
  $mobile.prepend(container);
  _.each(obj, function(val, key) {
    if (val.match(/\s\s/)) {
      obj[key] = val.replace(/(\s{2})+/g, '<br/>')
    } 
  });
  return obj;
});

var today_data = data[0];
$('.mobile .container').css('background-image', 'url(\'./src/img/' + today_data.img +'.jpg\')');

var $poem = {
  title: $('.poem.title'),
  author: $('.poem.author'),
  content: $('.poem.content')
};

_.each($poem, function(elem, key) {
  elem.html(today_data[key]);
});