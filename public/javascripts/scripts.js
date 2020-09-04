const pokeSound = new Audio("/audio/pokeball.mp3")
pokeSound.volume = 0.05;
const clickA = new Audio("/audio/pressA.wav")
clickA.volume = 0.1;
const start = new Audio("/audio/startbutton.wav")
start.volume = 0.2;
const turnOff = new Audio("/audio/logOff.wav")
turnOff.volume = 0.1;
const save = new Audio("/audio/sfx_save.wav")
save.volume = 0.2;
const ballToss = new Audio("/audio/ballToss.wav")
ballToss.volume = 0.2;
const turnOn = new Audio("/audio/login.wav")
turnOn.volume = 0.1;

function login() {
  turnOn.play();
}

function catchPoke() {
  ballToss.play();
}

function saveSound() {
  save.play();
}

function logOff() {
  turnOff.play();
}

function startSound() {
  start.play();
}

function pokeballSound() {
  pokeSound.play();
}

function bling() {
  clickA.play();
}