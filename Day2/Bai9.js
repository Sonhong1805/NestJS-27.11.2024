// Bài 9: Gộp hai mảng và loại bỏ trùng lặp
// Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp. Gợi ý: Sử dụng Set hoặc vòng lặp.
const mergeAndRemoveDuplicates = (arr1, arr2) => [
  ...new Set([...arr1, ...arr2]),
];
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
