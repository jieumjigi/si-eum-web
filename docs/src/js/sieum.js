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
var week_data, todat_data;

$.ajax({
  url: "http://localhost:3000/apis/sieum_data",
  dataType: "jsonp",
  error: withoutServer
}).done(whenServerWorking);

function withoutServer() {
  week_data = _.map(local_db, makeWeekData);
  
  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  today_data = week_data[0];
  $('.mobile .container').css('background-image', 'url(\'./src/img/' + today_data.img +'.jpg\')');

  _.each($poem, attachData);
}

function makeWeekData(obj, idx) {
  $mobile.prepend(container);
  _.each(obj, function(val, key) {
    if (val.match(/\s\s/)) {
      obj[key] = val.replace(/(\s{2})+/g, '<br/>')
    } 
  });
  return obj;
}

function whenServerWorking(res) {
  week_data = _.map(JSON.parse(res), makeWeekData);
  
  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  today_data = week_data[0];
  $('.mobile .container').css('background-image', 'url(\'./src/img/' + today_data.img +'.jpg\')');

  _.each($poem, attachData);
}

function makeWeekData(obj, idx) {
  $mobile.prepend(container);
  _.each(obj, function(val, key) {
    if (val.match(/\s\s/)) {
      obj[key] = val.replace(/(\s{2})+/g, '<br/>')
    } 
  });
  return obj;
}

function attachData(elem, key) {
  elem.html(today_data[key]);
}