'use strict';

let start = document.getElementById('start');

console.log(start);




/* let values2 = document.querySelectorAll('[class$="value"]');

console.log(values2); */




let values2 = document.querySelectorAll('.result-table')[0].querySelectorAll('[class$="value"]');
console.log(values2);


/* let values2 = document.querySelectorAll('.result-table');
let finish = values2[0].querySelectorAll('[class$="value"]');

console.log(finish);

console.log(typeof values2); */





/* let values2 = document.querySelectorAll('div[class$="value"]');

console.log(values2); */

/* values2.forEach(i,typeof i != input, => console.log(i)); */

/* values2.forEach (function(item) {
console.log(item);
});
 */


/* let values2 = document.getElementsByClassName('result-table');
let value =document.values2.querySelectorAll('[class$="value"]');

console.log(value); */

/* let values2 = document.getElementsByClassName('result-table').querySelectorAll('[class$="value"]');
console.log(values2); */




/* let values2 = document.getElementsByClassName('[class$="value"]');
console.log(values2); */



let reqexpenses = document.getElementsByClassName('expenses-item');
console.log(reqexpenses);

let buttons = document.getElementsByTagName('button');
console.log(buttons);
let confirms = [buttons[0],buttons[1] ];
console.log(confirms);
let calculate = [buttons[2] ];
console.log(calculate);

let optionalexpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpenses);

let rest = document.querySelectorAll('#income', '#savings', '#sum', '#percent', '.year-value', '.month-value', '.day-value');
console.log(rest);

let savings = document.querySelector('.yearsavings').style.fontSize = '50px';



console.log(savings);


          2       1
function hello (name) {
    console.log("Hello" + name);
}
         //1*-to get value for name    
function getName () {
    var name = "Maks";
    return name;
    
}

hello(getName());

2        1    




function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function getName(callback) {
    var name = "Maks";
    callback(name);
  }
  
 function answer() {
   console.log(1);
 }

 function antwort ( function() {
   console.log(1);
 }) {
   console.log(2);
 };
antwort();


function second() {
  console.log(2);
}


function first(callback){
  
    console.log(1);
    callback();
  }
  
  
first(second);






function first(callback1){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
    callback1();
  }, 500 );
  
}
function second(){
  console.log(2);
}

first(second);