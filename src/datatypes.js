console.log('hello world');
console.log(100);
console.log(10 + 20);
console.log('hello naveen', 1000, 12.33, true);

//data types:
//type of data:
//1. Primitive Data Types: memory is fixed - predefined data types
//number
//string
//boolean: true/false
//null
//undefined
//BigInt
//Symbol


//2. Non Primitve Data types: Reference Type/Object Types: the memory is not fixed/not predefined
//Objects
//Arrays
//Functions
//map/list/set
//Class/Interfaces


//3 identifiers: var, let, const
//1 byte = 8 bits

//number:
//size: 8 bytes = 64 bits
let x = 10;
console.log(x);
console.log(typeof x);//number
console.log(typeof (x));//number


let y = 12.33;
console.log(y);
console.log(typeof y);//number

let u = -1000;
console.log(u);

let i;
console.log(i);//undefined
console.log(typeof i);//undefined

//string: collection of characters
//"" and ''
//size: for each char, it will take 2 bytes + extra 2 bytes(buffer)

let name = 'Naveen'; //6x2 = 12 + 2(buffer) = 14 bytes
let username = "Naveen Automation Labs";
console.log(name);
console.log(username);
console.log(typeof username);

let p = '1000';
console.log(p);
console.log(typeof p);
console.log(name, username, p, typeof name, typeof p);

let ch = '$';//string
console.log(typeof ch);

let cj = 'A';
console.log(cj);

//mobile number, FAX number, SSN, AAdhar card, Credit Card
//alwys use string

let myMobileNumber = '+91-9898987656';
let ccNumber = '1232 4545 8989 9876';

//boolean: true/false
//size: 4 bytes = 32 bits
let isEmpExist = true;
console.log(isEmpExist);
console.log(typeof isEmpExist);//boolean

let isLoanApproved = false; // 4 bytes

//undefined:
//0 bytes
let pop = undefined;
console.log(pop); //undefined
console.log(typeof pop);//undefined

pop = 1000;
//8 bytes
console.log(pop);//1000
console.log(typeof pop);//number

//null: no value; object related operations/activities
//size: 0 bytes
let user = null;
console.log(user);
console.log(typeof null);//object -- old legacy bug in JS

///------------//

//var vs let vs const:

//var -- keyword/identifier to declare a variable in JS:

//redeclaration: allowed
var z = 10;
var z = 20;
console.log(z);//20

var loginButton = 'login';
var loginButton = 'Cotinue';

//let -- keyword/identifier to declare a variable in JS:
//redeclaration: not allowed: error
// let k = 10;
// let k = 20;
// console.log(k);

//const: keyword/identifier to declare a constant variable in JS:
//redeclaration: not allowed: error
// const PI = 3.14;
// PI = 9.11;
// console.log(PI);
// const Trainer_Name = 'Naveen';
// Trainer_Name = 'Ravi';
// console.log(Trainer_Name);
const PI = 3.14;
//const PI = 3.14;
console.log(PI);

//Reassignment:
var t1 = 10;
t1 = 20;
t1 = 30;
console.log(t1);

let u1 = 20;
u1 = 30;
u1 = 40;
console.log(u1);

//hoisting:access the var before declaraing it..

//var: hoisting is allowed with undefined --- no error
console.log(m);//undefined
var m = 100;
console.log(m);//100

console.log(firstName);//undefined
var firstName = 'Naveen';

//let: hosting is not allowed -- ReferenceError: Cannot access 'b' before initialization
console.log(b1);//error
let b1 = 90;

//const: hosting is not allowed -- ReferenceError: Cannot access 'b' before initialization
console.log(trainerName);
const trainerName = 'Naveen';

//var vs let vs const:
//
// var g = 20;
// let g = 10;
// console.log(g);

const days = 7;
days = 10;
console.log(days * 100);

let a = 100;
let b = 100;
let c = 100;

//TS (programmer) ----> JS ----> browser runtime (JS)

console.log(y1);
let y1;

console.log(x1);
var x1;

//console.log(k);
//const k;   //SyntaxError: Missing initializer in const declaration
