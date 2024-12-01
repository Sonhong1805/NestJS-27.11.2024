//Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. Gợi ý: Sử dụng phương thức filter().
const filterEvenNumbers = (arr) => arr.filter((item) => item % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
