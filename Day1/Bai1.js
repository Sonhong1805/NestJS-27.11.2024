// Bài 1: Tính tổng các số trong mảng
// Viết một hàm nhận vào một mảng số và trả về tổng các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp for hoặc phương thức reduce().

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
