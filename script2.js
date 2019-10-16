"use strict";

let money, time;



function start () {
 money = +prompt(" Your monthly budget?");
 time = prompt(" Please enter date in format YYYY-MM-DD");

 while(isNaN(money) || money == "" || money == null) {

    money = +prompt(" Your monthly budget?");
 }
}
start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};



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


// appData.moneyPerDay = (appData.budget / 30).toFixed();//POsle metoda vsegda skobki
//                                           //To fixed pustije skobki budet tseloe, 1 budet odin znak pose zapjatoi
// //Tofixed sdelat vsegda string
// alert("Day budget is: " + appData.moneyPerDay);
// // console.log(appData.budget);
// // console.log(appData.moneyPerDay);

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();//POsle metoda vsegda skobki
    //To fixed pustije skobki budet tseloe, 1 budet odin znak pose zapjatoi
//Tofixed sdelat vsegda string
alert("Day budget is: " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel() {
    

if(appData.moneyPerDay < 100) {
    console.log("This is minimum budget")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("This is medium budget! ");
} else if (appData.moneyPerDay > 2000) {
    console.log("This is high budget!!");
} else {
    console.log("Something goes wrong! ")
}
};

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Hom much money you have saved?"),
        percent = +prompt("With which percentage?");

        appData.monthIncome = save/100/12*percent;
        alert("Income in a Month from Your deposit is  " + appData.monthIncome);
    }
}

checkSavings();
console.log(appData);

function chooseOptExpenses() {
     appData.optionalExpenses.a1 = +prompt("Additional Costs for this Month?  ");
     appData.optionalExpenses.a2 = +prompt("Additional Costs for this Month?  ");
     appData.optionalExpenses.a3 = +prompt("Additional Costs for this Month?  ");
     };   
     chooseOptExpenses();

    
console.log(appData);



