// Solution 1
function solution(n) {
  const sqrt = Math.sqrt(n);
  const answer = Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;

  return answer
}