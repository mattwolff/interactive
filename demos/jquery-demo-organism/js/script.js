$(document).ready(function(){

// TURNING ON AND OFF THE LIGHTS

  // by default, light is on
  var state = 'on';

  // click the button -- this is what we first do

  // $('button').click(function(){
  //
  //     if(state == 'off'){
  //       // turn on the lights
  //       $('body').css('background','white');
  //       $(this).removeClass('off');
  //       state = 'on';
  //     }
  //
  //     else {
  //       // turn off the lights
  //       $('body').css('background','black');
  //       $(this).addClass('off');
  //       state = 'off';
  //     }
  //
  // });

  // click the button -- make classes for body
  $('button').click(function(){

      if(state == 'off'){
        // turn on the lights
        $('body').removeClass('off');
        $('body').addClass('on');
        $(this).removeClass('off');
        state = 'on';
      }

      else {
        // turn off the lights
        $('body').removeClass('on');
        $('body').addClass('off');
        $(this).addClass('off');
        state = 'off';
      }

  });

  // show a clock
  // via https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }

  function startTime() {
      var today = new Date(),
          h = checkTime(today.getHours()),
          m = checkTime(today.getMinutes()),
          s = checkTime(today.getSeconds());
      $('#clock').html(h + ":" + m + ":" + s);
      t = setTimeout(function () {
          startTime();
      }, 500);

      // hibernate on odd minutes

      if (m % 2 === 0) {
       // we are even
       console.log('awake');
       $('#organism').removeClass('hibernate');
     }
     else {
       // we are odd, hibernate!
       console.log('sleeping');
       $('#organism').addClass('hibernate');
     }
     // Not sure if this cuts for cricket sounds?
     if (h >= 18 || h < 6) {
       owlNoises();
     }

  }

  startTime();

  function owlNoises() {
    var nightSounds = new Audio('sounds/nightTime.mp3');
    nightSounds.loop = true;
    nightSounds.volume = 0.025;
    nightSounds.play();
  }

  // hover over organism and hear soft sound

  var softSound = new Audio('sounds/tone.wav');
  softSound.loop = true;
  softSound.volume = 0.1;

  $('#organism').hover(
    function() {
      // do something when mouse is over organism
      // softSound.play();
      $(this).addClass('blur');
      // softSound.animate({volume: 1}, 1000);
    }, function() {
      // do something else when mouse is off organism
      // softSound.pause();
      $(this).removeClass('blur');
    }
  );

  // click organism and hear tweet

  var tweetSound = new Audio('sounds/tweet.m4a');

  $('#organism').click(function(){
    tweetSound.play();
  });

  // other fun things to do:
  // if it's night, the lights are automatically off


});
