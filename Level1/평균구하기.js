// Solution 1
function solution(arrs) {
  let total = 0
  arrs.forEach(arr => total += arr)

  return total / arrs.length
}