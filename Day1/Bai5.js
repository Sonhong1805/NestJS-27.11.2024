// Bài 5: Đảo ngược mảng
// Viết một hàm để đảo ngược thứ tự các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reverse().
function reverseArray(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.unshift(arr[i]);
  }
  return resultArray;
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
