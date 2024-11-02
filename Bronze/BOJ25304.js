// Solution 1
function solution(totalAmount, items) {
  let calc = 0;

  for (let [price, count] of items) {
    calc += price * count;
  }

  if (calc === totalAmount) {
    return console.log('Yes');
  } else {
    return console.log('No');
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const totalAmount = Number(input[0]);
const items = input.slice(2).map(line => {
  const [price, count] = line.split(' ').map(Number);
  return [price, count];
});

solution(totalAmount, items);