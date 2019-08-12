// CLOCK

setInterval( ()=> $('.clock').html((new Date()).toLocaleTimeString()), 1000 );

$(document).ready( () => {

  $('.feedback-input').on('keyup', event => {
    let post = $(event.currentTarget).val();
    let remaining = 500 - post.length;
    $('.characters').html(remaining);
  });

  $('.feedback-input').focus();

 });


document.querySelector('.contact-form input[type=submit]')
    .addEventListener('click', accept);

function accept(e) {
    e.preventDefault();
    fetch(' accept', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            tvoje_Ime: document.querySelector('.login-form input[name=tvoje_ime]').value,
            email: document.querySelector('.login-form input[name=email]').value,
            tvoja_Poruka: document.querySelector('.login-form input[name=tvoja_poruka]').value
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}

