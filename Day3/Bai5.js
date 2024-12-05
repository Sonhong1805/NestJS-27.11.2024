// Bài Tập 5: Quản lý nhân viên
// - Tạo lớp Employee với các thuộc tính: name, position, salary.
// - Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails().
// - Tạo danh sách nhân viên và in thông tin chi tiết.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Quản lý", salary) || this;
    }
    Manager.prototype.getDetails = function () {
        return "".concat(this.name, " l\u00E0 ").concat(this.position, " c\u00F3 m\u1EE9c l\u01B0\u01A1ng $").concat(this.salary);
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Lập trình viên", salary) || this;
    }
    Developer.prototype.getDetails = function () {
        return "".concat(this.name, " l\u00E0 ").concat(this.position, " c\u00F3 m\u1EE9c l\u01B0\u01A1ng $").concat(this.salary);
    };
    return Developer;
}(Employee));
var employees = [
    new Manager("Nguyen Van A", 1000),
    new Developer("Nguyen Hong S", 3000),
    new Developer("Nguyen Thi T", 2500),
    new Manager("Tran Quoc H", 500),
];
employees.forEach(function (employee) {
    if (employee instanceof Manager) {
        return employee.getDetails();
    }
});
