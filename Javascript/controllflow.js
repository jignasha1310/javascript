// Control flow statements in javascript 
//If-Else Statement (if,if-else, if else-if else)
    //If (condition){}
// if (12 < 13){
//     console.log(true);
// }

// if (15 < 13){
//     console.log(true);
// }//conditional is flase that why if statement not run

// if (!12){
//     console.log("number");
// }

// //if-else statement
// if (12 < 13){
//     console.log(true);
// }else{
//     console.log(false);
// }
// if (15 < 13){
//     console.log(true);
// }//condition is flase that why if statement not run
// else{
//     console.log (false);
// }

// if (!12){
//     console.log("number");
// }else{
//     console.log("not a number");
// }
// //if-else if-else statement
// /*if(condition){
// }else if (condition){
// }else{}

// if (loggedin && admin){
//     console.log("Welcome admin");
// }else if (loggedin){
//     console.log("Welcome user");
// }else{
//     console.log ("go to login page");
// }*/

// //switch case statement
// switch('First50'){
//     case 'First50':
//         console.log("50% off on first order")
//         break;
//     case 'BOGO':
//         console.log("Buy one get one")
//         break;
//     case 'BlackFriday':
//         console.log("It's black friday sale -get at Rs.50")
//         break;
//     default:
//         console.log("Offer not valid")
//         break;
// }
// switch('number'){
//     case 'number':
//         console.log("print numbers")
//         break;
//     case '1-5':
//         console.log("print 1 to 5 numbers")
//         break;
//     case 'A-Z':
//         console.log("print A - Z ")
//         break;
//     case 'name':
//         console.log("string")
//         break;
//     default:
//         console.log("Not valid")
//         break;
// }

// //Early REturn Pattrn
// function score (value){
//     if (value > 90){
//         return "Value is more then 90";
//     }else if (value < 80){
//         return "Value is less then 80";
//     }else if (value < 70){
//         return "Value is less then 70";
//     }else if (value < 60){
//         return "Value is less then 60";
//     }else {
//          return "Value is less then 60";
//     }
// }
// score(100);
// //console.log(score(100))

// function score1(value){
//     if (value > 90) return "Value is more then 90";
//     else  if (value > 80) return "Value is less then 80";
//     else  if (value > 70) return "Value is less then 70";
//     else  if (value > 60) return "Value is less then 60";
//     else return "Value is less then 60";   
// }

// function score2(value){
//     if (value < 60) return "Value is less then 60";
//     else  if (value < 70) return "Value is less then 70";
//     else  if (value < 80) return "Value is less then 80";
//     else  if (value < 90) return "Value is less then 90";
//     else return "Value is less then 90";  
// }

//rock paper scissor
// function rps(user, computer){
//     if(user === "rock" && computer === "scissor")return "user wins";
//     if(user === "scissor" && computer === "paper")return "user wins";
//     if(user === "paper" && computer === "rock")return "user wins";
//     if(user === "scissor" && computer === "rock")return "computer wins";
//     if(user === "rock" && computer === "paper")return "computer wins";
//     if(user === "paper" && computer === "scissor")return "computer wins";
//     return "it's a tie"
// }

// function rps2(user, computer){
//     if (user === computer) return "It's a tie"
//     if(user === "rock" && computer === "scissor")return "user wins";  
//     if(user === "scissor" && computer === "paper")return "user wins";
//     if(user === "paper" && computer === "rock")return "user wins";
//     return "computer wins";
// }

