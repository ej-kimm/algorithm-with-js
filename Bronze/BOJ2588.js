// Solution 1
function solution(num1, num2) {
  console.log(num1 * (num2 % 10));
  console.log(num1 * Math.trunc((num2 / 10) % 10));
  console.log(num1 * Math.trunc(num2 / 100));
  console.log(num1 * num2);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [num1, num2] = input.map(Number);

solution(num1, num2);