// Bài Tập 5: Quản lý nhân viên
// - Tạo lớp Employee với các thuộc tính: name, position, salary.
// - Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails().
// - Tạo danh sách nhân viên và in thông tin chi tiết.

class Employee {
  protected name: string;
  protected position: string;
  protected salary: number;

  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Quản lý", salary);
  }

  getDetails() {
    return `${this.name} là ${this.position} có mức lương $${this.salary}`;
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Lập trình viên", salary);
  }

  getDetails() {
    return `${this.name} là ${this.position} có mức lương $${this.salary}`;
  }
}

const employees: Employee[] = [
  new Manager("Nguyen Van A", 1000),
  new Developer("Nguyen Hong S", 3000),
  new Developer("Nguyen Thi T", 2500),
  new Manager("Tran Quoc H", 500),
];

employees.forEach((employee: Employee) => {
  if (employee instanceof Manager || employee instanceof Developer) {
    console.log(employee.getDetails());
  }
});
