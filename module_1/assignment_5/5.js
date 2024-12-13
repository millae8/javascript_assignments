'use strict'
const year = prompt('Enter year:');
if (year % 4 === 0 && year % 100 != 0) {
  document.querySelector('#target').textContent = year + ' is a leap year.';
}
else if (year % 4 === 0 && year % 100 === 0) {
  if (year % 400 === 0) {
    document.querySelector('#target').textContent = year + ' is a leap year.';
  }
  else {
    document.querySelector('#target').textContent = year + ' is not leap year.';
  }
}
else {
  document.querySelector('#target').textContent = year + ' is not a leap year';
}