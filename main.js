'use strict';
//Variables
const select = document.querySelector('.js-select');
const stone = document.querySelector('.js-stone');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-scissors');
const btn = document.querySelector('.js-btn');
const msg = document.querySelector('.js-msg');
const player = document.querySelector('.js-player');
const computer = document.querySelector('.js-computer');

let playerwins= 0;
let computerwins = 0;
//Funciones///////////////

//numero aleatorio asignado a valor papel, tijera o piedra
player
function compare() {
  getluck();
  const computerChoice = getluck();
  const playerChoice = select.value;
  
  if (playerChoice===computerChoice ){ msg.innerHTML='Empate'}
  else if (
    (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
    (playerChoice === 'papel' && computerChoice === 'piedra') ||
    (playerChoice === 'tijeras' && computerChoice === 'papel')
  ) {
    msg.innerHTML = 'Ganaste'; player.innerHTML= 'Jugador:' + playerwins++
  } else {
    msg.innerHTML = 'Perdiste'; computer.innerHTML= 'Computadora:' + computerwins ++
  }
  console.log(computerChoice);
  console.log(playerChoice)

}
function getluck() {
  getRandomNumber(9);
  const randomNum = getRandomNumber(9);
  if (randomNum <= 3) {
    return 'piedra';
  } else if (randomNum <= 7) {
    return 'papel';
  } else {
    return 'tijeras';
  }
}
console.log(getluck());

function getRandomNumber( max) {
    return Math.ceil(Math.random()*max);}

console.log(getRandomNumber(9));

function handleClickPlay(event) {
  event.preventDefault();
 compare();
}
//Eventos
btn.addEventListener('click', handleClickPlay);

