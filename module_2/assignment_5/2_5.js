let numbers = [];
let number = prompt('Give Number:');
numbers.push(number);
number = prompt('Give a second number:')
numbers.push(number);
let flag = false;

while (true) {
  for (let i = 0; i < numbers.length-1; i++) {
      if (number === numbers[i]) {
        numbers.sort((a,b) => a-b);
        console.log(numbers);
        flag = true;
  }
  }
  if (flag === true) {
  break;
  }
  numbers.push(number);
  number = prompt('Give another number')
}
