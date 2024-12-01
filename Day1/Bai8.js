// Bài 8: Tìm phần tử xuất hiện nhiều nhất
// Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng. Gợi ý: Sử dụng đối tượng (object) để lưu tần suất.
function findMostFrequent(arr) {
  let counts = {};
  let max = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    counts[el] = counts.hasOwnProperty(el) ? counts[el] + 1 : 1;
    if (counts[el] >= max) {
      max = counts[el];
      result = el;
    }
  }
  return result;
}

console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2

//https://stackoverflow.com/questions/6120931/how-to-count-certain-elements-in-array
