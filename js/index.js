// CLOCK

setInterval( ()=> $('.clock').html((new Date()).toLocaleTimeString()), 1000 );

$(document).ready( () => {

  $('#textarea').on('keyup', event => {
    let post = $(event.currentTarget).val();
    let remaining = 500 - post.length;
    $('.characters').html(remaining);
  });

  $('#textarea').focus();

 });


