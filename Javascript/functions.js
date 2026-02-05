//function
//what --> function is a block of code that performs a specific task.
//why --> to avoid code repetition and to make code modular and reusable.
//how --> function keyword, name, parameters, body, return statement

//type of function:
//function name(params) {} -->function declaration
// function abc(){}
// //let fnc = function (){} -->function expression
// let fnc = function(){}
// //let fnc =() => {} --> aarow function -->fat arrow function
// let fuc1 = () => {} 

// function temp_cart(){
//     console.log("adding producat");
// }
// temp_cart("laptop");
// // temp_cart("Watch");
// // temp_cart("mobile");

// //parameters vs arguments
// //parameters are the names listed in the function definition(params --> () ni andar lakheli values)
// //arguments are the real values passed to the function (args --> function call krti ()ni ander lakheli(pass) values)

// function cart(product){//product -- prams
//     console.log(`Adding ${product}`)
// }
// cart("Laptop");//args
// cart("Mac Book");
// cart("S25 ultra");


// function cart2(product, price){//product -- prams
//     console.log(`Adding ${product} at ${price}`)
// }
// cart2("Laptop",50000);//args
// cart2("Mac Book",250000);
// cart2("S25 ultra",70000);


// function booktick(movie, seats) {
//     console.log(`Booking ${seats} seats for ${movie}`);
// }

// booktick("Avatar", 3);
// booktick("Tare jamin par", 2);

// //convert into arrow function
// //let fnc = () => {}
// let booktick1 = (movie, seats) => {
//     console.log(`Booking ${seats} seats for ${movie}`);
// }
// booktick1("arrow function- Avatar", 3);

// //convert into function expression
// //let fnc = function(){}
// const booktick2 = function(movie, seats) {
//     console.log(`Booking ${seats} seats for ${movie}`);
// }
// booktick2("sunction expression Avatar", 3);


// //Default, rest parameters in function
// //Default
// function abcd(b=10,price=0){
//     console.log(price,b)
// }
// abcd(15);

// //use case --fess / flipkart -- platform fee

// //REST:
// //Jyre function ma multiple arguments pass krva to vadhre params banva pde che mate te na krvu pde aetle rest paramenters use kray(rest --> ... jo function na parameter ni andar lakhvma aave che)
// function def(a, b, c, d, e, f, g){
//     console.log(a, b, c, d, e, f, g)
// }
// def(1, 2, 3, 4, 5, 6, 7);

// function def1(...number){ // ...number -- rest params
//     console.log(number);
// }
// def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function def2(a, b, c, ...abc){ // ...number -- rest params
//     console.log(a,b,c,abc);
// }
// def2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// // early return --> function mathi jaldi bahar nikalva mate

// function getValue(value) {
//     if (value < 25) return "Value is less than 25";
//     else if (value < 50) return "Value is less than 50";
//     else if (value < 75) return "Value is less than 75";
//     return "Value is 100 or more";
// }

// let result = getValue(80);
// console.log(result);

// // first class Function
// // function can be treated as variables
// // function can be passed as arguments to other functions
// // function can be returned from other functions

// //===========================
// // first Class Function and their types:
// // function can be treated as variables
// // let temp_a = function(){} - first class function

// const cart5 = function (producat, price) {
//     console.log(`Adding ${producat} at ${price}`);
// };
// cart5("function expression - S25 ultra", 69000);

// // function can be passed as arguments to other functions
// function temp_b(fnc) {
//     fnc();
// }
// temp_b(function fnc2() {
//     console.log("First Class Function");
// });

// //higher order function (HOF)
// //function that takes another function as an argument or return a function as a result
// //function abcd(val){val();} --abcd(function(){console.log("hello")})
// //function abcd(val){} --> higher order function
// function abcd(val) { // higher order function
//     val();
// }

// abcd(function () {
//     console.log("hello");
// });

// //function abcd(){return function(){}} abcd()() --> higher order
// function abcd2() {        // higher order function
//     return function () {
//         console.log("returned function");
//     };
// }

// abcd2()();


//pure vs impure function
//pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare(pure function --> je function bhar na state ne modify na kre)
// let a=10;
// function abcd_pure(){
//     console.log("Hello");
// }

// //impure function --> function je same input par diffrent output aapse athva bahar na state ne modify kare(impure function --> je function bhar na state ne modify kre)
// function abcd_impure(){
//     a++;
//     console.log(a);
// }


// //closure function
// //function je potana parent function na variables ne access kari shake(return thava vala function use krshe perent function na koi variable)(function within function)
// function outer(){
//     let count = 0;
//     function inner(){
//         count++;//accessing outer(parent)function variable
//         console.log(count);
//     }
//     return inner;
// }
// let fnc = outer();
// fnc();

// //===========================
// let count = 0;
// function outer3(j){
//     function inner3(){
//         console.log ('value of j is :',j *2);
//     }
//     return inner3;
// }
// let fnc3 = outer3(20);
// fnc3();     


//lexical scope --> nested function can access variables from its parent function scope
// function outer1(){
//     let outer_var = "outer function variable";
//     function inner1(){
//         let inner_var = "inner function variable";
//         console.log(outer_var);//outer1 function variable write in console log
//         function most_inner(){
//             console.log(inner_var);
//             console.log(outer_var);     
//             let most_inner_var = "most inner function variable";
//             function abc(){
//                 console.log(most_inner_var);
//                 console.log(inner_var);
//                 console.log(outer_var);
//             }
//             abc();
//         }
//         most_inner();
//     }
//     inner1();
// }
// outer1();

// IIFE --> Immediately Invoked Function Expression
//  (function(){})();//function je tarat j execute thai jaye

//  (function (){
//         console.log("this is IIFE function");
//  }())
//  //Hosting in function
//  abcde();
//  function abcde(){
//     console.log("this is hosting function");
//  }

//Hoisting in function 
// abcde();
// function abcde(){
//    console.log("this is hoisting function");
// }

// hoistedFunction1();
// let hoistedFunction1 = function(){
//    console.log("Hoisted function Expression called");
// }


// hoistedFunction2();
// let hoistedFunction2 = () => {
//    console.log("Hoisted Arrow function called");
// }



//exercise
// Example 1:
   // What's the difference between function declaration and function expression in terms of hoisting?
// Function Declaration
// hoistedFunctionDeclaration();
// function hoistedFunctionDeclaration() {
//     console.log("This is a hoisted function declaration.");
// }
// // Function Expression
// let hoistedFunctionExpression = function() {
//     console.log("This is a function expression and is not hoisted.");
// };
//output: "This is a hoisted function declaration."

 //Example 2:
// greet();
// function greet(){
//     console.log("Hello!");
// }
// Output: "Hello!"

 //Example 3:
//Convert normal function to Arrow Function
// function add(a, b){
//     return a + b;
// }
// // Arrow function version
// const addArrow = (a, b) => a + b;

 //Example 4:
//Identify what is parms and what is args
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");
//parms --> name
//args --> "user"

 //Example 5:
 //how many parameters and args
function temp (a, b, c){
    console.log(a,b,c);
}
temp(1, 2)
//parameters --> 3 (a, b, c)
//args --> 2 (1, 2) 

 //Example 6:
//Predict the output
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
//Output: "Hello Guest"

 //Example 7:
 //what is ... operator and why use it  in function

function sum(...numbers){
    number(1, 2, 3, 4, 5);
    console.log(numbers);
}

//example 21:
let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})();

fun.setScore(10);
fun.getScore(); //10