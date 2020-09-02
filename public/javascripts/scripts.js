const pokeSound = new Audio("/audio/pokeball.mp3")
const clickA = new Audio("/audio/pressA.wav")

function pokeballSound() {
  pokeSound.play();
}

function bling() {
  clickA.play();
}