$(document).mousemove(function(event) {
  var offset = $(window).scrollTop();
  var imgX = offset / 50;
  var pipeX = offset / 20;
  var birdX = offset / 10;

  console.log(imgX);

  $('#background').css('background-position', imgX + 'px 0px');
  $('#pipe').css('left', pipeX);
  $('#bird').css('left', birdX);

  $(document).on('click', flyUp);
  function flyDown() {
    $('#bird').attr('style', 'transform : rotate (45deg)');
    $('#bird').animate({ top: '+=100px' }, 500);
  }

  function flyUp() {
    $('#bird').animate({ top: '-=100px' }, 500);
    flyDown();
  }

  // setInterval(function() {
  //   $('#bird').css('transform', 'rotate (45deg)');
  //   $('#bird').animate({ top: '-=100px' }, 500);
  //   $('#bird').css('transform', 'rotate (0deg)');
  //   $('#bird').animate({ top: '+=100px' }, 500);
  // }, 1100);
});
