//operators
//Arithmetic,  comparison, logical, assignment, unary, ternary 
//Arithmetic:
//+,-,/,*,**,%
//+ --> Add and concatenation
//ex. 1+2, "user" + "name"
//ex. 1+2+3, "user" + "name" + "jiya"
// -
//ex. 2 - 1
// /, *
//ex. 240/2, 25*2
// %(modules) (sheshfal)
//ex. 12%4 --> 0
//ex. 9%2 --> 1
// ** (square)(exposination)
//ex. 2**3 --> 8
  

//Comparison (ans: true, false)
// ==
//ex. 12 === 13, 12 == "12" (don't check type,only check value, not strict comparison)
// !=
//ex. 12 != 13 (reverce of ==, not strict comparison)
//!==
//ex. 12!== "12"(reveres of ===)
// >=
//ex. 22 >= 22
// <=
//ex. 13 <= 13
// <
//ex. 12 < 113, 12 < 9, 22 < 22
// >
//ex. 12 >113,12 > 9, 13 > 13 



//Assignment
//==
// give a value, vlaue assignment operator
//ex. let a = 2;
// +=
//ex.a +=3;(add value into old value and save it into a)
// -=
//ex. a -= 4;(substract value into old value and save it into a)
// *=
//ex. a *= 2;
// /=
//ex. a /= 2;
// %=
//ex. a %= 2; (give remainder)


//Logical 
//&&(AND)
//ex.true && true --> true 12<13 && 14<15 -->
//false && true --> false 12>13 && 14<15 -->false
//true && false --> false
//false && false --> false
//||(OR)
//ex.true || true -->true
//false || ture -->true
// true || false -->true
//false || false -->false
//!(NOT)
//ex. !true -->false
//!false -->true
//!12 -->false --> !!12 -->true

//unary operator
//ex. +"5" --> 5
// +"name" -->NaN
//-
//ex. -5
//!
//ex.!12 -->false
//typeof
//ex. typeof "name" -->string
// ++
//ex.let a =12
// a++ -->12 // post ex. a++ + a=> 25
// ++a -->13 // pre ex. a++ + a=> 26
// --
// ex.let a =3;
// a--
// a++


//Ternary
//condition ? true : false  
//let a =12>13 ? console.log("true"): console.log("false");

//Typeof null --> object
// typeof [] --> object, let a=[]; a instanceof array -->true
//instanceof --> check type of reference data type // don't use typrof for reference data type
//typeof NaN -->number
//typeof --> premitive data type mate use krvo
//instanceof --> reference data type mate use krvo


//=============================//
// (Logical AND &&)
// let x = 10;
// let y = 20;
// if (x > 5 && y > 5) {
//   console.log("Both are greater than 5");
// } else {
//   console.log("One or both are not greater than 5");
// }

// (Logical OR ||)
// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn) {
//   console.log("Access granted");
// } else {
//   console.log("Access Denied");
// }

// (Logical NOT !) 
// let temp = 35;

// if (!(temp > 30)) {
//   console.log("Hot day");
// } else {
//   console.log( "Pleasant day");
// }
// temp > 30 is true → !true = false


//  (Truthy / Falsy) 
// let a = 0;

// if (a) {
//   console.log("Truthy value");
// } else {
//   console.log("Falsy value");
// }

// (Ternary)
// let score = 78;
// let grade =
//   score >= 90 ? "A" :
//   score >= 80 ? "B" :
//   score >= 70 ? "C" : "D";
// console.log("Ex-5: Grade =", grade);

// //(Ternary)
// let points = 120;
// let status =
//   points >= 100 ? "Gold" :
//   points >= 50 ? "Silver" : "Bronze";

// console.log("status");

// //(AND + Ternary)
// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log("Access =", access);

// //(Post Increment) 
// let a1 = 5;
// a1++;
// console.log(a1);

// //(Pre Increment)
// let a2 = 8;
// ++a2;
// console.log(a2);

// //  (Post Increment Assi) 
// let b1 = 4;
// let c1 = b1++;
// console.log(b1, c1);

// //(Pre Increment Assi)
// let b2 = 4;
// let c2 = ++b2;
// console.log(b2, c2);

// //(Post Decrement)
// let m = 10;
// console.log(m--); // 10
// console.log("After decrement:", m); // 9

// //(Complex Increment)
// let n = 5;
// let result = n++ + ++n;
// console.log(result);
// // n++ → 5 (n = 6)
// // ++n → 7

// //(Function + Increment)
// let likes = 100;
// function likePost() {
//   return ++likes;
// }
// console.log(likePost());
// console.log("Likes:", likes);

// //(Post Decrement Comparison)
// let count = 5;
// if (count-- === 5) {
//   console.log("Matched");
// } else {
//   console.log("Not Matched");
// }
// // Comparison uses old value
