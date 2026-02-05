// =====================================================
// 📘 JAVASCRIPT FUNCTIONS – ALL IN ONE FILE
// =====================================================


// -----------------------------------------------------
// 🔹 WHAT IS A FUNCTION?
// -----------------------------------------------------
// A function is a block of code that performs a
// specific task.


// -----------------------------------------------------
// 🔹 WHY USE FUNCTIONS?
// -----------------------------------------------------
// 1. Avoid code repetition
// 2. Make code modular
// 3. Reusable code
// 4. Easy to maintain


// -----------------------------------------------------
// 🔹 HOW FUNCTIONS WORK
// -----------------------------------------------------
// function keyword
// function name
// parameters
// function body
// return statement (optional)


// -----------------------------------------------------
// 🔹 TYPES OF FUNCTIONS
// -----------------------------------------------------

// 1️⃣ Function Declaration
function abc() {}


// 2️⃣ Function Expression
let fnc = function () {};


// 3️⃣ Arrow Function (Fat Arrow)
let fnc1 = () => {};


// -----------------------------------------------------
// 🔹 BASIC FUNCTION EXAMPLE
// -----------------------------------------------------
function temp_cart() {
    console.log("adding product");
}

temp_cart("laptop"); // argument passed


// -----------------------------------------------------
// 🔹 PARAMETERS vs ARGUMENTS
// -----------------------------------------------------
// Parameters → variables in function definition
// Arguments → real values passed during function call

function cart(product) {
    console.log(`add ${product}`);
}

cart("laptop");
cart("mac book");


// -----------------------------------------------------
// 🔹 MULTIPLE PARAMETERS
// -----------------------------------------------------
function cart1(product, price) {
    console.log(`add ${product} at ${price}`);
}

cart1("laptop", 25000);
cart1("mac book", 250000);


// -----------------------------------------------------
// 🔹 ARROW FUNCTION EXAMPLE
// -----------------------------------------------------
let cart3 = (product, price) => {
    console.log(`Adding ${product} at ${price}`);
};

cart3("S25 Ultra", 69000);


// -----------------------------------------------------
// 🔹 FUNCTION EXPRESSION EXAMPLE
// -----------------------------------------------------
const cart4 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart4("S25 Ultra", 69000);


// -----------------------------------------------------
// 🔹 SIMPLE FUNCTION
// -----------------------------------------------------
function abcd(a, b) {
    console.log(a + b);
}

abcd(2, 6);


// -----------------------------------------------------
// 🔹 EARLY RETURN IN FUNCTION
// -----------------------------------------------------
// Used to exit function early

function getValue(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue(80);
console.log(result);


// -----------------------------------------------------
// 🔹 FIRST CLASS FUNCTIONS
// -----------------------------------------------------
// In JavaScript:
// ✔ Functions can be stored in variables
// ✔ Functions can be passed as arguments
// ✔ Functions can be returned from other functions

const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart5("S25 Ultra", 69000);


// -----------------------------------------------------
// 🔹 FUNCTION PASSED AS ARGUMENT
// -----------------------------------------------------
function temp_b(fnc) {
    fnc();
}

temp_b(function () {
    console.log("First Class Function");
});


// -----------------------------------------------------
// 🔹 HIGHER ORDER FUNCTIONS (HOF)
// -----------------------------------------------------
// A function that:
// ✔ takes another function as argument OR
// ✔ returns a function


// Case 1️⃣: Function as Argument
function hof1(val) {
    val();
}

hof1(function () {
    console.log("hello");
});


// Case 2️⃣: Function Returning a Function
function hof2() {
    return function () {
        console.log("returned function");
    };
}

hof2()();






DATA TYPES:
Two type of data types:
1. primitive data type
let a =12;
let b = a;//a --> 12
a = a+3;
//types : string , number , boolean , null , undefined , symbol , bigint
//string:
//'' - single quotes
//"" - double quotes
//`` - backticks
let d = "name";
d = 'username';
d = `firstname`;

//number:
let e = 12;
e = 12.25;

//boolean:
let f = true;
f = false;

//null:
//you give a value
let g = null;

//undefined:
//you don't give a value,by defualt value
let h;  

//symbol:
//unique immutable value
let u1 = Symbol("uid");
let u2 =Symbol("uid");
//check u1===u2
let obj ={uid:1, name: "demo", email:"demo@test.com"};
let u3 =Symbol("uid")
obj[u3]="001"

//bigint:
//check range number , Number.Max_SAFE_INTEGER
let number = 9007199254740991; 
number =number +4 ;
let num2 =9007199254740991n;//n is add value
num2 +3n;

2. Non-primitive data types(Reference data types)
//copy -->give reference of parent
let temp_a = [1,2,3];
let temp_b = temp_a;
temp_b.pop();//remove value
//types : arrays[] , objects{} , functions()

let temp_array = ["name", "age" , "phone_number"];
let obj = {name : "demo", age:20,phone_number:6578436534}
function name(params){}




## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p></p>
</div>

<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
</div>

<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
</div>

<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
</div>

<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>

<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
</div>

<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
</div>

<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
</div>


<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 15: </h1>
<p>Identify what is higher order function?</p>
<p>[1,2, 3].map(function(x){
    return x * 2;
})</p>
<p>.map is a function</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>