// Solution 1
function solution(s1, s2) {
  const filteredItems = s1.filter(item => s2.includes(item))
  return filteredItems.length
}