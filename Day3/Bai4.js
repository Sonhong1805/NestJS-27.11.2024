// Bài Tập 4: Hình học
// - Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
// - Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
// - Viết chương trình tính diện tích các hình và hiển thị kết quả.
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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(2, 5);
console.log(rectangle.calculateArea());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.π = Math.PI;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return this.radius * this.radius * this.π;
    };
    return Circle;
}(Shape));
var circle = new Circle(3);
console.log(circle.calculateArea());
