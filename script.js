const a = 5;
const b = 3;
let c = a + b;


console.log("a =", a, "& b =", b)
// console.log("a + b =", c);
// console.log("a % b =", a % b)

const cond1 = a > b;
const cond2 = a == 5;


console.log("a  b", cond2 && cond1)

//Conditional Statements 

//Odd or Even 

let num = 12;

if (num%2 === 0) {
    console.log(num, "is an Even Number");
} else {
    console.log(num, "is an Odd Number");
}

//else if 

let mode = "dark";
let color;

if (mode === "dark") {
    color ="black";
} else if (mode === "Blue") {
    color = "Blue";
} else if (mode === "green") {
    color = "Green"
} else {
    color = "White";
}

console.log(color);

//Ternary Operator 

let age = 23;

let result = age >= 18 ? "adult" : "not adult";

console.log(result);



let number = prompt('Enter a Number');

if (number % 5 === 0) {
    console.log(number, "is a multiple of 5")
} else {
    console.log(number, "is not a multiple of 5")
}

// IF ELSE ELSE-IF

let marks = prompt("Enter your marks");

if (marks >= 80 && marks <= 100) {
    console.log(" Your Grade is A");
} else if (marks >= 70 && marks <= 79) {
    console.log(" Your Grade is B");
} else if (marks >= 60 && marks <= 69) {
    console.log(" Your Grade is C");
} else if (marks >= 50 && marks <= 59) {
    console.log(" Your Grade is D");
} else if (marks >= 0 && marks <= 49) {
    console.log(" Your Grade is F");
}

// LOOPS 

for (let say = 1; say <= 6; say++) {
    console.log("I am a Nig");
};

let sum = 2;
for (let i = 3; i <= 4; i++) {
    sum = sum + i;

}
console.log("sum =", sum);

let i = 1;
 while(i <= 5) {
    console.log("Hello World");
    i++;
 }

let j = 1;
do {
    console.log("Harry Potter");
    j++;
} while (j <= 6);

let str = "JavaScriptt";

for (let i of str){
    console.log("i =", i);
}

let diver = {
    Name: "Pro Diver",
    Age: 32,
    Experience: 15,
    isPro: true,
};

for (let i in diver) {
    console.log("i =", i, "value =", diver[i]);
}


// LOOPS P

for (let i = 0; i <= 100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    } else {

    }
};

let gameNum = 92;
let userNum = prompt("Guess The Number -");

while (userNum != gameNum) {
    userNum = prompt("Wrong Number! Guess The Number Again");
}

console.log("That's The Right Number !");

// STRINGS 

// str = `This Book Costs ${90}`;
// console.log(str)

// let string = "abcd";
// console.log(string);

// //STRING PRACTICE 

// // let fullName = prompt("Enter Your Full Name");
// // let userName = "@" + fullName.replace(fullName, fullName);
// // let name = userName.concat(fullName.length);

// // console.log(name)



// //ARRAYS

// let businessman = ["Jeff Bezos", "Elon Musk", "Warren Buffet", "Andrew Tate"];
// for (let idx = 0; idx < businessman.length; idx++) {
//     console.log(businessman[idx]);
// }

// //

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum = sum + val;
// }

// let average = sum / marks.length
// console.log(`The Average Marks of The Class is = ${average}`);

// //

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Offer Price = ${items[i]}`);
//     i++;
// }

// //

// let car = ["Porsche", "Lamborghini", "Bugatti", "Ferrari", "Pagani", "Rolls Royce", "Toyota"];
// // car.push("Lexus","Remac", "Mazda");
// // car.pop();
// car.splice(1, 0, "Mazda", "Nissan");

// console.log(car.toString());
// console.log(car);

// //PQ

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// companies.splice(1, 1, "Ola");
// companies.push("Amazon");

// console.log(companies);

// //Functions 

// function myFunction(msg) {
//     console.log(msg)
// }

// myFunction(3 * 3);

// const mulArrowFunc = (x, y) => {
//     console.log(x * y);
// }

// mulArrowFunc(5 , 3);

// let arr = ["Dhaka", "Chittagong", 'Rangamati'];

// arr.forEach ((val, idx) => {
//     console.log(val, idx);
// })

// let square = [1, 2, 3, 4, 5];

// square.forEach((val) => {
//     console.log(val**2); 
// })

// let mark = [97, 64, 32, 49, 99, 65, 92];

// let toppers = mark.filter((val) => {
//     return val > 90;
// })

// console.log(toppers);

// let n = prompt("Enter a Number");

// let addAll = [];

// for (let i = 1; i<=n; i++) {
//     addAll[i-1] = i;
// }

// console.log(addAll);

// let sumOfAll = addAll.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(sumOfAll);

// let factorial = addAll.reduce((prev, curr) => {
//     return prev * curr;
// })

// console.log(factorial)

let x = 0.2 + 0.1;

document.getElementById("demo").innerHTML = x;