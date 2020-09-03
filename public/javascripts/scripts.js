const pokeSound = new Audio("/audio/pokeball.mp3")
pokeSound.volume = 0.1;
const clickA = new Audio("/audio/pressA.wav")
clickA.volume = 0.1;

function pokeballSound() {
  pokeSound.play();
}

function bling() {
  clickA.play();
}