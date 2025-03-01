// Solution 1
function solution(price, money, count) {
  let totalCost = (count * (count + 1) / 2) * price;
  let deficit = totalCost - money;

  return deficit > 0 ? deficit : 0;
}