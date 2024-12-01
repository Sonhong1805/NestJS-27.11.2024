// Bài 4: Đếm số lần xuất hiện của một phần tử
// Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reduce().
const countOccurrences = (arr, value) =>
  arr.reduce((sum, item) => (sum += item === value), 0);
console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3
