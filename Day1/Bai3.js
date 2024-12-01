// Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. Gợi ý: Sử dụng phương thức filter().

function filterEvenNumbers(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
