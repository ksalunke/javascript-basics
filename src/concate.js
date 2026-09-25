//concatination means mergeing two 

let x = 100;
let y = 200;

let a = 'selenium';
let b = 'playwright';

console.log(x + y);//300
console.log(x + a);//100selenium
console.log(a + b);//seleniumplaywright
console.log(x + y + a + b);//300seleniumplaywright

console.log(a + b + x + y);//seleniumplaywright100200 

console.log(a + b + (x + y));//seleniumplaywright300

console.log(x + y + a + b + x + y);//300seleniumplaywright100200
console.log(x + y + a + b + (x + y)); //300seleniumplaywright300

console.log('the value of x : ' + x);
console.log('the value of y : ' + y);
console.log('the sum : ' + (x + y));

console.log(12.33 + x + y + a + b + 3.44 + 4.55); 
console.log(12.33 + x + y + a + b + (3.44 + 4.55));

console.log(100n + 'Naveen');


//---------------//
//string + number ===> cocantenation
console.log(1 + '1');//11
console.log('1' + 1);//11
console.log(1 + 1);//2
console.log('1' + '1');//11

console.log('----------');

console.log(1 - '1');//0
console.log('5' - 2);//3
console.log('10' - '4');//6

console.log('hello' - 2);//NAN
console.log(10 - 'Naveen');//NAN
console.log('5' - '2');//3

console.log(10 + '1' - 1);//100
//D M A S

console.log(10 - '1' - 1);//8

console.log(10 - '1' + '1');//91

console.log('2' - 10);//-8
console.log('----------');

console.log(10 / "2");//5
console.log("20" / "5");//4
console.log('20' / 'Naveen');//NAN

console.log('----------');

console.log(10 * "2");//20

console.log(10 + '2' * 5);//20
console.log(10 + '20' / 5);//14


console.log('----------');

//exponential: **
console.log(2 ** 3);//8
console.log("2" ** 3);//8

console.log('----------');

//Unary Operators:
//1. unary plus: (+): converts to a number:
console.log(+"42" + 5);
let salary = "2000";
console.log(+salary + 1000);

console.log(+"Naveen" + 100);

//1. unary Negation: (-): converts to a -ve number:

console.log(-"42" + 100);

let marks = "900";
console.log(-marks + 10);

console.log(100 - -"40");

console.log('42' + 2);
console.log('42' - 2);

console.log("100" + 100n);

console.log(+"100n" + 100n);

console.log(+"100n");

let ssn = '402340230203';
let phone = '98989898989';
console.log(ssn - phone);