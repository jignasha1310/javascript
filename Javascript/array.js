// // //Array -- Hold multiple values at same time 
// // //[1,2,3,4,5]
// // //["Hello","a","B","C"]
// // //[2,"Bye","Hello",50]

// // //create
// // //define a variable = [multiple values]
// // let arr = [1,2,3,4];

// // //access
// // //position = [0 1 2 3]
// // //access
// // //array_name[position]
// // //arr[3],arr[2],arr[10]

// // //Array methods:(variable)_name.method_name)
// // //push, pop, shift, unshift, splice, slice, reverse, sort
// // //push --> enter new value into array -- place it into last
// // // adds one or more elements to  the end of an array and return the new langth of the array
// // arr.push(4);

// // //variable || function.method --> koi variable ke function in pachal dot(.)kri ne lakho to te method kevay
// // //use case -- enter new productes into  existing array of products
// // arr.pop()
// // //use case -- remove last product you add into your list

// // //shift -- remove first into array
// // arr.shift()
// // //use case -- remove old product automatic after sometimes

// // //unshift -- add value into array --first
// // arr.unshift(10)
// // //use case -- add a value into top of that data you receive

// // //splice - remove value into array --specific position and specific number of values
// // //into() -frist index (position),how many value you want to remove
// // let e=[50,60,30,40,10];
// // e.splice(3,2);
// // //use case -- select msg and remove multiple msg at on click

// // //slice -copy values from array --specific position and specific number of values
// // //new variable = array_name.slice(start index,end index)
// // //start index -- include into copy
// // //end index -- not include into copy
// // let f =[100,50,25,0];
// // let new_f = f.slice(1,3);
// // //use case -- copy specific data and save it into new variable

// // //generate a report based on date and generate a file or save the file into your localo machine


// // //splice vs slice
// // //splice -- remove value into main array or modify new array
// // //slice -- copy vallue from main array and create a new array that hold the value that you can into 

// // //reverse -- reverse value of array
// // let g = [25,30,35,40,85];
// // //g.reverse();
// // //use case -- show latest update first into your fronted

// // //sort -- set into ascending order
// // let h = [50,20,80,10,40];
// // h.sort();
// // //let h = [11,62,3,4,25];
// // //let sr = h.sort(function(a,b){
// // //     return a - b; //ascending order
// // //})

// // //let h = [11,62,3,4,25];
// // //let sr = h.sort(function(a,b){
// // //      return b - a; //decending order
// // // })

// // // Q1. push()
// // let tasks = ['Wake up', 'Brush teeth'];
// // tasks.push('Buy milk');
// // let task=['weke up', 'brush teeth']
// // task.push('buy milk')
// // // Q2. pop()
// // let notifications = ['Email', 'Message', 'Reminder'];
// // notifications.pop();


// // // Q3. shift()
// // let customers = ['Customer1', 'Customer2', 'Customer3'];
// // customers.shift();


// // // Q4. unshift()
// // let playlist = ['Song B', 'Song C'];
// // playlist.unshift('Song A');


// // // Q5. splice()
// // let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// // students.splice(1, 1, 'John', 'Sara');


// // // Q6. splice()
// // let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// // menu.splice(1, 2);


// // // Q7. slice()
// // let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // let weekend = days.slice(5);


// // // Q8. reverse()
// // let levels = ['Easy', 'Medium', 'Hard'];
// // levels.reverse();


// // // Q9. sort()
// // let scores = [45, 12, 78, 34, 89];
// // scores.sort((a, b) => a - b);


// // // Q10. sort() with numbers
// // let prices = [199, 49, 999, 299, 149];
// // prices.sort((a, b) => a - b);


// // // Q11. slice() vs splice()
// // let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// // let firstThree = products.slice(0, 3);


// // // Q12. splice() complex
// // let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// // colors.splice(2, 1, 'Purple', 'Orange');


// // // Q13. reverse() + push()
// // let steps = ['Step 1', 'Step 2', 'Step 3'];
// // steps.reverse();
// // steps.push('Final Step');


// // // Q14. sort() strings (ignore case)
// // let names = ['alice', 'Bob', 'charlie', 'David'];
// // names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


// // // Q15. Combination Question
// // let movies = ['Avatar', 'Titanic', 'Gladiator'];
// // movies.push('Inception');
// // movies.shift();
// // movies.sort();


// // // Q16. splice() return value
// // let nums1 = [1, 2, 3, 4];
// // let removedNums = nums1.splice(1, 2);


// // // Q17. slice() immutability check
// // let nums2 = [10, 20, 30, 40];
// // let result = nums2.slice(1, 3);


// // // Q19. reverse() mutation
// // let letters = ['a', 'b', 'c'];
// // let reversedLetters = letters.reverse();


// // // Q21. splice() edge case
// // let arra= ['x', 'y', 'z'];
// // arr.splice(1, 0, 'new');


// // // Q23. slice() negative index
// // let values = [100, 200, 300, 400, 500];
// // let sliced = values.slice(-3, -1);


// // // Q24. splice() vs slice()
// // // a) Update original array → splice()
// // // b) Keep original array unchanged → slice()


// // // Q25. Chained methods
// // let arr2 = [1,2,3];
// // arr2.push(arr2.shift());

// //use case -- sort product price low to high
// // let arr1 = [10,2,5,20,30];
// // // let sort_var = arr1.sort(function(a,b){
// // //     return a-b;
// // // })
// // let sort_var = arr1.sort((a,b)=>a-b)//use when array give numbers or numeric values(one line) 
// // let arr2 = ['b','f','z','q','m','k'];


// //for each loop
// //for each -- array ni darek value mate loop chalshe
// // let i = [10,35,40,55]

// // i.forEach(val => {
// //     let new_val = val + 10;
// //     console.log(new_val)
// // });

// // .map() Method:
// //map tyre j use karvu k jyre ek new array create kryo che
// //first map create a black -- only for understanding
// let data = [10, 20, 50, 40, 15];
// //same like a for each loop but map retrun a new array
// let temp_data = data.map( val => {
//     if(val > 20){
//         return val;
//     }
// });
// //1. Double daily steps count
// //Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }
// const newSteps = steps.map(doubleSteps);



// //2. Convert minutes to seconds
// //Real life: Video duration calculation

// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });



// //3. Add ₹50 delivery charge to prices
// //Real life: Food delivery app

// const pricess = [200, 350, 500];

// const finalPrices = pricess.map(price => price + 50);



// //4. Convert exam marks to grades
// //Real life: Result system

// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }
// const grades = marks.map(getGrade);



// //5. Capitalize names
// //Real life: Display usernames properly

// const names = ['rahul', 'neha', 'amit'];

// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );



// //6. Apply 10% discount
// //Real life: Shopping sale

// const prices = [500, 1000, 1500];

// function applyDiscount(price) {
//   return price - price * 0.10;
// }
// const discounted = prices.map(applyDiscount);


// //7. Add bonus points to scores based on condition
// //Real life: Game scoring system

// const scores = [45, 60, 85];

// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });



// //8. Convert temperatures with formula
// //Real life: Weather app

// const celsius = [0, 20, 30];

// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }
// const fahrenheit = celsius.map(toFahrenheit);



// //9. Generate table of numbers
// //Real life: Math learning app

// const numbers = [1, 2, 3, 4];

// const tableOfTwo = numbers.map(num => num * 2);



// //10. Combine map with string formatting
// //Real life: SMS notification system

// const balances = [500, 1200, 300];

// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );

// //filter
// //filter tyre use krvu k jyre ek new array create krvu with conditions
// //it return true/false
// //if true --> add into new array
// //if else (false) --> not add into new array
// let laptops_price = [15000,20000, 3000, 65000,99000,45000];

// let expensive_laptops = laptops_price.filter((price)=>{
//     if(price > 30000)return true;
// });

// //je value 30000 thi vadhre che te new array ma add thse and biji value ne array ma add nahi kre
// //use case -- data ma thi specific data new array ma store krvo hoy to based on condition


// //ex
// // 1. Get even numbers
// // Real life: Find even roll numbers
// const numb = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numb.filter(num => num % 2 === 0);
// console.log('Even Numbers:', evenNumbers);


// // 2. Filter adults
// // Real life: Allow only adult users
// const ages = [2, 1, 10, 16, 5, 21, 30];
// function isAdult(age) {
//   return age >= 18;
// }
// const adults = ages.filter(isAdult);
// console.log('Adults:', adults);


// // 3. Remove empty items
// // Real life: Clean user input
// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');
// console.log('Valid Inputs:', validInputs);

// // 4. Filter passing marks
// // Real life: Exam result system
// const mark = [35, 72, 88, 40, 25];
// const passedStudents = mark.filter(mark => mark >= 40);
// console.log('Passed Students:', passedStudents);

// // 5. Get affordable prices
// // Real life: Shopping app price filter
// const price = [199, 499, 999, 1499, 299];
// const affordable = price.filter(price => price <= 500);
// console.log('Affordable Prices:', affordable);



// // 6. Filter long words
// // Real life: Search keyword validation
// const words = ['hi', 'hello', 'javascript', 'ok'];
// function isLongWord(word) {
//   return word.length > 3;
// }
// const longWords = words.filter(isLongWord);
// console.log('Long Words:', longWords);



// // 7. Filter positive numbers
// // Real life: Bank transaction validation
// const transactions = [200, -100, 500, -50, 300];
// const credits = transactions.filter(amount => amount > 0);
// console.log('Credit Transactions:', credits);



// // 8. Filter numbers within a range
// // Real life: Score selection
// const score = [45, 60, 85, 30, 90];
// const selectedScores = score.filter(
//   score => score >= 50 && score <= 90
// );
// console.log('Selected Scores:', selectedScores);




////ex===>product ma thi specific price na product new array ma store krvu hoy
// // if you want to show only expensive product on your homepage
// //if you want to filter product based on price
// let product_type = ["mobile", "tablet", "laptop", "mouse", "keyborad"];
// let filter_product_type = product_type.filter((type)=>{
//     if (type === "tablet" || type === "mobile") return true;
// });


//reduce 
//reduce thay tyre j use krvu k jyre ek single value calculate krvi hoy from array
// let total_price = [15,68,45,58,55,48];

// let final_price = total_price.reduce((accumulator,val) => {
//     return accumulator + val;
// },0);// intial value of accumulator
// // 0 + 10 =>10
// // 10 + 10 =>20
// // 20 + 10 =>30
// // 30 + 10 =>40
// //accumulator --> je value function ma return thse te accumulator ma store thse --> accumulator name change kri sako cho
// //val --> array ni darek value

// //use case -- data ma thi ek single value calculate krvi hoy 
// //ex.product ma thi total price calculate krvi hoy


// //ex:===
// const money = [100, 200, 50];
// const totalMoney = money.reduce((sum, amount) => sum + amount, 0);


// const steps = [3000, 5000, 4000, 6000];
// function addSteps(total, step) {
//   return total + step;
// }
// const weeklySteps = steps.reduce(addSteps, 0);


// // 1. Grocery Store – Total Cost 
// const prices1 = [50, 120, 300, 80, 200];

// const totalCost = prices1
//   .filter(p => p > 100)
//   .map(p => p * 1.05)
//   .reduce((sum, p) => sum + p, 0);

// console.log("Total Cost:", totalCost);



// // 2. Fitness App – Weekly Calories 
// const minutes = [10, 25, 40, 15, 60];

// const totalCalories = minutes
//   .filter(m => m >= 20)
//   .map(m => m * 4)
//   .reduce((sum, c) => sum + c, 0);

// console.log("Q2 Total Calories:", totalCalories);



// // 3. Exam Results – Total Passed Marks 
// const marks = [35, 55, 80, 20, 45];

// const totalPassedMarks = marks
//   .filter(m => m >= 40)
//   .reduce((sum, m) => sum + m, 0);

// console.log("Total Passed Marks:", totalPassedMarks);



// // 4. Bank App – Total Credits 
// const transactions = [500, -200, 1000, -300, 700];

// const totalCredits = transactions
//   .filter(t => t > 0)
//   .reduce((sum, t) => sum + t, 0);

// console.log("Total Credits:", totalCredits);



// // 5. Online Sale – Discounted Bill 
// const prices2 = [800, 1500, 3000, 600, 1200];

// const totalPayable = prices2
//   .filter(p => p > 1000)
//   .map(p => p * 0.85)
//   .reduce((sum, p) => sum + p, 0);

// console.log("Total Payable:", totalPayable);



// // 6. Attendance – Reward Points 
// const hours1 = [5, 7, 8, 6, 9];

// const totalPoints1 = hours1
//   .filter(h => h >= 7)
//   .map(h => h * 10)
//   .reduce((sum, p) => sum + p, 0);

// console.log("Total Points:", totalPoints1);



// // . Delivery App – Total Distance 
// const distances = [3, 6, 10, 4, 8];

// const totalDistance = distances
//   .filter(d => d > 5)
//   .map(d => d + 1)
//   .reduce((sum, d) => sum + d, 0);

// console.log("Total Distance:", totalDistance);



// //8. Salary System – Final Salary 
// const salaries = [18000, 25000, 30000, 15000];

// const totalSalary = salaries
//   .filter(s => s > 20000)
//   .map(s => s + 2000)
//   .reduce((sum, s) => sum + s, 0);

// console.log("Total Salary Payout:", totalSalary);



// // 9. Study App – Total Study Time 
// const hours2 = [0.5, 1.5, 2, 0.75, 3];

// const totalMinutes = hours2
//   .filter(h => h > 1)
//   .map(h => h * 60)
//   .reduce((sum, m) => sum + m, 0);

// console.log("Total Study Minutes:", totalMinutes);



// //10. Electricity Usage – Monthly Bill
// const units = [80, 120, 200, 90, 150];

// const totalBill = units
//   .filter(u => u > 100)
//   .map(u => u * 6)
//   .reduce((sum, u) => sum + u, 0);

// console.log(" Total Bill:", totalBill);



// //11. Game Scores – Final Power Score
// const scores1 = [30, 50, 90, 20, 70];

// const powerScore = scores1
//   .filter(s => s > 40)
//   .map(s => s * 2)
//   .reduce((sum, s) => sum + s, 0);

// console.log("Power Score:", powerScore);



// //12. Travel App – Total Fare 
// const rides = [5, 12, 20, 8, 15];

// const totalFare = rides
//   .filter(r => r > 10)
//   .map(r => r + 50)
//   .reduce((sum, r) => sum + r, 0);

// console.log("Total Fare:", totalFare);



// //13. Office Work – Productive Hours 
// const hours3 = [4, 6, 8, 5, 9];

// const productiveMinutes = hours3
//   .filter(h => h >= 6)
//   .map(h => h * 60)
//   .reduce((sum, m) => sum + m, 0);

// console.log(" Productive Minutes:", productiveMinutes);



// // 14. Shopping Cart – Reward Coins 
// const purchases = [300, 800, 1200, 400];

// const totalCoins = purchases
//   .filter(p => p > 500)
//   .map(() => 10)
//   .reduce((sum, c) => sum + c, 0);

// console.log("Total Coins:", totalCoins);



// // 15. Fuel App – Total Fuel Cost 
// const liters = [3, 6, 10, 4, 8];

// const totalFuelCost = liters
//   .filter(l => l > 5)
//   .map(l => l * 105)
//   .reduce((sum, c) => sum + c, 0);

// console.log("Total Fuel Cost:", totalFuelCost);



// // 16. Interview Classic – Sum of Cubes 
// const numbers1 = [1, 2, 3, 4, 5];

// const sumOfCubes = numbers1
//   .filter(n => n % 2 !== 0)
//   .map(n => n ** 3)
//   .reduce((sum, n) => sum + n, 0);

// console.log("Sum of Cubes:", sumOfCubes);



// //17. Performance Tracking – Bonus Points
// const scores2 = [10, 20, 30, 40, 50];

// const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

// const bonusTotal = scores2
//   .filter(s => s > avg)
//   .map(s => s + 5)
//   .reduce((sum, s) => sum + s, 0);

// console.log(" Bonus Total:", bonusTotal);



// // 18. Subscription App – Final Bill
// const plans = [199, 399, 599, 299];

// const finalBill = plans
//   .filter(p => p > 300)
//   .map(p => p * 1.18)
//   .reduce((sum, p) => sum + p, 0);

// console.log("Q18 Final Bill:", finalBill);



// //19. Learning App – Achievement Score 
// const scores3 = [45, 60, 70, 30, 80];

// const achievementScore = scores3
//   .filter(s => s >= 60)
//   .map(s => s ** 2)
//   .reduce((sum, s) => sum + s, 0);

// console.log("19 Achievement Score:", achievementScore);


// // 20. Interview Finisher
// const numbers2 = [3, 6, 9, 10, 12];

// const finalSum = numbers2
//   .filter(n => n % 3 === 0)
//   .map(n => n * 10)
//   .reduce((sum, n) => sum + n, 0);

// console.log("Sum:", finalSum);


//find 
//find tyre j use krvu k jyre array mathi ek value find krvi hoy based on condition 
//fins() return kre che array no element --> callback no return value nhi
//never return what you return inside it
//return the array element itself -- not return array
//.find() stope at the first match
//it does not continue looping
let product = ["Laptop","Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find((item)=>{
  //console.log ("can't find product");//not working why??
  if (item === "Mobile"){
    return true;
  }else if (item ==="Tablet"){
    return true;
  }else{
    return false;
  }
});

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find --> you are looking for the first person named "Sara" in the list and stop searching ({2 same name hoy aema je first name hoy tene consider kre}Pehli var j male, bas ej and Aagal check j na kare).
let person = people.find((name) => name === "Sara"); console.log(person);
// filter -> you want to find all visitors named "Sara" in the list (all data check kre and list na end sudhi check kre)
// let AllSara = people.filter((name) => === "Sara");
let AllSara = people.filter((name1)=> name1 === "Sara");
console.log(AllSara);


//some
//check kre che k array ma koi pn ek item condition satisfy kre che k nhi
//condition true aave tyre stop kre
//some() vs find() --> some() can't return you value its return true or false, find() return value of array
//give ans in true and false
let marks = [10,20,50,60];
let any = marks.some((val)=>{
  if (val > 85 )return true;
  //if (val<85) return "need improvement"; 
});
console.log (any)
//any case --check if some product are out of stock in your cart

//every
//check kre che k array ma badhi j iems condition satisfy kre che k nhi
//true -- bane items condition match kre
//false -- ek pn fail thy to
let def =[20,30,90,45];
let num = def.every(function (val){
  return val <40;
});
//use case -->  check all student is pass or not
//some(),find(),filter(),every()
let products =["Tablet","Mobile","Laptop","Mobile"]
//method --> condition -->output
//.some() 
let any1 = products.some((val)=>{
  if (val > "Mobile" )return true;
  //if (val<85) return "need improvement"; 
});
console.log (any1)//-->item ==="Mobile"-->true
//.find() -->item ==="Mobile"-->"Mobile"
//.filter() -->item ==="Mobile"-->["Mobile","Mobile"]
//.every() -->item ==="Mobile"-->false

//Destructring operator -- give value to variable (ex.we don'y use every time arr1[1],just save it into variable let [,k]= arr1)
let arr4 = [1,2,3,4,5]
//let j = arr4[0];
//let k = arr4[2];
let [j, ,k]= arr4;//--> Destructring
//let [j, ,k]=arr;
console.log(k);
let user_data = ["test","test@gmail.com","Male","Surat"]
// let name = user_data[0];
// let email = user_data[1];
// let gender = user_data[2];
// let city = user_data[3];
let[name, , email, , gender, , city]=user_data;
console.log(city);
//name ,email,gender,city
//console.log("name",name)

//spread oprator -- copy value from mian array
let arr8 = [1,2,3,4,5,6,7];
//let arr4 = arr3;//-just give reference not copy value (when you change into arr4 that will be change arr3 too)
let arr9 = [...arr8];
//... -->rest --> into function
//... --> spred --> into array and object
let temp_arr = [1,2,3];
let temp_arr2 = [4,5,6];
let mix_arr = [...temp_arr, ...temp_arr2];