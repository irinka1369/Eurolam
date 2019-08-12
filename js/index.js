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

//відправка даних з форми за допомогою AJAX

document.querySelector("#contact-submit").addEventListener("click", login);

function login(e) {
  e.preventDefault();
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      ime: document.querySelector("#userName").value,
      email: document.querySelector("#userEmail").value,
      poruka: document.querySelector("#textarea").value
    })
  }).then(_ => document.querySelector(".feedback-form").reset());
}


