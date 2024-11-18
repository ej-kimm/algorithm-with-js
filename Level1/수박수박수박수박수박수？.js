// Solution 1
function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += (i % 2 === 0 ? '수' : '박');
  }
  return answer;
}

// Solution 2
function solution(n) {
  return ('수박').repeat(n / 2) + ((n % 2) ? "수" : '');
}
