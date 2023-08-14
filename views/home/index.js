const div = document.querySelector('#desc-container');
const h1 = document.querySelector('#title');

const mostrar = [
  { opacity: 0 },
  { opacity:1 },
];

const array = h1.innerHTML.split('');
h1.innerHTML = '';
array.forEach(l => {
  const span = document.createElement('span');
  span.innerHTML = l;
  span.classList.add('hola', 'opacity-0');
  h1.innerHTML += span.outerHTML;
});

const spans = document.querySelectorAll('.hola');
[...spans].forEach((sp, index) => {
  sp.animate(mostrar, {
    duration: 2000,
    delay: index * 1000,
    iterations:1,
  });
  setTimeout(() => {
    sp.classList.remove('opacity-0');
    sp.classList.add('opacity-1');
  }, index * 1000 + 2000);
});

setTimeout(() => {
  console.log('asdasdas');
  div.classList.remove('opacity-0');
  div.classList.add('opacity-1');
}, 2000);