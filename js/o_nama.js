// CLOCK

setInterval( ()=> $('.clock').html((new Date()).toLocaleTimeString()), 1000 );

$(document).ready( () => {

  $('#textarea').on('keyup', event => {
    const post = $(event.currentTarget).val();
    const remaining = 500 - post.length;
    $('.characters').html(remaining);
  });

  $('#textarea').focus();

 });
document.querySelector('.curr-convert').addEventListener('click', currConvert);

function currConvert(e) {
    e.preventDefault();
    const currFrom = document.querySelector('.converter input[name=curr-from]').value;
    const currTo = document.querySelector('.converter input[name=curr-to]').value;
    const currKey = currFrom + '_' + currTo;
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=d1b5218e0be93e157106`)
        .then( response => response.json() )
        .then( currency => {
           const rate = currency[currKey];
           const sourceAmount = document.querySelector('.converter input[name=curr-amount]').value;
           const convertedAmount = rate * sourceAmount;
           document.querySelector('.converter output[name=curr-converted]')
            .innerText = convertedAmount.toFixed(2);
        });
};
