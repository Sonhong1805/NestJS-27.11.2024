// Bài 7: Sắp xếp mảng tăng dần
// Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần. Gợi ý: Sử dụng phương thức sort().
function sortArrayAscending(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}
console.log(sortArrayAscending([5, 2, 9, 1])); // [1, 2, 5, 9]
