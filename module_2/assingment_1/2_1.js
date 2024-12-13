const numbers = [];

numbers[0] = prompt('Give first number:');
numbers[1] = prompt('Give second number:');
numbers[2] = prompt('Give third number:');
numbers[3] = prompt('Give fourth number:');
numbers[4] = prompt('Give fifth number:');

for (let i = numbers.length-1; i >= 0; i--) {
  console.log(`Number: ${numbers[i]}`);
}