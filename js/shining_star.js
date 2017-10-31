/*!-----------------------------------------------------------------------------
 * shining_star
 * v1.0 - built 2017-10-30
 * Licensed under the MIT License.
 * http://www.testersite.it/github/easy_background/v3/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2017 Eugenio Segala
 * --------------------------------------------------------------------------*/



function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function shining_star(selector,stars,diffusion) {

  var width = document.querySelector(selector).offsetWidth;
  var height = document.querySelector(selector).offsetHeight;

  document.querySelector(selector).style.position = "relative";

  //alert(width);

  var i = 0;


  for (i = 0; i < stars; i++) {

    /*
        setTimeout(function(){

          document.querySelector(selector).innerHTML += '<div style="animation: blinker ' + getRandomFloat(3, 5) + 's linear infinite; position: absolute; top: ' + getRandomInt(0, height) + '; left: ' + getRandomInt(0, width) + ';" class="blink enter-star"><img width="' + getRandomInt(1, 3) +
            '" src="stella.svg"></div>';

        }, (i * 10) );
    */

    setTimeout(function() {

      $(selector).append('<div style="pointer-events: none; animation: blinker ' + getRandomFloat(3, 5) + 's linear infinite; position: absolute; top: ' + getRandomInt(0, height) + 'px; left: ' + getRandomInt(0, width) +
        'px;" class="blink enter-star"><img class="fading" width="' + getRandomInt(1, 2) +
        '" src="img/stella.svg"></div>');

      //  console.log(1);

    }, (i * diffusion));

    //   }, (i * 50) );

  }


}
