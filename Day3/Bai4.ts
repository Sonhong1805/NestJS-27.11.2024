// Bài Tập 4: Hình học
// - Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
// - Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
// - Viết chương trình tính diện tích các hình và hiển thị kết quả.

abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(2, 5);
console.log(rectangle.calculateArea()); // 5 x 2

class Circle extends Shape {
  private radius: number;
  private π = Math.PI;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return this.radius ** 2 * this.π;
  }
}

const circle = new Circle(3);
console.log(circle.calculateArea()); // 3 ^ 2 * π
