// main.js

import Cocoquantus from './modules/cocoquantus.js';
import Plumbutter from './modules/plumbutter.js';
import Tetrax from './modules/tetrax.js';

const buttonCocoquantus = document.getElementById(
  'buttonAddCocoquantus',
);

const buttonPlumbutter = document.getElementById(
  'buttonAddPlumbutter',
);

const buttonTetrax = document.getElementById('buttonAddTetrax');

buttonCocoquantus.addEventListener('click', () => {
  const cocoquantus = new Cocoquantus();
  console.log(cocoquantus);
});

buttonPlumbutter.addEventListener('click', () => {
  const plumbutter = new Plumbutter();
  console.log(plumbutter);
});

buttonTetrax.addEventListener('click', () => {
  const tetrax = new Tetrax();
  console.log(tetrax);
});
