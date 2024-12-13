function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

number = getRandomInt(4);
const name = prompt('What is your name?');

if (number === 0) {
  document.querySelector('#target').innerHTML = name + ', you are Hufflepuff';
} else if (number === 1) {
  document.querySelector('#target').innerHTML = name + ', you are Slytherin';
} else if (number === 2) {
  document.querySelector('#target').innerHTML = name + ', you are Ravenclaw';
} else {
  document.querySelector('#target').innerHTML = name + ', you are Gryffindor';
}