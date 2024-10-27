// Solution 1
function solution(n, k) {
  const lambSkewers = n * 12000;
  const drink = k * 2000;
  const service = Math.trunc(n / 10);
  const total = lambSkewers + drink;

  return total - service * 2000;
}