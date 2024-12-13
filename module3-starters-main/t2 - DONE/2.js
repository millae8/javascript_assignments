const ul = document.querySelector('#target');

const t = document.createTextNode('First Item');
const t1 = document.createTextNode('Second Item');
const t2 = document.createTextNode('Third Item');

const li = document.createElement('li');
li.appendChild(t);
const li2 = document.createElement('li');
li2.appendChild(t1);
const li3 = document.createElement('li');
li3.appendChild(t2);

ul.appendChild(li);
ul.appendChild(li2)
ul.appendChild(li3);

li2.classList.add("my-item");