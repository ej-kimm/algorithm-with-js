// Solution 1
function solution(s) {
  let count = 0
  // 1. 모든 문자를 소문자로 바꾼다
  s = s.toLowerCase()

  // 2. 문자열을 하나씩 읽으며 'p'와 같은 개수, 'y'와 같은 개수를 세서 변수에 카운트해준다
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'y') {
      count++;
    } else if (s[i] === 'p') {
      count--;
    }
  }

  // 3. p와 y를 카운트한 값이 0이면 true, 아니면 false를 리턴한다
  return count === 0 ? true : false
}