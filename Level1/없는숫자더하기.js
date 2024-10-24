// Solution 1
function solution(numbers) {
  let sum = 45;
  numbers.forEach(number => {
    sum -= number;
  })
  return sum;
}