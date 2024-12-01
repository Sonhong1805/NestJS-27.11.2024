// Bài 4: Đếm số lần xuất hiện của một phần tử
// Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reduce().
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3
