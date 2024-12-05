// Bài Tập 1: Quản lý học sinh
// Tạo một lớp Student với các thuộc tính:
// - name (string)
// - age (number)
// - grade (string)
// Viết một phương thức để hiển thị thông tin của học sinh.
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.showStudent = function () {
        return "H\u1ECDc sinh ".concat(this.name, " ").concat(this.age, " tu\u1ED5i \u0111\u01B0\u1EE3c lo\u1EA1i ").concat(this.grade);
    };
    return Student;
}());
var student = new Student("Nguyễn Hồng Sơn", 21, "giỏi");
console.log(student.showStudent());
