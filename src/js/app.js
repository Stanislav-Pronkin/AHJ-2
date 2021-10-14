// TODO: write code here
import img from '../pic/goblin.png';

const cells = document.getElementsByClassName('field');
const character = document.createElement('img');
let position;
let activePosition;

character.src = img;
character.className = 'character';

function getNextPosition() {
  position = Math.round(Math.random() * (cells.length - 1));
}

function getPosition() {
  getNextPosition();
  if (activePosition === position) {
    console.log('Repeat');
    getPosition();
  } else {
    activePosition = position;
  }
}

setInterval(() => {
  getPosition();

  cells[activePosition].appendChild(character);
}, 1000);
