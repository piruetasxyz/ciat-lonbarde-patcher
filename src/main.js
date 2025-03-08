// main.js

import Clicker from './modules/clicker.js';
import Cocoquantus from './modules/cocoquantus.js';
import Deerhorn from './modules/deerhorn.js';
import Peterlin from './modules/peterlin.js';
import Plumbutter from './modules/plumbutter.js';
import Sidrax from './modules/sidrax.js';
import Tetrax from './modules/tetrax.js';

const buttonClicker = document.getElementById('buttonAddClicker');

const buttonCocoquantus = document.getElementById(
  'buttonAddCocoquantus',
);

const buttonDeerhorn = document.getElementById('buttonAddDeerhorn');

const buttonPeterlin = document.getElementById('buttonAddPeterlin');

const buttonPlumbutter = document.getElementById(
  'buttonAddPlumbutter',
);

const buttonSidrax = document.getElementById('buttonAddSidrax');

const buttonTetrax = document.getElementById('buttonAddTetrax');

buttonClicker.addEventListener('click', () => {
  const clicker = new Clicker();
  console.log(clicker);
});

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

buttonSidrax.addEventListener('click', () => {
  const sidrax = new Sidrax();
  console.log(sidrax);
});

buttonTetrax.addEventListener('click', () => {
  const tetrax = new Tetrax();
  console.log(tetrax);
});
