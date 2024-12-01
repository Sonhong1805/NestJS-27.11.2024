// Bài 6: Loại bỏ phần tử trùng lặp
// Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng. Gợi ý: Sử dụng Set hoặc vòng lặp.
function removeDuplicates(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
