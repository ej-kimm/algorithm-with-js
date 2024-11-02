// Solution 1
function solution(dice1, dice2, dice3) {
  // 1. dice1, dice2, dice3을 오름차순으로 정렬한다
  // 2. 모두 같은 눈일 때 => dice[0] === dice[2]
  // 3. 2개만 같을 때 => dice[0] === dice[1]
  // 4. 모두 다른 눈일 때 => 2, 3번 외
  const dice = [dice1, dice2, dice3].sort((a, b) => a - b);
  
  if (dice[0] === dice[2]) {
    return console.log(10000 + (dice[0] * 1000));
  } else if (dice[0] === dice[1] || dice[1] === dice[2]) {
    return console.log(1000 + (dice[1] * 100));
  } else {
    return console.log(dice[2] * 100);
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [dice1, dice2, dice3] = input.map(Number);

solution(dice1, dice2, dice3);