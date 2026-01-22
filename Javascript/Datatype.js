//DATA TYPES:
//Two type of data types
// 1.primitive data type
//copy -->read value
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

// 2. Non-primitive data types(Reference data types)
//copy -->give reference of parent
let temp_a = [1,2,3];
let temp_b = temp_a;
temp_b.pop();//remove value
//types : arrays[] , objects{} , functions()

let temp_array = ["name", "age" , "phone_number"];
let obj = {name : "demo", age:20,phone_number:6578436534}
function name(params){}

//Dynamic Typing
