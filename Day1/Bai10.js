// Bài 10: Kiểm tra mảng đối xứng
// Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không (phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp cuối,...). Gợi ý: Sử dụng vòng lặp hoặc so sánh từng cặp phần tử.
function isSymmetricArray(arr) {
  let isSymmetric = true;
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      isSymmetric = false;
    }
  }
  return isSymmetric;
}
console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false

//https://stackoverflow.com/questions/28923639/checking-if-an-array-in-c-is-symmetric
