// Solution 1
function solution(arr) {
  return arr.filter((current, index) => index === 0 || arr[index - 1] !== current)
}