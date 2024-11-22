// Solution 1
function solution(s) {
  // 1. 문자열을 배열로 변환 후 정렬하기
  // 2. 대문자는 소문자보다 작게 간주됨
  return s.split('').sort((a, b) => (a > b ? -1 : 1)).join('');
}