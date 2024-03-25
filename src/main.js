// main.js

import Cocoquantus from './modules/cocoquantus.js';
import Deerhorn from './modules/deerhorn.js';
import Peterlin from './modules/peterlin.js';
import Plumbutter from './modules/plumbutter.js';
import Tetrax from './modules/tetrax.js';

const buttonCocoquantus = document.getElementById(
  'buttonAddCocoquantus',
);

const buttonDeerhorn = document.getElementById('buttonAddDeerhorn');

const buttonPeterlin = document.getElementById('buttonAddPeterlin');

const buttonPlumbutter = document.getElementById(
  'buttonAddPlumbutter',
);

const buttonTetrax = document.getElementById('buttonAddTetrax');

buttonCocoquantus.addEventListener('click', () => {
  const cocoquantus = new Cocoquantus();
  console.log(cocoquantus);
});

buttonDeerhorn.addEventListener('click', () => {
  const deerhorn = new Deerhorn();
  console.log(deerhorn);
});

buttonPeterlin.addEventListener('click', () => {
  const peterlin = new Peterlin();
  console.log(peterlin);
});

buttonPlumbutter.addEventListener('click', () => {
  const plumbutter = new Plumbutter();
  console.log(plumbutter);
});

buttonTetrax.addEventListener('click', () => {
  const tetrax = new Tetrax();
  console.log(tetrax);
});
