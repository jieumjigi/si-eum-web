$(function() {
  console.log("Welcome to SIEUM");

  var $poem = {
    title: $('.poem.title'),
    author: $('.poem.author'),
    content: $('.poem.content')
  };

  var sample_data = {
    title: '호수',
    author: '정지용',
    content: '얼굴 하나야 손바닥 둘로 폭 가리지만 보고픈 마음 호수만 하니 눈 감을 밖에'
  };

  _.each($poem, function(elem, key) {
    elem.text(sample_data[key]);
  });
})