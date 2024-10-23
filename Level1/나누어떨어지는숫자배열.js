// Solution 1
function solution(arr, divisor) {
  const filteredArray = arr.filter(element => element % divisor === 0);
  if (filteredArray.length === 0) return [-1];
  return filteredArray.sort((a, b) => a - b);
}