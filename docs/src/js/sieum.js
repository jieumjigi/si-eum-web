console.log("Welcome to SIEUM");
var $mobile = $('.mobile');
var week_data, todat_data;

$.get("http://localhost:3000/apis/sieum_data", withServer, "jsonp")
 .fail(withoutServer);

function withoutServer() {
  week_data = _.map(local_db, makeWeekData);
  
  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  today_data = week_data[0];
  // $('.mobile .container').css('background-image', 'url(\'./src/img/' + today_data.img +'.jpg\')');

  _.each($poem, attachData);
}

function makeWeekData(obj, idx) {
  _.each(obj, function(val, key) {
    if (val.match(/\s\s/)) {
      obj[key] = val.replace(/(\s{2})+/g, '<br/>')
    } 
  });
  return obj;
}

function withServer(res) {
  week_data = _.map(JSON.parse(res), makeWeekData);
  
  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  today_data = week_data[0];
  // $('.mobile .container').css('background-image', 'url(\'./src/img/' + today_data.img +'.jpg\')');

  _.each($poem, attachData);
}

function attachData(elem, key) {
  elem.html(today_data[key]);
}