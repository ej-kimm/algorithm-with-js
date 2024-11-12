// Solution 1
function solution(phone_number) {
  return ('*').repeat(phone_number.length - 4) + phone_number.slice(-4)
}

// Solution 2
function solution(phone_number) {
  let n = phone_number.length;
  return phone_number.slice(n - 4).padStart(n, '*');
}