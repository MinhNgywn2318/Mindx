// 1.
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const number = parseInt(prompt("Nhập số: "));
if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không phải số nguyên tố.`);
}

// 2.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const a = parseInt(prompt("Nhập số: "));
const result = factorial(a);
console.log(`Giai thừa của ${a} là ${result}`);

// 3.
const n = parseInt(prompt("Nhập số N: "));
let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(`Tổng số lẻ từ 1 đến ${n} là ${sum}`);
