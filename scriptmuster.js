"use strict";

let money, time;



// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false,
// };


// let money = +prompt(" Your monthly budget?");
// let time = prompt(" Please enter date in format YYYY-MM-DD");
function start () {
 money = +prompt(" Your monthly budget?");
 time = prompt(" Please enter date in format YYYY-MM-DD");

 while(isNaN(money) || money == "" || money == null) {

    money = +prompt(" Your monthly budget?");
 }
}
start();
    //  while(isNaN(money) || money == "" money == null) 
 
 
//
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// start();//Vizivaem funktiju
// app ();

function chooseExpenses () {//kak tsatj koda sohranjaem funkstsiju
    for (let i = 0; i < 2; i++) {
        let a = prompt("Enter a required cost item this month", ""),
            b = prompt("How much will it costs?", "");
    
        if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null 
        && a != "" && b != "" && a.length < 50) {
              console.log("done");
              appData.expenses[a] = b;  
          } else {
              i = i - 1;
        }
    };
}
chooseExpenses();// Vizivaem

// money = +prompt(" Your monthly budget?");
//  time = prompt(" Please enter date in format YYYY-MM-DD");
function app () {
// let appData = {
// budget: money,
// timeData: time,
// expenses: {},
// optionalExpenses: {},
// income: [],
// savings: false,
// }
};

// let OR = prompt("Enter a required cost item this month");
// let OR1 = prompt("Enter a required cost item this month");
// let VO = prompt("How much will it costs?");
// let VO1 = prompt("How much will it costs?");
// expences =()

// appData.expenses.OR = OR1;
// appData.expenses.VO = VO1;

// alert(appData.budget / 30);
// console.log(appData.expenses);


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Enter a required cost item this month", ""),
//         b = prompt("How much will it costs?", "");

//     if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
//     && a != " " && b != " " && a.length < 50) {
//           console.log("done");
//           appData.expenses[a] = b;  
//       } else {
//           break;
//     }
// };
//////////////
// let a = prompt("Enter a required cost item this month", ""),
//         b = prompt("How much will it costs?", ""),
//         i =0;
// while ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
// && a != "" && b != "" && a.length < 50 && i < 2) {
//     console.log("Done");
//           appData.expenses[a] = b;
//           i++;
          

// }


//////////////
// let i = 0;

// do {// Delai
//     let a = prompt("Enter a required cost item this month", ""),
//         b = prompt("How much will it costs?", "");
//          console.log("done");
//           appData.expenses[a] = b;
//           i++;
// }

    
// while ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
// && a != "" && b != "" && a.length < 50 && i < 2);// do teh por poka vipolnajetsa while
////////////






appData.moneyPerDay = appData.budget / 30;//POsle metoda vsegda skobki
                                          //To fixed pustije skobki budet tseloe, 1 budet odin znak pose zapjatoi
//Tofixed sdelat vsegda string
                                          alert("Day budget is: " + appData.moneyPerDay);
// console.log(appData.budget);
// console.log(appData.moneyPerDay);


if(appData.moneyPerDay < 100) {
    console.log("This is minimum budget")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("This is medium budget! ");
} else if (appData.moneyPerDay > 2000) {
    console.log("This is high budget!!");
} else {
    console.log("Something goes wrong! ")
}



///////////////////
//Funktion
// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage("Hello World ! ");
let a = 3
 function addTwo(x) {
   let ret = x + 2
  return ret
 };
 let b = addTwo(a)
 console.log(b)