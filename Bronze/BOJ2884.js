// Solution 1
function solution(hour, minute) {
  if (minute >= 45) {
    minute -= 45;
  } else {
    hour = hour === 0 ? 23 : hour - 1;
    minute += 15;
  }
  console.log(hour, minute);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [hour, minute] = input.map(Number);

solution(hour, minute);