let numbers = [];

number = prompt('Give number:');

while (parseInt(number) != 0) {
  numbers.push(number);
  number = prompt('Give another number:');
} if (parseInt(number) === 0) {
  console.log(numbers.sort((a,b) => b-a));
}