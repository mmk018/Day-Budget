"use strict";

let money = prompt(" Your monthly budget?");
let time = prompt(" Please enter date in format YYYY-MM-DD");
let appData = {
budget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: false,

};

 


let OR = prompt("Enter a required cost item this month");
let OR1 = prompt("Enter a required cost item this month");
let VO = prompt("How much will it costs?");
let VO1 = prompt("How much will it costs?");
// expences =()

appData.expenses.OR = OR1;
appData.expenses.VO = VO1;

alert(appData.budget / 30);


//  //  обязательные расходы = OR if OR == OR1;
// console.log (money);
// console.log(time);
// console.log(appData.budget);
// console.log(appData.timeData);
// console.log(appData.expenses);

// alert(appData,budget / 30);
