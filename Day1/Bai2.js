//Bài 2: Tìm số lớn nhất trong mảng
function findMax(arr) {
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(findMax([10, 20, 30, 5])); // 30
