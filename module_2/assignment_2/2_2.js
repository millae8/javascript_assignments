let names = [];

function number(times){
  for (let i = 1; i <= times; i++) {
    name = prompt('What are the names of the participants?');
    names.push(name);
  }
}

number(prompt('Amount of participants:'));

document.querySelector('#target').textContent = names.sort();