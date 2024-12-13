let names = [];

function dogs(times){
  for (let i = 1; i <= times; i++) {
    name = prompt('What is the name of the dog?');
    names.push(name);
  }
}

dogs(6);
document.querySelector('#target').textContent = names.reverse();