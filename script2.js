const $button = document.querySelector('.js-button');
const $link = document.querySelector('.js-link');
const $form = document.querySelector('.js-form');

function clickHandler(event){ 
  //  event.preventDefault();
    alert("Oye lucky luck Oye");
}

$button.addEventListener("click", clickHandler);
$link.addEventListener("click", clickHandler);
$form.addEventListener("click", clickHandler);