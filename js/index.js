
//відправка даних з форми за допомогою AJAX

document.querySelector(".contact-submit").addEventListener("click", login);

function login(e) {
  e.preventDefault();
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
          },
    body: JSON.stringify({
      ime: document.querySelector("#userName").value,
      email: document.querySelector("#userEmail").value,
      poruka: document.querySelector("#textarea").value
    })
  }).then(_ => document.querySelector(".feedback-form").reset());
};