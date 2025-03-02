// Solution 1
function solution(price, money, count) {
  let totalCost = (count * (count + 1) / 2) * price;
  let deficit = totalCost - money;

  return deficit > 0 ? deficit : 0;
}

// Solution 2
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}