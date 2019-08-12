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


//document.querySelector('.login-form button[type=submit]').addEventListener('click', login);

//function login(e) {
//  e.preventDefault();
//    fetch('login', {
//        method: 'POST',
//        headers: {
 //           'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
 //       },
 //       body: JSON.stringify({
 //           ime: document.querySelector('.login-form input[name=tvoje_ime]').value,
 //           email: document.querySelector('.login-form input[name=email]').value,
 //           poruka: document.querySelector('.login-form input[name=tvoja_poruka]').value
 //       })
 //   })
 //       .then(_ => document.querySelector('.login-form').reset());}