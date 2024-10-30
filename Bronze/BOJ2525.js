// Solution 1
function solution(hour, minute, cookTime) {
  const totalTime = hour * 60 + minute + cookTime;
  const newHour = Math.trunc(totalTime / 60) % 24;
  const newMinute = totalTime % 60;

  console.log(newHour, newMinute);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const hour = parseInt(input[0].split(' ')[0]);
const minute = parseInt(input[0].split(' ')[1]);
const cookTime = parseInt(input[1]);

solution(hour, minute, cookTime);