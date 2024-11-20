// Solution 1
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      sum -= i; // 제곱수라면 빼기
    } else {
      sum += i; // 그 외에는 더하기
    }
  }

  return sum;
}