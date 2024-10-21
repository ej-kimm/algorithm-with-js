// Solution 1
function solution(x, n) {
  let muliplesOftwo = [];
  for (let i = 1; i <= n; i++) {
    muliplesOftwo.push(x * i);
  }

  return muliplesOftwo
}