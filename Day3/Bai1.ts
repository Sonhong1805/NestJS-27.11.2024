// Bài Tập 1: Quản lý học sinh
// Tạo một lớp Student với các thuộc tính:
// - name (string)
// - age (number)
// - grade (string)
// Viết một phương thức để hiển thị thông tin của học sinh.

class Student {
  private name: string;
  private age: number;
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  showStudent() {
    return `Học sinh ${this.name} ${this.age} tuổi được loại ${this.grade}`;
  }
}
const student = new Student("Nguyễn Hồng Sơn", 21, "giỏi");
console.log(student.showStudent()); // Học sinh Nguyễn Hồng Sơn 21 tuổi được loại giỏi
