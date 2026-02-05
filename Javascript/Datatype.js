// //DATA TYPES:
// //Two type of data types
// // 1.primitive data type
// //copy -->read value
// let a =12;
// let b = a;//a --> 12
// a = a+3;
// //types : string , number , boolean , null , undefined , symbol , bigint
// //string:
// //'' - single quotes
// //"" - double quotes
// //`` - backticks
// let d = "name";
// d = 'username';
// d = `firstname`;

// //number:
// let e = 12;
// e = 12.25;

// //boolean:
// let f = true;
// f = false;

// //null:
// //you give a value
// let g = null;

// //undefined:
// //you don't give a value,by defualt value
// let h;  

// //symbol:
// //unique immutable value
// let u1 = Symbol("uid");
// let u2 =Symbol("uid");
// //check u1===u2
// let obj ={uid:1, name: "demo", email:"demo@test.com"};
// let u3 =Symbol("uid")
// obj[u3]="001"

// //bigint:
// //check range number , Number.Max_SAFE_INTEGER
// let number = 9007199254740991; 
// number =number +4 ;
// let num2 =9007199254740991n;//n is add value
// num2 +3n;

// // 2. Non-primitive data types(Reference data types)
// //copy -->give reference of parent
// let temp_a = [1,2,3];
// let temp_b = temp_a;
// temp_b.pop();//remove value
// //types : arrays[] , objects{} , functions()

// let temp_array = ["name", "age" , "phone_number"];
// let obj = {name : "demo", age:20,phone_number:6578436534}
// function name(params){}

// //Dynamic Typing
// let temp_d ="name";
// temp_d = 123;
// temp_d = {};
//javascript --> typescript
 
//typeof quikes
//typeof 12
// check type of variable use --> ex.typeof NaN,typeof null, 1 + "1",1 == "1", 1==="1" 
//why typeof NaN --> number
//NaN is a failed number operations that why type is number
//ex."hello" - 5 -->NaN

//type corealation
//"5" + 1
//"5" - 1

//Truthy vs Falsy values
//0 false, "" ,null ,undefined ,NaN ,document.all, -->false
//ex. !!0 -- check value is true and false
//ex. if (null){}, js convert it into false 
//ex. if(-1){}, js convert it into true
// all --> true
// if (12) {
//     console.log(true)
// }

//==========================//

//examples:----
// console.log(true + false)

// console.log('ex:- null ',null + 1)

// console.log('ex:-"12" + 12 :',"12" + 12)

// console.log(!! undefined)

// console.log("12" - 1)

//  //why typeof NaN --> number  
// //NaN is a failed number oprations that why that type is number
//  //ex. "hello" + 5 --> NaN
//  console.log("hello" + 5)

//  //Undefined vs Null
// let x;
// console.log(x);
// let y = null;
// console.log(y);