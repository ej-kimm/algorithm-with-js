// Solution 1
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((size) => {
    const [width, height] = size.sort((a, b) => b - a);
    maxWidth = Math.max(width, maxWidth);
    maxHeight = Math.max(height, maxHeight);
  });

  return maxWidth * maxHeight
}