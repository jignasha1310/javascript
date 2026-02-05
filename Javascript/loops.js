//Loops -- repeating code blocks
// 111111
// 123456

//for loop 
//why use for loop? when you know many times you wnat to repeat a block
//print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
//(start; end; change)
/*for (let i=1; i<=10; i++){
    console.log(i);
}
for (let i=20; i>=10; i--){
    console.log(i);
}*/

//While loop --do while loop
//while
//start --> while(end){code-->change}
/*let j = 10;
while (j <= 20){
    console.log("j :" ,j);
    j++;
}

// let z =1;
// while (z <= 10){
//     console.log(4 * z);
//     z++;
// }
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i];
  i++;
}*/

// let k = 20;
// while (k <= 50){
//     console.log(k);
//     k++;
// }

// let a= 60;
// while(a <= 70){
//     console.log(a);
//     a++;
// }

// let c=30;
// while(c > 20){
//     console.log(c);
//     c++;
// }


// let d="hello";
// while(d >= 20){
//     console.log(d);
//     d++;
// }


// let f=50;
// while(f > 60){
//     console.log(f);
//     f++;
// }

//Do while loop
//do {} while (end);
//start
//do{
//code
//change }
//while(end);

// let g = 10;
// do{
//     console.log("do while :",g);
//     g++;
// }while (g <= 20);

// let h = 10;
// do{
//     console.log("do while :",h);
//     h--;
// }while (h >= 1);  


//break statement
for (let k=1; k <= 201; k++){
    console.log(k);
    if(k === 20){
        break;
    }
}


//continue statement
// for (let a=1; a <= 10; a++){
//     if(a === 5){
//         continue;
//     }
//     console.log(a);
// }



//=================================//
//Print number from 1 to 10 using a for loop.
// for (let z=1; z<=10; z++){
//     console.log(z);
// }

//Print number from 10 to 1 using while loop.
// let y= 10;
// while (y <= 1){
//     console.log(y);
//     y--;
// }

//Print even numbers from 1 to 20 using for loop.
// for(let q=1; q<=20; q++){
//     if(q%2 === 0){
//     console.log(q);
//     }
// }

//Print odd numbers from 1 to 15 using while loop.
// let p=1;
// while(p <= 15){
//     if(p % 2 !== 0){ // or (i%2 ===1)
//     console.log(p);
//     }
//     p++;
// }

//Print the multiplication table of 5.
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log("sum :"sum);

//Print all numbers between 1 to 50 that are divisible by 3
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

//Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let num = prompt("give a number");
// for(let i=1; i <= numl; i++){
//     if(i%2 === 0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

//Count how many numbers between 1 to 100 are divisible by 3 or 5.
// let countDiv =0;
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//        countDiv++;
//     }
// } console.log("countDiv :" , countDiv);

//Break and Continue
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 === 0){
//         break;
//     }
// }


// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);

// }

// let count = 0;
// for(let i =1; i<=100; i++){
//     if(i%2 ===0){
//      continue;
//     }
//     console.log(i);
//         count++;
//     if(count === 5){ 
//         break;
//     }
// }

