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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Enter a required cost item this month", ""),
                b = prompt("How much will it costs?", "");
        
            if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null 
            && a != "" && b != "" && a.length < 50) {
                  console.log("done");
                  appData.expenses[a] = b;  
              } else {
                  i--;
            }
        }
    },
    detectDayBudget: function  () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();//POsle metoda vsegda skobki
        //To fixed pustije skobki budet tseloe, 1 budet odin znak pose zapjatoi
    //Tofixed sdelat vsegda string
    alert("Day budget is: " + appData.moneyPerDay);
    },
    detectLevel: function () {

        if(appData.moneyPerDay < 100) {
            console.log("This is minimum budget");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("This is medium budget! ");
        } else if (appData.moneyPerDay > 2000) {
            console.log("This is high budget!!");
        } else {
            console.log("Something goes wrong! ");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Hom much money you have saved?"),
            percent = +prompt("With which percentage?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Income in a Month from Your deposit is  " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {//mi vse funktsii sdelali methodami
        for (let i = 1;i <= 3; i++) {
            let optionalExpenses = +prompt("Additional Costs for this Month?  ");
            appData.optionalExpenses[i] = optionalExpenses;
            console.log(optionalExpenses);
      
          }
    },
    /* chooseIncome: function () {
        let items = prompt("What You will get from Bonus Income? (Please divide with ,)", "");



        appData.income = items.split(", ");//metod Slit yapisivaet vse vvedennojr tserey yapjatuju v massive
        appData.income.push(prompt("Mazbe somethink more"));  // push-dobavljaet v konets massiva
        appData.income.sort(); //i tak vse dannije v massive income mi otsortiruem po alfavitu
    } */
    chooseIncome: function () {
        let items = prompt("What You will get from Bonus Income? (Please divide with ,)", "");
<<<<<<< HEAD
            if (typeof(items) === "string" && typeof(items) != "" && typeof(items) != null) {
=======
            /* items = parseInt(items); */
            if (typeof(items) === "string" && items !== "" && items !== null) {
                console.log('type of items : ', typeof parseInt(items));
                
>>>>>>> 7f33b624d9d8326b872b8efd1a8d29ca25ffb213
                console.log("chooseIncome right");
                appData.income = items.split(", ");//metod Slit yapisivaet vse vvedennojr tserey yapjatuju v massive
                appData.income.push(prompt("Maybe somethink more"));  // push-dobavljaet v konets massiva
                appData.income.sort(); //i tak vse dannije v massive income mi otsortiruem po alfavitu
                appData.income.forEach(function(item, i) {
                    switch (i) {
                        case 0 : break;
                        default : alert("Bonus Income:" + item);
                        
                    }
                    
                });
            } else {
                console.log("chooseIncome wrong");
    
            }
            
        }
        

       
};
<<<<<<< HEAD

/* let appDataincome = [1, 2, 8 , 4, 5];


appDataincome.forEach(function(item, i) {
    switch (i) {
        case 0 : break;
        default : console.log("Bonus Income:" + item);
        
    }
    
}); */

/* let appData = {
    name: "ivan",
    age: 25
}; */
function svodka () {
    for (let key in appData) {
        console.log( " Item  " + key + " have value  " + appData[key]);
    }
}



/* for (let key in appData) {
    console.log( " Item  " + key + " have value  " + appData[key]);
} */
=======
function showBonus () {
    appData.income.forEach(function(item, i) {
        switch (i) {
            case 0 : break;
            default : alert("Bonus Income: " + item);
        }
    })
}
showBonus();



>>>>>>> 7f33b624d9d8326b872b8efd1a8d29ca25ffb213
//Test Below
/* chooseIncome: function () {
    let items = prompt("What You will get from Bonus Income? (Please divide with ,)", "");
        if ( typeof(items) === "string" && typeof(items) != "" && typeof(items) != null) {
            console.log("chooseIncome right");
            appData.income = items.split(", ");//metod Slit yapisivaet vse vvedennojr tserey yapjatuju v massive
            appData.income.push(prompt("Mazbe somethink more"));  // push-dobavljaet v konets massiva
            appData.income.sort(); //i tak vse dannije v massive income mi otsortiruem po alfavitu
        } else {
            console.log("chooseIncome wrong");

        }
        
    }
    



chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Enter a required cost item this month", ""),
                b = prompt("How much will it costs?", "");
        
            if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null 
            && a != "" && b != "" && a.length < 50) {
                  console.log("done");
                  appData.expenses[a] = b;  
              } else {
                  i--;
            }
        }
    },
 */






