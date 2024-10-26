// Solution 1
function solution(numbers) {
  let average = 0
  for (const number of numbers) {
    average += number
  }
  return average / numbers.length
}