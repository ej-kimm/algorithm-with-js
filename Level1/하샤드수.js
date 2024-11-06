// Solution 1
function solution(x) {
  let sum = 0;
  sum = String(x).split('').map(Number).reduce((a, b) => a + b);
  return x % sum === 0
}