$(document).ready(function() {
  $('#pipe').css('top', $(window).height() - $('#pipe').height() + 'px');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function makeBird() {
    return {
      birdId: null,
      birdSize: null,
      movementRatio: null,
      topOffset: null,
      addBird: function() {
        var _newBird = document.createElement('img');
        _newBird.src = 'images/bird.png';
        _newBird.className = 'bird';
        _newBird.id = this.birdId;
        _newBird.style.width = this.birdSize + 'px';
        _newBird.style.left = this.birdSize + 'px';
        _newBird.style.top = this.topOffset + '%';
        _newBird.style.filter = 'hue-rotate(' + getRandomInt(0, 270) + 'deg)';

        document.body.appendChild(_newBird);
      },
      fly: function(scrollDistance) {
        document.getElementById(this.birdId).style.left =
          this.birdSize + scrollDistance / 10 + 'px';
      },
      init: function() {
        this.topOffset= getRandomInt(10,70);
        this.movementRatio = getRandomInt(10, 90);
        this.birdId = 'bird_' + getRandomInt(100, 999);
        this.birdSize = getRandomInt(20, 200);
        this.addBird();
      }
    };
  }

  var bird1 = makeBird(),
    bird2 = makeBird(),
    bird3 = makeBird(),
    bird4 = makeBird();
  bird1.init();
  bird2.init();
  bird3.init();
  bird4.init();

  $(document).mousemove(function(event) {
    var offset = $(window).scrollTop();
    var imgX = offset / 50;
    var pipeX = offset / 20;
    var birdX = offset / 10;

    console.log(imgX);

    $('#background').css('background-position', imgX + 'px 0px');
    $('#pipe').css('left', pipeX);
    bird1.fly(offset);
    bird2.fly(offset);
    bird3.fly(offset);
    bird4.fly(offset);

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
});
