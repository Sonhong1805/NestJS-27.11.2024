// Bài 9: Gộp hai mảng và loại bỏ trùng lặp
// Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp. Gợi ý: Sử dụng Set hoặc vòng lặp.
function mergeAndRemoveDuplicates(arr1, arr2) {
  const resultArray = arr1;
  for (let i = 0; i < arr2.length; i++) {
    if (!resultArray.includes(arr2[i])) {
      resultArray.push(arr2[i]);
    }
  }
  return resultArray;
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
