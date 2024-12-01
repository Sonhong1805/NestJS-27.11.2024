// Bài 1: Tính tổng các số trong mảng
// Viết một hàm nhận vào một mảng số và trả về tổng các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp for hoặc phương thức reduce().

const sumArray = (arr) => arr.reduce((sum, item) => (sum += item), 0);
console.log(sumArray([1, 2, 3, 4])); // 10
