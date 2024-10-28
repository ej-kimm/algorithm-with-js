// Solution 1
function solution(n) {
  const digits = String(n).split('');
  return digits.reduce((acc, current) => acc + Number(current), 0)
}