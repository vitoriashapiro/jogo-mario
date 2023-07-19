// script.js
let chk1 = document.querySelector('#chk1');
let chk2 = document.querySelector('#chk2');
let chk3 = document.querySelector('#chk3');
let reset = document.querySelector('.reset');

function toggleCheckbox(chk) {
  if (chk.checked) {
    chk.nextElementSibling.style.animationPlayState = 'paused'; // Pausa a animação
    chk.nextElementSibling.style.backgroundPosition = '0px'; // Reinicia a animação
  } else {
    chk.nextElementSibling.style.animationPlayState = 'running'; // Retoma a animação
  }
}

chk1.addEventListener('change', function () {
  toggleCheckbox(chk1);
});

chk2.addEventListener('change', function () {
  toggleCheckbox(chk2);
});

chk3.addEventListener('change', function () {
  toggleCheckbox(chk3);
});

reset.onclick = function () {
  chk1.checked = chk2.checked = chk3.checked = false;
  chk1.nextElementSibling.style.animationPlayState = 'running'; // Retoma a animação
  chk2.nextElementSibling.style.animationPlayState = 'running'; // Retoma a animação
  chk3.nextElementSibling.style.animationPlayState = 'running'; // Retoma a animação
};
