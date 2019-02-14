

// Перевод числа из десятичной системы счисления в любую другую и обратно.

const abc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//Набор символов который будет использоваться в системе счисления
let a = '';
let b = 10;

// Перевод числа из любой системы счисления в десятичную
function anyToDecimal(a, b) { // Аргументы: строка, система счисления 
    let n = 0;
    let mas = abc.slice(0, b);
    a = String(a);
    for (let i = 0; i < a.length; i++) {
        n = n + (mas.indexOf(a.substr(a.length - i - 1, 1)) * Math.pow(b, i));
    }
    return n;
}
var res = anyToDecimal('5a3', 16);
console.log('anyToDecimal ', res)


// Перевод числа из десятичной системы счисления в любую другую
function decimalToAny(a, cc) { // Аргументы: число, система счисления 
    let s = '';
    let mas = abc.slice(0, cc);
    while (a > 0) { // Цикл до тех пор пока A не будет меньше нуля
        s = String(s) + mas[a % cc]; // Записываем символ 
        a = Math.floor(a / cc); // Делим без остатка 
    }
    return strReverse(s); // Выводим результат задом наперед 
}
res = decimalToAny('1443', 16) //
console.log('decimalToAny ', res)


function strReverse(s) { // Функция переворачивающая слово
    return s.split('').reverse().join('');
}