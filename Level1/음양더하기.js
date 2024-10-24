// Solution 1
function solution(absolutes, signs) {
  let answer = 0
  // 1. absolutes의 길이 만큼 for문을 돌린다
  for (let i = 0; i < absolutes.length; i++) {
    // 2. signs에 대응하는 부호를 달아준다
    // 3. 모든 값들을 더해서 리턴해준다
    signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
  }

  return answer
}