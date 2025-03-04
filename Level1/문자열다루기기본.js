// Solution 1
function solution(s) {
  // 길이가 4 또는 6인지 확인
  if (s.length !== 4 && s.length !== 6) return false;
    
  // 숫자로만 구성되어 있는지 확인
  return [...s].every(char => char >= '0' && char <= '9');
}