// Solution 1
function solution(numbers, v) {
  const filteredNumber = numbers.filter(number => number === v)
  console.log(filteredNumber.length)
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const numbers = input[1].split(' ').map(Number);
const v = parseInt(input[2]);
solution(numbers, v);