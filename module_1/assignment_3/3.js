  'use strict';
  const number1str = prompt('Insert first number:');
  const number2str = prompt('Insert second number:');
  const number3str = prompt('Insert third number:');
  const numbera = parseInt(number1str);
  const numberb = parseInt(number2str);
  const numberc = parseInt(number3str);
  let numbersum = numbera + numberb + numberc;
  let numbersuma = numbera + numberb + numberc;
  let numberave = numbersuma /= 3;
  let numberpro = numbera * numberb * numberc;
  document.querySelector('#target').innerHTML = 'Sum: ' + numbersum + '. Product: ' + numberpro + '. Average: ' + numberave + '.';