// *- tim hieu hoisting trong js
// 
// /**
//  * 1. Giải phương trình bậc 2 với 3 đối số a, b, c
//  * 2. Tính chỉ số IBM của người có chiều cao là x cm và cân nặng là y kg
//  * 3. Kiểm tra xem 1 số có phải là số lẻ, số chính phương, số nguyên tố, số hoàn hảo hay không?
//  * hinh chu nhat, hinh vuong, hinh tru, hinh thang, hinh tam giac, hinh tron
//  * input: chieu cao, chieu dai, chieu rong
//  * output: chu vi, dien tich, the tich (neu co)

// 1.
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
// 2.
// Nhập chiều cao (đơn vị: cm) và cân nặng (đơn vị: kg)
var chieuCao = parseFloat(prompt("Nhập chiều cao (cm):"));
var canNang = parseFloat(prompt("Nhập cân nặng (kg):"));

// Tính chỉ số BMI
var bmi = (canNang / (chieuCao * chieuCao)) * 10000;

// Hiển thị kết quả
console.log("Chỉ số BMI của bạn là: " + bmi.toFixed(2));
// 3.
// Hàm kiểm tra số lẻ
function isOdd(number) {
    return number % 2 !== 0;
}

// Hàm kiểm tra số chính phương
function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

// Hàm kiểm tra số nguyên tố
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Hàm kiểm tra số hoàn hảo
function isPerfectNumber(number) {
    if (number <= 1) {
        return false;
    }
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }
    return sum === number;
}

// Nhập number
var inputNumber = parseInt(prompt("Nhập một số:"));

// Kiểm tra và hiển thị kết quả
if (isOdd(inputNumber)) {
    console.log(inputNumber + " là số lẻ.");
}

if (isPerfectSquare(inputNumber)) {
    console.log(inputNumber + " là số chính phương.");
}

if (isPrime(inputNumber)) {
    console.log(inputNumber + " là số nguyên tố.");
}

if (isPerfectNumber(inputNumber)) {
    console.log(inputNumber + " là số hoàn hảo.");
}

// 4.
// Hình chữ nhật
function rectangle(chieuDai, chieuRong) {
    const chuVi = 2 * (chieuDai + chieuRong);
    const dienTich = chieuDai * chieuRong;
    return { chuVi, dienTich };
}

// Hình vuông
function square(chieuDai) {
    const chuVi = 4 * chieuDai;
    const dienTich = chieuDai * chieuDai;
    return { chuVi, dienTich };
}

// Hình trụ
function cylinder(chieuRong, chieuCao) {
    const chuViDay = 2 * Math.PI * chieuRong;
    const dienTichXungQuanh = chuViDay * chieuCao;
    const theTich = Math.PI * chieuRong * chieuRong * chieuCao;
    return { chuViDay, dienTichXungQuanh, theTich };
}

// Hình thang
function trapezoid(chieuCao, dayLon, dayNho, chieuDai) {
    const chuVi = chieuDai + dayLon + dayNho + 2 * chieuCao;
    const dienTich = (dayLon + dayNho) * chieuCao / 2;
    return { chuVi, dienTich };
}

// Hình tam giác
function triangle(chieuCao, chieuDai) {
    const chuVi = 3 * chieuDai;
    const dienTich = (chieuDai * chieuCao) / 2;
    return { chuVi, dienTich };
}

// Hình tròn
function circle(banKinh) {
    const chuVi = 2 * Math.PI * banKinh;
    const dienTich = Math.PI * banKinh * banKinh;
    return { chuVi, dienTich };
}

// Nhập cac hinh 
var hinh = prompt("Nhập tên hình (rectangle, square, cylinder, trapezoid, triangle, circle):");

switch (hinh) {
    case "rectangle":
        var chieuDai = parseFloat(prompt("Nhập chiều dài:"));
        var chieuRong = parseFloat(prompt("Nhập chiều rộng:"));
        var result = rectangle(chieuDai, chieuRong);
        break;

    case "square":
        var chieuDai = parseFloat(prompt("Nhập cạnh của hình vuông:"));
        var result = square(chieuDai);
        break;

    case "cylinder":
        var chieuRong = parseFloat(prompt("Nhập bán kính đáy của hình trụ:"));
        var chieuCao = parseFloat(prompt("Nhập chiều cao của hình trụ:"));
        var result = cylinder(chieuRong, chieuCao);
        break;

    case "trapezoid":
        var chieuCao = parseFloat(prompt("Nhập chiều cao của hình thang:"));
        var dayLon = parseFloat(prompt("Nhập độ dài đáy lớn của hình thang:"));
        var dayNho = parseFloat(prompt("Nhập độ dài đáy nhỏ của hình thang:"));
        var chieuDai = parseFloat(prompt("Nhập chiều dài của hình thang:"));
        var result = trapezoid(chieuCao, dayLon, dayNho, chieuDai);
        break;

    case "triangle":
        var chieuCao = parseFloat(prompt("Nhập chiều cao của tam giác:"));
        var chieuDai = parseFloat(prompt("Nhập chiều dài của tam giác:"));
        var result = triangle(chieuCao, chieuDai);
        break;

    case "circle":
        var banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));
        var result = circle(banKinh);
        break;

    default:
        console.log("Hình không được hỗ trợ.");
        break;
}

if (result) {
    console.log("Chu vi: " + result.chuVi);
    console.log("Diện tích: " + result.dienTich);
    if (result.theTich) {
        console.log("Thể tích: " + result.theTich);
    }
}


