/*
//var ,let and cont variables
// 1.var(ES5)
var a="temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; 
// 2.let
let temp ="let variable";
// 3.const
const temp_const = "const variable"

//Declaration and initialization
var d; //declare
var d = 12; //declare and initialization for frist time
//var add value into window
//var is function scoped
//var can be redecalred and reassigned
d =24;//reassigned
var d="Hello"//redeclare // var change value
//temp_const = "Hello java";// you can change const variable that is return error defind 

//scope (globel,block,functional)

var e=23;//globel{
    var e=25;//block
     console.log("block scope :"+e);
}
function abc(){
    var e=30;//functional
      console.log("functional scope :"+e);
}
abc();
console.log(e);//ans:= block scope 
//===============

let f=23;//globel{
    let f=25;//block
    console.log("block scope :"+f);
}
function abc(){
    let f=30;//functional
    console.log("functional scope :"+f);
}
abc();
console.log(f);//ans:=Run globel scope 
// TEMPORAL DEAD ZONE(TDZ)
//=>frist defind (print)
//=>then last initialization
//=>so TDZ means defind and initialization center ma 
console.log(temp_b);
var temp_b =24;
let j =12;
console.log(j);
//let j =12;//error:Cannot access 'j' before initialization
*/
//Hoisting Imapact 
// Hoisting --> when your create a variable into js that break into two part first is declare part that go to up and there initilization part that go doen.
        //var temp_d = 12;
// var temp_d ; -->undefined; --> that go to up 
// temp+d = 12; --> that to go doen(means stuck into line 67)
//if you use console.log before initialization that give you undefined ;
        //let temp_d_let =24;
//let variable not use before initialization 
//if you use console.log before initialization that give you error;
//Hoisting impact on var,let,const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/
//=======================ex-1
//let nm ="name";
//console.log(nm);
//let nm ="name";
// Cannot access 'nm' before initialization
//why:-TDZ
//ans:-undefinrd
//=======================ex-2
// var b="username";//answer it
// console.log(b);
// var b="username";// undefind answer //solution:- frist defined before console.log 
//=======================ex-3
// var x=1;//globel
// {
//     var x=2;//block
// }
// console.log(x);//Run block scope
//=======================ex-4
// let a = 10 ;
// {
//     let a =20;
//     console.log("inside:",a);
// }
// console.log("outside:",a);
//answer : inside: 20 bcz block SCOPE , outside: 10 bcz its globel scope 